import "./styles.css";
import { createProject, createTodo } from "./app.js";

const defaultProject = createProject("Default");

const todo = createTodo(
  defaultProject,
  "Learn JavaScript",
  "Study modules",
  "2026-09-10",
  "high",
);

console.log(defaultProject);