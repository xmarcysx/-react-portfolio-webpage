import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>Jakie posiadam umiejętności</h5>
      <h2>Doświadczenie</h2>

      <div className="container experience__container-section">
        <div className="experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML5</h4>
                  <small className="text-light">Doświadczony</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS3</h4>
                  <small className="text-light">Doświadczony</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Sass</h4>
                  <small className="text-light">Zaawansowany</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>JavaScript</h4>
                  <small className="text-light">Zaawansowany</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Początkujący</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Zaawansowany</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node.js</h4>
                  <small className="text-light">Początkujący</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Zaawansowany</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
