import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";

export default function VehicleDetails() {
    const [error, setErrors] = useState({});
    const [data, setData] = useState({
        registration_number: "",
    });

    const [response, setResponse] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userLogged") !== "true") {
            navigate("/login");
        }
    }, [navigate]);

    const getData = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const submitData = () => {
        fetchData("POST", "/api/v1/admin/vehicle-details", data)
            .then((res) => {
                if (!res) {
                    alert("Something went wrong. Please check the input");
                } else {
                    alert(res.message);
                    setResponse(res.responseData);
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <>
            <div className="parent-container">
                <h2 className="donor-heading">Find Vehicle</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card" style={{ maxWidth: "90%" }}>
                    <div className="first-area">
                        <div className="input-area-container" style={{ width: "100%" }}>
                            <form className="form-data">
                                <input 
                                    type="text" 
                                    id="registration_number" 
                                    onChange={getData} 
                                    name="registration_number" 
                                    placeholder="Registration Number" 
                                    required 
                                />
                                {error.registration_number && (
                                    <p className="invalid-data">{error.registration_number}</p>
                                )}
                            </form>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button className="button-2" onClick={submitData}>Find</button>
                    </div>
                </div>

                {response && (
                    <div className="results_container">
                        <div className="vehicle-details card">
                            <h3>Vehicle Details</h3>
                            <p><strong>Vehicle ID:</strong> {response.vehicle_id}</p>
                            <p><strong>Brand:</strong> {response.brand}</p>
                            <p><strong>Model:</strong> {response.model}</p>
                            <p><strong>Registration Number:</strong> {response.registration_number}</p>
                            <p><strong>Created At:</strong> {new Date(response.createdAt).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(response.updatedAt).toLocaleString()}</p>

                            {response.current_allocations && response.current_allocations.length > 0 && (
                                <>
                                    <h4>Current Allocations:</h4>
                                    <ul>
                                        {response.current_allocations.map((allocation, index) => (
                                            <li key={allocation._id}>
                                                <p><strong>Allocation {index + 1}:</strong></p>
                                                <p><strong>Start Time:</strong> {new Date(allocation.time_start).toLocaleString()}</p>
                                                <p><strong>End Time:</strong> {new Date(allocation.time_end).toLocaleString()}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
