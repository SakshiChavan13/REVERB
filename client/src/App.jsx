import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(0);

  const handleClick = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "secret",
        device_name: "mac_intel",
      }),
    });

    const data = response.json();
    console.log(data);
    setData(data);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
