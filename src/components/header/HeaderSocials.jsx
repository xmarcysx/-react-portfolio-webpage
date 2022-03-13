import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/marcin-chowaniec/" target="_blank">
        <FaLinkedin fontSize="2rem" />
      </a>
      <a href="https://github.com/xmarcysx" target="_blank">
        <FaGithubSquare fontSize="2rem" />
      </a>
      <a href="https://www.instagram.com/marcysiox/" target="_blank">
        <FaInstagramSquare fontSize="2rem" />
      </a>
    </div>
  );
};

export default HeaderSocials;
