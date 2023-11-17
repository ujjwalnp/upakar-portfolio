import React, { useState, useEffect } from "react";
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
  const [services, setServices] = useState([]);

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
      <form className="container">
        <div className="field">
          <input
            type="text"
            name="add-services-title"
            className="input"
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
            placeholder=" "
          />
          <label htmlFor="add-services-description" className="label">
            Description
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

export default Services;
