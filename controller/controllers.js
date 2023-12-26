const dataTodo = require("../models/models");
const todoList = new dataTodo.TodoListProperties();

function createTodo(req, res, next) {
  const { title } = req.body;
  const newTodo = new dataTodo.TodoProperties(title);
  todoList.addTodo(newTodo);
  res.json({ title: newTodo.title });
}

function editTodo(req, res, next) {}

const todoModule = {
  createTodo,
  editTodo,
};
module.exports = { todoModule };
