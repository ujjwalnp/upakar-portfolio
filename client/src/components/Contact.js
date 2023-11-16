import React, { useState, useEffect } from "react";
import "../assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function ContactShow({ email, linkedin, facebook, twitter }) {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact me</h2>
      <span className="section-subtitle">Get in touch</span>

      <div className="contact-container container">
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div>
            <h3 className="contact-title">Email</h3>
            <a
              href={`mailto:${email}`}
              target="_blank"
              className="contact-subtitle"
            >
              {email}
            </a>
          </div>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faLinkedinIn} className="contact-icon" />
          <div>
            <h3 className="contact-title">Linkedin</h3>
            <a
              className="contact-subtitle"
              href={`https://www.linkedin.com/in/${linkedin}/`}
              target="_blank"
            >
              @{linkedin}
            </a>
          </div>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
          <div>
            <h3 className="contact-title">Facebook</h3>
            <a
              className="contact-subtitle"
              href={`https://www.facebook.com/${facebook}/`}
              target="_blank"
            >
              @{facebook}
            </a>
          </div>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faTwitter} className="contact-icon" />
          <div>
            <h3 className="contact-title">Twitter</h3>
            <a
              className="contact-subtitle"
              href={`https://www.twitter.com/${twitter}/`}
              target="_blank"
            >
              @{twitter}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
// Dummy data
const dummyContacts = {
  email: "example@example.com",
  linkedin: "example",
  facebook: "example",
  twitter: "example",
};

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Simulating an API call with dummy data
    setContacts(dummyContacts);
  }, []);
  return (
    <ContactShow
      email={contacts.email}
      linkedin={contacts.linkedin}
      facebook={contacts.facebook}
      twitter={contacts.twitter}
    />
  );
}

export default Contact;
