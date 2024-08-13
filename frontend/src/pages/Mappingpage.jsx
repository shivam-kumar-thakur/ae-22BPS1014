import { useEffect, useState } from "react";
import ManualDriverAllotment from "../component/ManualDriverAllotment.jsx";
import OpenToAllMapping from "../component/OpenToAllMapping.jsx";


import "../css/home-page.css"
import { fetchData } from "../utils/apiFetching.js";
import { useNavigate } from "react-router-dom";
// import DonationHistory from "./Donation_History.jsx";
export default function MappingPage(){

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
                 <ManualDriverAllotment/>
                 <OpenToAllMapping/>
            </div>
        </div>
        </>
    )
}




