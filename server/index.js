import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    const {name,lastName,id,email,tel,address,postalCode,city,countryOfBirth,previousDriversLicense,language,course,other,policy} = req.body;

    if ([name,lastName,id,email,tel,address,postalCode,city,countryOfBirth,language,course,policy].some(field => !field)) {
        res.status(400).json({message: 'All fields are required'});
    }

    try {
        const trasporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            }
        });

        const emailConfig = {
            from: email,
            to: process.env.EMAIL,
            subject: 'Registration Confirmation',
            text: `
                    Full name: ${name} ${lastName}
                    Email: ${email}
                    Telephone: ${tel}
                    Address: ${address}
                    Postal code: ${postalCode}
                    City: ${city}
                    Country of birth: ${countryOfBirth}
                    Previous driver's license: ${previousDriversLicense || 'None'}
                    Language: ${language}
                    Course: ${course}
                    Other: ${other || 'None'}
                    `
        };

        const info = await trasporter.sendMail(emailConfig);

        const previewUrl = nodemailer.getTestMessageUrl(info);
        console.log('Preview URL:', previewUrl);

        res.status(200).json({ message: 'Email sent successfully!'});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error sending email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running! http://localhost:${PORT}`)
});