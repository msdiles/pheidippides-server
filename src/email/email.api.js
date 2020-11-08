"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const resetEmail_template_1 = __importDefault(require("./resetEmail.template"));
class Email {
    constructor(resetDate, resetId, email) {
        this.resetDate = resetDate;
        this.resetId = resetId;
        this.email = email;
        this.transporter = nodemailer_1.default.createTransport({
            service: process.env.GMAIL_SERVICE_NAME,
            host: process.env.GMAIL_SERVICE_HOST,
            port: Number(process.env.GMAIL_SERVICE_PORT) || 0,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER_NAME,
                pass: process.env.GMAIL_USER_PASSWORD,
            },
        });
    }
    sendEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const template = yield resetEmail_template_1.default(process.env.CLIENT_URL, this.resetId, this.resetDate);
                this.mailOptions = {
                    from: '"PHEIDIPPIDES" <misdalose@gmail.com>',
                    to: this.email,
                    subject: "Reset password",
                    html: template,
                };
                yield this.transporter.verify();
                yield this.transporter.sendMail(this.mailOptions);
                console.log("Email sent");
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.default = Email;
