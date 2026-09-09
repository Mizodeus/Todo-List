import Todo from "./todo.js";
import Project from "./project.js";

export default class Store {
  constructor() {
    this.projects = [];
    this.activeProject = null;
  }

  createProject(name) {
    const project = new Project(name);
    this.projects.push(project);
    return project;
  }

  deleteProject(name) {
    this.projects = this.projects.filter((project) => project.name !== name);

    if (!this.projects.includes(this.activeProject)) {
      this.setActiveProject(this.projects[0] ?? null);
    }
  }

  setActiveProject(project) {
    this.activeProject = project;
  }

  createTodo(project, { title, description, dueDate, priority }) {
    const todo = new Todo(title, description, dueDate, priority);
    project.add(todo);
    return todo;
  }

  deleteTodo(project, todo) {
    project.remove(todo);
  }

  updateTodo(todo, fields) {
    todo.update(fields);
  }

  toggleTodo(todo) {
    todo.toggle();
  }
}