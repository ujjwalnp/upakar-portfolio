import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Cookies from "js-cookie";
import { useAlert } from "react-alert";

function About() {
  const alert = useAlert();
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [about, setAbout] = useState("");
  const [homeDescription, setHomeDescription] = useState("");
  const [experiencedYears, setExperiencedYears] = useState("");
  const [happyClients, setHappyClients] = useState("");
  const [companiesWorked, setCompanyWorked] = useState("");
  const [resume, setResume] = useState("");

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };
  const handleHomeDescriptionChange = (e) => {
    setHomeDescription(e.target.value);
  };
  const handleExperiencedYearsChange = (e) => {
    setExperiencedYears(e.target.value);
  };
  const handleHappyClientsChange = (e) => {
    setHappyClients(e.target.value);
  };
  const handleCompaniesWorkedChange = (e) => {
    setCompanyWorked(e.target.value);
  };
  const handleResumeChange = (e) => {
    setResume(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAbout();
  };

  const updateAbout = async() => {
    try {
        const endpoint = `/api/user/${ Cookies.get('userId') }/`;

        const response = await axios.patch(apiUrl + endpoint, {
            about: {
                about: about,
                homeDescription: homeDescription,
                experiencedYears: experiencedYears,
                happyClients: happyClients,
                companiesWorked: companiesWorked,
                resume: resume
            }
        },
        {
            headers: {
                Authorization: `Bearer ${ Cookies.get('token') }`,
            },
        }
        );

        if (response.data.status === "error") {
            alert.error(`Failed: ${response.data.error}`);
            alert(response.data.error);
            return;
        }
        alert.success('About details updated!');
        navigate('/admin')
    }
    catch (error) {
        console.log(error);
    }
  }
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <span className="section-subtitle">Professional Info</span>

      <form className="container" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            name="about"
            className="input"
            value={about}
            onChange={handleAboutChange}
            placeholder=" "
          />
          <label htmlFor="about" className="label">
            About
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="homeDescription"
            className="input"
            value={homeDescription}
            onChange={handleHomeDescriptionChange}
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
            value={experiencedYears}
            onChange={handleExperiencedYearsChange}
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
            value={happyClients}
            onChange={handleHappyClientsChange}
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
            value={companiesWorked}
            onChange={handleCompaniesWorkedChange}
            placeholder=" "
          />
          <label htmlFor="company_worked" className="label">
            Company Worked
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="resume"
            className="input"
            value={resume}
            onChange={handleResumeChange}
            placeholder=" "
          />
          <label htmlFor="resume" className="label">
            Resume Link
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

export default About;
