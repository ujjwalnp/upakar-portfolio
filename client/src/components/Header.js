import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          Haris Ahmad
        </a>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="fa-solid fa-house nav-icon"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="fa-solid fa-user nav-icon"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="fa-solid fa-file nav-icon"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                <i className="fa-solid fa-briefcase nav-icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="fa-solid fa-image nav-icon"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="fa-solid fa-message nav-icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="fa-solid fa-xmark nav-close" id="nav-close"></i>
        </div>

        <div className="nav-btns">
          {/* theme btn  */}
          <i className="fa-regular fa-moon change-theme" id="theme-button"></i>

          <div className="nav-toggle" id="nav-toggle">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
