import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
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
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            settings.isSplash ? (
              <Splash {...props} theme={theme} />
            ) : (
              <Home {...props} theme={theme} />
            )
          }
        />
        <Route
          path="/home"
          render={(props) => <Home {...props} theme={theme} />}
        />
        <Route
          path="/experience"
          exact
          render={(props) => <Experience {...props} theme={theme} />}
        />
        <Route
          path="/education"
          render={(props) => <Education {...props} theme={theme} />}
        />
        <Route
          path="/opensource"
          render={(props) => <Opensource {...props} theme={theme} />}
        />
        <Route
          path="/contact"
          render={(props) => <Contact {...props} theme={theme} />}
        />

        {settings.isSplash && (
          <Route
            path="/splash"
            render={(props) => <Splash {...props} theme={theme} />}
          />
        )}

        <Route
          path="/projects"
          render={(props) => <Projects {...props} theme={theme} />}
        />
        <Route
          path="*"
          render={(props) => <Error404 {...props} theme={theme} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
