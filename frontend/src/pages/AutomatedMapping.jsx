import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import "../style/singleColumn.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";

export default function AutomatedMapping() { 
    const [error, setErrors] = useState({});
    const [data, setData] = useState({ "vehicle_id": "","country":"", "pincode":"",  "start_date_time": "", "end_date_time": "" });

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userLogged") !== "true") {
            navigate("/login");
        }
    }, [navigate]);

    const checkData = () => {
        const newError = {};

        Object.keys(data).forEach((key) => {
            if (data[key] === null || data[key] === "" || (data[key].trim() === null) || (data[key].trim() === "")) {
                newError[key] = "It is a required field";
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
        console.log(data)
        if (checkData()) {
            fetchData("POST", "/api/v1/admin/find-driver-open", data)
                .then((res) => {
                    if (!res) {
                        alert("Something went wrong. Please check the input");
                    } else {
                        alert(res.message || "Successfully added");
                    }
                })
                .catch((err) => {
                    alert(err.message || "Something went wrong.");
                });
        } else return false;
    };

    return (
        <>
            <div className="parent-container">
                <h2 className="donor-heading">Automated Mapping</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card" style={{ maxWidth: "90%" }}>
                    <div className="first-area">
                        <div className="input-area-container" style={{ width: "100%" }}>
                            <form className="form-data"> 
                               
                                <input type="text" id="vehicle_id" onChange={(e) => getData(e)} name="vehicle_id" placeholder="Vehicle Id" required />
                                {error.vehicle_id && (<p className="invalid-data invalid-donor-form-data">{error.vehicle_id}</p>)}

                                <select className="select-box" name="country" id="country" onChange={(e) => getData(e)} required>
                                    <option value="" disabled selected>Country</option>
                                    <option value="INDIA">India</option>
                                </select>
                                {error.country && (<p className="invalid-data invalid-donor-form-data">{error.country}</p>)}

                                <input type="text" id="pincode" name="pincode" placeholder="Area Pincode" onChange={(e) => getData(e)} required />
                                {error.pincode && (<p className="invalid-data invalid-donor-form-data">{error.pincode}</p>)}

                                <p style={{marginTop:"10px"}}>Start date and time</p>
                                <input type="datetime-local" id="start_date_time" onChange={(e) => getData(e)} name="start_date_time" required />
                                {error.start_date_time && (<p className="invalid-data invalid-donor-form-data">{error.start_date_time}</p>)}

                                <p style={{marginTop:"10px"}}>End date and time</p>
                                <input type="datetime-local" id="end_date_time" onChange={(e) => getData(e)} name="end_date_time" required />
                                {error.end_date_time && (<p className="invalid-data invalid-donor-form-data">{error.end_date_time}</p>)}
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
