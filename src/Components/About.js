import React from "react";
import AboutStyle from "./AboutStyle.scss";
import Avatar from "./Images/Me.jpg";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
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
} from "react-icons/si";

const About = () => {
  const currStringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const tools = [];

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
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<strong>CS student 👨‍🎓</strong>")
                .pauseFor(1200)
                .deleteAll()
                .typeString("<strong>Coder 💻</strong>")
                .pauseFor(1200)
                .deleteAll()
                .typeString("<strong>Guitar player 🎸</strong>")
                .pauseFor(1200)
                .start();
            }}
          />
        </div>
        <p>
          I am currently a first year transfer student at UC Sandiego. I am
          looking for an internship to improve my knowledge in software and web
          development. Besides studying at school, I like to expand my knowledge
          by doing side projects. Outside of coding, I love playing the guitar
          and working out.
        </p>

        <ul className="skillsContainer">
          <li>
            <SiCplusplus color="#009688" />
          </li>
          <li>
            <SiJava color="#f44336" />
          </li>
          <li>
            <SiJavascript color="#f7df1e" />
          </li>
          <li>
            <SiReact color="#03a9f4" />
          </li>
          <li>
            <SiCss3 color="#ffeb3b" />
          </li>
          <li>
            <SiHtml5 color="#ff9800" />
          </li>
          <li>
            <SiSass color="#ff4f6e" />
          </li>
          <li>
            <SiWebpack color="#03a9f4" />
          </li>
          <li>
            <SiBabel color="#f6b800" />
          </li>
          <li>
            <SiNpm color="#ff3021" />
          </li>
          <li>
            <SiFirebase color="#ff9800" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
