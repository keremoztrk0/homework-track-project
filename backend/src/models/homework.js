const mongoose = require("mongoose");

const HomeworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  lesson: {
    type: String,
    ref: "lesson",
    autopopulate: {
      maxDepth: 1,
    },
  },
  status: {
    type: Boolean,
    default: false,
  },
  deadline: {
    type: Date,
    default: +new Date() + 3 * 24 * 60 * 60 * 1000,
  },
});

HomeworkSchema.plugin(require("mongoose-autopopulate"));

const HomeworkModel = mongoose.model("homework", HomeworkSchema);

module.exports = HomeworkModel;
