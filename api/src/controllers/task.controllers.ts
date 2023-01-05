import express from "express";
import Task from "../models/Task";

export const getTasks: express.RequestHandler = async (req, res) => {
  try {
    const foundTask = await Task.find();
    res.json(foundTask);
  } catch (error) {
    res.json(error);
  }
};

export const getTask: express.RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.json({
      message: "invalid ID",
    });
  }
  try {
    const foundTask = await Task.findById(id);
    if (!foundTask) return res.json({ message: `Task with id: ${id} nod found` }).status(204);
    return res.json(foundTask);
  } catch (error) {
    res.json(error);
  }
};

export const createTask: express.RequestHandler = async (req, res) => {
  const { title } = req.body;
  try {
    /*     
        //In case we need to use unique task title
        const taskFound = await Task.findOne({ title });
        if (taskFound) {
          return res.json({ message: `Task with title ${title} already exist` }).status(301);
        } */
    const task = new Task(req.body);
    console.log(task);
    const taskSaved = await task.save();
    res.json(taskSaved);
  } catch (error) {
    res.json(error);
  }
};

export const deleteTask: express.RequestHandler = async (req, res) => {
  const { id } = req.params
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: "invalid ID",
    });
  }
  try {
    const foundTask = await Task.findByIdAndDelete(id, req.body);
    if (!foundTask) return res.json({ message: `Task with id: ${id} not found` }).status(204);
    res.json({ message: `Task with id: ${id} and title: "${foundTask.title}" was successfully deleted` });
  } catch (error) {
    res.json(error);
  }
};

export const updateTask: express.RequestHandler = async (req, res) => {
  console.log("a")
  const { id } = req.params
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.json({
      message: "invalid ID",
    });
  }
  try {

    const foundTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!foundTask) return res.json({ message: `Task with id: ${id} not found` }).status(204);
    const { title, description } = foundTask
    res.json({
      message: `Task with id: ${id} successfully updated with values`,
      task: {
        title,
        description
      }
    });
  } catch (error) {
    res.json(error)
  }

};

