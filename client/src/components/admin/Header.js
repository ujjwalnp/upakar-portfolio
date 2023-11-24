import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBolt,
  faBriefcase,
  faFile,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function HeaderShow() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const linkAction = (id, isBlogEdit) => {
    closeMenu();
    // Check if it's the BlogEdit page
    if (isBlogEdit) {
        navigate("/admin/blog");
    } else {
      // It's the AdminPage
      const adminPageElement = document.getElementById(id);
      if (adminPageElement) {
        adminPageElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/admin" className="nav-logo">
          Admin Panel
        </Link>

        <div
          className={`nav-menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav-list grid">
            <li className="nav-item">
              <span
                role="button"
                tabIndex={0}
                className="nav-link"
                onClick={() => linkAction("user", false)}
              >
                <FontAwesomeIcon icon={faUser} className="nav-icon" /> User
              </span>
            </li>
            <li className="nav-item">
              <span
                role="button"
                tabIndex={0}
                className="nav-link"
                onClick={() => linkAction("about")}
              >
                <FontAwesomeIcon icon={faUser} className="nav-icon" /> About
              </span>
            </li>
            <li className="nav-item">
              <span
                role="button"
                tabIndex={0}
                className="nav-link"
                onClick={() => linkAction("skills")}
              >
                <FontAwesomeIcon icon={faBolt} className="nav-icon" /> Skills
              </span>
            </li>
            <li className="nav-item">
              <span
                role="button"
                tabIndex={0}
                className="nav-link"
                onClick={() => linkAction("services")}
              >
                <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />{" "}
                Services
              </span>
            </li>
            <li className="nav-item">
              <span
                role="button"
                tabIndex={0}
                className="nav-link"
                onClick={() => linkAction("security")}
              >
                <FontAwesomeIcon icon={faBolt} className="nav-icon" /> Security
              </span>
            </li>
            <li className="nav-item">
              <span
                role="button"
                tabIndex={0}
                className="nav-link"
                onClick={() => linkAction("blog", true)}
              >
                <FontAwesomeIcon icon={faFile} className="nav-icon" /> Blog
              </span>
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
          <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderShow;
