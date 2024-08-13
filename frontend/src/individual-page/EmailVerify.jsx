// only if tocken generated to verify then open this
import { useDispatch, useSelector } from "react-redux";
import "/src/css/button-1.css";
import "../css/register-page.css";
import { fetchData } from "../utils/apiFetching";
import { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { setOtpFlag } from "../appRedux/bloodDonorFeatures/bloodFeatures";
export default function EmailVerify(){

    const selector=useSelector((state)=>state.bloodFeatures);
    const [otp,setOtp]=useState();
    const navigate=useNavigate();
    const dispatch=useDispatch();    
    const [pending,startTransition]=useTransition();
    
    // wrong thing
    // useLayoutEffect(()=>{
    //     if(!selector.setOtp){
    //         navigate("/login");
    //     }
    // },[])

    useEffect(()=>{
        if(!selector.hasOwnProperty("setOtp")){
            startTransition(()=>{
                navigate("/login");
            })
        }
    },[selector])

    const otpChange=(e)=>{
        e.preventDefault();
        startTransition(()=>{
            setOtp(()=>e.target.value);
        })
    }

    function checkOtp(){
        fetchData("POST","api/v1/general/email-validate",{"email":selector.setOtp,"otp":otp})
        .then((res)=>{
            if(!res){
                alert("Enter Valid OTP.")
            }
            else{
                localStorage.setItem("userLogged",true);
                dispatch(setOtpFlag({"set":false}));
                startTransition(()=>{
                    navigate("/");
                })
            }
        })
        .catch((err)=>alert("Something went wrong"))
    }

    function resendOTP(){
        fetchData("POST","api/v1/general/email-validate-resendOTP",{"email":selector.setOtp})
        .then((res)=>{
            if(!res){
                alert("Cannot resend OTP");
            }
            else{
                alert("OTP send successfully");
            }
        })
        .catch((err)=>alert("Something went wrong"))
    }

    if(!selector.hasOwnProperty("setOtp")){
        return null;
    }
    else{
        return (
            <div className="otp-validation-container">
                <div className="login-container" id="container1">
                    <div className="logo">
                        <img src="image/logo-blue.png" className="logo-image"/>
                        <span className="logo-name">BlueBeads</span>
                    </div>
                    <form className="form-data">
                        <p>We have sent an OTP to your E-Mail Id</p>
                        <input type="text" id="otp" placeholder="Enter OTP" onChange={(e)=>otpChange(e)}/>
                        <div className="register-button-div">
                                <a style={{color:"#940686",fontWeight:500,cursor:"grab"}} onClick={()=>{resendOTP()}}>{`Resend OTP`}</a>
                                <button type="button" className="button-1" id="save" onClick={()=>{checkOtp()}}>Verify</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}