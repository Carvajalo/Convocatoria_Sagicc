import express from "express";
import Task from "./Task";

export const getTasks: express.RequestHandler = async (req, res) => {
  try {
    const foundTask = await Task.find();
    res.json(foundTask);
  } catch (error) {
    res.json(error);
  }
};

export const getTask: express.RequestHandler = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      res.json({
        message: "invalid ID",
      });
    }
    const foundTask = await Task.findById(req.params.id);
    if (!foundTask) return res.status(204).json();
    return res.json(foundTask);
  } catch (error) {
    res.json(error);
  }
};

export const createTask: express.RequestHandler = async (req, res) => {
  try {
    const taskFound = await Task.findOne({ url: req.body.url });
    console.log(`Task: ${req.body.url}
  TaskFound: ${taskFound}`);
    if (taskFound) {
      return res.status(301).json({ message: "This task already exists" });
    }
    const task = new Task(req.body);
    console.log(task);
    const taskSaved = await task.save();
    res.json(taskSaved);
  } catch (error) {
    res.json(error);
  }
};

export const deleteTask: express.RequestHandler = async (req, res) => {
  try {
    const foundedTask = await Task.findByIdAndDelete(req.params.id, req.body);
    if (!foundedTask) return res.status(204).json();
    res.json(foundedTask);
  } catch (error) {
    res.json(error);
  }
};

export const updateTask: express.RequestHandler = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.json({
        message: "invalid ID",
      });
    }
    const foundedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!foundedTask) return res.status(204).json();
    res.json(foundedTask);
  } catch (error) {
    res.json(error)
  }

};

