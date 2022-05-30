import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FileUploadPage from "./pages/FileUpload.page";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.value));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>{data}</h3>
      </header>
      <>
      <FileUploadPage/>
      </>
    </div>
  );
}

export default App;
