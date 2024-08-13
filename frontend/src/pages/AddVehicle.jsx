import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import "../style/singleColumn.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";

export default function AddVehicle() {
    const [error, setErrors] = useState({});  
    const [data, setData] = useState({"brand":"","vehicle_id":"", "model":"", "registration_number":"" } );

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
            fetchData("POST", "/api/v1/admin/new-vehicle", data)
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
                <h2 className="donor-heading">Add new Vehicle</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card">
                    <div className="first-area">
                        <div className="input-area-container">
                        <form className="form-data">
                                <input type="text" id="brand" onChange={(e) => getData(e)} name="brand" placeholder="Brand" required />
                                {error.brand && (<p className="invalid-data invalid-donor-form-data">{error.brand}</p>)}

                                <input type="text" id="vehicle_id" onChange={(e) => getData(e)} name="vehicle_id" placeholder="Vehicle Id" required />
                                {error.vehicle_id && (<p className="invalid-data invalid-donor-form-data">{error.vehicle_id}</p>)}

                                <input type="text" id="model" onChange={(e) => getData(e)} name="model" placeholder="Vehicle Model" required />
                                {error.model && (<p className="invalid-data invalid-donor-form-data">{error.model}</p>)}

                                <input type="text" id="registration_number" onChange={(e) => getData(e)} name="registration_number" placeholder="Registeration Number" required />
                                {error.registration_number && (<p className="invalid-data invalid-donor-form-data">{error.registration_number}</p>)}
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
