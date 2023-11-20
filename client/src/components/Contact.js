import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function ContactShow({ email, linkedin, facebook }) {
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
      </div>
    </section>
  );
}

function Contact({ sharedData }) {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    if (sharedData && sharedData.contact) {
        setContacts(sharedData.contact);
      }
  }, [sharedData]);
  return (
    <ContactShow
      email={contacts.email}
      linkedin={contacts.linkedin}
      facebook={contacts.facebook}
    />
  );
}

// Connect the Contact component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Contact);
