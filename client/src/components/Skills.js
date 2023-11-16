import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import "../assets/css/skills.css";

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
            <div className="skills-name">{value}</div>
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
      {skills.map(( skill ) => (
            <SkillShow 
                value={ skill.value }
            />
          ))}
    </section>
  );
}

export default Skills;
