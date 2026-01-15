import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import { connectDB } from "./config/database.js";
import { cloudinaryConnect } from "./config/cloudinary.js";

dotenv.config();

const app: Application = express();
const PORT = process.env["PORT"] ?? 4000;

connectDB();

cloudinaryConnect();

// Multer configuration for file uploads
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024,
  },
});

app.use(
  cors({
    origin: process.env["CLIENT_URL"] ?? "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.json({ success: true, message: "StudyNotion API is running!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
