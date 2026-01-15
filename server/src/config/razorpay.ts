import Razorpay from "razorpay";

const razorpayKey = process.env["RAZORPAY_KEY"];
const razorpaySecret = process.env["RAZORPAY_SECRET"];

if (!razorpayKey || !razorpaySecret) {
  throw new Error(
    "Razorpay credentials are missing. Please check your .env file."
  );
}

export const razorpayInstance = new Razorpay({
  key_id: razorpayKey,
  key_secret: razorpaySecret,
});
