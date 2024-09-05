import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.jsx";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <Accordion
              key={section["title"]}
              sx={{
                backgroundColor: theme.body,
                border: `1px solid ${theme.headerColor}`,
                borderRadius: `5px`,
                marginBottom: `3px`,
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: theme.headerColor,
                  color: theme.text,
                  "&:hover": {
                    color: theme.secondaryText,
                  },
                }}
              >
                <Typography>{section["title"]}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: theme.body,
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                      key={index}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
