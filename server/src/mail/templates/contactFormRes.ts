export const contactUsEmail = (
  email: string,
  firstname: string,
  lastname: string,
  message: string,
  phoneNo: string,
  countrycode: string
): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Contact Form Confirmation</title>
  <style>
    body { background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; }
    .logo { text-align: center; margin-bottom: 20px; }
    .message { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
    .body { font-size: 16px; margin-bottom: 20px; }
    .details { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>StudyNotion</h1>
    </div>
    <div class="message">Contact Form Submission Received</div>
    <div class="body">
      <p>Dear ${firstname} ${lastname},</p>
      <p>Thank you for contacting us. We have received your message and will get back to you shortly.</p>
      <div class="details">
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countrycode} ${phoneNo}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
      <p>We appreciate your interest in StudyNotion!</p>
    </div>
  </div>
</body>
</html>`;
};
