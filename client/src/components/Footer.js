import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedinIn,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function FooterShow({ fullName, bio, email, linkedin, twitter }) {
    return (
        <footer className="footer">
        <div className="footer-bg">
          <div className="footer-container container grid">
            <div>
              <h1 className="footer-title">{fullName}</h1>
              <span className="footer-subtitle">{bio}</span>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
  
            <div className="footer-socials">
              <a
                href={`https://www.linkedin.com/in/${linkedin}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href={`https://www.facebook.com/${twitter}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <p className="footer-copy">By ujjwalnp - Code</p>
        </div>
      </footer>
    );
  }
  // Dummy data
  const dummyData = {
    fullName: "Sajjan Dhakal",
    bio: "I'm a hacker",
    email: "example@example.com",
    linkedin: "example",
    facebook: "example",
  };
  
  function Footer() {
    const [footerData, setFooterData] = useState([]);
  
    useEffect(() => {
      // Simulating an API call with dummy data
      setFooterData(dummyData);
    }, []);
    return (
      <FooterShow
        fullName={footerData.fullName}
        bio={footerData.bio}
        email={footerData.email}
        linkedin={footerData.linkedin}
        facebook={footerData.facebook}
      />
    );
  }
  
  export default Footer;