import React from "react";
import sampleImage from "../Images/pathFinding.jpg";

import ProjectCardStyle from "./ProjectCardStyle.scss";

const ProjectCard = () => {
  return (
    <div className="card">
      <img src={sampleImage} alt="" />
      <h2>Title</h2>
      <p>
        Allows users to create tasks with due date, details, and grouping by
        projects. Side panel filters by daily/weekly tasks and project
        categories. Integrates user sign-up, authentication, and Firestore
        database.
      </p>
      <p>JS,Wp,Bable,a ,a,sda,,</p>
      <div className="buttonsContainer">
        <button className="code">Code</button>
        <button className="demo">Demo</button>
      </div>
    </div>
  );
};

export default ProjectCard;
