/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { baseUrl } from "./base";

export const AuthContext = createContext(null);

/* TODO: invalidate bad JWTS */

function AuthProvider({ children }) {
  const checkAuth = () => {
    const token = localStorage.getItem("jwt");
    return !!token;
  };
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "jwt" && !event.newValue) {
        setIsAuthenticated(false);
        navigate("/login");
      }
      const userLocalStorage = localStorage.getItem("jwt");
      if (userLocalStorage) {
        setUser(userLocalStorage);
        setIsAuthenticated(checkAuth());
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate, user]);

  const logout = () => {
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const login = async (login, password) => {
    // localStorage.setItem('jwt', 'test')
    // setIsAuthenticated(checkAuth)
    // navigate('/')

    const form = {
      login: login,
      password: password,
    };
    const res = await fetch(`${baseUrl}/api/login`, {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const res = await fetch(`${baseUrl}/api/token`, {
    //     method: 'get'
    // });
    if (!res.ok) {
      throw new Error("Response not Okay.");
    } else {
      const json = await res.json();
      localStorage.setItem("jwt", json.jwt);
      setIsAuthenticated(checkAuth);
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
