import React from "react";
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

const Main = (props) => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={
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
        <Route path="/opensource" element={<Opensource theme={props.theme} />} />
        <Route path="/contact" element={<Contact theme={props.theme} />} />
        {settings.isSplash && (
          <Route path="/splash" element={<Splash theme={props.theme} />} />
        )}
        <Route path="/projects" element={<Projects theme={props.theme} />} />
        <Route path="*" element={<Error404 theme={props.theme} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
