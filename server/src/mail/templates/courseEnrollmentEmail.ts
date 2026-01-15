export const courseEnrollmentEmail = (
  courseName: string,
  name: string
): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Course Enrollment Confirmation</title>
  <style>
    body { background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; }
    .logo { text-align: center; margin-bottom: 20px; }
    .message { font-size: 18px; font-weight: bold; margin-bottom: 20px; }
    .body { font-size: 16px; margin-bottom: 20px; }
    .course-name { font-weight: bold; color: #FFD60A; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>StudyNotion</h1>
    </div>
    <div class="message">Course Enrollment Confirmation</div>
    <div class="body">
      <p>Dear ${name},</p>
      <p>Congratulations! You have successfully enrolled in the course: <span class="course-name">${courseName}</span></p>
      <p>You can now access all course materials and start learning. Login to your dashboard to get started.</p>
      <p>Happy Learning!</p>
    </div>
  </div>
</body>
</html>`;
};
