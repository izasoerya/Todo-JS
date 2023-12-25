function createTodo(req, res, next) {
  const { title } = req.body;
  console.log(title);
  res.json({ message: `Input processed successfully: ${title}.` });
}

function editTodo(req, res, next) {}

const todoModule = {
  createTodo,
  editTodo,
};
module.exports = { todoModule };
