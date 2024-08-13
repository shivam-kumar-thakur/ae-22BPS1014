
import "../css/button-1.css"
import "../style/addvehicle.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function OpenToAllMapping(){

    const navigation=useNavigate();

    const linkOpenAll=()=>{
        startTransition(()=> navigation("/admin/ticket-mapping"));
    }
    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-myrequest">
                    <h3>Automated Maping</h3><br/>
                    <p className="p1">Here drivers can decide if they want to pick this booking.</p>
                </div>
                <div className="nav-button-myrequest">
                    <button className="button-1 p1 primary-color2" onClick={linkOpenAll}>New Booking</button>
                </div>
            </div>
        </>
    )
}