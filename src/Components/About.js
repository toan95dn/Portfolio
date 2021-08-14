import React from "react";
import AboutStyle from "./AboutStyle.scss";
import Avatar from "./Images/Me.jpg";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const About = () => {
  const currStringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <div className="aboutContainer">
      <img src={Avatar} alt="" />
      <div>
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
                .typeString("<strong>coder 💻</strong>")
                .pauseFor(1200)
                .deleteAll()
                .typeString("<strong>guitar player 🎸</strong>")
                .pauseFor(1200)
                .start();
            }}
          />
        </div>
        I am currently a first year transfer student at UC Sandiego. I am
        looking for an internship to improve my knowledge in software and web
        development. Besides studying at school, I like to expand my knowledge
        by doing side projects. Outside of coding, I love playing the guitar and
        working out.
      </div>
    </div>
  );
};

export default About;
