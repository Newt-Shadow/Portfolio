import { content } from "../Content";
import { createElement, useState } from "react";
import Modal from "react-modal";
import Certifications from "./certifications/Certifications.jsx";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "23rem",
      width: "90%",
    },
    overlay: {
      padding: "2rem",
    },
  };
  Modal.setAppElement("#root");

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
  

const Education = ({theme=blueTheme}) => {
  const { education } = content;
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <section id="education" className="bg-body">
      <div className="md:container px-5 py-14  text-center">
      <h1 className="text-[40px] leading-[1.1] font-google-sans md:text-[35px] sm:text-[30px]" style={{ color: theme.text }} data-aos="fade-down">
      {education.title}
        </h1>
        <h4 className="subtitle" data-aos="fade-down">
          {education.subtitle}
        </h4>

        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {education.education_content.map((content, i) => (
            
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              
              <h5 className="my-3">{content.title}  </h5>
              <h5 className="my-3">{content.subtitle}</h5>
              
              <p
                className="leading-7" style={{textAlign:'left'}}
                dangerouslySetInnerHTML={{ __html: content.para }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    <Certifications />

    </>
    
  );
};


export default Education;
