import mongoose, { Schema } from "mongoose";
import type { IProfile } from "../types/index.js";

const profileSchema = new Schema<IProfile>({
  gender: {
    type: String,
    default: null,
  },
  dateOfBirth: {
    type: String,
    default: null,
  },
  about: {
    type: String,
    trim: true,
    default: null,
  },
  contactNumber: {
    type: String,
    trim: true,
    default: null,
  },
});

export const Profile = mongoose.model<IProfile>("Profile", profileSchema);
