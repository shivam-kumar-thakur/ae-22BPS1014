import { Outlet } from "react-router-dom"

export const AuthenticatedMainPageView=()=>{
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer/> */}
            </>
    )
}