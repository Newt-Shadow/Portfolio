import React from "react";
<<<<<<< Updated upstream
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import "./DegreeCard.css";

function DegreeCard({ degree, theme }) {
  return (
    <div className="degree-card">
      {degree.logo_path && (
<<<<<<< Updated upstream
        <motion.div
          className="card-img"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(0.9)",
            }}
            src={require(`../../assets/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </motion.div>
      )}
      <motion.div
        className="card-body"
        style={{ width: degree.logo_path ? "90%" : "100%" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div
          className="body-header"
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className="body-header-title">
            <h2 className="card-title" style={{ color: theme.text }}>
              {degree.title}
            </h2>
            <h3 className="card-subtitle" style={{ color: theme.text }}>
              {degree.subtitle}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration" style={{ color: theme.text }}>
              {degree.duration}
            </h3>
          </div>
        </div>
        <div className="body-content">
          {degree.descriptions.map((sentence, index) => (
            <p key={index} className="content-list" style={{ color: theme.text }}>
              {sentence}
            </p>
          ))}
          {degree.website_link && (
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="visit-btn"
                style={{ backgroundColor: theme.headerColor }}
              >
                <p className="btn" style={{ color: theme.text }}>
                  Visit Website
                </p>
              </div>
            </a>
          )}
        </div>
      </motion.div>
=======
        <Flip left duration={2000}>
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assets/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
      )}
      <Fade right duration={2000} distance="40px">
        <div
          className="card-body"
          style={{ width: degree.logo_path ? "90%" : "100%" }}
        >
          <div
            className="body-header"
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => (
              <p
                key={index}
                className="content-list"
                style={{ color: theme.text }}
              >
                {sentence}
              </p>
            ))}
            {degree.website_link && (
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </Fade>
>>>>>>> Stashed changes
    </div>
  );
}

export default DegreeCard;
