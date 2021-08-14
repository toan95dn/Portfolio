import React from "react";

import NavbarStyle from "./NavbarStyle.scss";
import {
  AiOutlineInfoCircle,
  AiOutlineCode,
  AiOutlineContacts,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <header>
      <div className="hamburger">
        <Hamburger />
      </div>

      <h2>Toan Pham</h2>

      <div className="linksContainer">
        <nav className="tabs">
          <ul>
            <li>
              <AiOutlineInfoCircle className="icons" />
              About
            </li>
            <li>
              <AiOutlineCode className="icons" />
              Porfolio
            </li>
            <li>
              <AiOutlineContacts className="icons" />
              Contact
            </li>
          </ul>
        </nav>

        <nav className="socialMedia">
          <ul>
            <li>
              <AiOutlineGithub className="icons" />
            </li>
            <li>
              <AiOutlineLinkedin className="icons" />
            </li>
            <li>
              <AiOutlineFacebook className="icons" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
