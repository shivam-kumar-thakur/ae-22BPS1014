import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const driverRoute=Router();

import { acceptRequest, viewUpcomingRequests, viewPastRequests } from "../controllers/driver.controller.js";

driverRoute.route("/accept-request").post(verifyJWT,acceptRequest);
driverRoute.route("/upcoming-request").post(verifyJWT,viewUpcomingRequests);
driverRoute.route("/past-request").post(verifyJWT,viewPastRequests);

export {driverRoute};
