export const passwordUpdated = (email: string, name: string): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Password Update Confirmation</title>
  <style>
    body { background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; }
    .logo { text-align: center; margin-bottom: 20px; }
    .message { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
    .body { font-size: 16px; margin-bottom: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>StudyNotion</h1>
    </div>
    <div class="message">Password Update Confirmation</div>
    <div class="body">
      <p>Dear ${name},</p>
      <p>Your password has been successfully updated for the email: <strong>${email}</strong></p>
      <p>If you did not make this change, please contact support immediately.</p>
    </div>
  </div>
</body>
</html>`;
};
