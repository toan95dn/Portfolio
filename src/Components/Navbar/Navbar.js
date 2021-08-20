import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

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

  function closeSideNavLink() {
    setOpen(false);
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
            <li onClick={closeSideNavLink}>
              <NavLink to="/About">
                <AiOutlineUser className="icons" />
                &nbsp;About
              </NavLink>
            </li>
            <li onClick={closeSideNavLink}>
              <NavLink to="/Portfolio">
                <AiOutlineCode className="icons" />
                &nbsp;Portfolio
              </NavLink>
            </li>
            <li onClick={closeSideNavLink}>
              <NavLink to="/Contact">
                <AiOutlineMail className="icons" />
                &nbsp;Contact
              </NavLink>
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
