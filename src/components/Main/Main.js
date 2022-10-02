import React from "react";

import "./Main.css";

import Header from "../Header/Header"
import Hero from "../Hero/Hero";
import About from "../About/About";
import Tech from "../Tech/Tech";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <About />
      <Tech />
      <Student />
      <Portfolio />
      <Footer />

    </main>
  )
}
export default Main;