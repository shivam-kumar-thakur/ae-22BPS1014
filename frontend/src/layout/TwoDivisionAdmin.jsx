import { Outlet } from "react-router-dom";
import InfoSidebar from "../components/InfoSidebar";
import "../css/division-layout.css"
import { MobileNavMenu } from "../components/Mobile_NavMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
export default function TwoDivisionAdmin(){

    return (
        <>
            <div className="mainarea">
                <div className="sidebar-info">
                    <InfoSidebar />
                </div>
                <div className="mainarea-info">
                    <div className="mobile-header-main-container">
                        <div className="mobile-header-container">
                            <img src="/image/logo-white.png"/>
                            <p>Bluebeads</p>
                        </div>
                    </div>
                    <Outlet/>
                    <MobileNavMenu/>
                </div>
            </div>
        </>
    )
}