import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import SkillSection from "./SkillSection";

const Skills = (props) => {
  const theme = props.theme;

  return (
    <div className="main" id="skills">
      <motion.div
        className="skills-header-div"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="skills-header" style={{ color: theme.text }}>
          What I Do?
        </h1>
      </motion.div>
      <SkillSection theme={theme} />
    </div>
  );
};

export default Skills;
