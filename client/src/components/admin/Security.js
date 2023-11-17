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

function Security() {
  return (
    <section className="about section" id="security">
      <h2 className="section-title">Security</h2>
      <span className="section-subtitle">Credentials</span>

      <form className="container">
        <div className="field">
          <input type="text" name="username" className="input" placeholder=" " />
          <label htmlFor="username" className="label">
            Username
          </label>
        </div>
        <div className="field">
          <input
            type="password"
            name="old-password"
            className="input"
            placeholder=" "
          />
          <label htmlFor="old-password" className="label">
            Old Password
          </label>
        </div>
        <div className="field">
          <input
            type="password"
            name="new-password"
            className="input"
            placeholder=" "
          />
          <label htmlFor="new-password" className="label">
            New Password
          </label>
        </div>
        <div className="field">
          <input
            type="password"
            name="confirm-password"
            className="input"
            placeholder=" "
          />
          <label htmlFor="confirm-password" className="label">
            Confirm Password
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

export default Security;
