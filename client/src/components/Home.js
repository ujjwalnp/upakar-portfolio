import React from 'react';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-social">
            <a
              href="https://www.linkedin.com/in/harisahmad59/"
              target="_blank"
              className="home-social-icon"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/codehype_/"
              target="_blank"
              className="home-social-icon"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/harisahmad59"
              target="_blank"
              className="home-social-icon"
            >
              <i className="fa-brands fa-github"></i>
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
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home-blob-img"
                  x="-15"
                  y="-5"
                  href="Assets/Icons/logo1.png"
                />
              </g>
            </svg>
          </div>

          <div className="home-data">
            <h1 className="home-title">Hi, I am Haris Ahmad</h1>
            <h3 className="home-subtitle">Frontend Developer</h3>
            <p className="home-description">
              Passionate frontend developer specializing in pixel-perfect web
              design.
            </p>
            <a href="#contact" className="button button-flex">
              Contact Me{' '}
              <i className="fa-regular fa-envelope button-icon"></i>
            </a>
          </div>
        </div>
        <div className="home-scroll">
          <a href="#about" className="home-scroll-button button-flex">
            {/* Uncomment the line below to use Font Awesome icon */}
            {/* <i className="fa-solid fa-computer-mouse home-scroll-mouse"></i> */}
            <img
              className="home-scroll-mouse"
              src="Assets/mouse.svg"
              alt=""
            />
            <span className="home-scroll-name">Scroll down</span>
            <i className="fa-solid fa-angles-down home-scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
