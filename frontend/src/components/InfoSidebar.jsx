import "../css/info-sidebar.css";
import { useNavigate } from "react-router-dom";
import { startTransition, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/apiFetching";
import { clear } from "../appRedux/bloodDonorFeatures/bloodFeatures.js";
import { storeUriLocation } from "../appRedux/bloodDonorFeatures/navFeatures.js";

export default function InfoSidebar() {

    const dispatch = useDispatch();
    const selectNavLocation = useSelector((state) => state.navMenu.uri);
    const [widthChange, setWidthChange] = useState(window.innerWidth > 768 ? "large" : "small");

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setWidthChange("small");
            } else {
                setWidthChange("large");
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        let last_url = get_set_last_uri();
        dispatch(storeUriLocation({ "uri": last_url }));
        makeTransition(last_url);
    }, [widthChange,dispatch]);


    const validUri = ["","mapping", "booking", "database","driver","vehicle"];
    const mappingSubUri=[];
    const bookingSubUri=[];
    const databaseSubUri=[];
    const driverSubUri=[];
    const vehicleSubUri=[];

    function get_set_last_uri() {
        let last_url = "mapping";
        let location = window.location.href.split("/");
            let last_uri_temp = location[location.length - 1];

            if (validUri.includes(last_uri_temp)) {
                if(last_uri_temp==="" || last_uri_temp==="mapping" ){
                    return last_url;
                }
                last_url = last_uri_temp;
                return last_url;
            }

            if(mappingSubUri.includes(last_uri_temp)){
                return last_url;
            }
            if(bookingSubUri.includes(last_uri_temp)){
                last_url="booking";
                return last_url;
            }

            if(databaseSubUri.includes(last_uri_temp)){
                last_url="database";
                return last_url;
            }
            if(driverSubUri.includes(last_uri_temp)){
                last_url="driver";
                return last_url;
            }
            if(vehicleSubUri.includes(last_uri_temp)){
                last_url="vehicle";
                return last_url;
            }

            return last_url;
    }

    const signout = (e) => {
        e.preventDefault();
        dispatch(clear());
        fetchData("GET", "api/v1/general/signout")
            .then(() => {
                localStorage.setItem("userLogged", false);
                navigate("/login");
            })
            .catch(() => {
                alert("something went wrong");
                localStorage.setItem("userLogged", false);
                navigate("/login");
            });
    };

    const makeTransition = (uri_ip) => {

        if(validUri.includes(selectNavLocation)){
            const oldElement = document.getElementById(selectNavLocation);
            oldElement?.classList.remove(selectNavLocation);
        }

        if(mappingSubUri.includes(selectNavLocation)){
            const oldElement = document.getElementById("mapping");
            oldElement?.classList.remove("selected");
        }

        if(bookingSubUri.includes(selectNavLocation)){
            const oldElement = document.getElementById("booking");
            oldElement?.classList.remove("selected");
        }
        if(databaseSubUri.includes(selectNavLocation)){
            const oldElement = document.getElementById("database");
            oldElement?.classList.remove("selected");
        }
        if(driverSubUri.includes(selectNavLocation)){
            const oldElement = document.getElementById("driver");
            oldElement?.classList.remove("selected");
        }
        if(vehicleSubUri.includes(selectNavLocation)){
            const oldElement = document.getElementById("vehicle");
            oldElement?.classList.remove("selected");
        }

        const oldElement = document.getElementById(selectNavLocation);

        const newElement = document.getElementById(uri_ip);
        oldElement?.classList.remove("selected");
        newElement?.classList.add("selected");

        if (uri_ip !== "mapping" && uri_ip !== "") {
            dispatch(storeUriLocation({ "uri": uri_ip }));
            startTransition(() => navigate(`/admin/${uri_ip}`));
        } else {
            dispatch(storeUriLocation({ "uri": "mapping" }));
            startTransition(() => navigate("/admin/mapping"));
        }
    };

    return (
        <div className={`info-sidebar-main-container ${widthChange === 'large' ? '' : 'hidden'}`}>
            <div className="info-section">
                <div className="logo-container-info">
                    <img src="/image/logo-white.png" className="image-logo-container" alt="Logo" />
                </div>
                <p className="name-website">Bluebeads</p>
            </div>
            <hr />
            <div className="options">
                <div className="option-unit" id="mapping" onClick={() => makeTransition("mapping")}>
                    <div className="logo-option-unit">
                        <i className="fa-solid fa-network-wired"></i> {/* Network-wired icon for Mapping */}
                    </div>
                    <p className="option-name">Mapping</p>
                </div>
                <div className="option-unit" id="booking" onClick={() => makeTransition("booking")}>
                    <div className="logo-option-unit">
                        <i className="fa-solid fa-calendar-check"></i> {/* Calendar-check icon for Bookings */}
                    </div>
                    <p className="option-name">Bookings</p>
                </div>
                <div className="option-unit" id="database" onClick={() => makeTransition("database")}>
                    <div className="logo-option-unit">
                        <i className="fa-solid fa-database"></i> {/* Database icon for Database */}
                    </div>
                    <p className="option-name">Database</p>
                </div>
                <div className="option-unit" id="driver" onClick={() => makeTransition("driver")}>
                    <div className="logo-option-unit">
                        <i className="fa-solid fa-user-tie"></i> {/* User-tie icon for Driver */}
                    </div>
                    <p className="option-name">Driver</p>
                </div>
                <div className="option-unit" id="vehicle" onClick={() => makeTransition("vehicle")}>
                    <div className="logo-option-unit">
                        <i className="fa-solid fa-car"></i> {/* Car icon for Vehicle */}
                    </div>
                    <p className="option-name">Vehicle</p>
                </div>
                <div className="option-unit" id="logout" onClick={signout}>
                    <div className="logo-option-unit">
                        <i className="fa-solid fa-right-from-bracket"></i> {/* Right-from-bracket icon for Logout */}
                    </div>
                    <p className="option-name">Logout</p>
                </div>
            </div>
            <div className="style-inset">
                <hr />
                <div className="share-options">
                    <h3 className="description-share">Manage all bookings with one place !!</h3>
                </div>
            </div>
        </div>
    );
    
}
