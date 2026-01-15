export const paymentSuccessEmail = (
  name: string,
  amount: number,
  orderId: string,
  paymentId: string
): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Payment Confirmation</title>
  <style>
    body { background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; }
    .logo { text-align: center; margin-bottom: 20px; }
    .message { font-size: 18px; font-weight: bold; margin-bottom: 20px; color: #28a745; }
    .body { font-size: 16px; margin-bottom: 20px; }
    .details { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <h1>StudyNotion</h1>
    </div>
    <div class="message">✓ Payment Successful!</div>
    <div class="body">
      <p>Dear ${name},</p>
      <p>Your payment has been received successfully.</p>
      <div class="details">
        <p><strong>Amount Paid:</strong> ₹${amount}</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
      </div>
      <p>Thank you for choosing StudyNotion!</p>
    </div>
  </div>
</body>
</html>`;
};
