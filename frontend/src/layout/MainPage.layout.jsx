import { startTransition, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { protectedRoutes } from "../utils/authenticated";

export default function MainPageLayout(){

    const [check,setCheck]=useState(<p></p>);
    const navigate=useNavigate();
    useEffect(()=>{
        const check=localStorage.getItem("userLogged");
        if(check==="true"){
            setCheck(()=>( <>
                {/* <Header /> */}
                <Outlet />
                {/* <Footer/> */}
            </>))
        }
        else{
            navigate("/login")
        }
    },[])

    return(
        <>{check}</>
    )

}