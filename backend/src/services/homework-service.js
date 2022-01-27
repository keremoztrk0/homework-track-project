const BaseService = require("./base-service");
const HomeworkModel = require("../models/homework");

class HomeworkService extends BaseService {
  model = HomeworkModel;
  async save(homework,lesson) {
    homework = await this.add(homework)
    homework.lesson = lesson;
    lesson.homeworks.push(homework);
    await lesson.save();
    return await homework.save();
    
  }
}

module.exports = new HomeworkService();
