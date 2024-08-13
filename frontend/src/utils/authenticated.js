import { Navigate } from "react-router-dom";
import { fetchData } from "./apiFetching.js";

export const isAuthenticated=()=>{
    const savedState=localStorage.getItem("userLogged");
    if(savedState){
        // call once api and check for to be sure.
        fetchData("GET","api/v1/general/user")
        .then((res)=>{
            if(!res){
                localStorage.setItem("userLogged",false);
                return false;
            }
            else{
                return true;
            }
        })
        .catch(()=>{
            return false;
        });
    }
    else{
        return false;
    }
}

export const protectedRoutes=()=>{
    const savedState=localStorage.getItem("userLogged");
    return savedState;
}