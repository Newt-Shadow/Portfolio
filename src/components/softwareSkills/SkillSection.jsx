import React, { useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from '@iconify/react';
import Aos from "aos";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import './Skills.css';

const blueTheme = {
  body: "#EDF9FE",
  text: "#001C55",
  expTxtColor: "#000a12",
  highlight: "#A6E1FA",
  dark: "#00072D",
  secondaryText: "#7F8DAA",
  imageHighlight: "#0E6BA8",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#0A2472",
  headerColor: "#0E6BA877",
  splashBg: "#001C55",
};

const GetSkillSvg = ({ fileName, theme }) => {
  switch (fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={theme} />;
    case "FullStackImg":
      return <FullStackImg theme={theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={theme} />;
    default:
      return <DesignImg theme={theme} />;
  }
};

const SoftwareSkill = ({ logos }) => (
  <div className="software-skills-main-div">
    <ul className="dev-icons">
      {logos.map((logo) => (
        <OverlayTrigger
          key={logo.skillName}
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>{logo.skillName}</strong>
            </Tooltip>
          }
        >
          <li className="software-skill-inline" name={logo.skillName}>
            {logo.fontAwesomeClassname && (
              <Icon
                icon={logo.fontAwesomeClassname}
                style={logo.style}
              />
            )}
            {!logo.fontAwesomeClassname && logo.imageSrc && (
              <img
                className="skill-image"
                style={logo.style}
                src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                alt={logo.skillName}
              />
            )}
          </li>
        </OverlayTrigger>
      ))}
    </ul>
  </div>
);

const SkillSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  const skills = {
    data: [
      {
        title: "Full Stack Development",
        fileName: "FullStackImg",
        skills: [
          "⚡ Building responsive website front end using React.Js",
          "⚡ Creating application backend in Node.Js, Express & PostgreSQL",
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        ],
        softwareSkills: [
          {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: { color: "#E34F26" },
          },
          {
            skillName: "CSS3",
            fontAwesomeClassname: "fa-css3",
            style: { color: "#1572B6" },
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: { backgroundColor: "#000000", color: "#F7DF1E" },
          },
          {
            skillName: "ReactJS",
            fontAwesomeClassname: "simple-icons:react",
            style: { color: "#61DAFB" },
          },
          {
            skillName: "NodeJS",
            fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
            style: { color: "#339933" },
          },
          {
            skillName: "NPM",
            fontAwesomeClassname: "simple-icons:npm",
            style: { color: "#CB3837" },
          },
        ],
      },
      {
        title: "UI/UX Design",
        fileName: "DesignImg",
        skills: [
          "⚡ Designing highly attractive user interface for web applications",
          "⚡ Customizing logo designs and building logos from scratch",
          "⚡ Creating the flow of application functionalities to optimize user experience",
        ],
        softwareSkills: [
          {
            skillName: "Figma",
            fontAwesomeClassname: "simple-icons:figma",
            style: { color: "#F24E1E" },
          },
          {
            skillName: "Adobe Illustrator",
            fontAwesomeClassname: "simple-icons:adobeillustrator",
            style: { color: "#FF7C00" },
          },
          {
            skillName: "Canva",
            fontAwesomeClassname: "simple-icons:canva",
            style: { color: "#000000" },
          },
        ],
      },
    ],
  };

  return (
    <div>
      {skills.data.map((skill, i) => (
        <div key={i} className="skills-main-div">
          <div className="skills-image-div" data-aos="fade-down">
            <GetSkillSvg fileName={skill.fileName} theme={blueTheme} />
          </div>
          <div className="skills-text-div" data-aos="fade-down">
            <h1 className="skills-heading" style={{ color: blueTheme.text , paddingBottom:"1.2rem" }}>
              {skill.title}
            </h1>
            <SoftwareSkill logos={skill.softwareSkills} />
            <div>
              {skill.skills.map((skillSentence, i) => (
                <p
                  key={i}
                  className="subTitle skills-text"
                  style={{ color: blueTheme.secondaryText }}
                >
                  {skillSentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
