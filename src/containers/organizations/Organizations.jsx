import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import "./Organizations.css";
import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";

<<<<<<< Updated upstream
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
=======
function Organizations(props) {
  const { theme } = props;

  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="organizations-header" style={{ color: theme.text }}>
            Contributed Organizations
          </h1>
        </Fade>
      </div>
      <OrganizationList logos={OrganizationsData.data} />
    </div>
  );
}
>>>>>>> Stashed changes

export default Organizations;
