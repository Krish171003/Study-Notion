import mongoose, { Schema } from "mongoose";
import type { ISubSection } from "../types/index.js";

const subSectionSchema = new Schema<ISubSection>({
  title: {
    type: String,
    required: true,
  },
  timeDuration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

export const SubSection = mongoose.model<ISubSection>(
  "SubSection",
  subSectionSchema
);
