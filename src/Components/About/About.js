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
              cursorClassName: "Typewriter__cursor",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<strong style="color: #0099e5"> CS student 👨‍🎓</strong>`
                )
                .pauseFor(1200)
                .deleteAll()
                .typeString(
                  `<strong style="color: #0099e5">Developer 💻</strong>`
                )
                .pauseFor(1200)
                .deleteAll()
                .typeString(
                  `<strong style="color: #0099e5">Guitar player 🎸</strong>`
                )
                .pauseFor(1200)
                .start();
            }}
          />
        </div>

        <div>
          <h3>About Me</h3>
          <p>
            Hi, my name is Toan. I am currently a computer science student at UC
            San Diego. Besides studying at school, I love to expand my knowledge
            by doing side projects. <br /> <br />I can design and build
            web/desktop applications. I love to make my app interactive,
            responsive, structured, and my code quality high. Thus, sometimes, I
            spend lots of time fixing details and thinking about optimizing my
            code.
            <br />
            <br /> Now, I am looking for an internship to gain more experience
            in software development as well as team collaboration skills. I am
            curious and in love with solving problems. So, getting adapted to a
            new working environment with new technology will not be a problem.
            <br /> <br />
            Outside of coding, I love playing the guitar, especially
            fingerstyle. My favorite artist is Tommy Emanuel. Also, I work out
            every day to maintain a good lifestyle.
          </p>
        </div>

        <div>
          <h3>Skills</h3>
          <ul className="skillsContainer">{listToolsViews}</ul>
        </div>
      </div>
    </div>
  );
};

export default About;
