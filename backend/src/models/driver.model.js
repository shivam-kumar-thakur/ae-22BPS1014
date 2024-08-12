import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { GENDER_DATA, COUNTRY } from "../constants.js";

const driverDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    driver_id: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    mobile_number: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: Number,
        required: true,
        enum: Object.values(GENDER_DATA),
    },
    dob: {
        type: Date,
        required: true,
    },
    country: {
        type: Number,
        required: true,
        enum: Object.values(COUNTRY),
    },
    pincode: {
        type: String,
        required: true,
        index: true,
        trim: true,
    },
    otpSent: {
        type: String,
        trim: true,
        default: null,
    },
    otpSentCount: {
        type: Number,
        default: 0,
    },
    refreshToken: {
        type: String,
        trim: true,
    },
    work_time_start: {
        type: String,  // Time stored in "HH:MM" format
    },
    work_time_end: {
        type: String,  // Time stored in "HH:MM" format
    },
    bookings: [
        {
            booking_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Booking", 
            },
            start_time: {
                type: Date, // Date and time
                required: true,
            },
            end_time: {
                type: Date,  // Date and time
                required: true,
            },
        }
    ],
}, { timestamps: true });

driverDetailsSchema.methods.isPasswordValid = async function (pass) {
    if (!pass || !this.password) {
        throw new Error("Password or hash password is missing");
    }
    return bcrypt.compare(pass, this.password);
};

driverDetailsSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { userId: this.email, userType: "driver" },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};

driverDetailsSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { userId: this.email, userType: "driver" },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
};

driverDetailsSchema.methods.isOtpValid = async function (otp) {
    if (!otp || !this.otpSent) {
        throw new Error("OTP or Hash is missing");
    }
    return bcrypt.compare(otp, this.otpSent);
};

// Method to check if driver is free at a given time
driverDetailsSchema.methods.isAvailable = function (requestedStartTime, requestedEndTime) {
    // Checking  for any overlap with existing bookings
    return this.bookings.every(booking => 
        (requestedEndTime <= booking.start_time || requestedStartTime >= booking.end_time)
    );
};

export const driverDetails = mongoose.model("DriverDetail", driverDetailsSchema);
