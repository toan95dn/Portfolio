import React from "react";
import ProjectCardStyle from "./ProjectCardStyle.scss";

const ProjectCard = ({ project }) => {
  let allToolsUsed = "";
  project.tools.forEach((project) => (allToolsUsed += project + ", "));
  allToolsUsed = allToolsUsed.substr(0, allToolsUsed.length - 2) + ".";

  return (
    <div className="card">
      <img src={project.imageSource} alt="" />
      <div className="projectInfo">
        <div className="projectDescsription">
          <h2>{project.title}</h2>
          <p>{project.detail}</p>
          <p>
            <b>Built with:</b> {allToolsUsed}
          </p>
        </div>
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
    </div>
  );
};

export default ProjectCard;
