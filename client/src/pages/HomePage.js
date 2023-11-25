import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import ServiceContact from "../components/ServiceContact";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage({ onToggleTheme }) {
  return (
    <>
      <Header onToggleTheme={onToggleTheme} />
      <Home />
      <About />
      <Skills />
      <Services />
      <ServiceContact />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
