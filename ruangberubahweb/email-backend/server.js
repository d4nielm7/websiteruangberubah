const express = require('express'); //set up server
const nodemailer = require('nodemailer'); //easily send email
const bodyParser = require('body-parser'); //parse incoming request
const cors = require('cors'); //enable CORS, allow frontend to communicate with backend


const app = express();

app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-email-password', // replace with your email password
  },
});

//set up server
app.post('/send-email', (req, res) => {
  const { name, company, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'recipient-email@gmail.com', // replace with recipient email
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


//press node server.js to run server
