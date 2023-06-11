import taskData from "../data/tasks.json";
import { Task, BaseTask } from "../types";

const tasks: Task[] = taskData as Task[];

export const getAllTasks = (): Task[] => tasks;

export const getTask = (id: number): Task | undefined =>
  tasks.find((task) => task.id === id);

export const addTask = (task: BaseTask): void => {
  const register = { ...task, id: tasks.length + 1 };
  tasks.push(register);
};

export const updateTask = (id: number, task: BaseTask): void => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index > -1) {
    tasks[index] = { ...tasks[index], ...task };
  }
};

export const deleteTask = (id: number): void => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index > -1) {
    tasks.splice(index, 1);
  }
};
