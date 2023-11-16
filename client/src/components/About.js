import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import AboutImg from '../assets/icons/aboutimg.png';

const dummyData = {
    about: "An accomplished Frontend Developer with a passion for creating seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting visually captivating and intuitively navigable websites. Leveraging my expertise in responsive design and UI/UX principles, I bring concepts to life, ensuring each project is a masterpiece of precision and functionality.",
    experience_years: "01",
    happy_clients: "10",
    companies_worked: "03",
    resume: "https://google.com/"
};

function AboutShow({ about, experience_years, happy_clients, companies_worked, resume }) {
    return (
        <div className="about-data">
          <p className="about-description">
            {about}
          </p>

          <div className="about-info">
            <div>
              <span className="about-info-title">{experience_years}</span>
              <span className="about-info-name">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="about-info-title">{happy_clients}</span>
              <span className="about-info-name">
                Happy <br />
                Clients
              </span>
            </div>
            <div>
              <span className="about-info-title">{companies_worked}</span>
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
            >
              Download Resume
              <FontAwesomeIcon icon={faFileArrowDown} className="button-icon" />
            </a>
          </div>
        </div>
    );
}

function About() {
    const [aboutData, setAboutData] = useState([]);
  
    useEffect(() => {
      // Simulating an API call with dummy data
      setAboutData(dummyData);
    }, []);

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My Introduction</span>

      <div className="about-container container grid">
        <img src={AboutImg} alt="" className="about-img" />
        <AboutShow
            about={aboutData.about}
            experience_years={aboutData.experience_years}
            happy_clients={aboutData.happy_clients}
            companies_worked={aboutData.companies_worked}
            resume={aboutData.resume}
      />
        
      </div>
    </section>
  );
}

export default About;
