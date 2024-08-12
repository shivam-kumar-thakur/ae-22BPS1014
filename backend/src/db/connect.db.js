import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

export const connectDatabase=async()=>{
    try{
        const connectDb=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Databse connected successfully : ",connectDb.connection.host);
    }
    catch(error){
        console.log("Something went wrong while connecting databse : ",error);
    }
}