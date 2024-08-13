import { Outlet } from "react-router-dom";
import InfoSidebar from "../components/InfoSidebar";
import "../css/division-layout.css"
import { MobileNavMenu } from "../components/Mobile_NavMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
export default function TwoDivisionDriver(){
    const share=async ()=>{
        const shareData = {
            title: "Join Us in Saving Lives: Register as a Donor Today!",
            text: "Together, we can make a difference in emergencies. Your contribution could mean the world to someone facing a crisis. ",
            url: "https://blooddonorapi.shivamkrthakur.in/",
        };
        try{
            await navigator.share(shareData);
        }
        catch(err){
            alert("cannot share this page")
        }
    }

    return (
        <>
            <div className="mainarea">
                <div className="sidebar-info">
                    <InfoSidebar />
                </div>
                <div className="mainarea-info">
                    <div className="mobile-header-main-container">
                        <div className="mobile-header-container">
                            <img src="image/logo-white.png"/>
                            <p>Bluebeads</p>
                        </div>
                        <FontAwesomeIcon icon={faShareNodes} className="share-icon-mobile" onClick={share} />
                    </div>
                    <Outlet/>
                    <MobileNavMenu/>
                </div>
            </div>
        </>
    )
}