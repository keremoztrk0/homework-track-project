const express = require("express");
const router = express.Router();

const HomeworkService = require("../services/homework-service");
const LessonService = require("../services/lesson-service");

router.get("/", async (req, res) => {
  const homeworks = await HomeworkService.findAll();
  res.send(homeworks);
});

router.get("/:id", async (req, res) => {
  const homework = await HomeworkService.find(req.params.id);
  if (!homework) res.status(404);
  res.send(homework);
});

router.post("/add", async (req, res) => {
  const lesson = await LessonService.find(req.body.lesson)
  const homework = await HomeworkService.save(req.body,lesson);
  res.send(homework);
});

router.delete("/delete/:id", async (req, res) => {
  const homework = HomeworkService.delete(req.params.id);
  res.send(homework);
});

module.exports = router;

