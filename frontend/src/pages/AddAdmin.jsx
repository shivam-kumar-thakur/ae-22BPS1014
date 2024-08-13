import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import "../style/singleColumn.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";

export default function AddAdmin() {
    const [error, setErrors] = useState({});
    const [data, setData] = useState({
        "username": "",
        "user_email": "",
        "password": "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userLogged") !== "true") {
            navigate("/login");
        }
    }, [navigate]);

    const checkData = () => {
        const newError = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === "" || (data[key].trim() === null) || (data[key].trim() === "")) {
                newError[key] = "It is a required field";
            }

            if (key === "user_email" && !emailRegex.test(data[key])) {
                newError[key] = "Enter a valid Email address";
            }
        });

        if (Object.keys(newError).length !== 0) {
            setErrors(() => (newError));
            return false;
        } else {
            return true;
        }
    };

    const getData = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const submitData = () => {
        if (checkData()) {
            fetchData("POST", "/api/v1/admin/new-admin", data)
                .then((res) => {
                    if (!res) {
                        alert("Something went wrong. Please check the input");
                    } else {
                        alert(res.message);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        } else return false;
    };

    return (
        <>
            <div className="parent-container">
                <h2 className="donor-heading">Add new Admin</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card" style={{maxWidth:"90%"}}>
                    <div className="first-area">
                        <div className="input-area-container" style={{width:"100%"}}>
                        <form className="form-data">
                                <input type="text" id="username" onChange={(e) => getData(e)} name="username" placeholder="Driver Name" required />
                                {error.username && (<p className="invalid-data invalid-donor-form-data">{error.username}</p>)}

                                <input type="email" id="user_email" name="user_email" placeholder="Enter Driver Email Id" onChange={(e) => getData(e)} required />
                                {error.user_email && (<p className="invalid-data">{error.user_email}</p>)}
                                <input type="password" id="password" name="password" placeholder="Enter his password" onChange={(e) => getData(e)} required />
                                {error.password && (<p className="invalid-data">{error.password}</p>)}
                            </form>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button className="button-2" onClick={() => submitData()}>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}
