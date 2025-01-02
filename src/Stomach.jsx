import React, { useContext } from "react";
import { nameContext } from "./App";

const Stomach = () => {
  const { value, toggleBackground, isBlackBackground } = useContext(nameContext);

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: isBlackBackground ? "white" : "blue",
    color: isBlackBackground ? "blue" : "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s, color 0.3s",
  };

    return (
        <div>
            <center>
                <h1>Stomach</h1>
                <button style={buttonStyle} onClick={toggleBackground}>
                    CLICK
                </button>
            </center>

        </div>
  );
};

export default Stomach;
