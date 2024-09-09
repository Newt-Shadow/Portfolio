import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import SkillSection from "./softwareSkills/SkillSection";


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

const Skills = () => {
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
    <section className="min-h-fit bg-bg-primaryLinear" id="skills">
      {/* modal */}
     

      {/* content */}
      <div className="md:container px-5  py-7">
        <h2 className="title" data-aos="fade-down">
         
        </h2>
        <h2 className="subtitle" data-aos="fade-down">
          what I do ?
        </h2>
        <br />
       
      </div>
      <SkillSection />
    </section>
  );
};

export default Skills;
