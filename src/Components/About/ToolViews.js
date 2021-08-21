import React from "react";
import uniqid from "uniqid";
import {
  SiWebpack,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBabel,
  SiReact,
  SiSass,
  SiJava,
  SiNpm,
  SiFirebase,
  SiGithub,
  SiGit,
} from "react-icons/si";

const tools = [
  <SiCplusplus />,
  <SiJava />,
  <SiJavascript />,
  <SiReact />,
  <SiCss3 />,
  <SiHtml5 />,
  <SiSass />,
  <SiWebpack />,
  <SiBabel />,
  <SiNpm />,
  <SiFirebase />,
  <SiGit />,
  <SiGithub />,
];

const listToolsViews = tools.map((tool) => <li key={uniqid()}>{tool}</li>);

const ToolViews = () => {
  return <ul className="skillsContainer">{listToolsViews}</ul>;
};

export default ToolViews;
