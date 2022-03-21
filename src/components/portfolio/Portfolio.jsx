import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Moje ostatnie prace</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>To-Do & Pomodoro</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/Pomo-ToDo-ReactApp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://xmarcysx.github.io/Pomo-ToDo-ReactApp/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>SocialBook Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/SocialMedia-Website-main"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://mysocialmedia.infinityfreeapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Clock Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/Clock-Js"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://timer.freecluster.eu/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Crypto Wallet</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/CryptocurrencyWallet"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://cryptocurrency.freecluster.eu/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Gym Stopwatch Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/Stopwatch-For-Gym-JS"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://stoper.infinityfreeapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Parallax Scrolling Efect</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/Parallax-Scrolling-JS"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://paralax.freecluster.eu/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Extra Navbar</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/xmarcysx/ExtraNavbar"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://marcysiox.000webhostapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Go Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
