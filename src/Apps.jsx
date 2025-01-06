import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";

function Apps() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default Apps;
