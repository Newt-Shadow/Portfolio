import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.jsx";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./ExperienceAccordion.css";

<<<<<<< Updated upstream
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
=======
function ExperienceAccordion({ theme, sections }) {
  return (
    <div className="experience-accord">
      <Accordion>
        {sections.map((section) => (
          <Panel
            className="accord-panel"
            title={section.title}
            key={section.title}
            overrides={{
              Header: {
                style: () => ({
                  backgroundColor: theme.body,
                  border: `1px solid`,
                  borderRadius: `5px`,
                  borderColor: theme.headerColor,
                  marginBottom: `3px`,
                  fontFamily: "Google Sans Regular",
                  color: theme.text,
                  ":hover": {
                    color: theme.secondaryText,
                  },
                }),
              },
              Content: {
                style: () => ({
                  backgroundColor: theme.body,
                }),
              },
            }}
          >
            {section.experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                index={index}
                totalCards={section.experiences.length}
                experience={experience}
                theme={theme}
              />
            ))}
          </Panel>
        ))}
      </Accordion>
    </div>
  );
>>>>>>> Stashed changes
}

export default ExperienceAccordion;
