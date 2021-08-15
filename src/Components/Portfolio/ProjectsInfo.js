import pathFindingImg from "../Images/pathFinding.jpg";
import todoImg from "../Images/todo.jpg";

class Project {
  constructor(imageSource, title, detail, tools, githubLink, demoLink) {
    this.imageSource = imageSource;
    this.title = title;
    this.detail = detail;
    this.tools = tools;
    this.githubLink = githubLink;
    this.demoLink = demoLink;
  }
}

const pathFindingProject = new Project(
  pathFindingImg,
  "Path Finding Visualizer",
  "Visualize path findings and maze generating algorithms, enable different rules for choosing path",
  "C++, SDL2",
  "https://github.com/toan95dn/PathFindingVisualizer",
  "https://www.youtube.com/watch?v=HU0FjhLMfPM"
);

export default pathFindingProject;
