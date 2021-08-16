import React from "react";
import Projects from "./ProjectsInfo";
import ProjectCard from "./ProjectCard";
import uniqid from "uniqid";

const Portfolio = () => {
  const listProjects = Projects.map((currProject) => {
    return (
      <li key={uniqid()}>
        <ProjectCard project={currProject} />
      </li>
    );
  });
  return (
    <div className="portfolioContainer">
      <h2>Portfolio</h2>
      <ul className="filterContainer">
        <li>All</li>
        <li>FullStack</li>
        <li>C++</li>
        <li>Javascript</li>
        <li>React</li>
        <li>FireBase</li>
      </ul>
      <ul className="projectContainer">{listProjects}</ul>
    </div>
  );
};

export default Portfolio;
