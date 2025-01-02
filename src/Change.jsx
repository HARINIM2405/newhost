import React, { useState } from 'react';
import "./Change.css";

function  Change() {
    
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  // Array of image URLs (ensure no spaces in the filenames)
  const images = [
    "img1.jpeg",  // Updated image name
    "img2.jpeg",  // Updated image name
    "img3.jpeg",  // Updated image name
     
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Update image index based on input length
    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Dynamic Images on Input</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Change;
