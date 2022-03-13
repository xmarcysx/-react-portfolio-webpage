import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contact";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
