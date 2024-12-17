import { NavLink } from "react-router";
import AvatarSVG from "./icons/AvatarSVG.jsx";
import NotificationSVG from "./icons/NotificationSVG.jsx";
import nakupunaLogo from "../assets/nakupuna-color-logo.png";
import styles from "./Header.module.css";
import NavItem from "./NavItem.jsx";
const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to="/">
                <img className={nakupunaLogo} src={nakupunaLogo} alt="Nakupuna logo" />
            </NavLink>
            <div className={styles.sideNavigation}>

                <NavItem
                    icon={
                        <NotificationSVG />} >

                </NavItem>
                <AvatarSVG />
            </div>
        </div>
    );
};
export default Header;
