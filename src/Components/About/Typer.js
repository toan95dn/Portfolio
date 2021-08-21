import React from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const Typer = () => {
  const currStringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <div className="typeWriter">
      Hi, I am a&nbsp;
      <Typewriter
        options={{
          loop: true,
          stringSplitter: currStringSplitter,
          color: "red",
          cursorClassName: "Typewriter__cursor",
          autoStart: true,
          strings: [
            `<strong style="color: #0099e5"> CS student 👨‍🎓</strong>`,
            `<strong style="color: #0099e5">Developer 💻</strong>`,
            `<strong style="color: #0099e5">Guitar player 🎸</strong>`,
          ],
        }}
      />
    </div>
  );
};

export default Typer;
