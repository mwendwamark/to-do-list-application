import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./Contacts.css";

function Contacts() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        For any inquiries or questions, please feel free to reach out to us. Our
        team will be happy to assist you.
      </p>
      <div>
        <h3>
          <a href="https://goo.gl/maps/5cUd39y4xv372V3W7">
            <FaMapMarkerAlt /> Address
          </a>
        </h3>
        <p>Claycity Street 101, Nairobi, Kenya</p>
      </div>
      <div>
        <a href="mailto:info@example.com">
          <h3>
            <FaEnvelope /> Email
          </h3>
        </a>
        <p>info@example.com</p>
      </div>
      <div>
        <h3>
          <FaPhone /> Phone
        </h3>
        <p>+254-717-084-324</p>
      </div>
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
              data-tooltip="WhatsApp"
            >
              <FaWhatsapp className="home-social-icon-whatsapp" />
            </a>
            <a
              href="https://github.com/"
              target="https://github.com/mwendwamark"
              rel="noopener noreferrer"
              data-tooltip="GitHub"
            >
              <FaGithub className="home-social-icon-github" />
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Contacts;
