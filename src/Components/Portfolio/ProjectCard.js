import React from "react";
import sampleImage from "../Images/pathFinding.jpg";

import ProjectCardStyle from "./ProjectCardStyle.scss";
import pathFindingProject from "./ProjectsInfo";

const ProjectCard = ({ project }) => {
  let allToolsUsed = "";
  project.tools.forEach((project) => (allToolsUsed += project + ", "));
  allToolsUsed = allToolsUsed.substr(0, allToolsUsed.length - 2) + ".";

  return (
    <div className="card">
      <img src={project.imageSource} alt="" />
      <h2>{project.title}</h2>
      <p>{project.detail}</p>
      <p>Built with: {allToolsUsed}</p>
      <div className="buttonsContainer">
        <button
          className="code"
          onClick={() => {
            window.open(project.githubLink);
          }}
        >
          Code
        </button>
        <button
          className="demo"
          onClick={() => {
            window.open(project.demoLink);
          }}
        >
          Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
