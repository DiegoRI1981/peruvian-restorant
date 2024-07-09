import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={`${process.env.PUBLIC_URL}/img/logo.jpeg`} alt="Logo" className="logo" />
        <span className="brand-name">Restaurante Peruano</span>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#hero" onClick={closeMenu}>
          Inicio
        </a>
        <a href="#gallery" onClick={closeMenu}>
          Galería
        </a>
        <a href="#menu" onClick={closeMenu}>
          Carta
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contacto
        </a>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
