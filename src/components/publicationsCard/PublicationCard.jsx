import React from "react";
import PropTypes from "prop-types";
import "./PublicationCard.css";
import { motion } from "framer-motion";

<<<<<<< Updated upstream
const PublicationCard = ({ pub, theme }) => {
  const openPubinNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer").focus();
  };
=======
export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }
>>>>>>> Stashed changes

  return (
    <motion.div
      className="publication-card-div"
      style={{ backgroundColor: theme.highlight }}
      role="button"
      tabIndex="0"
      onClick={() => openPubinNewTab(pub.url)}
      onKeyPress={(e) => e.key === 'Enter' && openPubinNewTab(pub.url)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="publication-card-content">
        <div className="publication-name-div">
          <p className="publication-name" style={{ color: theme.text }}>
            {pub.name}
          </p>
<<<<<<< Updated upstream
=======
          <div className="publication-details">
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Published on {pub.createdAt.split("T")[0]}
            </p>
          </div>
>>>>>>> Stashed changes
        </div>
        <p className="publication-description" style={{ color: theme.text }}>
          {pub.description}
        </p>
        <div className="publication-details">
          <p className="publication-creation-date subTitle" style={{ color: theme.secondaryText }}>
            Published on {pub.createdAt.split("T")[0]}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

PublicationCard.propTypes = {
  pub: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    highlight: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    secondaryText: PropTypes.string.isRequired
  }).isRequired
};

export default PublicationCard;
