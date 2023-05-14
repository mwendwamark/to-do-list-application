import React from "react";
import { FaTasks } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./App.css";
// import backgroundImage from "./background.jpg";

const Home = () => {
  return (
    <div
      className="home-container"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-header">
        <FaTasks className="home-icon" />
        <h1 className="app-header">Task-lister</h1>
      </div>
      <div className="home-message">
        <h3>
          Never forget a task again with <span>Task-lister</span>. Our intuitive
          and user-friendly app makes it easy to manage all of your tasks in one
          place. Whether you're a busy professional, a student, or just someone
          with a lot on their plate, Task-lister is the perfect tool to help you
          stay organized and on top of things. Try it today and experience the
          power of streamlined task management.
        </h3>
        <a href="/login" className="home-cta">
          Get Started
        </a>
      </div>
      <div className="home-features">
        <h2>Features</h2>
        <ul>
          <li>Easy to use interface</li>
          <li>Customizable task categories</li>
          <li>Set due dates and reminders</li>
          <li>Assign tasks to team members</li>
          <li>View progress and completion rates</li>
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
        <div>
          <footer className="footer-container">
            {/* <h3 className="conect"></h3> */}
            <br />
            <div className="home-social-icons">
              <ul>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <FaInstagram className="home-social-icon-instagram" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="home-social-icon-linkedin" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=0717084324"
                  target="https://web.whatsapp.com/"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="home-social-icon-whatsapp" />
                </a>
                <a
                  href="https://github.com/"
                  target="https://github.com/mwendwamark"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="home-social-icon-github" />
                </a>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
