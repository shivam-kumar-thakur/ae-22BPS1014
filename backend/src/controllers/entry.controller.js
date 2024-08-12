import { userDetails } from "../models/user.model.js";
import { driverDetails } from "../models/driver.model.js";
import { ApiError } from "../utils/apiError.util.js";
import { ApiResponse } from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.utils.js";
import { addEmail } from "../mailQueue/producer.queue.js";
import bcrypt from "bcrypt";

const generateToken = async (email, userType) => {
    try {
        if (userType !== "admin" && userType !== "driver") {
            throw new ApiError(400, "Invalid User Type"); 
        }

        let userData;
        if (userType === "driver") {
            userData = await driverDetails.findOne({ email }).select("-otpSent -otpSentCount");
        } else {
            userData = await userDetails.findOne({ email }).select("-otpSent -otpSentCount");
        }

        if (!userData) {
            throw new ApiError(404, "Invalid email Id");
        }

        const accessToken = await userData.generateAccessToken();
        const refreshToken = await userData.generateRefreshToken();

        userData.refreshToken = refreshToken;
        await userData.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Failed to generate token.");
    }
};

const login = asyncHandler(async (req, res) => {
    const { email, password, userType } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        throw new ApiError(401, "Please enter valid details.");
    }

    let userData;
    if (userType === "driver") {
        userData = await driverDetails.findOne({ email }).select("-otpSent -otpSentCount");
    } else {
        userData = await userDetails.findOne({ email }).select("-otpSent -otpSentCount");
    }

    if (!userData || !(await bcrypt.compare(password, userData.password))) {
        throw new ApiError(403, "Invalid User");
    }

    const { accessToken, refreshToken } = await generateToken(email, userType);

    delete userData.password;

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res.status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(201, "User logged in",userData));
});


export { login };
