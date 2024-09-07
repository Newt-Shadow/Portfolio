import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

<<<<<<< Updated upstream
const GetSkillSvg = ({ fileName, theme }) => {
  if (fileName === "DataScienceImg") return <DataScienceImg theme={theme} />;
  if (fileName === "FullStackImg") return <FullStackImg theme={theme} />;
  if (fileName === "CloudInfraImg") return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
};
=======
function GetSkillSvg({ fileName, theme }) {
  if (fileName === "DataScienceImg") return <DataScienceImg theme={theme} />;
  else if (fileName === "FullStackImg") return <FullStackImg theme={theme} />;
  else if (fileName === "CloudInfraImg") return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
}
>>>>>>> Stashed changes

const SkillSection = ({ theme }) => {
  return (
    <div>
      {skills.data.map((skill, i) => (
        <div key={i} className="skills-main-div">
<<<<<<< Updated upstream
          <motion.div
            className="skills-image-div"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GetSkillSvg fileName={skill.fileName} theme={theme} />
          </motion.div>

          <div className="skills-text-div">
            <motion.h1
              className="skills-heading"
              style={{ color: theme.text }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {skill.title}
            </motion.h1>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <SoftwareSkill logos={skill.softwareSkills} />
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {skill.skills.map((skillSentence, i) => (
                <p
                  key={i}
                  className="subTitle skills-text"
                  style={{ color: theme.secondaryText }}
                >
                  {skillSentence}
                </p>
              ))}
            </motion.div>
=======
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <GetSkillSvg fileName={skill.fileName} theme={theme} />
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                {skill.title}
              </h1>
            </Fade>
            <Fade right duration={1500}>
              <SoftwareSkill logos={skill.softwareSkills} />
            </Fade>
            <Fade right duration={2000}>
              <div>
                {skill.skills.map((skillSentence, i) => (
                  <p
                    key={i}
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                ))}
              </div>
            </Fade>
>>>>>>> Stashed changes
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
