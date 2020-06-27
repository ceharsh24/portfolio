const express = require('express');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const router = express.Router();

const smtpTransport = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.key,
    },
  })
);

const sendEmail = (formValues, res) => {
  const mailOptions = {
    from: 'no-reply@harsh.page',
    to: formValues.email,
    subject: 'Automated Response',
    html:
      'Hello,<br> Your Response has been recieved. <br><br> I will get back to you as soon as possible. <br> This is an auto generated email. Please, do not reply to this email. <br><br> Thank you, <br> Harsh Shah',
  };

  const mailOptions2 = {
    from: 'no-reply@harsh.page',
    to: process.env.email,
    subject: 'Request From Website:',
    html:
      'From: ' +
      formValues.email +
      '<br><br> Name: ' +
      formValues.name +
      ' <br><br> Message: ' +
      formValues.message,
  };

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      res.status(500).send({
        error: 'Something went wrong on Server!',
      });
    } else {
      smtpTransport.sendMail(mailOptions2, function (error, response) {
        if (error) {
          res.status(500).send({
            error: 'Something went wrong on Server!',
          });
        } else {
          res.status(200).send({
            error: null,
          });
        }
      });
    }
  });
};

router.post('/api/sendEmail', (req, res, next) => {
  sendEmail(req.body, res, next);
});

module.exports = router;
