import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../services/task-services";
import { BaseTask } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getAllTasks());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const task = getTask(Number(id));
  if (task) {
    res.send(task);
  }
  res.sendStatus(404);
});

router.post("/", (req, res) => {
  const { title, description, priority, completed, createdAt } = req.body;
  const task: BaseTask = {
    title,
    description,
    priority,
    completed,
    createdAt,
  };

  addTask(task);
  res.send({ message: "Task added successfully" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, priority, completed, createdAt } = req.body;
  const task: BaseTask = {
    title,
    description,
    priority,
    completed,
    createdAt,
  };

  updateTask(Number(id), task);
  res.send({ message: "Task updated" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteTask(Number(id));
  res.send({ message: "Task deleted" });
});

module.exports = router;
