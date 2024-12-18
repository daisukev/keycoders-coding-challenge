import styles from "./WorkList.module.css";
const WorkList = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

export default WorkList;
