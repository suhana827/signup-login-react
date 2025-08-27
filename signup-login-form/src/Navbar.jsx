import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="myClass">
    <nav className="navBar">
      <Link to="/">
        Sign Up
      </Link>
      <Link to="/login">Login</Link>
    </nav>
    </div>
  );
}

export default Navbar;
