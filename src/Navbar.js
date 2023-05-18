import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
  FaList,
 
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul>
            <li className="home-page">
              <Link to="/" data-text="Home">
                <span className="nav-link">
                  <FaHome />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/your-todo-list" data-text=" Todo List">
                <span className="nav-link">
                  <FaList />
                </span>
              </Link>
            </li>

            <li>
              <Link to="/about" data-text="About">
                <span className="nav-link">
                  <FaInfoCircle />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/services" data-text="Services">
                <span className="nav-link">
                  <FaBriefcase />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contacts" data-text="Contacts">
                <span className="nav-link">
                  <FaEnvelope />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="login-navbar">
        <ul>
          <li>
            <Link to="/login">
              {/* <span className="nav-link">
                <FaSignInAlt />
              </span> */}Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
