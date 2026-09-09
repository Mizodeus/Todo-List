export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    this.todos = this.todos.filter((item) => item !== todo);
  }
}