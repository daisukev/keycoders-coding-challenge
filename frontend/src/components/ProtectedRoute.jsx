import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
