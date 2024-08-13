
import "../css/button-1.css"
import "../style/addvehicle.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function SearchDriverByInfo(){

    const navigation=useNavigate();

    const driverSearchByInfo=()=>{
        startTransition(()=> navigation("/admin/search-driver-info"));
    }
    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-myrequest">
                    <h3>Find Driver By Info</h3><br/>
                    <p className="p1">Search Driver by their Information.</p>
                </div>
                <div className="nav-button-myrequest">
                    <button className="button-1 p1 primary-color2" onClick={driverSearchByInfo}>Find</button>
                </div>
            </div>
        </>
    )
}