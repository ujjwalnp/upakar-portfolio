import React, { useState, useEffect } from "react";
import ReadMoreReact from "read-more-react";
import env from "react-dotenv";
import axios from "axios";
import "../assets/css/BlogSection.css";

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
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = env.APP_API_BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const endpoint = "/api/blog";
        const response = await axios.get(apiUrl + endpoint);
        const blogsData = response.data.blogs;
        const formattedBlogs = blogsData.map((blog) => {
          return {
            ...blog,
            createdAt: new Date(blog.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              day: "numeric",
              month: "short",
            }), //, year: 'numeric'
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
      {blogs.map((blog) => (
        <BlogSection
          category={blog.category}
          date={blog.date}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </div>
  );
}

export default Blog;
