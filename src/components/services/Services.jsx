import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>Co oferuję</h5>
      <h2>Usługi</h2>
      <div className="container services__container-section">
        <div className="services__container">
          <article className="service">
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Wizytówki, strony firmowe, serwisy internetowe, portale
                  internetowe, blogi, landing pages
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>
                  Programowanie stron internetowych z wkorzystaniem
                  najnowocześniejszych technologii
                </p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Graficzne projektowanie strony internetowej</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Responsywne, estetyczne i kreatywne Web Serwisy</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Tworzenie stron internetowych z wykorzystaniem baz danych</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Wdrożenie, optymalizacja i utrzymanie strony</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
