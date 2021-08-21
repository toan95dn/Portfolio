import React from "react";
import Projects from "./ProjectsInfo";
import ProjectCard from "./ProjectCard";
import uniqid from "uniqid";
import PorfolioStyle from "./PortfolioStyle.scss";
import { motion } from "framer-motion";
import containerVariants from "../Transition/Transition";

const Portfolio = () => {
  const listProjects = Projects.map((currProject) => {
    return (
      <li key={uniqid()}>
        <ProjectCard project={currProject} />
      </li>
    );
  });
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="portfolioContainer"
    >
      <h1>Portfolio</h1>
      {/* <ul className="filterContainer">
        <li>All</li>
        <li>FullStack</li>
        <li>C++</li>
        <li>Javascript</li>
        <li>React</li>
        <li>FireBase</li>
      </ul> */}
      <ul className="projectContainer">{listProjects}</ul>
    </motion.div>
  );
};

export default Portfolio;
