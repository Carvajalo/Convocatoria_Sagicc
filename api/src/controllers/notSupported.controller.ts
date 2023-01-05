import express from "express";
import app from "../app";

const notSupported: express.RequestHandler = (req, res) => {
    res.send({messsage: `Method ${req.method} is not supported on http://localhost:${app.get('port')}${req.originalUrl}`})
}

export default notSupported;


