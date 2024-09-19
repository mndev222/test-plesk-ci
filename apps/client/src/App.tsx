import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("api")
      .then((response) => response.text())
      .then((responseText) => setText(responseText));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{text}</h1>
      <h2>Github test</h2>
      <h3>github web hook added from plesk</h3>
      <h3>test 3213123123123</h3>
      <h1>19-09-2024 test</h1>
      <h1>Test github:push gdy na plesku jest coś zablokowane?</h1>
      <h1>teteeateaetaeatteate</h1>
    </>
  );
}

export default App;
