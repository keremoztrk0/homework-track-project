const LessonModel = require("../models/lesson");
const BaseService = require("./base-service");

class LessonService extends BaseService {
  model = LessonModel;
}
module.exports = new LessonService();
