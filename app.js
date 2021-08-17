const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(async () => {
    try {
      console.log("Database connection successful");
    } catch (error) {
      console.log(error);
    }
  });

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Not found",
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = "Server error" } = error;
  res.status(code).json({
    status: "error",
    code,
    message,
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
