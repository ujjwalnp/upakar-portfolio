import React, { useEffect } from 'react';
import Header from '../components/admin/Header';
import BlogEditComponent from '../components/admin/BlogEdit';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function BlogEdit() {
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
        <BlogEditComponent id="blog"/>
    </>
  );
};

export default BlogEdit;
