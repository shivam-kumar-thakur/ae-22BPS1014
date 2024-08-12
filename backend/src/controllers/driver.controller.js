import { userDetails } from "../models/user.model.js";
import { driverDetails } from "../models/driver.model.js";
import { vehicleDetails } from "../models/vehicle.model.js";
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.utils.js";
import { GENDER_DATA, COUNTRY } from "../constants.js";
import { bookingDetails } from "../models/booking.model.js";
import { addEmail } from "../mailQueue/producer.queue.js";
import mongoose from "mongoose";

// Accept a booking request
const acceptRequest = asyncHandler(async (req, res) => {
    const { bookingId } = req.body;
    const driverEmail = req.loginUser.email;

    const driver = await driverDetails.findOne({ email: driverEmail });
    if (!driver) {
        throw new ApiError(401, "Invalid User");
    }

    const booking = await bookingDetails.findById(new mongoose.Types.ObjectId(bookingId));
    if (!booking) {
        throw new ApiError(401, "Invalid booking");
    }

    if (booking.status === 1) {
        return res.status(301).json(new ApiResponse(301, "Already taken by another driver."));
    }

    if (!driver.isAvailable(booking.start_date_time, booking.end_date_time)) {
        return res.status(302).json(new ApiResponse(302, "Your slot is not free"));
    }

    if (booking.start_date_time < new Date(driver.work_time_start) || booking.end_date_time > new Date(driver.work_time_end)) {
        throw new ApiError(401, "Driver is not active in this time period.");
    }

    booking.driver_id = driver.driver_id;
    booking.status = 1;

    driver.bookings.push({
        booking_id: booking._id,
        start_time: booking.start_date_time,
        end_time: booking.end_date_time
    });

    await driver.save({ validateBeforeSave: true });
    await booking.save({ validateBeforeSave: false });

    const mailData={"type":"message",
        "subject":"You are assigned with a vehicle",
        "message":`Vehicle id ${booking.vehicle_id}, Driver Id : ${booking.driver_id}, Start time : ${booking.start_date_time}, End Time: ${booking.end_date_time}`,"email":driverEmail };
        
    const mail=await addEmail(mailData);

    if(!addEmail(mail))
    {
        console.log("New user added as admin , mail cannot be sent.");
    }


    return res.status(201).json(new ApiResponse(201, "Successfully booked"));
});

// View upcoming requests
const viewUpcomingRequests = asyncHandler(async (req, res) => {
    const driverEmail = req.loginUser.email;
    const now = new Date();

    try {
        const driver = await driverDetails.findOne({ email: driverEmail });
        if (!driver) {
            throw new ApiError(401, "Invalid User");
        }

        const upcomingBookings = await bookingDetails.aggregate([
            {
                $match: {
                    driver_id: driver.driver_id,
                    start_date_time: { $gte: now },
                    status: 1
                }
            },
            {
                $sort: { start_date_time: 1 }
            }
        ]);

        console.log(upcomingBookings)
        return res.status(200).json(new ApiResponse(200, "Upcoming requests", upcomingBookings));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, "An error occurred while fetching upcoming requests"));
    }
});


// View past requests
const viewPastRequests = asyncHandler(async (req, res) => {
    const driverEmail = req.loginUser.email;
    const now = new Date();

    try {
        const driver = await driverDetails.findOne({ email: driverEmail });
        if (!driver) {
            throw new ApiError(401, "Invalid User");
        }

        const pastBookings = await bookingDetails.aggregate([
            {
                $match: {
                    driver_id: driver.driver_id,
                    end_date_time: { $lt: now },
                    status: 1
                }
            },
            {
                $sort: { end_date_time: -1 }
            }
        ]);

        return res.status(200).json(new ApiResponse(200, "Past requests", pastBookings));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, "An error occurred while fetching past requests"));
    }
});



// can get overall veiw of his work

export { acceptRequest, viewUpcomingRequests, viewPastRequests };

