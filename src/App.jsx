import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
         
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
         
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="p-3 text-center">
          <h6 className="mb-3">JOHN ALEX</h6>
          <p>codeaprogram © All CopyRights Reserved 2022</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
