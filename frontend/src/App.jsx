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
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  useEffect(() => {
    console.log("is authed:", isAuthenticated);
  }, [isAuthenticated]);

  // useEffect(() => {

  //   try {
    console.log("is authed:", isAuthenticated);
  }, [isAuthenticated]);

  // useEffect(() => {

  //   try {

  //     const fetchHello = async () => {
  //       const response = await fetch('http://localhost:8080/hello?name=keycoder')
  //       if (!response.ok) {
  //         throw new Error("Response not okay.")
  //       }
  //       const text = await response.text();
  //       setData(text)
  //     }
  //     fetchHello();
  //     const fetchHello = async () => {
  //       const response = await fetch('http://localhost:8080/hello?name=keycoder')
  //       if (!response.ok) {
  //         throw new Error("Response not okay.")
  //       }
  //       const text = await response.text();
  //       setData(text)
  //     }
  //     fetchHello();

  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }, [])

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
