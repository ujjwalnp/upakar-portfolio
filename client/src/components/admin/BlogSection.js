import React from "react";
import ReadMoreReact from "read-more-react";

function BlogSection({
  id,
  category,
  date,
  title,
  description,
  onEdit,
  isEditing,
  onSave,
  onCancelEdit,
}) {
  const handleSave = () => {
    onSave(id, category, title, description);
  };

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-post">
          <div className="blog-meta">
            <span className="blog-category">CATEGORY</span>
            <span className="blog-category-body">- {category}</span>
            <span className="blog-date">{date}</span>
          </div>
          {isEditing ? (
            <div className="blog-content">
              <div className="field">
                <input
                  type="text"
                  name="category"
                  className="input"
                  value={category}
                  onChange={(e) => onEdit(id, 'category', e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="title"
                  className="input"
                  value={title}
                  onChange={(e) => onEdit(id, 'title', e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="description"
                  className="input"
                  value={description}
                  onChange={(e) => onEdit(id, 'description', e.target.value)}
                />
              </div>
              <div className="form-action">
                <button
                  type="button"
                  className="button-flex"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="button-flex"
                  onClick={onCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
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
                <button
                  type="button"
                  className="button-flex"
                  onClick={() => onEdit(id)}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
