const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
    },
    description: {
      type: mongoose.Schema.Types.String,
    },
    date: {
      type: mongoose.Schema.Types.String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isImportant: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
