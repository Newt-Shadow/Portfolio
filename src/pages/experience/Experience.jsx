import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import ExperienceImg from "./ExperienceImg";
import { Fade } from "react-reveal";
import "./Experience.css";
import { experience } from "../../portfolio";

function Experience(props) {
  return (
    <div className="experience-main">
      <Header theme={props.theme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
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
        </Fade>
      </div>
      <ExperienceAccordion sections={experience.sections} theme={props.theme} />
      <Footer theme={props.theme} onToggle={props.onToggle} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Experience;
