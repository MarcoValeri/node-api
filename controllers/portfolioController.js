const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// DotEnv configuration
dotenv.config();

exports.sendMessage = (req, res, next) => {

    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info@marcovaleri.net',
            pass: process.env.GMAIL_PASS,
        },
    });

    contactEmail.verify((error) => {
        if (error) {
            console.log(error);
        }
    });

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const mail = {
        from: name,
        to: 'info@marcovaleri.net',
        subject: 'Portfolio Contact',
        html: `<p style="font-size: 16px">Name: ${name}</p><p style="font-size: 16px">Email: ${email}</p><p style="font-size: 16px">Message:</p><p style="font-size: 16px">${message}</p>`
    }

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'Error' });
        } else {
            res.json({ status: 'Message Sent' });
        }
    });

}