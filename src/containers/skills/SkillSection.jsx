import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

const GetSkillSvg = ({ fileName, theme }) => {
  if (fileName === "DataScienceImg") return <DataScienceImg theme={theme} />;
  if (fileName === "FullStackImg") return <FullStackImg theme={theme} />;
  if (fileName === "CloudInfraImg") return <CloudInfraImg theme={theme} />;
  return <DesignImg theme={theme} />;
};

const SkillSection = ({ theme }) => {
  return (
    <div>
      {skills.data.map((skill, i) => (
        <div key={i} className="skills-main-div">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
