const nodemailer = require("nodemailer");
require("dotenv").config();
const config = require("../config/config");

const sendEmail = async (toEmail) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.transporterUser,
      pass: config.transporterPass,
    },
  });

  let emailSent;
  transporter
    .verify()
    .then(console.log("connected to smtp"))
    .catch(console.error);

  let info = await transporter.sendMail(
    {
      from: `"Chirag Bolakani" <${config.trasporterSender}>`,
      to: toEmail,
      subject: "Newsletter Subscribed!",
      html: "<b>Thankyou for Subscribing to our newsletter!</b>",
    },
    (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(info.messageId);
      }
    }
  );
  transporter.close();
};

module.exports = { sendEmail };
