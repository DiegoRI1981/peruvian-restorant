import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contacto y Reservas</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Datos del Restaurante</h3>
          <p><strong>Dirección:</strong> Av. Ejemplo 1234, Ciudad</p>
          <p><strong>Teléfono:</strong> (123) 456-7890</p>
          <p><strong>Horario:</strong> Lunes a Viernes: 12pm - 10pm</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
