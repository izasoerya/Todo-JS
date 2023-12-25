const express = require("express");
const { todoModule } = require("../controller/controllers");
const router = express.Router();

router.post("/create", todoModule.createTodo);
router.put("/edit", todoModule.editTodo);

module.exports = router;
