import styles from "./Sidebar.module.css";
import NavItem from "./NavItem";
import DashboardSVG from "./icons/DashboardSVG";
import TemplateBuilder from "./icons/TemplateBuilderSVG";
import RequestsStatusSVG from "./icons/RequestsStatusSVG";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className={styles.sidebar} role="navigation">
            <NavItem icon={<DashboardSVG width={50} height={50} />} to="/">
                Dashboard
            </NavItem>
            <NavItem icon={<TemplateBuilder />} to="/template-builder">Template Builder</NavItem>
            <NavItem icon={<RequestsStatusSVG />} to="/requests-status">Requests Status</NavItem>
        </div>
    );
};

export default Sidebar;
