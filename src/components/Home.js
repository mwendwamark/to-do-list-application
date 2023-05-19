import React from "react";
import { FaTasks } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./App.css";
import backgroundImage from "./background.jpg";
import notebook from "./notebook.jpg";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-header">
        <FaTasks className="home-icon" />
        <h1 className="app-header">Task-lister</h1>
      </div>
      
      <div className="home-message">
        <div
          className="notebook-image"
          style={{ backgroundImage: `url(${notebook})` }}
        ></div>
        <div className="message-content">
          <h3 className="h3-home-message">
            Task-lister: The ultimate task management app that keeps you
            organized and on top of your tasks. Perfect for professionals,
            students, and anyone with a busy schedule. Try it today and never
            forget a task again!
          </h3>
          <a href="/login" className="home-cta">
            Get Started
          </a>
        </div>
      </div>
      <div className="home-features">
        <h2>Features</h2>
        <ul>
          <li>Easy to use interface</li>
          <li>Customizable task categories</li>
          <li>Set due dates and reminders</li>
        </ul>
      </div>
      <div className="home-testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>
            "Task-lister has completely changed the way I manage my work. It's
            so easy to use and has helped me stay on top of everything. I highly
            recommend it!"
          </p>
          <p>- John Killu, Marketing Manager</p>
        </div>
        <div className="testimonial">
          <p>
            "I love Task-lister! It's been a lifesaver for me as a freelancer. I
            can easily keep track of all my projects and deadlines in one
            place."
          </p>
          <p>- Jane Smith, Freelance Writer</p>
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
        </footer>
      </div>
    </div>
  );
};

export default Home;
