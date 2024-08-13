
import { configureStore } from "@reduxjs/toolkit";
import navFeatures from "./bloodDonorFeatures/navFeatures.js";
export const store=configureStore({
    reducer :{
        navMenu:navFeatures
    },
    // devTools:false
    // to disable dev tools in production
});