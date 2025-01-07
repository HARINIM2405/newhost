import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css";

const Createuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/user/create", { name, email, address })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-user-container">
      <h1 className="create-user-title">Create User</h1>
      <form className="create-user-form" onSubmit={submit}>
        <label className="form-label">Enter your name:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="form-label">Enter your email:</label>
        <input
          className="form-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label">Enter your address:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createuser;
