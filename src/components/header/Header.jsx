import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.jsx";
import SeoHeader from "../seoHeader/SeoHeader.jsx";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = ({ theme }) => {
  const link = settings.isSplash ? "/splash" : "home";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <SeoHeader />
      <header className="header">
        <NavLink to={link} tag={Link} className="logo">
          <span style={{ color: theme.text }}> &lt;</span>
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          {["home", "education", "experience", "projects", "contact"].map((path) => (
            <li key={path}>
              <NavLink
                to={`/${path}`}
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                {path.charAt(0).toUpperCase() + path.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </motion.div>
  );
};

export default Header;
