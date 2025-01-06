import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
//app. Jsx


/*import React, { useState, createContext } from "react";
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
export default App;*/