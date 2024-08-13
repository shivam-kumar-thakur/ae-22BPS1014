import "../css/button-2.css"
import "../style/addUser.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function AllBookings(){

    const navigation=useNavigate();
    
    const allBookings=()=>{
        startTransition(()=> navigation("/admin/booking-details"));
    }

    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-ask-for-blood">
                    <h3>Bookings</h3><br/>
                    <p className="p1">Veiw all your booking Informations and alotment status.</p>
                </div>
                <div className="nav-button-ask-blood">
                    <button className="button-2 p1" onClick={allBookings}>Veiw All</button>
                </div>
            </div>
        </>
    )
}