import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul>
          <li className="home-page">
            <Link to="/">
              <FaHome />
              <span className="nav-link">HOME</span>
            </Link>
          </li>
          <li className="login-page">
            <Link to="/login">Login</Link>
          </li>
          <li className="todo-page">
            <Link to="/todo">YOUR-LIST</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
