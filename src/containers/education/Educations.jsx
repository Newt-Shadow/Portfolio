import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";
import { degrees } from "../../portfolio.jsx";
import { Fade } from "react-reveal";

function Educations({ theme }) {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => (
          <DegreeCard key={degree.id} degree={degree} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default Educations;
