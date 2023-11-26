import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import Cookies from "js-cookie";
import { useAlert } from "react-alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import BlogSection from "./BlogSection";

function BlogEditComponent() {
  const navigate = useNavigate();
  const alert = useAlert();
  const apiUrl = env.APP_API_BASE_URL;

  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingBlog, setEditingBlog] = useState(null);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleEdit = (id, field, value) => {
    setEditingBlog((prevBlog) => ({
      ...prevBlog,
      [field]: value,
    }));
  }

  const handleCancelEdit = () => {
    setEditingBlog(null);
  }

  const handleEditSave = async (id, updatedCategory, updatedTitle, updatedDescription) => {
    try {
      const endpoint = `/api/blog/${id}`;
      const response = await axios.patch(apiUrl + endpoint, {
        category: updatedCategory,
        title: updatedTitle,
        description: updatedDescription,
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      });

      if (response.data.status === "error") {
        alert(response.data.error);
        return;
      }

      // Update local state after successful save
      const updatedBlogs = blogs.map((blog) => (blog.id === id ? editingBlog : blog));
      setBlogs(updatedBlogs);
      setEditingBlog(null);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const endpoint = '/api/blog/';
      const response = await axios.post(apiUrl + endpoint, {
        category: category,
        title: title,
        description: description,
      }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
      });
        // Update local state after successful save
        setBlogs((prevBlogs) => [
            {
                id: response.data.newBlog._id,
                category: response.data.newBlog.category,
                title: response.data.newBlog.title,
                description: response.data.newBlog.description,
                createdAt: new Date(response.data.newBlog.createdAt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                }),
            },
            ...prevBlogs,
        ]);
        
      if (response.data.status === "error") {
        alert.error(`Failed: ${response.data.error}`);
        return;
      }
      alert.success('Blog added!');

      // Clear the input fields after successful save
      setCategory("");
      setTitle("");
      setDescription("");
    } catch (error) {
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
          },
        });
        const blogsData = response.data.blogs;
        const formattedBlogs = blogsData.map((blog) => ({
          ...blog,
          createdAt: new Date(blog.createdAt).toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
          }),
        }));
        setBlogs(formattedBlogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="blog-container">
        <form className="container">
          <div className="field">
            <input
              type="text"
              name="category"
              className="input"
              value={editingBlog ? editingBlog.category : category}
              onChange={editingBlog ? (e) => handleEdit(editingBlog.id, 'category', e.target.value) : handleCategoryChange}
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
              value={editingBlog ? editingBlog.title : title}
              onChange={editingBlog ? (e) => handleEdit(editingBlog.id, 'title', e.target.value) : handleTitleChange}
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
              value={editingBlog ? editingBlog.description : description}
              onChange={editingBlog ? (e) => handleEdit(editingBlog.id, 'description', e.target.value) : handleDescriptionChange}
              placeholder=" "
            />
            <label htmlFor="description" className="label">
              Description
            </label>
          </div>
        </form>

        <div className="form-action ">
          <button type="submit" className="skills-content container skills-name button-flex" onClick={editingBlog ? () => handleEditSave(editingBlog.id, editingBlog.category, editingBlog.title, editingBlog.description) : handleAddBlog}>
            {editingBlog ? 'Save' : 'Add'}
            <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />
          </button>
        </div>
      </div>
      {blogs.map((blog) => (
        <BlogSection
          key={blog.id}
          id={blog.id}
          category={blog.category}
          date={blog.createdAt}
          title={blog.title}
          description={blog.description}
          onEdit={handleEdit}
          onSave={handleEditSave}
          onCancelEdit={handleCancelEdit}
          isEditing={editingBlog && editingBlog.id === blog.id}
        />
      ))}
    </div>
  );
}

export default BlogEditComponent;
