import React from "react";
import sampleImage from "../Images/pathFinding.jpg";

import ProjectCardStyle from "./ProjectCardStyle.scss";
import pathFindingProject from "./ProjectsInfo";

const ProjectCard = ({ project }) => {
  console.log(project.title);
  return (
    <div className="card">
      <img src={project.imageSource} alt="" />
      <h2>{project.title}</h2>
      <p>{project.detail}</p>
      <p>Built with: {project.tools}</p>
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
