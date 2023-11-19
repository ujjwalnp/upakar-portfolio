import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import env from "react-dotenv";
import axios from 'axios';
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const dummyData = {
    about: "An accomplished Frontend Developer with a passion for creating seamless user experiences. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting visually captivating and intuitively navigable websites. Leveraging my expertise in responsive design and UI/UX principles, I bring concepts to life, ensuring each project is a masterpiece of precision and functionality.",
    experience_years: "01",
    happy_clients: "10",
    companies_worked: "03",
    resume: "https://google.com/"
};

function User() {
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleLinkedinChange = (e) => {
    setLinkedin(e.target.value);
  };
  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails();
  };

  const updateUserDetails = async() => {
    try {
        const endpoint = `/api/user/${ Cookies.get('userId') }/`
        const response = await axios.patch(apiUrl + endpoint, {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            contact: {
                email: email,
                linkedin: linkedin,
                facebook: facebook
            }
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
    <section className="about section" id="user">
      <h2 className="section-title">User</h2>
      <span className="section-subtitle">Personal Info</span>

      <form className="container" onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" name="firstName" className="input" value={firstName} onChange={handleFirstNameChange} placeholder=" " />
            <label htmlFor="firstName" className="label">
                First Name
            </label>
          </div>
          <div className="field">
            <input type="text" name="lastName" className="input" value={lastName} onChange={handleLastNameChange} placeholder=" " />
            <label htmlFor="lastName" className="label">
                Last Name
            </label>
          </div>
          <div className="field">
            <input type="text" name="bio" className="input" value={bio} onChange={handleBioChange} placeholder=" " />
            <label htmlFor="bio" className="label">
                Bio
            </label>
          </div>
          <div className="field">
            <input type="email" name="email" className="input" value={email} onChange={handleEmailChange} placeholder=" " />
            <label htmlFor="email" className="label">
                Email
            </label>
          </div>
          <div className="field">
            <input type="text" name="linkedin" className="input" value={linkedin} onChange={handleLinkedinChange} placeholder=" " />
            <label htmlFor="linkedin" className="label">
                Linkedin
            </label>
          </div>
          <div className="field">
            <input type="text" name="facebook" className="input" value={facebook} onChange={handleFacebookChange} placeholder=" " />
            <label htmlFor="facebook" className="label">
                Facebook
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

export default User;
