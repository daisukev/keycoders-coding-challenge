import { NavLink } from "react-router";
import AvatarSVG from "../components/AvatarSVG.jsx";
import nakupunaLogo from "../assets/nakupuna-color-logo.png";
import styles from "./Header.module.css";
const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to="/">
                <img
                    className={nakupunaLogo}
                    src={nakupunaLogo}
                    alt="Nakupuna logo"
                    height={85}
                />
            </NavLink>
            <AvatarSVG />
        </div>
    );
};
export default Header;
