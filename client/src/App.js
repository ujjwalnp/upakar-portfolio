import React from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
// import Portfolio from './components/Portfolio';
import ServiceContact from "./components/ServiceContact";
// import Testimonial from './components/Testimonial';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      {/* <Portfolio /> */}
      <ServiceContact />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
