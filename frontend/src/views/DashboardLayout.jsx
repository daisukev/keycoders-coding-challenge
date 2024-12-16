import { useContext } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const DashboardLayout = () => {
    return (
        <div><Header />
            <Outlet></Outlet>
        </div>)
}

export default DashboardLayout;