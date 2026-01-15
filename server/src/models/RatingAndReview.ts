import mongoose, { Schema } from "mongoose";
import type { IRatingAndReview } from "../types/index.js";

const ratingAndReviewSchema = new Schema<IRatingAndReview>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Course",
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const RatingAndReview = mongoose.model<IRatingAndReview>(
  "RatingAndReview",
  ratingAndReviewSchema
);
