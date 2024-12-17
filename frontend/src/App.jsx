import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import LoginPage from "./views/LoginPage";
import DashboardLayout from "./views/DashboardLayout";
import DashboardHome from "./views/DashboardHome";
import TemplateBuilder from "./views/TemplateBuilder";
import RequestsStatus from "./views/RequestsStatus";
import "./App.css";
import { AuthContext } from "./utils/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    console.log("is authed:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <div className="viewportContainer">
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="/template-builder" element={<TemplateBuilder />} />
              <Route path="/requests-status" element={<RequestsStatus />} />
              <Route path="/*" element={<DashboardHome />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
