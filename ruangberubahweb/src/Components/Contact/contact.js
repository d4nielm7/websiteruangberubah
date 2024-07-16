const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/api/send_email', 
    [
        check('name').notEmpty().withMessage('Name is required'),
        check('email').isEmail().withMessage('Invalid Email Address'),
        check('message').notEmpty().withMessage('Message is required')
    ], (request, response) => {

        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        } else {
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                }
            });

            const mail_option = {
                from: request.body.email,
                to: '...',
                subject: 'Contact Form Submission',
                text: `Name: ${request.body.name}\nEmail: ${request.body.email}\nMessage: ${request.body.message}`
            };

            transporter.sendMail(mail_option, (error, info) => {
                if (error) {
                    console.log(error);
                    return response.status(500).json({ message: 'An error occurred while sending the email.' });
                } else {
                    return response.status(200).json({ message: 'Your message was successfully sent!' });
                }
            });
        }
});

// Serve index.html file
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server on the correct port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
