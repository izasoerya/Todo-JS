const express = require("express");
const router = express.Router();

router.get("/create", (req, res) => {
  const data = req.body;
  console.log(data);
});

module.exports = router;
