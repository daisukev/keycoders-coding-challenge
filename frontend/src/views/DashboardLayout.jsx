import { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Sidebar></Sidebar>
      <div className={styles.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
