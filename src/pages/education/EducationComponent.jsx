import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites, certifications } from "../../portfolio";
import "./EducationComponent.css";

<<<<<<< Updated upstream
const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Education({ theme }) {
=======
const Education = ({ theme }) => {
>>>>>>> Stashed changes
  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="basic-education">
<<<<<<< Updated upstream
        <motion.div
          className="heading-div"
          variants={fadeInAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="heading-img-div">
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Basic Qualification and Certifications
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
        </motion.div>
=======
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              {/* <img
                src={require("../../assets/images/education.svg")}
                alt=""
              /> */}
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
            </div>
          </div>
        </Fade>
>>>>>>> Stashed changes
        <Educations theme={theme} />
        {certifications.certifications.length > 0 && (
          <Certifications theme={theme} />
        )}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
<<<<<<< Updated upstream
}
=======
};
>>>>>>> Stashed changes

export default Education;
