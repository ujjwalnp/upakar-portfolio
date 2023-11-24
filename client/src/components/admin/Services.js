import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Cookies from "js-cookie";
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAlert } from "react-alert";

function ServiceShow({ id, title }) {
    const alert = useAlert();
    const apiUrl = env.APP_API_BASE_URL;
    const navigate = useNavigate();
    const deleteService = async() => {
          try {
              const endpoint = `/api/user/service/${ id }/`
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
              alert.success('Service deleted!');
              navigate('/admin')
          }
          catch (error) {
              console.log(error);
          }
    }
  return (
    <div className="skills-content container">
      <a className="skills-name" onClick={deleteService}>{title}
        <FontAwesomeIcon icon={faTrash} className="button-icon" />
      </a>
    </div>
  );
}


function Services({ sharedData }) {
  const alert = useAlert();
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addService();
  };


  const addService = async() => {
    try {
        const endpoint = `/api/user/service/${ Cookies.get('userId') }/`
        const response = await axios.post(apiUrl + endpoint, {
            index: 2,
            title: title,
            description: description
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
        alert.success('Service added!');
        navigate('/admin')
    }
    catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    if (sharedData && sharedData.services) {
        setServices(sharedData.services);
      }
  }, [sharedData]);
  return (
    <section className="skills section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">My offering</span>
      {services.map((service) => (
        <ServiceShow id={service._id} title={service.title} />
      ))}
      <form className="container" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            name="add-services"
            className="input"
            placeholder=" "
            value={title}
            onChange={handleTitleChange}
          />
          <label htmlFor="add-skills" className="label">
            New Service Title
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="add-services"
            className="input"
            placeholder=" "
            value={description}
            onChange={handleDescriptionChange}
          />
          <label htmlFor="add-skills" className="label">
            New Service Title
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

// Connect the Services component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Services);