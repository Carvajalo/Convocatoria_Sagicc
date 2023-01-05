import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      require: false,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Task", taskSchema);
