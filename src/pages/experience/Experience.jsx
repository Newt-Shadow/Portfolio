import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import ExperienceImg from "./ExperienceImg";
=======
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopButton from "../../components/topButton/TopButton.jsx";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.jsx";
>>>>>>> Stashed changes
import "./Experience.css";
import { experience } from "../../portfolio";

<<<<<<< Updated upstream
const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Experience(props) {
  return (
    <div className="experience-main">
      <Header theme={props.theme} />
      <motion.div
        className="basic-experience"
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="experience-heading-div">
          <div className="experience-heading-img-div">
            <ExperienceImg theme={props.theme} />
          </div>
          <div className="experience-heading-text-div">
            <h1
              className="experience-heading-text"
              style={{ color: props.theme.text }}
            >
              {experience.title}
            </h1>
            <h3
              className="experience-heading-sub-text"
              style={{ color: props.theme.text }}
            >
              {experience.subtitle}
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: props.theme.secondaryText }}
            >
              {experience.description}
            </p>
          </div>
        </div>
      </motion.div>
      <ExperienceAccordion sections={experience.sections} theme={props.theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}
=======
const Experience = ({ theme, onToggle }) => {
  return (
    <div className="experience-main">
      <Header theme={theme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience.subtitle}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience.sections} theme={theme} />
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};
>>>>>>> Stashed changes

export default Experience;
