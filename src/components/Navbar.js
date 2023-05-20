import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsOpen(false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        {isSmallScreen && (
          <div className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
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
                <span className="link-text">Todo List</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/about" data-text="About">
              <span className="nav-link">
                <span className="link-text">About</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/services" data-text="Services">
              <span className="nav-link">
                <span className="link-text">Services</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/contacts" data-text="Contacts">
              <span className="nav-link">
                <span className="link-text">Contacts</span>
              </span>
            </Link>
          </li>
          <li onClick={closeNavbar}>
            <Link to="/login">
              <span className="nav-link" data-text="Login">
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
