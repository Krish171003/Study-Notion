import mongoose, { Schema } from "mongoose";
import type { ISection } from "../types/index.js";

const sectionSchema = new Schema<ISection>({
  sectionName: {
    type: String,
    required: true,
  },
  subSection: [
    {
      type: Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
});

export const Section = mongoose.model<ISection>("Section", sectionSchema);
