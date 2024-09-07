import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

<<<<<<< Updated upstream
const Certifications = ({ theme }) => {
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </motion.div>
=======
function Certifications({ theme }) {
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
>>>>>>> Stashed changes
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => (
          <CertificationCard key={cert.id} certificate={cert} theme={theme} />
        ))}
      </div>
    </div>
  );
<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes

export default Certifications;
