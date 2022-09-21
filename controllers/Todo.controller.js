const express = require("express");
const TodoModel = require("../models/Todo.model");
const uuid = require("uuid");

const router = express.Router();

router.get("/todos", async (req, res) => {
  const todos = await TodoModel.find();
  res.json(todos);
});

router.get("/todos/:id", async (req, res) => {
  const todo = await TodoModel.find({ _id: req.params.id });
  res.json(todo);
});

router.post("/todos", async (req, res) => {
  const id = uuid.v4();
  await TodoModel.create({ _id: id, title: req.body.title });
  const todo = await TodoModel.find({ _id: id });
  res.json(todo);
});

router.put("/todos/:id", async (req, res) => {
  await TodoModel.updateOne({ _id: req.params.id }, { title: req.body.title });
  const todo = await TodoModel.find({ _id: req.params.id });
  res.json(todo);
});

router.delete("/todos/:id", async (req, res) => {
  const todo = await TodoModel.find({ _id: req.params.id });
  await TodoModel.remove({ _id: req.params.id });

  res.json(todo);
});

module.exports = router;
