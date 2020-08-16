const config = require('../config/config');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendGridKey);

exports.sendEmail = (to, from, subject, text, html) => {
  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text,
    html: html,
  };
  sgMail.send(msg).then(() => {
    console.log('Email sent')
  }).catch((err) => {
    console.log(err)
  })
};

