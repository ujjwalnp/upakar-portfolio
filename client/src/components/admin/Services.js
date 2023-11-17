import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const dummyData = {
  about:
    "An accomplished Frontend Developer with a passion for creating seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting visually captivating and intuitively navigable websites. Leveraging my expertise in responsive design and UI/UX principles, I bring concepts to life, ensuring each project is a masterpiece of precision and functionality.",
  experience_years: "01",
  happy_clients: "10",
  companies_worked: "03",
  resume: "https://google.com/",
};

function Services() {
  return (
    <section className="about section" id="services">
      <h2 className="section-title">About</h2>
      <span className="section-subtitle">Professional Info</span>

      <form className="container">
        <div className="field">
          <input type="text" name="about" className="input" placeholder=" " />
          <label htmlFor="about" className="label">
            About
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="homeDescription"
            className="input"
            placeholder=" "
          />
          <label htmlFor="homeDescription" className="label">
            Home-Description
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="experienced_years"
            className="input"
            placeholder=" "
          />
          <label htmlFor="experienced_years" className="label">
            Experienced Years
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="happy_clients"
            className="input"
            placeholder=" "
          />
          <label htmlFor="happy_clients" className="label">
            Happy Clients
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="company_worked"
            className="input"
            placeholder=" "
          />
          <label htmlFor="company_worked" className="label">
            Company Worked
          </label>
        </div>

        <div className="form-action">
          <button type="submit" className="btn primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Services;
