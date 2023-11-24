import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";

function FooterShow({ firstName, lastName, bio, email, linkedin, facebook }) {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">
              {firstName} {lastName}
            </h1>
            <span className="footer-subtitle">{bio}</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="/#home" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/#services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="footer-link">
                Blog
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
              href={`https://www.facebook.com/${facebook}/`}
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

function Footer({ sharedData }) {
  const [footerData, setFooterData] = useState({});

  useEffect(() => {
    if (sharedData) {
        setFooterData(sharedData);
    }
  }, [sharedData]);
  return (
    <FooterShow
      firstName={footerData.firstName}
      lastName={footerData.lastName}
      bio={footerData.bio}
      email={footerData.contact?.email}
      linkedin={footerData.contact?.linkedin}
      facebook={footerData.contact?.facebook}
    />
  );
}

// Connect the Footer component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Footer);