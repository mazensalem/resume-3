import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Head from "next/head";

const IndexPage = () => {
  const [dark, setdark] = useState(true);
  return (
    <div className={dark ? "dark" : ""}>
      <main className="text-black bg-white dark:text-white dark:bg-black">
        <Head>
          <meta charSet="UTF-8" />
          <title>MAZEN SALEM</title>
          <meta name="description" content="mazen salem resume" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="./img/images.png" />
        </Head>
        <Header />
        <About />
        <Skills />
        <Testimonials />
        <Portfolio />
        <Contact />
        <Nav setdark={setdark} dark={dark} />
      </main>
    </div>
  );
};

export default IndexPage;
