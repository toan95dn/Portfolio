import React from "react";
import AboutStyle from "./AboutStyle.scss";
import Avatar from "../Images/Me.jpg";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
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

const About = () => {
  const currStringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const tools = [
    <SiCplusplus color="#009688" />,
    <SiJava color="#f44336" />,
    <SiJavascript color="#f7df1e" />,
    <SiReact color="#03a9f4" />,
    <SiCss3 color="#ffeb3b" />,
    <SiHtml5 color="#ff9800" />,
    <SiSass color="#ff4f6e" />,
    <SiWebpack color="#03a9f4" />,
    <SiBabel color="#f6b800" />,
    <SiNpm color="#ff3021" />,
    <SiFirebase color="#ff9800" />,
    <SiGit color="#ff2222" />,
    <SiGithub color="#4caf50" />,
  ];

  const listToolsViews = tools.map((tool) => <li key={uniqid()}>{tool}</li>);

  return (
    <div className="aboutContainer">
      <img src={Avatar} alt="" />

      <div className="infoContainer">
        <div className="typeWriter">
          Hi, I am a&nbsp;
          <Typewriter
            options={{
              loop: true,
              stringSplitter: currStringSplitter,
              color: "red",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<strong style="color: #ff5722"> CS student 👨‍🎓</strong>`
                )
                .pauseFor(1200)
                .deleteAll()
                .typeString(`<strong style="color: #ff5722">Coder 💻</strong>`)
                .pauseFor(1200)
                .deleteAll()
                .typeString(
                  `<strong style="color: #ff5722">Guitar player 🎸</strong>`
                )
                .pauseFor(1200)
                .start();
            }}
          />
        </div>

        <div>
          <h2>About Me</h2>
          <p>
            I am currently student at UC San Diego. I am looking for an
            internship to improve my knowledge in software and web development.
            Besides studying at school, I like to expand my knowledge by doing
            side projects. Outside of coding, I love playing the guitar and
            working out.
          </p>
        </div>

        <div>
          <h2>Skills</h2>
          <ul className="skillsContainer">{listToolsViews}</ul>
        </div>
      </div>
    </div>
  );
};

export default About;
