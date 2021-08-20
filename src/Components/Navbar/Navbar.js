import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import NavbarStyle from "./NavbarStyle.scss";

import {
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineCodepen,
} from "react-icons/ai";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={() => {
            setOpen(isOpen === true ? false : true);
          }}
        />
      </div>

      <h2>
        <AiOutlineCodepen color="#0099e5" />
        Toan Pham
      </h2>

      <div className={`linksContainer ${isOpen ? "active" : ""}`}>
        <nav className="tabs">
          <ul>
            <li>
              <Link to="/About" onClick={() => console.log("jjjj")}>
                <AiOutlineUser className="icons" />
                &nbsp;About
              </Link>
            </li>
            <li>
              <Link to="/Portfolio">
                <AiOutlineCode className="icons" />
                &nbsp;Portfolio
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <AiOutlineMail className="icons" />
                &nbsp;Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="socialMedia">
          <ul>
            <li onClick={() => window.open("https://github.com/toan95dn")}>
              <AiOutlineGithub className="icons" />
            </li>
            <li
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/pham-duc-toan-14338a122/"
                )
              }
            >
              <AiOutlineLinkedin className="icons" />
            </li>
            <li
              onClick={() => window.open("https://www.facebook.com/toan95dn")}
            >
              <AiOutlineFacebook className="icons" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
