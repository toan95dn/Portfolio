import React, { useEffect, useState } from "react";
import AboutStyle from "./AboutStyle.scss";
import Avatar from "../Images/Me.jpg";
import Typer from "./Typer";
import DescribeMyself from "./DescribeMyself";
import ToolViews from "./ToolViews";
import { motion } from "framer-motion";
import AllContainerVariants from "../Transition/Transition";

const About = () => {
  return (
    <motion.div
      variants={AllContainerVariants[1]}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="aboutContainer"
    >
      <img src={Avatar} alt="" />

      <div className="infoContainer">
        <div>
          <Typer />
          <h3>About Me</h3>
          <DescribeMyself />
        </div>

        <div>
          <h3>Skills</h3>
          <ToolViews />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
