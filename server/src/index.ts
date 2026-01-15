import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

dotenv.config();

const app: Application = express();
const PORT = process.env["PORT"] ?? 4000;

app.use(
  cors({
    origin: process.env["CLIENT_URL"] ?? "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

app.get("/", (_req: Request, res: Response) => {
  res.json({ success: true, message: "Server running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
