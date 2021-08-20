import React from "react";
import { useState, useEffect } from "react";
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
import Contact from "../Contact/Contact";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  function handleToggleHamburger() {
    setOpen(isOpen === true ? false : true);
  }

  const [Tabs, setTabs] = useState({
    Portfolio: false,
    About: false,
    Contact: false,
  });

  function handleChangeTab(tabName) {
    for (let Tab in Tabs) {
      Tabs[`${Tab}`] = false;
    }

    Tabs[`${tabName}`] = true;

    setTabs({
      Portfolio: Tabs["Portfolio"],
      About: Tabs["About"],
      Contact: Tabs["Contact"],
    });
  }

  return (
    <header>
      <div className="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={handleToggleHamburger}
        />
      </div>

      <h2>
        <AiOutlineCodepen color="#0099e5" />
        Toan Pham
      </h2>

      <div className={`linksContainer ${isOpen ? "active" : ""}`}>
        <nav className="tabs">
          <ul>
            <li
              onClick={() => {
                handleChangeTab("About");
              }}
              className={Tabs["About"] ? "active" : ""}
            >
              <Link to="/About">
                <AiOutlineUser className="icons" />
                &nbsp;About
              </Link>
            </li>
            <li
              onClick={() => {
                handleChangeTab("Portfolio");
              }}
              className={Tabs["Portfolio"] ? "active" : ""}
            >
              <Link to="/Portfolio">
                <AiOutlineCode className="icons" />
                &nbsp;Portfolio
              </Link>
            </li>
            <li
              onClick={() => {
                handleChangeTab("Contact");
              }}
              className={Tabs["Contact"] ? "active" : ""}
            >
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
