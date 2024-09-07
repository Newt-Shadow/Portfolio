import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

<<<<<<< Updated upstream
function CompetitiveSites ({ logos }) {
=======
function CompetitiveSites({ logos }) {
>>>>>>> Stashed changes
  return (
    <div className="competitive-sites-main-div">
      <ul className="dev-icons">
        {logos.map((logo) => (
          <OverlayTrigger
            key={logo.siteName}
            placement={"top"}
            style={{ marginBottom: "5px" }}
            overlay={
              <Tooltip id={`tooltip-top`}>
                <strong>{logo.siteName}</strong>
              </Tooltip>
            }
          >
            <li className="competitive-sites-inline" name={logo.siteName}>
              <a
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              </a>
            </li>
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

export default CompetitiveSites;
