const settings = {
  isSplash: true,
};

const seo = {
  title: "Shadow",
  description: "An avid tech enthuse and a web developer",
  og: {
    title: "Anmol Swarup Sahoo",
    type: "website",
    url: "",
  },
};

const greeting = {
  title: "Anmol Swarup Sahoo",
  logo_name: "Newt",
  nickname: "Newt_Shadow",
  subTitle:
    "An avid tech enthuse and a web developer with keen interest on developing scalable social and technical systems.",
  resumeLink:
    "An avid tech enthuse and a web developer",
  portfolio_repository: "https://github.com/Newt-Shadow/Portfolio.git",
  githubProfile: "https://github.com/Newt-Shadow",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Newt-Shadow",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anmol77/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:anmol.s.sahoo@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  /*
    {
      name: "Instagram",
      link: "https://www.instagram.com/anmol_n77/?hl=en",
      fontAwesomeIcon: "fa-instagram",
      backgroundColor: "#E4405F",
    },
    */
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React.Js",
        "⚡ Creating application backend in Node.Js, Express & PostgreSQL",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology, Silchar",
      subtitle: "B.Tech. in Electronics and Instrumentation Engineering",
      logo_path: "nits.png",
      alt_name: "NIT Silchar",
      duration: "2023 - Present",
      descriptions: [
        "⚡ I have studied basic Computer Science subjects like Introduction to Programming, DS, Algorithms, Newtorks, AI etc.",
        "⚡ Apart from this, I have done departmental courses on Embedded Systems, Microprocessors and Micro-controllers, IoT ETC.",
        "⚡ And It's Still going",
      ],
      website_link: "http://nits.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Front-End Development",
      subtitle: "Meta",
      logo_path: "meta.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/VSA8TUSH47FR",
      alt_name: "Meta",
      color_code: "#fff",
    },
    {
      title: "Programming with JavaScript",
      subtitle: "Meta",
      logo_path: "meta.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XT40TSDOUJU3",
      alt_name: "Meta",
      color_code: "#fff",
    },
    {
      title: "Data Structures and Algorithm",
      subtitle: "Geeks For Geeks",
      logo_path: "gfg.png",
      certificate_link: "",
      alt_name: "GfG",
      color_code: "#fff",
    },
    {
      title: "Full Stack Web - Development",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#fff",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#fff",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Position Of Responsibilties",
      work: true,
      experiences: [
        {
          title: "Executive",
          company: "INSEES.",
          company_url: "",
          logo_path: "insees.png",
          duration: "August 2024 - Present",
          location: "NIT Silchar, Assam",
          description: ".",
          color: "#000000",
        },
        {
          title: "Junior Web Developer",
          company: "Google Developer Students Club ( GDSC )",
          company_url: "",
          logo_path: "gdsc.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description: "",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "meta.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
