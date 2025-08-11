const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "prashantthakur0128@gmail.com", 
      pass: "hpuv dahr novt xkzt"          
    }
  });

 const mailOptions = {
  from: `"Portfolio Contact" <${email}>`,
  to: "prashantthakur0128@gmail.com",
  subject: `📩 New Contact Form Submission from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
        <h2 style="color: #333; text-align: center;">📬 New Message</h2>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="background: #f1f1f1; padding: 10px; border-radius: 5px;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: gray; text-align: center;">This email was sent from your portfolio contact form.</p>
      </div>
    </div>
  `
};



  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ success: false, message: "Failed to send message" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send({ success: true, message: "Message sent successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
