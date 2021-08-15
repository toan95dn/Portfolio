import React from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
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
      <ul className="projectContainer">
        <ProjectCard />
      </ul>
    </div>
  );
};

export default Portfolio;
