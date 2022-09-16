const express = require("express");
const User = require("./models/students");
const studentRouter = require("./Router/index");
const app = express();

require("./db/connection");

app.use(express.json());

app.use(studentRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("connect express successfully", port);
});
