import React from "react";
import {
  FaTasks,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaUser,
  FaDollarSign,
  FaCheck,
} from "react-icons/fa";
import "./App.css";
import backgroundImage from "./background.jpg";
import actualbackground from "./actualbackground.jpg"
// import notebook from "./notebook.jpg";
import Navbar from "./Navbar";
import assisting from "./assisting.jpg"

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${actualbackground})` }}
    >
      <div className="header-container">
        <div className="home-header">
          <FaTasks className="home-icon" />
          <h1 className="app-header">Task-lister</h1>
        </div>
        <Navbar />
      </div>

      <div className="home-message">
        <div className="message-content">
          <p className="h3-home-message">
            <span className="span-task">Task-lister:</span> <br /> The ultimate
            task management app that keeps you organized and on top of your
            tasks. Perfect for professionals, students, and anyone with a busy
            schedule. Try it today and never forget a task again!
          </p>
          <a href="/login" className="home-cta">
            Get Started
          </a>
        </div>
        <div className="notebook-image-container">
          <img
            src={backgroundImage}
            alt="to-do-list"
            className="back-ground-image"
          />
        </div>
        {/* <h3 className="h3-task-lister">Task-Lister was bulit specifically for you</h3> */}
      </div>

      <img src={assisting} alt="task-list" className="assisting" />
      <div className="p3">
        <h3 className="h3-task-lister">
          {/* <img src={assisting} alt="task-list" className="assisting"/> */}
          <br />A Personalized Solution for Efficient Time Management
        </h3>
        <p className="paragraph">
          <i className="italic"> <FaDollarSign/>"Time is money."</i>
          <br />
          
          Stay organized and maximize your productivity with Task-Lister. Our
          dedicated platform allows you to conveniently access and manage your
          daily plans from the comfort of your own space.
        </p>
      </div>
      <div className="home-features">
        <h2 className="features-heading">Features</h2>
        <ul className="features-list">
          <li>
            <FaCheck /> Customizable task categories
          </li>
          <li>
            <FaCheck /> Easy to use interface
          </li>
          <li>
            <FaCheck /> Set due dates and reminders
          </li>
        </ul>
      </div>

      <div className="home-testimonials">
        <h2 className="testimonials-heading">Testimonials</h2>
        <div className="testimonial">
          <p>
            <FaUser /> " <span>Task-lister</span> has completely changed the way
            I manage my work. It's so easy to use and has helped me stay on top
            of everything. I highly recommend it!"
          </p>
          <p>- John Killu, Marketing Manager</p>
        </div>
        <div className="testimonial">
          <p>
            <FaUser /> "I love <span>Task-lister!</span> It's been a lifesaver
            for me as a freelancer. I can easily keep track of all my projects
            and deadlines in one place."
          </p>
          <p>- Jane Smith, Freelance Writer</p>
        </div>
      </div>

      <footer className="footer-container">
        <div className="home-social-icons">
          <ul>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
              data-tooltip="Instagram"
            >
              <FaInstagram className="home-social-icon-instagram" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip="LinkedIn"
            >
              <FaLinkedin className="home-social-icon-linkedin" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=0717084324"
              target="https://web.whatsapp.com/"
              rel="noopener noreferrer"
              data-tooltip="Whatsapp"
            >
              <FaWhatsapp className="home-social-icon-whatsapp" />
            </a>
            <a
              href="https://github.com/"
              target="https://github.com/mwendwamark"
              rel="noopener noreferrer"
              data-tooltip="Github"
            >
              <FaGithub className="home-social-icon-github" />
            </a>
          </ul>
        </div>
        <p className="privacy-policy and-terms">
         
          <p><a href="/terms" className="terms">
            Terms of use
          </a>
          </p>
          <p> 
            <a href="/privacy" className="terms">Privacy Policy</a>
          </p>
        </p>
      </footer>
    </div>
  );
};

export default Home;
