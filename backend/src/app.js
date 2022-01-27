const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const HomeworkRouter = require("./routes/homework");
const LessonRouter = require("./routes/lesson");

require("../mongo-connection");

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use("/homework", HomeworkRouter);
app.use("/lesson", LessonRouter);

module.exports = app;
