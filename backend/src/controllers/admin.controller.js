import { userDetails } from "../models/user.model.js";
import { driverDetails } from "../models/driver.model.js";
import { vehicleDetails } from "../models/vehicle.model.js";
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.utils.js";
import { GENDER_DATA, COUNTRY } from "../constants.js";
import { bookingDetails } from "../models/booking.model.js";
import { addEmail } from "../mailQueue/producer.queue.js";

import bcrypt from "bcrypt";

// Admin can register a new admin
const newAdminRegister = asyncHandler(async (req, res) => {
    const { username, user_email, password } = req.body;

    if (!username || !user_email || !password) {
        throw new ApiError(401, "Please enter valid details.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
        throw new ApiError(401, "Please enter a valid email.");
    }

    const userData = await userDetails.findOne({ email: user_email });

    if (userData) {
        return res.status(202).json(new ApiResponse(202, "User already registered."));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = {
        name: username,
        email: user_email,
        password: hashedPassword,
    };

    const newUser = await userDetails.create(newAdmin);

    if (!newUser) {
        throw new ApiError(501, "Something went wrong.");
    }

    const mailData={"type":"message",
        "subject":"You are added as admin",
        "message":`You are added as admin in our portal, You can login with password ${password}`,"email":user_email };
    
    const mail=await addEmail(mailData);

    if(!mail)
    {
        console.log("New user added as admin , mail cannot be sent.");
    }

    return res.status(201).json(new ApiResponse(201, "New Admin Created"));
});

// Admin can register a new driver
const newDriverRegister = asyncHandler(async (req, res) => {
    const { username, driver_id,user_email, password, phone_number, gender, dob, country, pincode, work_time_start, work_time_end } = req.body;

    if (
        !username || !driver_id||
        !user_email || 
        !password || 
        !phone_number || 
        gender === undefined || 
        !dob || 
        !country || 
        !pincode || 
        !work_time_start || 
        !work_time_end
    ) {
        throw new ApiError(401, "Please enter valid details.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
        throw new ApiError(401, "Please enter a valid email.");
    }

    const userData = await driverDetails.findOne({ email: user_email });

    if (userData) {
        return res.status(202).json(new ApiResponse(202, "User already registered."));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newDriver = {
        name: username,
        driver_id,
        email: user_email,
        password: hashedPassword,
        mobile_number: phone_number,
        gender: GENDER_DATA[gender],
        dob: dob,
        country: COUNTRY[country],
        pincode: pincode,
        work_time_start:work_time_start,
        work_time_end:work_time_end,
    };

    const newUser = await driverDetails.create(newDriver);

    if (!newUser) {
        throw new ApiError(501, "Something went wrong.");
    }

    const mailData={"type":"message",
        "subject":"You are added as Driver",
        "message":`You are added as driver in our portal, You can login with password ${password}`,"email":user_email }
        
    const mail=await addEmail(mailData);

    if(!mail)
    {
        console.log("New user added as driver , mail cannot be sent.");
    }

    return res.status(201).json(new ApiResponse(201, "New Driver Registered"));
});

// Admin can register a new vehicle
const newVehicleRegister = asyncHandler(async (req, res) => {
    const { brand,vehicle_id, model, registration_number } = req.body;

    if (!brand || !vehicle_id || !model || !registration_number) {
        throw new ApiError(401, "Please enter valid details.");
    }

    const vehicle = await vehicleDetails.findOne({ registration_number });

    if (vehicle) {
        return res.status(202).json(new ApiResponse(202, "Vehicle already registered."));
    }

    const newVehicle = { brand,vehicle_id, model, registration_number };

    const newVehicleInstance = await vehicleDetails.create(newVehicle);

    if (!newVehicleInstance) {
        throw new ApiError(501, "Something went wrong.");
    }

    return res.status(201).json(new ApiResponse(201, "New Vehicle Created"));
});



// Assign vehicle directly to a driver
const assignVehicleDirectly = asyncHandler(async (req, res) => {

    try {
        const { vehicle_id, driver_id, start_time, end_time } = req.body;

        if (!vehicle_id || !driver_id || !start_time || !end_time) {
            throw new ApiError(401, "Please enter valid details.");
        }

        const vehicle = await vehicleDetails.findOne({ vehicle_id: vehicle_id });
        if (!vehicle) {
            throw new ApiError(404, "Vehicle not found.");
        }

        const driver = await driverDetails.findOne({ driver_id: driver_id });
        if (!driver) {
            throw new ApiError(404, "Driver not found.");
        }

        const startDateTime = new Date(start_time);
        const endDateTime = new Date(end_time);

        if (startDateTime < driver.work_time_start || endDateTime > driver.work_time_end) {
            throw new ApiError(401, "Driver is not active in this time period.");
        }

        // Check if the driver is available
        const isAvailableDriver = driver.isAvailable(startDateTime, endDateTime);
        if (!isAvailableDriver) {
            return res.status(402).json(new ApiResponse(402, "Driver is not available during this period."));
        }

        // Check if the vehicle is available
        const isAvailableVehicle = vehicle.isAvailable(startDateTime, endDateTime);
        if (!isAvailableVehicle) {
            return res.status(402).json(new ApiResponse(402, "Vehicle is not available during this period."));
        }

        console.log(vehicle)

        const bookingData = {
            driver_id: driver.driver_id,
            vehicle_id: vehicle.vehicle_id,
            start_date_time: startDateTime,
            end_date_time: endDateTime,
            country:driver.country,
            pincode:driver.pincode,
            status:1
        };
        const newBooking = await bookingDetails.create(bookingData);
        if (!newBooking) {
            throw new ApiError(501, "Failed to create booking.");
        }

        driver.bookings.push({
            booking_id: newBooking._id,
            start_time: startDateTime,
            end_time: endDateTime,
        });

        vehicle.current_allocations.push({
            driver_id: driver.driver_id,
            time_start: startDateTime,
            time_end: endDateTime,
        });

        await driver.save({ validateBeforeSave: false });
        await vehicle.save({ validateBeforeSave: false });

        const mailData={"type":"message",
            "subject":"You are assigned a vehicle",
            "message":`Vehicle id ${vehicle_id}, Driver Id : ${driver_id}, Start time : ${start_time}, End Time: ${end_time}`,"email":driver.email };

        const mail=await addEmail(mailData);

        if(!mail)
        {
            console.log("New user added as admin , mail cannot be sent.");
        }


        return res.status(201).json(new ApiResponse(201, "Booking successfully added."));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiError(500, "An error occurred while processing the request."));
    }
});
 


const assignVehicleOpen = asyncHandler(async (req, res) => {
    const { vehicle_id, country, pincode, start_date_time, end_date_time } = req.body;

    if (!vehicle_id || !pincode || !start_date_time || !end_date_time) {
        return res.status(400).json(new ApiResponse(400, "All fields are required."));
    }

    try {
        // Checking  if the vehicle exists
        const vehicle = await vehicleDetails.findOne({vehicle_id:vehicle_id});
        if (!vehicle) {
            return res.status(404).json(new ApiResponse(404, "Vehicle not found."));
        }

        // a new booking
        const newBooking = await bookingDetails.create({
            vehicle_id: vehicle.vehicle_id,
            start_date_time: new Date(start_date_time),
            end_date_time: new Date(end_date_time),
            country,
            pincode,
            status: 0  // Not booked 
        });

        if (!newBooking) {
            return res.status(500).json(new ApiResponse(500, "Error creating booking."));
        }

        return res.status(201).json(new ApiResponse(201, "Booking successfully created", newBooking));

    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, "An error occurred while creating the booking."));
    }
});

// View drivers based on location (pincode and country)
const viewDriverByLocation = asyncHandler(async (req, res) => {
    const { pincode, country, limit = 10 } = req.body;

    if (!pincode || !country) {
        return res.status(400).json(new ApiResponse(400, "Pincode and country are required."));
    }

    try {
        const data = await driverDetails.aggregate([
            {
                $match: {
                    pincode: pincode,
                    country: country
                }
            },
            {
                $sort: { name: 1 }  // Sort drivers by name, ascending
            },
            {
                $limit: parseInt(limit)  // Limit the number of results
            }
        ]);
        return res.status(200).json(new ApiResponse(200, "Results", data));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, "An error occurred while fetching drivers"));
    }
});


// View drivers based on name, phone, or driver_id
const viewDriverByInfo = asyncHandler(async (req, res) => {
    const { name, phone, driver_id } = req.body;

    try {
        let matchCriteria = {};

        if (driver_id) {
            // Search by driver_id if provided
            matchCriteria.driver_id = driver_id;
        } else if (phone) {
            // Search by phone if provided
            matchCriteria.mobile_number = phone;
        } else if (name) {
            // Search by name if neither driver_id nor phone is provided
            matchCriteria.name = { $regex: new RegExp(name, 'i') };  // Case-insensitive regex search
        } else {
            return res.status(400).json(new ApiResponse(400, "At least one search criterion (name, phone, or driver_id) is required"));
        }

        const data = await driverDetails.aggregate([
            { $match: matchCriteria },
            { $limit: 10 }  // Limit results to 10 if searching by name
        ]);

        if (data.length === 0) {
            return res.status(404).json(new ApiResponse(404, "No users found with the provided criteria"));
        }

        return res.status(200).json(new ApiResponse(200, "Users found", data));
    } catch (error) {
        console.error(error);
        return res.status(500).json(new ApiResponse(500, "An error occurred while fetching drivers"));
    }
});


export { newAdminRegister, newDriverRegister, newVehicleRegister,assignVehicleDirectly,viewDriverByInfo,viewDriverByLocation,assignVehicleOpen };
