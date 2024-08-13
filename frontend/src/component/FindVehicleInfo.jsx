
import "../css/button-1.css"
import "../style/addvehicle.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function VehicleInfo(){

    const navigation=useNavigate();

    const linkVehicleInfo=()=>{
        startTransition(()=> navigation("/admin/vehicle-details"));
    }
    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-myrequest">
                    <h3>Vehicle Info</h3><br/>
                    <p className="p1">Veiw all the information of a vehicle.</p>
                </div>
                <div className="nav-button-myrequest">
                    <button className="button-1 p1 primary-color2" onClick={linkVehicleInfo}>View</button>
                </div>
            </div>
        </>
    )
}