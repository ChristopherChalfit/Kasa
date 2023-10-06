import DataGallery from "../../data/logements.json";
import Arrow from "../../assets/images/Arrow.svg";
import "./Caroussel.sass";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Caroussel({image}) {
  const [slide, setSlide] = useState(0);
  const prevPicture = () => {
    updapte(-1);
  };

  const nextPicture = () => {
    updapte(+1);
  };
  const updapte = (value) => {
    // Modulo pour boucle infini
    setSlide(
      (slide + value + image.length) % image.length
    );
  };
  if (image.length > 1) {
    return (
      <section className="carousel">
        <div className="carousel__container">
          {image.map((picture, index) => (
            <img
              src={picture}
              alt={location.title}
              key={index}
              className={
                slide === index
                  ? "carousel__container-slide"
                  : "carousel__container-slidehidden"
              }
            />
          ))}
          <img
            src={Arrow}
            alt="Flèche de gauche"
            className="carousel__container-arrowleft arrow"
            onClick={prevPicture}
          />
          <img
            src={Arrow}
            alt="Flèche de droite"
            className="carousel__container-arrowright arrow"
            onClick={nextPicture}
          />
          <span className="carousel__container-indicator">
            {slide + 1}/{image.length}
          </span>
        </div>
      </section>
    );
  }
  return (
    <section className="carousel">
      <div className="carousel__container">
        {image.map((picture, index) => (
          <img
            src={picture}
            alt={location.title}
            key={index}
            className={
              slide === index
                ? "carousel__container-slide"
                : "carousel__container-slidehidden"
            }
          />
        ))}
      </div>
    </section>
  );
}
export default Caroussel;
