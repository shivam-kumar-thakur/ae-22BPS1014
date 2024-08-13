import { useNavigate } from "react-router-dom";
import "../css/mobile-navmenu.css";
import { startTransition, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUriLocation } from "../appRedux/bloodDonorFeatures/navFeatures";

export const MobileNavMenu = () => {

    const dispatch = useDispatch();
    const selectNavLocation = useSelector((state) => state.navMenu.uri);
    const [widthChange, setWidthChange] = useState(window.innerWidth <= 768 ? "small" : "large");

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setWidthChange("small");
            } else {
                setWidthChange("large");
            }
        };
        
        // make 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    
    const setClickEffect = (id_div) => {
        const oldSelected = document.querySelector(".mobile-menu-selected");
        oldSelected?.classList.remove("mobile-menu-selected");
        document.getElementById(id_div)?.getElementsByClassName("nav-mobile-item-icon")[0].classList.add("mobile-menu-selected");
    };
    
    const validUri = ["","mapping", "booking", "database","driver","vehicle"];
        const mappingSubUri=[];
        const bookingSubUri=[];
        const databaseSubUri=[];
        const driverSubUri=[];
        const vehicleSubUri=[];

    const mapit=(url)=>{
        if(validUri.includes(url)){
            let mappedurl=`mobile-${url}`;
            return mappedurl;
        } 
        if(mappingSubUri.includes(url)) return "mobile-mapping";
        if(bookingSubUri.includes(url)) return "mobile-booking";
        if(databaseSubUri.includes(url)) return "mobile-database";
        if(driverSubUri.includes(url)) return "mobile-driver";
        if(vehicleSubUri.includes(url)) return "mobile-vehicle";
    }

    useEffect(() => {
        // set window size
        if (window.innerWidth <= 768) {
            setWidthChange("small");
        }
        if (window.innerWidth > 768) {
            setWidthChange("large");
        }

        let last_uri = get_set_last_uri();
        setClickEffect(mapit(last_uri));
        dispatch(storeUriLocation({ "uri": last_uri }));
    }, [widthChange]);

    function get_set_last_uri() {
        let last_url = "mapping";
        let location = window.location.href.split("/");
        if (location[location.length - 1] !== "") {
            let last_uri_temp = location[location.length - 1];
            if (last_uri_temp !== "") {
                last_url = last_uri_temp;
            }
        }
        return last_url;
    }

    function makeTransition(event) {
        const navMenu = {
            "mobile-mapping": "mapping",
            "mobile-bookings": "booking",
            "mobile-database": "database",
            "mobile-driver": "driver",
            "mobile-vehicle": "vehicle",
        };
        const idDiv = event.currentTarget.id;
        startTransition(() => navigate(`/admin/${navMenu[idDiv]}`));
        dispatch(storeUriLocation({ "uri": navMenu[idDiv] }));
        setClickEffect(idDiv);
    }

    return (
        <div className={`mobile-nav-container ${widthChange === 'small' ? '' : 'hidden'}`}>
            <div className="nav-mobile-item" id="mobile-mapping" onClick={makeTransition}>
                <div className="nav-mobile-item-icon">
                    <i className="fa-solid fa-network-wired"></i> {/* Network-wired icon for Mapping */}
                </div>
                <p className="nav-mobile-item-name">Mapping</p>
            </div>
            <div className="nav-mobile-item" id="mobile-bookings" onClick={makeTransition}>
                <div className="nav-mobile-item-icon">
                    <i className="fa-solid fa-calendar-check"></i> {/* Calendar-check icon for Bookings */}
                </div>
                <p className="nav-mobile-item-name">Bookings</p>
            </div>
            <div className="nav-mobile-item" id="mobile-database" onClick={makeTransition}>
                <div className="nav-mobile-item-icon">
                    <i className="fa-solid fa-database"></i> {/* Database icon for Database */}
                </div>
                <p className="nav-mobile-item-name">Database</p>
            </div>
            <div className="nav-mobile-item" id="mobile-driver" onClick={makeTransition}>
                <div className="nav-mobile-item-icon">
                    <i className="fa-solid fa-user-tie"></i> {/* User-tie icon for Driver */}
                </div>
                <p className="nav-mobile-item-name">Driver</p>
            </div>
            <div className="nav-mobile-item" id="mobile-vehicle" onClick={makeTransition}>
                <div className="nav-mobile-item-icon">
                    <i className="fa-solid fa-car"></i> {/* Car icon for Vehicle */}
                </div>
                <p className="nav-mobile-item-name">Vehicle</p>
            </div>
        </div>
    );
    
    
}
