import Todo from "./todo.js";
import Project from "./project.js";

const projects = [];

function createProject(name) {
  const project = new Project(name);
  projects.push(project);
  return project;
}

function deleteProject(name) {
  const index = projects.findIndex((item) => item.name === name);

  if (index !== -1) {
    projects.splice(index, 1);
  }
}

function createTodo(project, title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);
  project.add(todo);
  return todo;
}

function deleteTodo(project, todo) {
  project.remove(todo);
}

function toggleTodo(todo) {
  todo.completed = !todo.completed;
}

export {
    createProject,
    deleteProject,
    createTodo,
    deleteTodo,
    toggleTodo
}