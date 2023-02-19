import nodemailer from "nodemailer";

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });
  return await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    to,
    subject,
    html,
  });
};

export default async function handler(req, res) {
  await sendEmail({
    to: "ishahbaz.shaikh@gmail.com",
    subject: "Welcome to NextAPI",
    html: "<h1>Hi this is Shahbaz</h1>",
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
