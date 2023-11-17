import React, { useState, useEffect } from "react";
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
  const [skills, setSkills] = useState([]);

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
      <form className="container">
        <div className="field">
          <input
            type="text"
            name="add-skills"
            className="input"
            placeholder=" "
          />
          <label htmlFor="add-skills" className="label">
            Add New Skill
          </label>
        </div>
        <br />
        <div className="skills-content container skills-name">
          <a href="#contact" className="button-flex">
            Add
            <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />
          </a>
        </div>
      </form>
    </section>
  );
}

export default Skills;
