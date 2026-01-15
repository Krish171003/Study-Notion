import mongoose, { Schema } from "mongoose";
import nodemailer from "nodemailer";
import type { IOTP } from "../types/index.js";

const otpSchema = new Schema<IOTP>({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

async function sendVerificationEmail(
  email: string,
  otp: string
): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env["MAIL_HOST"],
      auth: {
        user: process.env["MAIL_USER"],
        pass: process.env["MAIL_PASS"],
      },
    });

    await transporter.sendMail({
      from: "StudyNotion",
      to: email,
      subject: "Verification Email",
      html: `<h1>Please confirm your OTP</h1><p>Here is your OTP code: ${otp}</p>`,
    });
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
}

otpSchema.pre("save", async function () {
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
});

export const OTP = mongoose.model<IOTP>("OTP", otpSchema);
