import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFile,
  faBriefcase,
  faImage,
  faMessage,
  faBars,
  faMoon,
  faTimes,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

function HeaderShow({ firstName, lastName, onToggleTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const linkAction = () => {
    closeMenu();
  };

  const toggleTheme = () => {
    // Call the callback function passed from App.js
    onToggleTheme();
  };
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          {firstName} {lastName}
        </a>

        <div
          className={`nav-menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="/#home" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faHouse} className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faUser} className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a href="/#skills" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faBolt} className="nav-icon" /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="/#services" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />{" "}
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faFile} className="nav-icon" /> Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faMessage} className="nav-icon" />{" "}
                Contact
              </a>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faTimes}
            className="fa-xmark nav-close"
            id="nav-close"
            onClick={closeMenu}
          />
        </div>

        <div className="nav-btns">
          <FontAwesomeIcon icon={faMoon} className="fa-moon change-theme" id="theme-button" onClick={toggleTheme} />
          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function Header({ sharedData, onToggleTheme }) {
    const [headerData, setHeaderData] = useState({});
    useEffect(() => {
        if (sharedData) {
            setHeaderData(sharedData);
        }
      }, [sharedData]);
    
    
    return (
    <HeaderShow 
        firstName={headerData.firstName} 
        lastName={headerData.lastName}
        onToggleTheme={onToggleTheme}
     />
  );
}

// Connect the Header component to the Redux store
const mapStateToProps = (state) => ({
    sharedData: state.api.sharedData,
  });

export default connect(mapStateToProps)(Header);