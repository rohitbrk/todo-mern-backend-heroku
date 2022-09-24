const express = require("express");
const connectDb = require("./services/db");
connectDb();
const uuid = require("uuid");
const cors = require("cors")
const app = express();

var corsOptions = {
  origin: 'http://localhost:3000/'
}
app.use(express.json());
app.use(cors(corsOptions))

const todoRouter = require("./controllers/Todo.controller");
app.use("/api", todoRouter);

app.get("/", (req, res) => {
  res.json({ status: "okay" });
});

const port = process.env.PORT || 5000;
app.listen(port);
