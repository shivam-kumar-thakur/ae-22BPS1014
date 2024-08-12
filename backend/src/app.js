import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(cookieParser());
app.use(express.static("public"));


// routes
import { generalRouter } from "./routes/entry.routes.js";
import { adminRouter } from "./routes/admin.route.js";
import { driverRoute } from "./routes/driver.route.js";

app.use("/api/v1/general",generalRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/driver",driverRoute);

export default app;