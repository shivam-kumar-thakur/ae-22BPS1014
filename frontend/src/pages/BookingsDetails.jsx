import { useNavigate } from "react-router-dom";
import "../css/requests-page.css";
import "../style/bookings.css"
import { useEffect, useState } from "react";
import { fetchData } from "../utils/apiFetching";

export default function BookingDetails() {
    const navigate = useNavigate();
    const [response, setData] = useState(null);

    useEffect(() => {
        fetchData("GET", "/api/v1/admin/bookings-total")
            .then((res) => {
                if (!res) {
                    alert("Something went wrong. Please check the input");
                } else {
                    setData(res.responseData);
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    }, [navigate]);

    return (
        <div className="all-requests">
            <h3 className="all-requests-heading">Booking Details:</h3>
            <br />
            {
                !response && (
                    <p>Fetching...</p>
                )
            }
            {
                response && response.length === 0 && (
                    <p>No records found.</p>
                )
            }
            {
                response && response.length !== 0 && (
                    <div className="booking-container">
                        {response.map((booking, index) => (
                            <div key={index} className="card-booking">
                                <p><strong>Driver ID:</strong> {booking.driver_id || "N/A"}</p>
                                <p><strong>Vehicle ID:</strong> {booking.vehicle_id}</p>
                                <p><strong>Start Date/Time:</strong> {new Date(booking.start_date_time).toLocaleString()}</p>
                                <p><strong>End Date/Time:</strong> {new Date(booking.end_date_time).toLocaleString()}</p>
                                <p><strong>Status:</strong> {booking.status === 1 ? "Completed" : "Pending"}</p>
                                <p><strong>Created At:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
                                <p><strong>Updated At:</strong> {new Date(booking.updatedAt).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}
