import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function SkillShow({ value }) {
    return (
        <div className="skills-content container">
            <div className="skills-name">{value}</div>
        </div>
    );
}

function Skills({ sharedData }) {
    const [skills, setSkills] = useState([]);

  useEffect(() => {
    if (sharedData && sharedData.skills) {
        setSkills(sharedData.skills);
      }
  }, [sharedData]);

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

// Connect the Skills component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Skills);