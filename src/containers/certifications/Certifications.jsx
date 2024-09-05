import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

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
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => (
          <CertificationCard key={cert.id} certificate={cert} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
