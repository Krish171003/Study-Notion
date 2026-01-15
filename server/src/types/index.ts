import type { Document, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: "Student" | "Instructor" | "Admin";
  active: boolean;
  approved: boolean;
  additionalDetails: Types.ObjectId;
  courses: Types.ObjectId[];
  token?: string;
  resetPasswordExpires?: Date;
  image: string;
  courseProgress: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProfile extends Document {
  _id: Types.ObjectId;
  gender?: string;
  dateOfBirth?: string;
  about?: string;
  contactNumber?: string;
}

export interface IOTP extends Document {
  _id: Types.ObjectId;
  email: string;
  otp: string;
  createdAt: Date;
}

export interface ICourse extends Document {
  _id: Types.ObjectId;
  courseName: string;
  courseDescription: string;
  instructor: Types.ObjectId;
  whatYouWillLearn: string;
  courseContent: Types.ObjectId[];
  ratingAndReviews: Types.ObjectId[];
  price: number;
  thumbnail: string;
  tag: string[];
  category: Types.ObjectId;
  studentsEnroled: Types.ObjectId[];
  instructions: string[];
  status: "Draft" | "Published";
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategory extends Document {
  _id: Types.ObjectId;
  name: string;
  description: string;
  courses: Types.ObjectId[];
}

export interface ISection extends Document {
  _id: Types.ObjectId;
  sectionName: string;
  subSection: Types.ObjectId[];
}

export interface ISubSection extends Document {
  _id: Types.ObjectId;
  title: string;
  timeDuration: string;
  description: string;
  videoUrl: string;
}

export interface IRatingAndReview extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  rating: number;
  review: string;
  course: Types.ObjectId;
  createdAt: Date;
}

export interface ICourseProgress extends Document {
  _id: Types.ObjectId;
  courseID: Types.ObjectId;
  userId: Types.ObjectId;
  completedVideos: Types.ObjectId[];
}
