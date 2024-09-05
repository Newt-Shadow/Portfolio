import React from "react";
import "./OrganizationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";

const OrganizationList = ({ logos }) => {
  return (
    <div className="organizations-main-div">
      <ul className="dev-icons-orgs">
        {logos.map((logo) => (
          <OverlayTrigger
            key={logo.login}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${logo.login}`}>
                <strong>{logo.login}</strong>
              </Tooltip>
            }
          >
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
          </OverlayTrigger>
        ))}
      </ul>
    </div>
  );
};

export default OrganizationList;
