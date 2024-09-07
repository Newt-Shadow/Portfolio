import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";
import { degrees } from "../../portfolio.jsx";

<<<<<<< Updated upstream
const Educations = ({ theme }) => {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </motion.div>
=======
function Educations({ theme }) {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
>>>>>>> Stashed changes
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => (
          <DegreeCard key={degree.id} degree={degree} theme={theme} />
        ))}
      </div>
    </div>
  );
<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes

export default Educations;
