import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import ContactMeImg from "../assets/icons/contactme.png";

function ServiceContact() {
  return (
    <section className="project-contact section">
      <div className="project-bg">
        <div className="project-container container grid">
          <div className="project-data">
            <h2 className="project-title">Discover Our Offerings</h2>
            <p className="project-description">
            Contact me now and get an exciting offer on my services.
            </p>
            <a href="#contact" className="button button-flex button-white">
              Contact Me
              <FontAwesomeIcon
                icon={faCommentDots}
                className="project-icon button-icon"
              />
            </a>
          </div>
          <img src={ContactMeImg} alt="" className="project-img" />
        </div>
      </div>
    </section>
  );
}

export default ServiceContact;
