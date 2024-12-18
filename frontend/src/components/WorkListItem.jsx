import { NavLink } from "react-router";
import ArrowRightCircleSVG from "./icons/ArrowRightCircledSVG";
import styles from "./WorkListItem.module.css";
const WorkListItem = ({ to, children, ...props }) => {
  return (
    <NavLink to={to} className={styles.workListItem} {...props}>
      {children}
      <hr className="separator" />
    </NavLink>
  );
};

export default WorkListItem;
