import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const PageTemplate = () => {
    return (
            <div className="page-container">
                <Navbar />
                <Outlet />
            </div>

    )
   
}