import React from "react";
<<<<<<< Updated upstream
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio";
import Error404 from "../pages/errors/error404/Error";
=======
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
>>>>>>> Stashed changes

const Main = (props) => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
<<<<<<< Updated upstream
            settings.isSplash ? (
              <Splash theme={props.theme} />
            ) : (
              <Home theme={props.theme} />
            )
          }
        />
        <Route path="/home" element={<Home theme={props.theme} />} />
        <Route path="/experience" element={<Experience theme={props.theme} />} />
        <Route path="/education" element={<Education theme={props.theme} />} />
  
        <Route path="/contact" element={<Contact theme={props.theme} />} />
        {settings.isSplash && (
          <Route path="/splash" element={<Splash theme={props.theme} />} />
        )}
        <Route path="/projects" element={<Projects theme={props.theme} />} />
        <Route path="*" element={<Error404 theme={props.theme} />} />
=======
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
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
