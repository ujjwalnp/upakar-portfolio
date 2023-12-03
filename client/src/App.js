import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setSharedData } from "./redux/actions/apiActions";
import env from "react-dotenv";
import axios from "axios";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import "./assets/css/App.css";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import BlogEdit from "./pages/BlogEdit";

const alertOptions = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '1.5rem',
    transition: transitions.SCALE
};

function App({ setSharedData }) {
  const apiUrl = env.APP_API_BASE_URL;

  const [theme, setTheme] = useState('light');

  useEffect(() => {
      const fetchUserDataAndUpdateStore = async () => {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
          setSharedData(JSON.parse(savedUserData));
        }
        const endPoint = '/api/user';
        try {
        const apiResponse = await axios.get(apiUrl + endPoint);
        const userData = apiResponse.data.user;
        if (apiResponse) {
          setSharedData(userData);
          // Update data in localStorage upon successful API call
          localStorage.setItem('userData', JSON.stringify(userData));
        }
      } catch (error) {
        console.error("Error updating store:", error);
      }
    };
    
    fetchUserDataAndUpdateStore();
  }, [setSharedData]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    // Save the theme preference in localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Set the initial theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    }
  }, []);

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div className={`App ${theme}-theme`}>
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element={<HomePage onToggleTheme={toggleTheme} />} />
            <Route path="/blog" element={<BlogPage onToggleTheme={toggleTheme} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/blog" element={<BlogEdit />} />
            </Routes>
        </BrowserRouter>
        </div>
    </AlertProvider>
  );
}

export default connect(null, { setSharedData })(App);
