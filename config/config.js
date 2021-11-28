require("dotenv").config();

const transporterUser = process.env.TRANSPORTER_USER;
const transporterPass = process.env.TRANSPORTER_PASS;
const trasporterSender = process.env.TRANSPRTER_SENDER;

module.exports = { transporterUser, transporterPass, trasporterSender };

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.TRANSPORTER_USER,
//       pass: process.env.TRANSPORTER_PASS,
//     },
//   });
