import { v2 as cloudinary } from "cloudinary";

export const cloudinaryConnect = (): void => {
  try {
    const cloudName = process.env["CLOUD_NAME"];
    const apiKey = process.env["API_KEY"];
    const apiSecret = process.env["API_SECRET"];

    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error(
        "Cloudinary credentials are missing. Please check your .env file."
      );
    }

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });

    console.log("✅ Cloudinary connected successfully");
  } catch (error) {
    console.error("❌ Cloudinary connection failed:", error);
    throw error;
  }
};
