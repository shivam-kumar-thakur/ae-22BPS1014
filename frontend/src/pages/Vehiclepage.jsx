import { useEffect, useState } from "react";
import "../css/home-page.css"
import { fetchData } from "../utils/apiFetching.js";
import { useNavigate } from "react-router-dom";
import VehicleInfo from "../component/FindVehicleInfo.jsx";
// import DonationHistory from "./Donation_History.jsx";
export default function Vehiclepage(){

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
                 <VehicleInfo/>
            </div>
        </div>
        </>
    )
}




