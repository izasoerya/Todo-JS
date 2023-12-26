class TodoProperties {
  constructor(title) {
    this.title = title;
  }
}

class TodoListProperties {
  constructor() {
    this.Todos = [];
  }
  addTodo(TodoProperties) {
    this.Todos.push(TodoProperties);
  }
  getTodo() {
    return this.Todos;
  }
}

module.exports = { TodoProperties, TodoListProperties };
