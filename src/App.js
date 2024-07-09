import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Gallery />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
