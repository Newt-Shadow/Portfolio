import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import { greeting } from "../../portfolio.jsx";
/* eslint-disable jsx-a11y/accessible-emoji */

function Footer(props) {
  return (
    <div className="footer-div">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </motion.div>
    </div>
  );
}

export default Footer;
