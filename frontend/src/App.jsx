import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import LoginPage from "./views/LoginPage";
import DashboardLayout from "./views/DashboardLayout";
import DashboardHome from "./views/DashboardHome";
import TemplateBuilder from "./views/TemplateBuilder";
import TemplateEditor from "./views/TemplateEditor";
import RequestsStatus from "./views/RequestsStatus";
import "./App.css";
import { AuthContext } from "./utils/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Survey from "./views/Survey";
import SurveyForm from "./components/Survey/SurveyForm";

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
              <Route
                path="/templates/new"
                element={<TemplateEditor isNew={true} />}
              />
              <Route path="/requests-status" element={<RequestsStatus />} />
              <Route path="/surveys" element={<Survey />}>
                <Route path="/surveys/:surveyId" element={<SurveyForm />} />
              </Route>
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
