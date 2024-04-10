import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "../config.js";

async function sendQR(qr, email, name) {
  console.log({ qr, email, name, EMAIL_USER, EMAIL_USER });
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  };

  const message = {
    from: EMAIL_USER,
    to: email,
    subject: "QR Code",
    text: "Welcome",
    attachDataUrls: true,
    html: `
      <h3>Buen dia ${name}, aqui esta su QR de acceso.</h3>
      <br />
      <br />
      <br />
      <img src="${qr}" />
    `,
  };

  const transporter = nodemailer.createTransport(config);

  try {
    const info = await transporter.sendMail(message);
    console.log(info);
  } catch (error) {
    console.error(error);
  }
}

export default sendQR;
