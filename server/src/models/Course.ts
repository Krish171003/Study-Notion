import mongoose, { Schema } from "mongoose";
import type { ICourse } from "../types/index.js";

const courseSchema = new Schema<ICourse>(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    courseDescription: {
      type: String,
      required: true,
      trim: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    whatYouWillLearn: {
      type: String,
      required: true,
    },
    courseContent: [
      {
        type: Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    ratingAndReviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "RatingAndReview",
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    tag: {
      type: [String],
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    studentsEnroled: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    instructions: {
      type: [String],
    },
    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
  },
  { timestamps: true }
);

export const Course = mongoose.model<ICourse>("Course", courseSchema);
