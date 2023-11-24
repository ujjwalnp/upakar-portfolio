import React, { useEffect } from 'react';
import Header from '../components/admin/Header';
import About from '../components/admin/About';
import User from '../components/admin/User';
import Security from '../components/admin/Security';
import Skills from '../components/admin/Skills';
import Services from '../components/admin/Services';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');

    if (!token) {
      // Redirect to login if token is not present
      navigate('/login');
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        // Token is expired, redirect to login
        navigate('/login');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      // Handle decoding errors, e.g., redirect to login
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <User id="user" />
      <About id="about" />
      <Skills id="skills" />
      <Services id="services" />
      <Security id="security" />
    </>
  );
};

export default AdminPage;
