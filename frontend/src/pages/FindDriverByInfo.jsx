import "../css/button-2.css";
import "../css/request-donation.css";
import "../css/register-page.css";
import "../css/formErrorMessage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../utils/apiFetching.js";
import SmallCard from "../component-container/SmallCards.jsx";

export default function FindDriverByInfo(){
    const [error, setErrors] = useState({});
    const [data, setData] = useState({
        "name": "",
        "phone": "",
        "driver_id": "",
    });

    const [response,setResponse] = useState([]);

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
        fetchData("POST", "/api/v1/admin/driver-view-info", data)
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
                <h2 className="donor-heading">Find Driver</h2>
                <p className="description-donor-details"></p>
                <div className="take-details-container card" style={{ maxWidth: "90%" }}>
                    <div className="first-area">
                        <div className="input-area-container" style={{ width: "100%" }}>
                            <form className="form-data">
                                <input 
                                    type="text" 
                                    id="name" 
                                    onChange={(e) => getData(e)} 
                                    name="name" 
                                    placeholder="Driver Name" 
                                    required 
                                />
                                {error.name && (<p className="invalid-data">{error.name}</p>)}

                                <input 
                                    type="text" 
                                    id="phone" 
                                    name="phone" 
                                    placeholder="Enter Phone Number" 
                                    onChange={(e) => getData(e)} 
                                    required 
                                />
                                {error.phone && (<p className="invalid-data">{error.phone}</p>)}

                                <input 
                                    type="text" 
                                    id="driver_id" 
                                    name="driver_id" 
                                    placeholder="Driver Id" 
                                    onChange={(e) => getData(e)} 
                                    required 
                                />
                                {error.driver_id && (<p className="invalid-data">{error.driver_id}</p>)}
                            </form>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button className="button-2" onClick={submitData}>Find</button>
                    </div>
                </div>

                <div className="results_container">
                    {response && response.length > 0 && response.map((details, index) => (
                        <SmallCard
                            key={index}
                            driver_id={details.driver_id}
                            name={details.name}
                            email={details.email}
                            mobile_number={details.mobile_number}
                            gender={details.gender.toString()} // Converting gender to string if necessary
                            country={details.country.toString()} // Converting country to string if necessary
                            pincode={details.pincode}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
