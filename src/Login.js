import React, { useState } from "react";
import "./login.css";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeIcon = () => (
  <Link to="/">
    <FaTasks className="home-icon-login" />
  </Link>
);

const RegisterIcon = () => (
  <Link to="/todo">
    <p className="register-icon-login" > Proceed</p>
  </Link>
);

const Login = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="login-container">
      <HomeIcon />
      <h2>Create an Account</h2>
      {submitted ? (
        <p>Thank you for submitting your information. <RegisterIcon/></p>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          <br />
          <label htmlFor="name">First name..</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="First Name"
            className="first-name-input"
            required
          />
          <br />
          <label htmlFor="surname">Second name..</label>

          <input
            type="text"
            name="surname"
            placeholder="Last Name"
            className="last-name-input"
          />
          <br />
          <label htmlFor="username">Create username..</label>

          <input
            type="text"
            name="username"
            placeholder="Create username..."
            className="user-name-input"
          />
          <br />
          <label htmlFor="password">Create password..</label>

          <input
            type="password"
            name="password"
            placeholder="Create password..."
            className="password-input"
          />
          <br />
          <br />
          <div className="button-group">
            <button type="submit" className="proceed-button">
              Submit
            </button>
            <div className="button-separator" />
            {/* <a href="/" className="home-cta-x">
              Home
            </a> */}
            <div className="button-separator" />
            {/* <a href="/todo" className="home-cta-x">
              Proceed
            </a> */}
          </div>
        </form>
      )}
      <br />
      <p>
        {/* Welcome we assure you the best experience  */}
      </p>
      <br />
      <p>
        
        {/* By creating an account, you agree to our{" "}
        <a href="/terms">terms of use</a> and{" "}
        <a href="/privacy">privacy policy</a>. */}
      </p>
    </div>
  );
};

export default Login;
