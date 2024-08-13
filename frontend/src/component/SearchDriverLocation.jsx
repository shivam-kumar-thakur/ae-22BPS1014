
import "../css/button-1.css"
import "../style/addvehicle.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function SearchDriverByLocation(){

    const navigation=useNavigate();

    const driverSearchByLocation=()=>{
        startTransition(()=> navigation("/admin/search-driver-location"));
    }
    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-myrequest">
                    <h3>Find Driver By Location</h3><br/>
                    <p className="p1">Search Driver by their Information of location</p>
                </div>
                <div className="nav-button-myrequest">
                    <button className="button-1 p1 primary-color2" onClick={driverSearchByLocation}>Find</button>
                </div>
            </div>
        </>
    )
}