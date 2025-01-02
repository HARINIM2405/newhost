
import React, { useState, createContext } from "react";
import Hen from "./Hen";
import "./App.css";

export let nameContext = createContext();

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleBackground = () => {
    setIsBlackBackground((prev) => !prev);
  };

  const appStyle = {
    height: "100vh",
    backgroundColor: isBlackBackground ? "black" : "white",
    color: isBlackBackground ? "white" : "black",
    transition: "background-color 0.5s, color 0.5s",
  };

  return (
    <nameContext.Provider value={{ value: "water", toggleBackground, isBlackBackground }}>
      <div style={appStyle}>
        <Hen />
      </div>
    </nameContext.Provider>
  );
}
export default App;