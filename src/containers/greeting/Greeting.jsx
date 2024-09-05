import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import FeelingProud from "./FeelingProud";

export default function Greeting({ theme }) {
  return (
    <motion.div
      className="greet-main"
      id="greeting"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
            )}
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>
            <SocialMedia theme={theme} />
            <div className="portfolio-repo-btn-div">
              <Button
                text="⭐ Star Me On Github"
                newTab={true}
                href={greeting.portfolio_repository}
                theme={theme}
                className="portfolio-repo-btn"
              />
            </div>
            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
          </div>
        </div>
        <div className="greeting-image-div">
          <FeelingProud theme={theme} />
        </div>
      </div>
    </motion.div>
  );
}
