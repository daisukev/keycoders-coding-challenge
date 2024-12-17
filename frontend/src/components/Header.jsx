import nakupunaLogo from "../assets/nakupuna-color-logo.png";
import styles from "./Header.module.css";
import AvatarSVG from "./icons/AvatarSVG";
import NotificationSVG from "./icons/NotificationSVG";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <img className={nakupunaLogo} src={nakupunaLogo} alt="Nakupuna logo" />
      </NavLink>
      <div className={styles.sideNavigation} role="navigation">
        <NavLink to="/notifications" role="menuitem">
          <NotificationSVG height={50} width={50} />
        </NavLink>
        <NavLink to="/user/" title="User" role="menuitem">
          <AvatarSVG height={50} width={50} />
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
