const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const username = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: username,
    pass: password,
  },
  secure: true,
});

app.post("/sendEmail", (req, res) => {
  const { name, email, msg } = req.body;

  if (!name || !email || !msg) {
    return res.status(500).send({
      success: false,
      message: "Please Provide All Fields",
    });
  }

  const mailOptions = {
    from: username,
    to: username,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Error sending email",
      });
    } else {
      console.log("Email sent:", info.response);
      res.json({
        success: true,
        message: "Email sent successfully",
      });
    }
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
