import nodemailer from "nodemailer";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const transporter=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port :465,
    secure:true,
    auth:{
        user: process.env.GOOGLE_MAIL_USER,
        pass: process.env.GOOGLE_MAIL_APP_PASSWORD
    }
})


const generateSecureOTP=async(length)=>{
    let otp="";
    for(let i=0;i<length;i++){
        otp+=crypto.randomInt(0,10);
    }
    return otp;
}

const sendOTP=async()=>{

}

const sendEmail = async (email, message,subject) => {
    const options = {
        from: process.env.GOOGLE_MAIL_USER,
        to: email,
        subject: subject,
        text: message
    };
    try {
        await transporter.sendMail(options);
        console.log("Email sent successfully");
        return true;
    } catch (error) {
        console.log("Error: ", error);
        return false;
    }
};


export {sendOTP,sendEmail};
