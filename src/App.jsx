// import { useState } from "react";

import "./App.css";
// import "./index.css";
// import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
// import WhatIDo from "./WID";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
