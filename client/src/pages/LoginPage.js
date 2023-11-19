import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import env from "react-dotenv";
import axios from 'axios';
import Cookies from 'js-cookie';
import '../assets/css/Login.css';
import LoginIcon from '../assets/icons/login-icon.png';

function LoginPage() {
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const authenticateUser = async() => {
    try {
        const endpoint = "/api/auth/";

        const response = await axios.post(apiUrl + endpoint, {
            username: username,
            password: password
        });

        if (response.data.status === "error") {
            // Reset the values on unsuccessful authentication
            setUsername("");
            setPassword("");
            alert(response.data.error);
            return;
        }

        Cookies.set('token', response.data.token, { expires: 1 });
        Cookies.set('userId', response.data.userId, { expires: 1 });
        navigate('/admin')
    }
    catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="content-body">
      <div className="form-wrapper">
        <div className="logo">
          <img src={LoginIcon} alt="Logo" />
        </div>
        <h1 className="heading text-center">Login</h1>
        <h3 className="sub-heading text-center">Continue to the Dashboard</h3>

        <form>
          <div className="field">
            <input type="text" name="username" className="input" placeholder=" " value={username} onChange={handleUsernameChange} required />
            <label htmlFor="username" className="label">
                Username
            </label>
          </div>
          <div className="field">
            <input type="password" name="password" className="input" placeholder=" " value={password} onChange={handlePasswordChange} required />
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>

          <div className="description-text">
            <p>
            Not your website? Contact developer now! <br />
            and get your own website. 
            </p>
          </div>

          <div className="form-action">
            <a href="http://ujjwaldhakal.com.np" className="btn secondary" target="_blank" rel="noreferrer">
              Contact Developer
            </a>
            <button type="submit" className="btn primary" onClick={handleSubmit}>
              Next
            </button>   
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
