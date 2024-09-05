import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import ProjectsImg from "./ProjectsImg";
import { greeting, projectsHeader, publicationsHeader, publications } from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Projects({ theme }) {
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <motion.div
        className="basic-projects"
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
              {projectsHeader.description}
            </p>
          </div>
        </div>
      </motion.div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => (
          <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
        ))}
      </div>
      <Button
        text="More Projects"
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
      {publications.data.length > 0 && (
        <motion.div
          className="basic-projects"
          variants={fadeInAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1 className="publications-heading-text" style={{ color: theme.text }}>
                {publicationsHeader.title}
              </h1>
              <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {publicationsHeader.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
      <div className="repo-cards-div-main">
        {publications.data.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} theme={theme} />
        ))}
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Projects;
