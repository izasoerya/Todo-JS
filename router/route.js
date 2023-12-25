const express = require("express");
const { createTodo, editTodo } = require("../controller/controllers");
const router = express.Router();

router.get("/create", createTodo);
router.put("/edit", editTodo);

module.exports = router;
