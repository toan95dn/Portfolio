import React from "react";

import NavbarStyle from "./NavbarStyle.scss";
import { BsInfoCircle, BsCodeSlash, BsPhone } from "react-icons/bs";
import {
  AiOutlineInfoCircle,
  AiOutlineCode,
  AiOutlineContacts,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <header>
      <h2>Toan Pham</h2>
      <div className="linksContainer">
        <nav className="tabs">
          <ul>
            <li>
              <AiOutlineInfoCircle className="icons" />
              About Me
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
