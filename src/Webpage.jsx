import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Webpage.css";

function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

function Webpage() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo-section">
            <img src="logo.png" alt="Logo" className="logo" />
            <span className="logo-text">Lego</span>
          </div>
          <nav className="nav">
            <ul className="nav-links">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
export default Webpage;


