import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUrl = process.env["MONGODB_URL"];

    if (!mongoUrl) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }

    await mongoose.connect(mongoUrl);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error);
    process.exit(1);
  }
};
