import mongoose from "mongoose";
import { COUNTRY } from "../constants.js";
const bookingSchema=new mongoose.Schema({
    driver_id:{
        type: String,
        trim: true,
    },
    vehicle_id:{
        type: String,
        trim: true,
        required:true
    },
    start_date_time:{
        type: Date, 
        required: true,
    },
    end_date_time:{
        type: Date, 
        required: true,
    },
    country: {
        type: Number,
    },
    pincode: {
        type: String,
        index: true,
        trim: true,
    },
    status:{
        type:Number,
        enum:[0,1],
        default:0   // not booked
    }
},{timestamps:true});

export const bookingDetails=mongoose.model("BookingDetails",bookingSchema);