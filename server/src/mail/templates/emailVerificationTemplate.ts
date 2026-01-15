export const otpTemplate = (otp: string): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>OTP Verification Email</title>
  <style>
    body { background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; }
    .logo { text-align: center; margin-bottom: 20px; }
    .message { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
    .body { font-size: 16px; margin-bottom: 20px; }
    .otp { font-size: 32px; font-weight: bold; text-align: center; margin: 20px 0; color: #FFD60A; }
    .footer { font-size: 14px; color: #999999; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>StudyNotion</h1>
    </div>
    <div class="message">OTP Verification Email</div>
    <div class="body">
      <p>Dear User,</p>
      <p>Thank you for registering with StudyNotion. To complete your registration, please use the following OTP:</p>
      <div class="otp">${otp}</div>
      <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.</p>
    </div>
    <div class="footer">
      <p>If you have any questions, please contact us at support@studynotion.com</p>
    </div>
  </div>
</body>
</html>`;
};
