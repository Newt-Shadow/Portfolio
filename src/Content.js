// import images
import Hero_person from "./assets/images/Hero/person2.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "/",
      icon: TbSmartHome,
    },
    {
      link: "/education",
      icon: BiUser,
    },
    {
      link: "/services",
      icon: RiServiceLine,
    },
    {
      link: "/projects",
      icon: RiProjectorLine,
    },
    {
      link: "/contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  
  hero: {
    title: "Anmol Swarup Sahoo",
    firstName: "Newt",
    LastName: "Shadow",
    btnText: "Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "</>",
        text: "Full Stack Web Developer",
      },
      {
        count: ">/<",
        text: "Competetive Programmer + Tech Enthuse",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },

  education: {
    title: "Education ",
    subtitle: "Basic Qualification and Certifcations",

    education_content: [
      {
        title: "National Institute of Technology, Silchar",
        subtitle: "B.Tech. in Electronics and Instrumentation Engineering",
        para: "⚡ I have studied basic Computer Science subjects like Introduction to Programming, DS, Algorithms, Newtorks, AI etc.<br />⚡ Apart from this, I have done departmental courses on Embedded Systems, Microprocessors and Micro-controllers, IoT ETC.<br />⚡And It's Still going",
       
      },
      

    ],
  },

  

  services: {
    title: "What I do ?",
    subtitle: "",
    service_content: [
      {
        title: "Full Stack Development",
        para: "⚡ Building responsive website front end using React.Js<br />⚡ Creating application backend in Node.Js, Express & PostgreSQL<br />⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        logo: services_logo1,
        
      },
      {
        title: "UI/UX Design",
        para: "⚡ Designing highly attractive user interface for web applications. <br />⚡ Customizing logo designs and building logos from scratch <br />⚡ Creating the flow of application functionalities to optimize user experience",
        logo: services_logo2,
      },

    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Projects",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
