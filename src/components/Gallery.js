import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  // Configuración del carrusel
  const settings = {
  //      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Habilitar autoplay
    autoplaySpeed: 2000, // Velocidad de avance en milisegundos
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="gallery" id="gallery">
      <h2>Galería de Nuestros Platos</h2>
      <div className="gallery-slider">
        <Slider {...settings}>
        <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/ajidegallina.jpeg`} alt="Plato 1" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/ceviche.jpeg`} alt="Plato 2" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/anticuchos-peruanos.jpg`} alt="Plato 3" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/lomosaltado.jpeg`} alt="Plato 4" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/papaalahuancaina.jpg`} alt="Plato 5" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/tiraditodeajiamarillo.jpeg`} alt="Plato 6" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/plato7.jpg`} alt="Plato 7" />
          </div>
          <div className="gallery-item">
            <img src={`${process.env.PUBLIC_URL}/img/plato8.jpg`} alt="Plato 8" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
