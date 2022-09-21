const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: String,
});

const TodoModel = mongoose.model("mernTodo", todoSchema);

module.exports = TodoModel;
