import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userDetailsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    otpSent:{
        type:String,
        trim:true,
        default:null
    },
    otpSentCount:{
        type:Number,
        default:0
    },
    refreshToken:{
        type:String
    }
},{timestamps:true});

userDetailsSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
        next();
    }
    else{
        next();
    }
});

userDetailsSchema.methods.isPasswordvalid=async function(pass){
    try {
        if (pass.trim() === "" || !this.password) {
            throw new Error("Password or hash password is missing");
        }
        const isMatch = await bcrypt.compare(pass, this.password);
        return isMatch;
    } catch (error) {
        throw new Error("An error occurred while validating the password.");
    }
    
};

userDetailsSchema.methods.generateAccessToken=async function(){
    return jwt.sign({
        userId:this.email,
        userType:"admin"
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    });
};

userDetailsSchema.methods.generateRefreshToken=async function(){
    return jwt.sign({
        userId:this.email,
        userType:"admin"
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    });
};

export const userDetails=mongoose.model("userDetails",userDetailsSchema);