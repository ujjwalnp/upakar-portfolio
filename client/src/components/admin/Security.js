import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const dummyData = {
  about:
    "An accomplished Frontend Developer with a passion for creating seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting visually captivating and intuitively navigable websites. Leveraging my expertise in responsive design and UI/UX principles, I bring concepts to life, ensuring each project is a masterpiece of precision and functionality.",
  experience_years: "01",
  happy_clients: "10",
  companies_worked: "03",
  resume: "https://google.com/",
};

function Security() {
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [services, setServices] = useState([]);
  const index = 1;
  const [ username, setUsername ] = useState("");
  const [ oldPassword, setOldPassword ] = useState("");
  const [ newPassword, setNewPassword ] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
        setPasswordsMatch(true);
        modifyCredentials();
      }
  };

  const modifyCredentials = async() => {
    try {
      const endpoint = `/api/user/${ Cookies.get('userId') }/`
      const response = await axios.patch(apiUrl + endpoint, {
          username: username,
          password: newPassword,
          oldPassword: oldPassword
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

  return (
    <section className="about section" id="security">
      <h2 className="section-title">Security</h2>
      <span className="section-subtitle">Credentials</span>

      <form className="container" onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" name="username" className="input" value={username} onChange={handleUsernameChange} placeholder=" " />
          <label htmlFor="username" className="label">
            Username
          </label>
        </div>
        <div className="field">
          <input
            type="password"
            name="old-password"
            className="input"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            placeholder=" "
          />
          <label htmlFor="old-password" className="label">
            Old Password
          </label>
        </div>
        <div className="field">
          <input
            type="password"
            name="new-password"
            className="input"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder=" "
          />
          <label htmlFor="new-password" className="label">
            New Password
          </label>
        </div>
        <div className="field">
          <input
            type="password"
            name="confirm-password"
            className="input"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder=" "
          />
          <label htmlFor="confirm-password" className="label">
            Confirm Password
          </label>
        </div>

        <div className="form-action">
          <button type="submit" className="btn primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Security;
