import React from "react";

import "./Main.css";


import Hero from "../Hero/Hero";
import About from "../About/About";
import Tech from "../Tech/Tech";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";






function Main(props) {
  return (
    <main className="main">

      <Hero />
      <About />
      <Tech />
      <Student />
      <Portfolio />
    
      

    </main>
  )
}
export default Main;