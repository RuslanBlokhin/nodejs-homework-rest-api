const express = require("express"); // создание роутинга
const logger = require("morgan");
const cors = require("cors"); // кросдоменные запросы
const mongoose = require("mongoose"); // для подключения к базе
const path = require("path"); //чтобы прописать пути к папкам
const nodemailer = require("nodemailer");

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
const usersRouter = require("./routes/api/users");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use("/api/users", usersRouter);

const usersDir = path.join(process.cwd(), "/public/avatars"); //путь к постоянной папке для сохранения аватара
app.use("/avatars", express.static(usersDir)); //раздаем статику из постоянной папки

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

//Отправка письма
const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, //25, 465, 2255
  secure: true,
  auth: {
    user: "bogdan.lyamzin.d@meta.ua",
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  from: "goitnodejs@meta.ua",
  to: "blokhin.rus@gmail.com",
  subject: "Тестовое письмо",
  text: "Привет. Мы тестируем отправку писем!",
};

transporter
  .sendMail(email)
  .then((info) => console.log(info))
  .catch((error) => console.log(error));

module.exports = app;
