import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const itemId = 42; // Example ID
    return (
        <div>
            <h1>Home Component</h1>
            <Link to={`/details/${itemId}`}>Go to Details</Link>
        </div>
    );
};

export default Home;
//Home.jsx

/*import React from 'react';
import './App.css';

function Home() {
  return (
    <div>
        <h1>
            Home Page
        </h1>
    </div>
   
  );
}

export default Home;
*/