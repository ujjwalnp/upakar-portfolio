import React, { useState, useEffect } from "react";
import ReadMoreReact from "read-more-react";
import '../assets/css/BlogSection.css';

const dummyData = [
    {
        category: "Category",
        date: "12 Jun 2019",
        title: "Bitters hashtag waistcoat fashion axe chia unicorn",
        description: "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.        Bitters hashtag waistcoat fashion axe chia unicorn,        description: Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.  description: Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer"
    },
    {
        category: "Category",
        date: "12 Jun 2019",
        title: "Bitters hashtag waistcoat fashion axe chia unicorn",
        description: "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.        Bitters hashtag waistcoat fashion axe chia unicorn,        description: Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.  description: Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer"
    },
    {
        category: "Category",
        date: "12 Jun 2019",
        title: "Bitters hashtag waistcoat fashion axe chia unicorn",
        description: "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.        Bitters hashtag waistcoat fashion axe chia unicorn,        description: Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.  description: Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer"
    }
]

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
                          <svg className="blog-icon" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

  useEffect(() => {
    // Simulating an API call with dummy data
    setBlogs(dummyData);
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
