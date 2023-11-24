import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Cookies from "js-cookie";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAlert } from "react-alert";

function SkillShow({ id, value }) {
    const alert = useAlert();
    const apiUrl = env.APP_API_BASE_URL;
    const navigate = useNavigate();
    const deleteSkill = async() => {
          try {
              const endpoint = `/api/user/skill/${ id }/`
              const response = await axios.delete(apiUrl + endpoint,
              {headers: {
                  Authorization: `Bearer ${ Cookies.get('token') }`,
                },
                data: {
                    userId: Cookies.get('userId'),
                },
              }
              );
      
              if (response.data.status === "error") {
                alert.error(`Failed: ${response.data.error}`);
                return;
              }
              alert.success('Skill deleted!');
              navigate('/admin')
          }
          catch (error) {
              console.log(error);
          }
    }
  return (
    <div className="skills-content container">
      <a className="skills-name" onClick={deleteSkill}>{value}
        <FontAwesomeIcon icon={faTrash} className="button-icon" />
      </a>
    </div>
  );
}


function Skills({ sharedData }) {
  const alert = useAlert();
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
            alert.error(`Failed: ${response.data.error}`);
            return;
        }
        alert.success('Skill added!');
        navigate('/admin')
    }
    catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    if (sharedData && sharedData.skills) {
        setSkills(sharedData.skills);
      }
  }, [sharedData]);
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Skills</span>
      {skills.map((skill) => (
        <SkillShow id={skill._id} value={skill.value} />
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

// Connect the Skills component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Skills);