import { Router } from "express";
import * as taskController from "../controllers/task.controllers";
import notSupported from "../controllers/notSupported.controller";


const router = Router();

router.get("/", taskController.getTasks)

    .post("/", taskController.createTask)

    .delete("/", notSupported)

    .put("/", notSupported);


router.get("/:id", taskController.getTask)

    .post("/:id", notSupported)

    .delete("/:id", taskController.deleteTask)

    .put("/:id", taskController.updateTask);

export default router;
