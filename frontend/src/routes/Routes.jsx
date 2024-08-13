import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom"
import { lazy,Suspense } from "react";


// layout import
const EmptyLayout = lazy(() => import("../layout/empyt.layout.jsx"));
import DriverLayout from "../layout/DriverLayout.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";
import TwoDivisionAdmin from "../layout/TwoDivisionAdmin.jsx";
import TwoDivisionDriver from "../layout/TwoDivisionDriver.jsx";


// pages
import BookingPage from "../pages/BookingPage.jsx";
import DatabasePage from "../pages/Databasepage.jsx";
import DriverPage from "../pages/DriverPage.jsx";
import MappingPage from "../pages/Mappingpage.jsx";
import Vehiclepage from "../pages/Vehiclepage.jsx";

import AddDriver from "../pages/AddDriver.jsx";
import AddAdmin from "../pages/AddAdmin.jsx";
import AddVehicle from "../pages/AddVehicle.jsx";
import ManualMapping from "../pages/Manualmapping.jsx";
import AutomatedMapping from "../pages/AutomatedMapping.jsx";
import FindDriverByInfo from "../pages/FindDriverByInfo.jsx";
import FindDriverByLoc from "../pages/FindDriverByLoc.jsx";
import VehicleDetails from "../pages/VehicleDetails.jsx";
import BookingDetails from "../pages/BookingsDetails.jsx";

// individual pages import
const Login = lazy(() => import("../individual-page/login/Login.jsx"));


export const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<EmptyLayout />}>
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/driver" element={<DriverLayout/>}>
            <Route path="" element={<TwoDivisionDriver />}>
                <Route path="" element={<Home_Page/>}></Route>
                
            </Route>
        </Route> */}
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="" element={<TwoDivisionAdmin />}>
                <Route path="" element={<MappingPage/>}></Route>
                <Route path="mapping" element={<MappingPage/>}></Route>
                <Route path="booking" element={<BookingPage/>}></Route>
                <Route path="database" element={<DatabasePage/>}> </Route>
                <Route path="driver" element={<DriverPage/>}></Route>
                <Route path="vehicle" element={<Vehiclepage/>}></Route>
                <Route path="add-driver" element={<AddDriver/>}></Route>
                <Route path="add-admin" element={<AddAdmin/>}></Route>
                <Route path="add-vehicle" element={<AddVehicle/>}></Route>
                <Route path="manual-mapping" element={<ManualMapping/>}></Route>
                <Route path="ticket-mapping" element={<AutomatedMapping/>}></Route>
                <Route path="search-driver-info" element={<FindDriverByInfo/>}></Route>
                <Route path="search-driver-location" element={<FindDriverByLoc/>}></Route>
                <Route path="vehicle-details" element={<VehicleDetails/>}></Route>
                <Route path="booking-details" element={<BookingDetails/>}></Route>
            </Route>
            
        </Route>
        <Route path="*" element={<p>not found</p>}></Route>
    </Route>
))
