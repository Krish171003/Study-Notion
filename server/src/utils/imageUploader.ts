import { v2 as cloudinary } from "cloudinary";

interface UploadResult {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

export const uploadImageToCloudinary = async (
  file: any,
  folder: string,
  height?: number,
  quality?: number
): Promise<UploadResult> => {
  try {
    const options: any = {
      folder,
      resource_type: "auto",
    };

    if (height) {
      options.height = height;
    }
    if (quality) {
      options.quality = quality;
    }

    if (file.buffer) {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(options, (error, result) => {
            if (error) reject(error);
            else resolve(result as UploadResult);
          })
          .end(file.buffer);
      });
    }

    if (file.path) {
      const result = await cloudinary.uploader.upload(file.path, options);
      return result;
    }

    throw new Error("Invalid file format");
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
