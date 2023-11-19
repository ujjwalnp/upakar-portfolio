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
      title: "Web Development",
      description: "Web dev is fun"
    },
    {
      title: "UI/UX Design",
      description: "UI/UX is fun"
    },
  ];

function ServiceShow({ title }) {
  return (
    <div className="skills-content container">
      <div className="skills-name">
        {title}
        <a>
          <FontAwesomeIcon icon={faTrash} className="button-icon" />
        </a>
      </div>
    </div>
  );
}

function Services() {
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [services, setServices] = useState([]);
  const index = 1;
  const [ category, setCategory ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
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
          index: index,
          category: category,
          title: title,
          description: description
      },
      {
          headers: {
            Authorization: `Bearer ${ Cookies.get('token') }`,
          },
      });

      if (response.data.status === "error") {
          // Reset the values on unsuccessful authentication
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
    setServices(dummyData);
  }, []);
  return (
    <section className="skills section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">My Services</span>
      {services.map((service) => (
            <ServiceShow 
                title={service.title} 
                description={service.description}
            />
          ))}
      <form className="container" onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            name="add-services-title"
            className="input"
            value={title}
            onChange={handleTitleChange}
            placeholder=" "
          />
          <label htmlFor="add-services-title" className="label">
            New Service Title
          </label>
        </div>
        <div className="field">
          <input
            type="text"
            name="add-services-description"
            className="input"
            value={description}
            onChange={handleDescriptionChange}
            placeholder=" "
          />
          <label htmlFor="add-services-description" className="label">
            Description
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

export default Services;
