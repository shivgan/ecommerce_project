const express = require("express");
const mongoose= require("mongoose");
const app = express();

app.use(express.json())

//route imports

const product = require("./routes/productRoute");

app.use("/api/v1",product);

module.exports = app