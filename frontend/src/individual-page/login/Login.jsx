import { useEffect, useState, useTransition } from "react";
import "/src/css/button-1.css";
import "/src/css/login-page.css";
import { Link, useNavigate } from "react-router-dom";
import "/src/css/formErrorMessage.css";
import { fetchData } from "../../utils/apiFetching.js";
import { isAuthenticated } from "../../utils/authenticated.js";

export default function Login() {
    const [data, setData] = useState({
        email: null,
        password: null,
        userType:null
    });

    const [error, setError] = useState({
        email: null,
        password: null,
        userType:null
    });

    const navigate = useNavigate();
    const [pending,startTransition]=useTransition();

    const onChangeData = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        startTransition(()=>{
            setData((prev) => ({
                ...prev,
                [id]: value
            }));
        })
    };

    const checkData = (e) => {
        e.preventDefault();
        let localError = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email || !emailRegex.test(data.email)) {
            localError.email = 'Enter valid Email address';
        }
        if (!data.password || data.password.trim() === '' || data.password.trim() === null) {
            localError.password = 'It is mandatory field';
        }
        if(data.userType!== "driver" &&  data.userType!== "admin"){
            localError.userType="It is required feild";
        }
        if (Object.keys(localError).length === 0) {
            submit();
        }
        else{
            setError(()=>(localError));
        }
    };

    const submit = () => {
        fetchData("POST", "/api/v1/general/login", data)
        .then((res) => {
            console.log(res)
            if (!res) {
                alert("Invalid Credentials");
            } else {
                localStorage.setItem("userLogged", "true");
                localStorage.setItem("userType", data.userType);
                if(data.userType==="driver"){
                    navigate("/driver");
                }
                else{
                    navigate("/admin");
                }
            }
        })
        .catch(() => { alert("Invalid Credentials"); });
    };

        return (
            <div className="main-container">
                <div className="images-conatiner-login">
                    <img src="image/login-page.webp" className="image-reg" />
                    <p>{`Simple and Easy to manage !`}</p>
                </div>
    
                <div className="form_section ">
                    <div className="login-container-mobile" id="container1">
                        <div className="logo">
                            <img src="/image/logo-blue.png" className="logo-image" />
                            <span className="logo-name">BlueBeads</span>
                        </div>
                        <form className="form-data">
                            <select name="userType" id="userType" value={data && data.userType} onChange={(e)=>onChangeData(e)}  required>
                                <option value="default" disabled selected>Choose User Type : </option>
                                <option value="driver">Driver</option>
                                <option value="admin">Admin</option>
                            </select>
                            {error.userType && (<p className="invalid-data">{error.userType}</p>)}
                            <input type="email" id="email" placeholder="Enter Your Email Id" onChange={(e)=>onChangeData(e)} required />
                            {error.email && (<p className="invalid-data">{error.email}</p>)}
                            <input type="password" id="password" placeholder="Enter Your password" onChange={(e)=>onChangeData(e)} required />
                            {error.password && (<p className="invalid-data">{error.password}</p>)}
                            <button type="button" className="button-1" id="signin" onClick={checkData}>Sign In</button>
                            <Link to="/forget"><p>Forgot password?</p></Link>
                            <br />
                        </form>
                    </div>
                    <div className="signup-container" id="container2">
                        <span style={{ color: "#940686", fontWeight: 500 }}>{`Don't have an account?`}</span>
                        <button id="signup" className="button-1" type="button" onClick={() => startTransition(()=>{navigate("/register");}) }>Sign Up</button>
                    </div>
                </div>
            </div>
        );
}
