import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      
      <h2>Nuestra Carta</h2>
      
      <h3 className="entrantes">Entrantes</h3>
      <div className="menu-list">
        <div className="menu-item">
          <div className="item-details">
            <h3>Ceviche</h3>
            <p>Descripción del Ceviche</p>
          </div>
          <div className="item-price">$12.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Tiradito de Aji Amarillo</h3>
            <p>Descripción del Tiradito de Aji Amarillo</p>
          </div>
          <div className="item-price">$15.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Papa Rellena</h3>
            <p>Descripción del Papa Rellena</p>
          </div>
          <div className="item-price">$15.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Anticuchos</h3>
            <p>Descripción de los Anticuchos</p>
          </div>
          <div className="item-price">$15.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Papa a la Huancaina</h3>
            <p>Descripción de la Papa a la Huancaina</p>
          </div>
          <div className="item-price">$15.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Causa Limeña</h3>
            <p>Descripción de la Causa Limeña</p>
          </div>
          <div className="item-price">$12.99</div>
        </div>
      </div>
      
      <h3 className="platosDeFondo">Platos de Fondo</h3>
      <div className="menu-list">
        <div className="menu-item">
          <div className="item-details">
            <h3>Aji de Gallina</h3>
            <p>Descripción del Aji de Gallina</p>
          </div>
          <div className="item-price">$10.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Lomo Saltado</h3>
            <p>Descripción del Lomo Saltado</p>
          </div>
          <div className="item-price">$15.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Arroz Chaufa</h3>
            <p>Descripción del Arroz Chaufa</p>
          </div>
          <div className="item-price">$10.99</div>
        </div>
        <div className="menu-item">
          <div className="item-details">
            <h3>Tacu Tacu</h3>
            <p>Descripción del Tacu Tacu</p>
          </div>
          <div className="item-price">$10.99</div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
