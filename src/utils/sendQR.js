import nodemailer from "nodemailer";

async function sendQR(qr) {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "nelson.macias99@gmail.com",
      pass: "pwcg vbng syuq rjcb",
    },
  };

  const message = {
    from: "nelson.macias99@gmail.com",
    to: "nelson.macias99@gmail.com",
    subject: "QR Code",
    text: "Welcome",
    attachDataUrls: true,
    html: '<p>Hola</p> <img src="' + qr + '" />',
  };

  const transporter = nodemailer.createTransport(config);

  try {
    const info = await transporter.sendMail(message);

    console.log("info:", info);
  } catch (error) {
    console.error(error);
  }
}

export default sendQR;
