import React from "react";
import CertificationCard from "../certificationCard/CertificationCard";
import "./Certifications.css";
import gcp_logo from '../../assets/images/gcp_logo.png';
import gfg from '../../assets/images/gfg.png';
import meta from '../../assets/images/meta.png';
import udemy from '../../assets/images/udemy.png';


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

const Certifications = ({ theme = blueTheme }) => {
  const certifications = {
    certifications: [
      {
        title: "Introduction to Front-End Development",
        subtitle: "Meta",
        logo_path: meta,
        certificate_link: "https://www.coursera.org/account/accomplishments/verify/VSA8TUSH47FR",
        alt_name: "meta",
        color_code: "#fff",
      },
      {
        title: "Programming with JavaScript",
        subtitle: "Meta",
        logo_path: meta,
        certificate_link: "https://www.coursera.org/account/accomplishments/verify/XT40TSDOUJU3",
        alt_name: "meta",
        color_code: "#fff",
      },
      {
        title: "Data Structures and Algorithm",
        subtitle: "Geeks For Geeks",
        logo_path: gfg,
        certificate_link: "",
        alt_name: "GfG",
        color_code: "#fff",
      },
      {
        title: "Full Stack Web - Development",
        subtitle: "Udemy",
        logo_path: udemy,
        certificate_link: "",
        alt_name: "udemy",
        color_code: "#fff",
      },
      {
        title: "Kuberenetes on GCP",
        subtitle: "- Qwiklabs",
        logo_path: gcp_logo,
        certificate_link: "",
        alt_name: "GCP",
        color_code: "#fff",
      },
      {
        title: "Cloud Architecture",
        subtitle: "- Qwiklabs",
        logo_path: gcp_logo,
        certificate_link: "",
        alt_name: "GCP",
        color_code: "#fff",
      },
    ],
  };

  return (
    <div className="bg-body p-8" id="certs">
      <div className="mb-6 text-center">
        <h1 className="text-[40px] leading-[1.1] font-google-sans md:text-[35px] sm:text-[30px]" style={{ color: theme.text }}>
          Certifications
        </h1>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, index) => (
          <CertificationCard certificate={cert} theme={theme} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
