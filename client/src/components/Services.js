import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faUmbrella, faPen, faBolt, faShieldHalved, faCircleUser, faList, faLock } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";

// Dummy data
const dummyServices = [
  {
    title: "Web Development",
    description: "Web dev is fun"
  },
  {
    title: "UI/UX Design",
    description: "UI/UX is fun"
  },
];

const getIcon = (index) => {
  const allIcons = [ faPen, faBolt, faUmbrella, faGears, faShieldHalved, faCircleUser, faList, faLock ];
  return allIcons[index];
};

function ServiceItem({ title, index, description }) {
  const icon = getIcon(index);

  return (
    <div className="services-content">
      <FontAwesomeIcon icon={icon} className="services-icon" />
      <h3 className="services-title">{title}</h3>
      <span>{description}</span>
    </div>
  );
}

function ServicesShow() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulating an API call with dummy data
    setServices(dummyServices);
  }, []);

  return (
    <>
      <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What I offer</span>

        <div className="services-container container grid">
          {services.map((service, index) => (
            <ServiceItem 
                key={index}
                title={service.title} 
                index={index} 
                description={service.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ServicesShow;
