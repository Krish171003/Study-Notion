import mongoose, { Schema } from "mongoose";
import type { ICategory } from "../types/index.js";

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

export const Category = mongoose.model<ICategory>("Category", categorySchema);
