import React from "react";
import PropTypes from "prop-types";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  static propTypes = {
    logos: PropTypes.arrayOf(
      PropTypes.shape({
        skillName: PropTypes.string.isRequired,
        fontAwesomeClassname: PropTypes.string,
        imageSrc: PropTypes.string,
        style: PropTypes.object,
      })
    ).isRequired,
  };

  render() {
    return (
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => (
            <OverlayTrigger
              key={logo.skillName}
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-${logo.skillName}`}>
                  <strong>{logo.skillName}</strong>
                </Tooltip>
              }
            >
              <li className="software-skill-inline" name={logo.skillName}>
                {logo.fontAwesomeClassname ? (
                  <span
                    className={`iconify ${logo.fontAwesomeClassname}`}
                    style={logo.style}
                    data-inline="false"
                    aria-label={logo.skillName}
                  ></span>
                ) : logo.imageSrc ? (
                  <img
                    className="skill-image"
                    style={logo.style}
                    src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                    alt={logo.skillName}
                  />
                ) : null}
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    );
  }
}

export default SoftwareSkill;
