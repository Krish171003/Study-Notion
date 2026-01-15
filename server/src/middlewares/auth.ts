import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

interface JwtPayload {
  email: string;
  id: string;
  role: string;
}

export const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token =
      req.cookies?.["token"] ||
      req.body?.token ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Token is missing",
      });
      return;
    }

    try {
      const jwtSecret = process.env["JWT_SECRET"];
      if (!jwtSecret) {
        throw new Error("JWT_SECRET is not defined");
      }

      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
    return;
  }
};

export const isStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (req.user?.role !== "Student") {
      res.status(403).json({
        success: false,
        message: "This is a protected route for Students only",
      });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User role cannot be verified, please try again",
    });
    return;
  }
};

export const isInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (req.user?.role !== "Instructor") {
      res.status(403).json({
        success: false,
        message: "This is a protected route for Instructor only",
      });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User role cannot be verified, please try again",
    });
    return;
  }
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (req.user?.role !== "Admin") {
      res.status(403).json({
        success: false,
        message: "This is a protected route for Admin only",
      });
      return;
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User role cannot be verified, please try again",
    });
    return;
  }
};
