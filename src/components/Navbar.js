import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
  FaList,
  FaSignInAlt,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`line ${isOpen ? "line-active" : ""}`}></div>
          <div className={`line ${isOpen ? "line-active" : ""}`}></div>
          <div className={`line ${isOpen ? "line-active" : ""}`}></div>
        </div>
        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li className="home-page" onClick={closeNavbar}>
            <Link to="/" data-text="Home">
              <span className="nav-link">
                <FaHome />
                <span className="link-text">Home</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/your-todo-list" data-text="Todo List">
              <span className="nav-link">
                <FaList />
                <span className="link-text">Todo List</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/about" data-text="About">
              <span className="nav-link">
                <FaInfoCircle />
                <span className="link-text">About</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/services" data-text="Services">
              <span className="nav-link">
                <FaBriefcase />
                <span className="link-text">Services</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/contacts" data-text="Contacts">
              <span className="nav-link">
                <FaEnvelope />
                <span className="link-text">Contacts</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/login">
              <span className="nav-link" data-text="Login">
                <FaSignInAlt />
                <span className="link-text">Login</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
