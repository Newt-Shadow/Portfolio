import React from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";

<<<<<<< Updated upstream
const OrganizationList = ({ logos }) => {
=======
function OrganizationList({ logos }) {
>>>>>>> Stashed changes
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {logos.map((logo) => (
          <OverlayTrigger
            key={logo.login}
<<<<<<< Updated upstream
            placement="top"
=======
            placement={"top"}
>>>>>>> Stashed changes
            overlay={
              <Tooltip id={`tooltip-${logo.login}`}>
                <strong>{logo.login}</strong>
              </Tooltip>
            }
          >
<<<<<<< Updated upstream
            <motion.li
              className="organizations-inline"
              name={logo.login}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                className="organizations-img"
                src={logo.avatarUrl}
                alt={logo.login}
              />
            </motion.li>
=======
            <li className="organizations-inline">
              <Fade bottom duration={2000} distance="40px">
                <img
                  className="organizations-img"
                  src={logo.avatarUrl}
                  alt={logo.login}
                />
              </Fade>
            </li>
>>>>>>> Stashed changes
          </OverlayTrigger>
        ))}
      </ul>
    </div>
  );
<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes

export default OrganizationList;
