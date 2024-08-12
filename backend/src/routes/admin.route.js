import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const adminRouter=Router();

import { newAdminRegister, newDriverRegister, newVehicleRegister ,assignVehicleDirectly,viewDriverByInfo,viewDriverByLocation ,assignVehicleOpen} from "../controllers/admin.controller.js";

adminRouter.route("/new-admin").post(verifyJWT,newAdminRegister);
adminRouter.route("/new-driver").post(verifyJWT,newDriverRegister);
adminRouter.route("/new-vehicle").post(verifyJWT,newVehicleRegister);
adminRouter.route("/vehicle-direct").post(verifyJWT,assignVehicleDirectly);
adminRouter.route("/driver-view-info").post(verifyJWT,viewDriverByInfo);
adminRouter.route("/driver-view-location").post(verifyJWT,viewDriverByLocation);
adminRouter.route("/find-driver-open").post(verifyJWT,assignVehicleOpen);

export {adminRouter};
