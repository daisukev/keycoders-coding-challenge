import { NavLink } from "react-router";
import styles from "./NavItem.module.css";

const NavItem = ({ icon, children, ...navLinkprops }) => {
  const title = children;
  return (
    <NavLink
      className={styles.navItem}
      role="menuitem"
      title={title}
      {...navLinkprops}
    >
      {icon}
      <span className={styles.navText}>{children}</span>
    </NavLink>
  );
};

export default NavItem;
