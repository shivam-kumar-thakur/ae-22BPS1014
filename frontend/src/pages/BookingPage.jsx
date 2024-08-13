import { useEffect, useState } from "react";
import AllBookings from "../component/AllBoookings.jsx";

import "../css/home-page.css"
import { fetchData } from "../utils/apiFetching.js";
import { useNavigate } from "react-router-dom";
// import DonationHistory from "./Donation_History.jsx";
export default function BookingPage(){

    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("userLogged")!=="true"){
            navigate("/login");
        }
    })

    return (
        <>
        <div className="home-page-container">
            <div className="primary-option">
                 <AllBookings/>
            </div>
        </div>
        </>
    )
}




