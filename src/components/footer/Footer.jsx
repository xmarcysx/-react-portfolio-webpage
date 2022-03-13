import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Marcin
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">O mnie</a>
        </li>
        <li>
          <a href="#experience">Doświadczenie</a>
        </li>
        <li>
          <a href="#services">Usługi</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/marcin.chowaniec399" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/marcysiox/" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Marcysiox" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Marcin Chowaniec. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
