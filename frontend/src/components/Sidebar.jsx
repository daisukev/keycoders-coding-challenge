import styles from "./Sidebar.module.css";
import NavItem from "./NavItem";
import DashboardSVG from "./icons/DashboardSVG";
import TemplateBuilder from "./icons/TemplateBuilderSVG";
import RequestsStatusSVG from "./icons/RequestsStatusSVG";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.sidebar} role="navigation">
      <NavItem icon={<DashboardSVG width={50} height={50} />} to="/">
        Dashboard
      </NavItem>
      <NavItem
        icon={<TemplateBuilder width={50} height={50} />}
        to="/template-builder"
      >
        Template Builder
      </NavItem>
      <NavItem
        icon={<RequestsStatusSVG width={50} height={50} />}
        to="/requests-status"
      >
        Requests Status
      </NavItem>
    </div>
  );
};

export default Sidebar;
