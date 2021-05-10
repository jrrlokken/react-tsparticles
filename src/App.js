import React, { useState, useEffect } from "react";
import "./App.css";
import Background from "./components/Background";
import { useLocation } from "react-router-dom";

function App() {
  // const location = useLocation();
  // const [entered, setEntered] = useState(false);

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setEntered(false);
  //   } else {
  //     setEntered(true);
  //   }
  // }, [location.pathname]);

  return (
    <div className="App">
      <Background />
    </div>
  );
}

export default App;
