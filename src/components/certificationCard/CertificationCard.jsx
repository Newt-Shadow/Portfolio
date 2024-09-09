import React from "react";
import "./CertificationCard.css";


const blueTheme = {
  body: "#EDF9FE",
  text: "#001C55",
  expTxtColor: "#000a12",
  highlight: "#A6E1FA",
  dark: "#00072D",
  secondaryText: "#7F8DAA",
  imageHighlight: "#0E6BA8",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#0A2472",
  headerColor: "#0E6BA877",
  splashBg: "#001C55",
};

const CertificationCard = ({ certificate, theme = blueTheme }) => {
  return (
    <div className="cert-card" >
      <div className="content">
        <a
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="content-overlay"></div>
          <div
            className="cert-header"
            style={{ backgroundColor: certificate.color_code,paddingLeft:"8rem"}}
           
          >
            <img
              className="logo_img"
              src={certificate.logo_path}  
              alt={certificate.alt_name}
              
            />
          </div>
          <div className="content-details fadeIn-top">
            <h3 className="content-title" style={{ color: theme.body }}>
              Certificate
            </h3>
          </div>
        </a>
      </div>
      <div className="cert-body">
        <h2 className="cert-body-title" style={{ color: theme.text }}>
          {certificate.title}
        </h2>
        <h3
          className="cert-body-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {certificate.subtitle}
        </h3>
      </div>
    </div>
  );
};

export default CertificationCard;
