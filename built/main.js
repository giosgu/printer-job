"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = __importStar(require("nodemailer"));
const conts_1 = require("./conts");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: conts_1.Consts.MAIL_FROM,
        pass: conts_1.Consts.MAIL_SEC
    }
});
let mailOptions = {
    from: conts_1.Consts.MAIL_FROM,
    to: conts_1.Consts.MAIL_TO,
    subject: 'Impresión del mes',
    text: 'That was easy!',
    attachments: [{
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        }]
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});
