/* eslint-disable react/prop-types */
import { createContext } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export const AuthContext = createContext(null)

function AuthProvider({ children }) {
    const checkAuth = () => {
        const token = localStorage.getItem('jwt')
        return !!token
    }
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(checkAuth())
    const navigate = useNavigate()

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'jwt' && !event.newValue) {
                setIsAuthenticated(false);
                navigate('/login')
            }
            const userLocalStorage = localStorage.getItem('jwt')
            if (userLocalStorage) {
                setUser(userLocalStorage)
                setIsAuthenticated(checkAuth())
            }
        }
        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }

    }, [navigate, user])

    const logout = () => {
        localStorage.removeItem('userData')
        setIsAuthenticated(false)
        navigate('/login')
    }


    return (<AuthContext.Provider value={{ isAuthenticated, checkAuth, logout }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;