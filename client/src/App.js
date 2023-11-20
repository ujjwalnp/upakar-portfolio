import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setSharedData } from "./redux/actions/apiActions";
import env from "react-dotenv";
import axios from "axios";
import "./assets/css/App.css";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import BlogEdit from "./pages/BlogEdit";

const dummyData = {
  user: {
    username: "upakar",
    firstName: "Upakar",
    lastName: "Dhakal",
    password: "1234",
    bio: "Hancy Boy 123",
    contact: {
      email: "contact@upakardhakal.com.np",
      linkedin: "upakardhakal",
      facebook: "upakardhakal",
    },
    about: {
      about: "About Section",
      homeDescription: "homeDescription1111111",
      experiencedYears: "99",
      happyClients: "1M",
      companiesWorked: "87",
      resume: "https://ujjwaldhakal.com.np",
    },
    skills: [
      {
        value: "React",
      },
      {
        value: "React",
      },
      {
        value: "React",
      },
      {
        value: "React",
      },
    ],
    services: [
      {
        index: 1,
        title: "Web Development",
        description:
          "I design and develop static and dynamic websites for all kinds of businesses and individuals.",
      },
      {
        index: 1,
        title: "Web Development",
        description:
          "I design and develop static and dynamic websites for all kinds of businesses and individuals.",
      },
      {
        index: 1,
        title: "Web Development",
        description:
          "I design and develop static and dynamic websites for all kinds of businesses and individuals.",
      },
    ],
  },
};

function App({ setSharedData }) {
  const apiUrl = env.APP_API_BASE_URL;
  const endPoint = '/api/user';
  useEffect(() => {
    const fetchUserDataAndUpdateStore = async () => {
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
  );
}

export default connect(null, { setSharedData })(App);
