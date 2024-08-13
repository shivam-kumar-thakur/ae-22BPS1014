
import "../css/button-1.css"
import "../style/addvehicle.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function ManualDriverAllotment(){

    const navigation=useNavigate();

    const linkManualAllotment=()=>{
        startTransition(()=> navigation("/admin/manual-mapping"));
    }
    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-myrequest">
                    <h3>Manual Maping</h3><br/>
                    <p className="p1">You can directly map a driver with a vehicle manually, best if you remember the driver credentials.</p>
                </div>
                <div className="nav-button-myrequest">
                    <button className="button-1 p1 primary-color2" onClick={linkManualAllotment}>Map Driver</button>
                </div>
            </div>
        </>
    )
}