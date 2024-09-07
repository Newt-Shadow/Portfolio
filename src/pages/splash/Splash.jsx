import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";
import LoaderLogo from "../../components/Loader/LoaderLogo.jsx";

function AnimatedSplash({ theme }) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.splashBg }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

const Splash = ({ theme }) => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5500);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect, navigate]);

  return <AnimatedSplash theme={theme} />;
};

export default Splash;
