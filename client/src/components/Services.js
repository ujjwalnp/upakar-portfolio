import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faUmbrella, faPen, faBolt, faShieldHalved, faCircleUser, faList, faLock } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";

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

function ServicesShow({ sharedData }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (sharedData && sharedData.services) {
        setServices(sharedData.services);
      }
  }, [sharedData]);

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

// Connect the ServicesShow component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(ServicesShow);