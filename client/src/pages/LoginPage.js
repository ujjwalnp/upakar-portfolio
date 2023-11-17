import React from 'react';
import '../assets/css/Login.css';
import LoginIcon from '../assets/icons/login-icon.png';

function LoginPage() {
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
            <input type="text" name="username" className="input" placeholder=" " required />
            <label htmlFor="username" className="label">
                Username
            </label>
          </div>
          <div className="field">
            <input type="password" name="password" className="input" placeholder=" " required />
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
            <button type="submit" className="btn primary">
              Next
            </button>   
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
