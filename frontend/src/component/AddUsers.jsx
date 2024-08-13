import "../css/button-2.css"
import "../style/addUser.css"
import { useNavigate } from "react-router-dom"
import { startTransition } from "react";
export default function Adduser(){

    const navigation=useNavigate();
    
    const linkDriver=()=>{
        startTransition(()=> navigation("/admin/add-driver"));
    }

    const linkAdmin=()=>{
        startTransition(()=> navigation("/admin/add-admin"));
    }

    return (
        <>
            <div className="myRequestContainer card">
                <div className="content-ask-for-blood">
                    <h3>Add User</h3><br/>
                    <p className="p1">You can add drivers detaisl and you can also create new admins to manage the platform.</p>
                </div>
                <div className="nav-button-ask-blood">
                    <button className="button-2 p1" onClick={linkDriver}>Driver</button>
                    <button className="button-2 p1" onClick={linkAdmin}>Admin</button>
                </div>
            </div>
        </>
    )
}