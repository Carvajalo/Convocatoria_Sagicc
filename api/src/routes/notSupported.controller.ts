import express from "express";

const notSupported: express.RequestHandler = (req, res) => {
    res.send({messsage: `Method ${req.method} is not supported on ${req.get('URL')}:${req.get('PORT')}/${req.originalUrl}`})
}

export default notSupported;


