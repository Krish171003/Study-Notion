import nodemailer from "nodemailer";

interface MailOptions {
  email: string;
  title: string;
  body: string;
}

export const mailSender = async ({
  email,
  title,
  body,
}: MailOptions): Promise<nodemailer.SentMessageInfo> => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env["MAIL_HOST"],
      auth: {
        user: process.env["MAIL_USER"],
        pass: process.env["MAIL_PASS"],
      },
    });

    const info = await transporter.sendMail({
      from: '"StudyNotion" <no-reply@studynotion.com>',
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
