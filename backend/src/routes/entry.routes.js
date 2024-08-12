import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const generalRouter=Router();

import { login } from "../controllers/entry.controller.js";

generalRouter.route("/login").post(login);
// generalRouter.route("/register").get(register);

export {generalRouter};