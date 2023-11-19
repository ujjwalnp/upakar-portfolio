import React, { useState, useEffect } from "react";
import ReadMoreReact from "read-more-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/BlogSection.css";

function BlogSection({ category, date, title, description }) {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-post">
          <div className="blog-meta">
            <span className="blog-category">CATEGORY</span>
            <span className="blog-category-body">- {category}</span>
            <span className="blog-date">{date}</span>
          </div>
          <div className="blog-content">
            <h2 className="blog-title">{title}</h2>
            <p className="blog-description">
              <ReadMoreReact
                text={description}
                min={280}
                ideal={290}
                max={50000}
                readMoreText={
                  <span className="blog-learn-more">
                    Learn More
                    <svg
                      className="blog-icon"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                }
              />
            </p>
            <div className="skills-content container skills-name">
              <a href="#contact" className="button-flex">
                Edit
                <FontAwesomeIcon icon={faPen} className="button-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogEditComponent() {
  const navigate = useNavigate();
  const apiUrl = env.APP_API_BASE_URL;

  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog();
  };

  const addBlog = async() => {
    try {
      const endpoint = '/api/blog/';
      console.log(apiUrl + endpoint)

      const response = await axios.post(apiUrl + endpoint, {
        category: category,
        title: title,
        description: description
      },
      {
          headers: {
              Authorization: `Bearer ${ Cookies.get('token') }`,
          },
      }
      );

      if (response.data.status === "error") {
          // Reset the values on unsuccessful authentication
          alert(response.data.error);
          return;
      }
      navigate('/admin/blog')
  }
  catch (error) {
      console.log(error);
  }
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const endpoint = '/api/blog';
        const response = await axios.get(apiUrl + endpoint, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          }
        });
        const blogsData = response.data.blogs;
        const formattedBlogs = blogsData.map(blog => {
          return {
            ...blog,
            createdAt: new Date(blog.createdAt).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' }) //, year: 'numeric'
          };
        });
        setBlogs(formattedBlogs);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="blog-container">
        <form className="container">
          <div className="field">
            <input
              type="text"
              name="category"
              className="input"
              value={category}
              onChange={handleCategoryChange}
              placeholder=" "
            />
            <label htmlFor="category" className="label">
            Category
            </label>
          </div>
          <div className="field">
            <input
              type="text"
              name="title"
              className="input"
              value={title}
              onChange={handleTitleChange}
              placeholder=" "
            />
            <label htmlFor="title" className="label">
              Title
            </label>
          </div>
          <div className="field">
            <input
              type="text"
              name="description"
              className="input"
              value={description}
              onChange={handleDescriptionChange}
              placeholder=" "
            />
            <label htmlFor="description" className="label">
              Description
            </label>
          </div>
        </form>

        <div className="form-action ">
          
          <button type="submit" className="skills-content container skills-name button-flex" onClick={handleSubmit}>
            Add
            <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />
          </button>
          
        </div>
      </div>
      {blogs.map((blog) => (
        <BlogSection
          category={blog.category}
          date={blog.createdAt}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </div>
  );
}

export default BlogEditComponent;