const mongoose = require("mongoose");

require("dotenv").config();

const mongoUri = process.env.MONGO_URI;

function connectDb() {
  mongoose.connect(mongoUri);
}

module.exports = connectDb;
