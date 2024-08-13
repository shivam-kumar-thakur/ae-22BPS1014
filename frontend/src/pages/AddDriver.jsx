import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";

export default function AddDriver() {
    const [error, setErrors] = useState({});
    const [data, setData] = useState({
        "username": "",
        "driver_id": "",
        "user_email": "",
        "password": "",
        "phone_number": "",
        "gender": "",
        "dob": "",
        "country": "",
        "pincode": "",
        "work_time_start": "",
        "work_time_end": ""
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
            fetchData("POST", "/api/v1/admin/new-driver", data)
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
                <h2 className="donor-heading">Add new Driver</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card">
                    <div className="first-area">
                        <div className="input-area-container border-container">
                            <form className="form-data">
                                <input type="text" id="username" onChange={(e) => getData(e)} name="username" placeholder="Driver Name" required />
                                {error.username && (<p className="invalid-data invalid-donor-form-data">{error.username}</p>)}
                                <input type="text" id="driver_id" onChange={(e) => getData(e)} name="driver_id" placeholder="Driver Id" required />
                                {error.driver_id && (<p className="invalid-data invalid-donor-form-data">{error.driver_id}</p>)}

                                <input type="email" id="user_email" name="user_email" placeholder="Enter Driver Email Id" onChange={(e) => getData(e)} required />
                                {error.user_email && (<p className="invalid-data">{error.user_email}</p>)}
                                <input type="password" id="password" name="password" placeholder="Enter his password" onChange={(e) => getData(e)} required />
                                {error.password && (<p className="invalid-data">{error.password}</p>)}

                                <input type="tel" id="phone_number" name="phone_number" placeholder="Enter Driver Phone Number" onChange={(e) => getData(e)} required />
                                {error.phone_number && <p className="invalid-data">{error.phone_number}</p>}
                                <p className="number-format-specify" style={{ alignSelf: "flex-start", marginLeft: "5%" }}>Don't add +91, +1 etc</p>

                                <select name="gender" id="gender" onChange={(e) => getData(e)} required>
                                    <option value="" disabled selected>Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                                {error.gender && <p className="invalid-data">{error.gender}</p>}
                            </form>
                        </div>
                        <div className="input-area-container">
                            <form className="form-data">
                                <input type="date" id="dob" name="dob" onChange={(e) => getData(e)} required />
                                {error.dob && <p className="invalid-data">Enter Birth Date.</p>}

                                <select className="select-box" name="country" id="country" onChange={(e) => getData(e)} required>
                                    <option value="" disabled selected>Country</option>
                                    <option value="INDIA">India</option>
                                </select>
                                {error.country && (<p className="invalid-data invalid-donor-form-data">{error.country}</p>)}

                                <input type="text" id="pincode" name="pincode" placeholder="Area Pincode" onChange={(e) => getData(e)} required />
                                {error.pincode && (<p className="invalid-data invalid-donor-form-data">{error.pincode}</p>)}

                                <p style={{ alignSelf: "flex-start", marginLeft: "5%", marginTop: "5px" }}>Work Start Time</p>
                                <input type="time" id="work_time_start" name="work_time_start" onChange={(e) => getData(e)} required />
                                {error.work_time_start && (<p className="invalid-data invalid-donor-form-data">{error.work_time_start}</p>)}

                                <p style={{ alignSelf: "flex-start", marginLeft: "5%", marginTop: "5px" }}>Work End Time</p>
                                <input type="time" id="work_time_end" name="work_time_end" onChange={(e) => getData(e)} required />
                                {error.work_time_end && (<p className="invalid-data invalid-donor-form-data">{error.work_time_end}</p>)}
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
