var nodemailer = require('nodemailer');
var conts = require('./conts');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: conts.MAIL_FROM,
      pass: conts.MAIL_SEC
    }
  });
  
var mailOptions = {
    from: conts.MAIL_FROM,
    to: conts.MAIL_TO,
    subject: 'Impresión del mes',
    text: 'That was easy!',
    attachments: [{   // use URL as an attachment
        filename: 'license.txt',
        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    }]
  };
  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });