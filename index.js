const express = require("express");
const connectDb = require("./services/db");
const uuid = require("uuid");
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(cors())

const todoRouter = require("./controllers/Todo.controller");
app.use("/api", todoRouter);

app.get("/", (req, res) => {
  res.json({ status: "okay" });
});

app.listen(PORT, () => console.log("server started.."));
