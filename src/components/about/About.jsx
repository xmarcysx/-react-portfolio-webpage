import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Dowiedz się</h5>
      <h2>O mnie</h2>

      <div className="container about__container-section">
        <div className="about__container">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Doświadczenie</h5>
                <small>3 Lata</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projekty</h5>
                <small>16</small>
              </article>
            </div>
            <p>
              Jestem studentem informatyki na Uniwersytecie Śląskim w
              Katowicach. W wolnym czasie zajmuje się tworzeniem stron
              internetowych w oparciu o nowoczesne technologie oraz rozwojem w
              tym kierunku.
            </p>
            <a href="#portfolio" className="btn btn-primary">
              Moje projekty
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
