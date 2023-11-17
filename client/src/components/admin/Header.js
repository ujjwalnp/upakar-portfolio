import React, { useState } from "react";
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
// import { faRegularMoon } from '@fortawesome/free-regular-svg-icons';

function HeaderShow({ firstName, lastName }) {
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
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          Admin Pannel
        </a>

        <div
          className={`nav-menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="/admin/#user" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faUser} className="nav-icon" /> User
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/#about" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faUser} className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/#skills" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faBolt} className="nav-icon" /> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/#services" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />{" "}
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/#security" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faMessage} className="nav-icon" />{" "}
                Security
              </a>
            </li>
            <li className="nav-item">
              <a href="/admin/blog" className="nav-link" onClick={linkAction}>
                <FontAwesomeIcon icon={faFile} className="nav-icon" /> Blog
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
          {/* <FontAwesomeIcon icon={faRegularMoon} className="fa-moon change-theme" id="theme-button" /> */}
          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
}

const dummyData = {
    firstName: "Upakar",
    lastName: "Dhakal",
  };

function Header() {
  return (
    <HeaderShow firstName={dummyData.firstName} lastName={dummyData.lastName} />
  );
}

export default Header;
