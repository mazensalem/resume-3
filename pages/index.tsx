import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Nav />
    </>
  );
};

export default IndexPage;
