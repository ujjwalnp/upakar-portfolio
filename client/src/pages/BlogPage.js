import Header from "../components/Header";
import Blog from "../components/Blog";
import ServiceContact from "../components/ServiceContact";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function BlogPage({ onToggleTheme }) { 
  return (
    <>
      <Header onToggleTheme={onToggleTheme} />
      <Blog />
      <ServiceContact />
      <Contact />
      <Footer />
    </>
  );
}

export default BlogPage;
