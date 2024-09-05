import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import ExperienceImg from "./ExperienceImg";
import "./Experience.css";
import { experience } from "../../portfolio";

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

export default Experience;
