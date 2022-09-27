const { model, Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    id: {
      type: Number,
      unique: true,
      required: true,
    }
    },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("task", taskSchema);
