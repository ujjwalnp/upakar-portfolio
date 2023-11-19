import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

// Dummy data
const dummyData = [
  {
    value: "JavaScript",
  },
  {
    value: "ReactJS",
  },
  {
    value: "Bootstrap",
  },
  {
    value: "Tailwind CSS",
  },
  {
    value: "CSS",
  },
  {
    value: "Express.JS",
  },
];

function SkillShow({ value }) {
  return (
    <div className="skills-content container">
      <div className="skills-name">{value}
      <a>
        <FontAwesomeIcon icon={faTrash} className="button-icon" />
      </a>
      </div>
    </div>
  );
}

function Skills() {
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill();
  };

  const addSkill = async() => {
    try {
        const endpoint = `/api/user/skill/${ Cookies.get('userId') }/`
        const response = await axios.post(apiUrl + endpoint, {
            value: value
        },
        {
            headers: {
              Authorization: `Bearer ${ Cookies.get('token') }`,
            },
        });

        if (response.data.status === "error") {
            // Reset the values on unsuccessful authentication
            setValue("");
            alert(response.data.error);
            return;
        }

        navigate('/admin')
    }
    catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    // Simulating an API call with dummy data
    setSkills(dummyData);
  }, []);
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Skills</span>
      {skills.map((skill) => (
        <SkillShow value={skill.value} />
      ))}
      <form className="container" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            name="add-skills"
            className="input"
            placeholder=" "
            value={value}
            onChange={handleValueChange}
          />
          <label htmlFor="add-skills" className="label">
            Add New Skill
          </label>
        </div>
        <br />
        <div className="container">
          <button type="submit" className="btn button-flex skills-name">
            Add
            <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />
          </button>
        </div>
      </form>
    </section>
  );
}

export default Skills;
