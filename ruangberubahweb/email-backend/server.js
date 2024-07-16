const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-email-password', // replace with your email password
  },
});

app.post('/send-email', (req, res) => {
  const { name, company, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'recipient-email@gmail.com', // replace with the recipient's email
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
