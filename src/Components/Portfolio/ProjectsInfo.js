import pathFindingImg from "../Images/pathFinding.jpg";
import todoImg from "../Images/todo.jpg";
import icemanImg from "../Images/iceman.jpg";
import tictactoeImg from "../Images/tictactoe.jpg";
import restaurantImg from "../Images/restaurant.jpg";
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
  "Visualize path finding (A*,BFS,DFS,Dijkstra,Greedy BFS) and maze generating algorithms (Recursive Division/Backtracking ), enable different rules for choosing path (Cross corner, Diagnoal).",
  ["C++", "SDL2"],
  "https://github.com/toan95dn/PathFindingVisualizer",
  "https://www.youtube.com/watch?v=HU0FjhLMfPM"
);

const todoListProject = new Project(
  todoImg,
  "To-Do List",
  "Allows users to create/move/delete tasks and group them in projects. Side panel can filter tasks due today/week. Integrates Firebase for user authentication and database.",
  ["Javascript", "CSS", "Firebase", "Webpack", "Babel"],
  "https://github.com/toan95dn/BetterTodoApp",
  "https://toan95dn.github.io/BetterTodoApp/"
);

const icemanProject = new Project(
  icemanImg,
  "Iceman (Group CS project)",
  "Iceman needs to find all the oil barrel to win. The protestors can smell him at a certain distance(using path finding). Iceman can pick up items to fight/annoy protestor.",
  ["C++"],
  "https://github.com/Xan-22/IceMan.git",
  "https://youtu.be/ebFYCahk4cc"
);

const tictactoeProject = new Project(
  tictactoeImg,
  "Tictactoe w/Minimax",
  "Tictactoe game with 3 modes (2 players, vs Computer (easy), and vs Computer (unbeatable). The unbeatable mode applies minimax algorithm to calculate the best move.",
  ["Javascript", "CSS"],
  "https://github.com/toan95dn/TicTacToe-minimax",
  "https://toan95dn.github.io/TicTacToe-minimax/"
);

const restaurantProject = new Project(
  restaurantImg,
  "Restaurant Page",
  "A webpage for a fake restaurant. I built this to practice my DOM skills and Webpack.",
  ["Javascript", "CSS", "Webpack"],
  "https://github.com/toan95dn/RestaurantPage",
  "https://toan95dn.github.io/RestaurantPage/"
);

const Projects = [
  pathFindingProject,
  todoListProject,
  icemanProject,
  tictactoeProject,
  restaurantProject,
];

export default Projects;
