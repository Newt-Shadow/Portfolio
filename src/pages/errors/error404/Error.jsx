import React from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
=======
>>>>>>> Stashed changes
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import "./Error.css";

<<<<<<< Updated upstream
const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Error(props) {
  return (
    <div className="error-main">
      <Header theme={props.theme} />
      <motion.div
        className="error-class"
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Woops</h1>
        <h1 className="error-404">404</h1>
        <p>The requested page is unavailable at the moment!</p>
        <Link
          className="main-button"
          to="/home"
          style={{
            color: props.theme.body,
            backgroundColor: props.theme.text,
            border: `solid 1px ${props.theme.text}`,
            display: "inline-flex",
          }}
        >
          Go Home
        </Link>
      </motion.div>
      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}
=======
const Error = ({ theme }) => {
  return (
    <div className="error-main">
      <Header theme={theme} />
      <div className="error-class">
        <Fade bottom duration={2000} distance="40px">
          <h1>Woops</h1>
          <h1 className="error-404">404</h1>
          <p>The requested page is unavailable at the moment!</p>
          <Link
            className="main-button"
            to="/home"
            style={{
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
              display: "inline-flex",
            }}
          >
            Go Home
          </Link>
        </Fade>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};
>>>>>>> Stashed changes

export default Error;
