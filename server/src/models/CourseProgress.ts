import mongoose, { Schema } from "mongoose";
import type { ICourseProgress } from "../types/index.js";

const courseProgressSchema = new Schema<ICourseProgress>({
  courseID: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  completedVideos: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
});

export const CourseProgress = mongoose.model<ICourseProgress>(
  "CourseProgress",
  courseProgressSchema
);
