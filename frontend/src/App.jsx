import { useState, useEffect } from "react";
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
      <h1>Key Coders Code Challenge</h1>
      <p>{data}</p>
    </>
  );
}

export default App;
