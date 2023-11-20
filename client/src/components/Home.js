import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Mouse from "../assets/svg/mouse.svg";
import HomeImg from "../assets/icons/logo1.png";

function HomeView({
  email,
  linkedin,
  facebook,
  firstName,
  bio,
  homeDescription,
}) {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-social">
            <a
              href={`https://www.linkedin.com/in/${linkedin}/`}
              target="_blank"
              className="home-social-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href={`https://www.facebook.com/${facebook}/`}
              target="_blank"
              className="home-social-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href={`mailto:${email}`}
              target="_blank"
              className="home-social-icon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          <div className="home-img">
            <svg
              className="home-blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" maskType="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <image
                className="home-blob-img"
                x="-10"
                y="-5"
                width="200"
                height="200"
                href={HomeImg}
              />
            </svg>
          </div>

          <div className="home-data">
            <h1 className="home-title">Hi, I am {firstName}👋</h1>
            <h3 className="home-subtitle">{bio}</h3>
            <p className="home-description">{homeDescription}</p>
            <a href="#contact" className="button button-flex">
              Contact Me{" "}
              <FontAwesomeIcon icon={faEnvelope} className="button-icon" />
            </a>
          </div>
        </div>
        <div className="home-scroll">
          <a href="#about" className="home-scroll-button button-flex">
            <img className="home-scroll-mouse" src={Mouse} alt="" />
            <span className="home-scroll-name">Scroll down</span>
            <FontAwesomeIcon icon={faArrowDown} className="home-scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Home({ sharedData }) {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    if (sharedData) {
        setHomeData(sharedData);
      }
  }, [sharedData]);

  return (
    <HomeView
      email={homeData.contact?.email}
      linkedin={homeData.contact?.linkedin}
      facebook={homeData.contact?.facebook}
      firstName={homeData.firstName}
      bio={homeData.bio}
      homeDescription={homeData.about?.homeDescription}
    />
  );
}

// Connect the Home component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Home);