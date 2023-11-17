import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const dummyData = {
    about: "An accomplished Frontend Developer with a passion for creating seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting visually captivating and intuitively navigable websites. Leveraging my expertise in responsive design and UI/UX principles, I bring concepts to life, ensuring each project is a masterpiece of precision and functionality.",
    experience_years: "01",
    happy_clients: "10",
    companies_worked: "03",
    resume: "https://google.com/"
};

function User() {

  return (
    <section className="about section" id="user">
      <h2 className="section-title">User</h2>
      <span className="section-subtitle">Personal Info</span>

      <form className="container">
          <div className="field">
            <input type="text" name="firstName" className="input" placeholder=" " />
            <label htmlFor="firstName" className="label">
                First Name
            </label>
          </div>
          <div className="field">
            <input type="text" name="lastName" className="input" placeholder=" " />
            <label htmlFor="lastName" className="label">
                Last Name
            </label>
          </div>
          <div className="field">
            <input type="text" name="bio" className="input" placeholder=" " />
            <label htmlFor="bio" className="label">
                Bio
            </label>
          </div>
          <div className="field">
            <input type="email" name="email" className="input" placeholder=" " />
            <label htmlFor="email" className="label">
                Email
            </label>
          </div>
          <div className="field">
            <input type="text" name="linkedin" className="input" placeholder=" " />
            <label htmlFor="linkedin" className="label">
                Linkedin
            </label>
          </div>
          <div className="field">
            <input type="text" name="facebook" className="input" placeholder=" " />
            <label htmlFor="facebook" className="label">
                Facebook
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

export default User;
