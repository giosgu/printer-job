
import * as nodemailer from "nodemailer";
import {Consts} from './conts';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: Consts.MAIL_FROM,
      pass: Consts.MAIL_SEC
    }
  });
  
let mailOptions = {
    from: Consts.MAIL_FROM,
    to: Consts.MAIL_TO,
    subject: 'Impresión del mes',
    text: 'That was easy!',
    attachments: [{   // use URL as an attachment
        filename: 'license.txt',
        path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    }]
  };
  
transporter.sendMail(mailOptions, function(error: any, info: { response: string; }){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });