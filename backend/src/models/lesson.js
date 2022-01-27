const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  homeworks: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "homework",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

LessonSchema.plugin(require("mongoose-autopopulate"));

const LessonModel = mongoose.model("lesson", LessonSchema);

module.exports = LessonModel;
