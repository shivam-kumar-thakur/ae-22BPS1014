import "../css/person-details.css";
import "../css/button-3.css";
import "../css/request-details.css";
import PropTypes from "prop-types";

export default function SmallCard({ driver_id, name, email, mobile_number, gender, country, pincode }) {
    return (
        <div className="smallcard-details-container-card">
            <div className="smallcard-details-container-card-heading card">
                <div className="smallcard-data-details">
                    <h3>Driver Details :</h3>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Driver Id : {driver_id}</p>
                    <p>Number : {mobile_number}</p>
                    <p>Gender : {gender}</p>
                    <p>Pincode : {pincode}, {country}</p>
                </div>
            </div>                
        </div>
    );
}

SmallCard.propTypes = {
    driver_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile_number: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
};
