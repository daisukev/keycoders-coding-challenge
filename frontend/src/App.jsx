import { useState, useEffect } from "react";
import LoginPage from "./views/LoginPage";
import './App.css'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {

    try {

      const fetchHello = async () => {
        const response = await fetch('http://localhost:8080/hello?name=keycoder')
        if (!response.ok) {
          throw new Error("Response not okay.")
        }
        const text = await response.text();
        setData(text)
      }
      fetchHello();

    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
