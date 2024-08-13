import { useEffect, useState } from "react";
import Adduser from "../component/AddUsers.jsx";
import AddVehicle from "../component/AddVehicle.jsx";

import "../css/home-page.css"
import { fetchData } from "../utils/apiFetching.js";
import { useNavigate } from "react-router-dom";
// import DonationHistory from "./Donation_History.jsx";
export default function DatabasePage(){

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
                 <Adduser/>
                 <AddVehicle/>
            </div>
        </div>
        </>
    )
}




