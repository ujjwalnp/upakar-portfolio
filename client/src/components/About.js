import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import AboutImg from '../assets/icons/aboutimg.png';

function AboutShow({ about, experience_years, happy_clients, companies_worked, resume }) {
    return (
        <div className="about-data">
          <p className="about-description">
            {about}
          </p>

          <div className="about-info">
            <div>
              <span className="about-info-title">{experience_years}+</span>
              <span className="about-info-name">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="about-info-title">{happy_clients}+</span>
              <span className="about-info-name">
                Happy <br />
                Clients
              </span>
            </div>
            <div>
              <span className="about-info-title">{companies_worked}+</span>
              <span className="about-info-name">
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <div className="about-buttons">
            <a
              href={resume}
              className="button button-flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <FontAwesomeIcon icon={faFileArrowDown} className="button-icon" />
            </a>
          </div>
        </div>
    );
}

function About({ sharedData }) {
    const [aboutData, setAboutData] = useState({});
  
    useEffect(() => {
      // Check if sharedData and sharedData.about exist before updating state
      if (sharedData && sharedData.about) {
        setAboutData(sharedData.about);
      }

    }, [sharedData]);

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src={AboutImg} alt="" className="about-img" />
        <AboutShow
            about={aboutData.about}
            experience_years={aboutData.experiencedYears}
            happy_clients={aboutData.happyClients}
            companies_worked={aboutData.companiesWorked}
            resume={aboutData.resume}
      />
        
      </div>
    </section>
  );
}

// Connect the About component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });
  
  export default connect(mapStateToProps)(About);
