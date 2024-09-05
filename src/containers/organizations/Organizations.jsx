import React from "react";
import { motion } from "framer-motion";
import "./Organizations.css";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

const Organizations = ({ theme }) => {
  return (
    <div id="organizations">
      <motion.div
        className="organizations-header-div"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="organizations-header" style={{ color: theme.text }}>
          Contributed Organizations
        </h1>
      </motion.div>
      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
};

export default Organizations;
