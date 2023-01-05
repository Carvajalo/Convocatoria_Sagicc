import express from "express";
import morgan from "morgan";
import config from "./config";
import taskRoute from "./routes/task.routes";
import cors from "cors";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static("uploads"));

app.set("port", config.PORT);

app.use('/tasks', taskRoute);

app.use('/', (_, res) => {
    res.json({message: `Welcome to the app`})
})

export default app;
