import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateUser.css";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // Fetch existing user data when component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log("Failed to fetch user data:", err);
      });
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/user/update/${id}`, { name, email, address })
      .then((result) => {
        alert("User updated successfully");
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Failed to update user:", err);
      });
  };

  return (
    <div className="update-user-container">
      <h1 className="update-user-title">Update User</h1>
      <form onSubmit={updateUser} className="update-user-form">
        <div className="form-group">
          <label htmlFor="name">Enter your name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter your email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Enter your address:</label>
          <input
            id="address"
            type="text"
            className="form-control"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
