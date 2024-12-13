import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: "gmail",

    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
})