import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import "../style/singleColumn.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";

export default function ManualMapping() {
    const [error, setErrors] = useState({});
    const [data, setData] = useState({ "vehicle_id": "", "driver_id": "", "start_time": "", "end_time": "" });

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
            fetchData("POST", "/api/v1/admin/vehicle-direct", data)
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
                <h2 className="donor-heading">Manual Mapping</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card" style={{ maxWidth: "90%" }}>
                    <div className="first-area">
                        <div className="input-area-container" style={{ width: "100%" }}>
                            <form className="form-data">
                                <input type="text" id="vehicle_id" onChange={(e) => getData(e)} name="vehicle_id" placeholder="Vehicle Id" required />
                                {error.vehicle_id && (<p className="invalid-data invalid-donor-form-data">{error.vehicle_id}</p>)}

                                <input type="text" id="driver_id" onChange={(e) => getData(e)} name="driver_id" placeholder="Driver Id" required />
                                {error.driver_id && (<p className="invalid-data invalid-donor-form-data">{error.driver_id}</p>)}

                                <p style={{marginTop:"10px"}}>Start date and time</p>
                                <input type="datetime-local" id="start_time" onChange={(e) => getData(e)} name="start_time" required />
                                {error.start_time && (<p className="invalid-data invalid-donor-form-data">{error.start_time}</p>)}

                                <p style={{marginTop:"10px"}}>End date and time</p>
                                <input type="datetime-local" id="end_time" onChange={(e) => getData(e)} name="end_time" required />
                                {error.end_time && (<p className="invalid-data invalid-donor-form-data">{error.end_time}</p>)}
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
