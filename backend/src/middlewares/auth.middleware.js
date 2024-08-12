import asyncHandler from "../utils/asyncHandler.utils.js";
import {ApiError} from "../utils/apiError.util.js";
import jwt from "jsonwebtoken";
import { userDetails } from "../models/user.model.js";
import { driverDetails } from "../models/driver.model.js";

export const verifyJWT=asyncHandler(async (req,res,next)=>{
    try{
        const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","");
        if(!token){
            throw new ApiError("Unauthorized access.")
        }

        const decodeToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

        // get data
        let userData;
        if(decodeToken.userType==="driver"){
            userData = await driverDetails.findOne({ email:decodeToken.userId }).select("-otpSent -otpSentCount -password");
        }
        else if(decodeToken.userType==="admin"){
            userData = await userDetails.findOne({ email:decodeToken.userId }).select("-otpSent -otpSentCount -password");
        }
        else{
            throw new ApiError(401,"invalid access");
        }

        if(!userData){
            throw new ApiError(401,"invalid access");
        }

        req.loginUser=userData;
        next();
    }
    catch(error){
        console.log("Error came in auth : ",error);
        throw new ApiError(401,error?.message || "something went wrong");
    }
})