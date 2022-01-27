const express = require("express");
const router = express.Router();

const LessonService = require("../services/lesson-service");

router.get("/", async (req, res) => {
  const lessons = await LessonService.findAll();
  res.send(lessons);
});

router.get("/:id", async (req, res) => {
  const lesson = await LessonService.find(req.params.id);
  if (!lesson) res.status(404);
  res.send(lesson);
});

router.post("/add", async (req, res) => {
  const lesson = await LessonService.add(req.body);
  res.send(lesson);
});

router.delete("/delete/:id", async (req, res) => {
  const lesson = LessonService.delete(req.params.id);
  res.send(lesson);
});

module.exports = router;
