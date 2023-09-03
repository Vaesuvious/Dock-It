const express = require("express");
const {
  createDB,
  createTable,
  createList,
  showList,
  singleList,
  updateList,
  deleteSingleTodoList
} = require("../controllers/todoController");
const router = express.Router();

//routes
router.get("/create/database", createDB);
router.get("/create/table", createTable);
router.post("/create/list", createList);
router.get("/show/list", showList);
router.get("/list/:id", singleList);
router.put("/update/list/:id", updateList);
router.delete("/delete/list/:id", deleteSingleTodoList);

module.exports = router;
