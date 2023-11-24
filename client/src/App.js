import React, { useEffect } from "react";
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
  useEffect(() => {
      const fetchUserDataAndUpdateStore = async () => {
        const endPoint = '/api/user';
        try {
        const apiResponse = await axios.get(apiUrl + endPoint);
        const userData = apiResponse.data.user;
        if (apiResponse) {
          setSharedData(userData);
        }
      } catch (error) {
        console.error("Error updating store:", error);
      }
    };
    
    fetchUserDataAndUpdateStore();
  }, [setSharedData]);

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div className="App">
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
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
