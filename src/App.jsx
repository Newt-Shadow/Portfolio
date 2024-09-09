import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Service from "./components/Services";
import Projects from "./components/Projects";
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
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      

      </div>
    </Router>
  );
};

export default App;
