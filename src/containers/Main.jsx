import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/HomeComponent.jsx";
import Splash from "../pages/splash/Splash.jsx";
import Education from "../pages/education/EducationComponent.jsx";
import Experience from "../pages/experience/Experience.jsx";
import Opensource from "../pages/opensource/Opensource.jsx";
import Contact from "../pages/contact/ContactComponent.jsx";
import Projects from "../pages/projects/Projects.jsx";
import { settings } from "../portfolio.jsx";
import Error404 from "../pages/errors/error404/Error.jsx";

const Main = ({ theme }) => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
            settings.isSplash ? <Splash theme={theme} /> : <Home theme={theme} />
          }
        />
        <Route path="/home" element={<Home theme={theme} />} />
        <Route path="/experience" element={<Experience theme={theme} />} />
        <Route path="/education" element={<Education theme={theme} />} />
        <Route path="/opensource" element={<Opensource theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        {settings.isSplash && (
          <Route path="/splash" element={<Splash theme={theme} />} />
        )}
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="*" element={<Error404 theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
