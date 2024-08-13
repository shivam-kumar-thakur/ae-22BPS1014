
import "../css/button-1.css"
import "../style/addvehicle.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function AddVehicle(){

    const navigation=useNavigate();

    const linkVehicle=()=>{
        startTransition(()=> navigation("/admin/add-vehicle"));
    }
    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-myrequest">
                    <h3>Vehicle</h3><br/>
                    <p className="p1">You can add new vehicles and give them unique id.</p>
                </div>
                <div className="nav-button-myrequest">
                    <button className="button-1 p1 primary-color2" onClick={linkVehicle}>Add vehicle</button>
                </div>
            </div>
        </>
    )
}