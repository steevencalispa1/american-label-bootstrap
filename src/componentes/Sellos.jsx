import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Datos de los sellos
const sellos = [
  { src: "/img/sello1.png", title: "Sello Manchester United" },
  { src: "/img/sello2.png", title: "Sello Personalizado" },
  { src: "/img/sello3.png", title: "Sello Personalizado" },
  { src: "/img/sello4.png", title: "Sello Personalizado" },
  { src: "/img/sello5.png", title: "Sello Puma" },
  { src: "/img/sello6.png", title: "Sello Personalizado" },
  { src: "/img/sello7.png", title: "Sello Boca Jr" },
  { src: "/img/sello8.png", title: "Sello Personalizado" },
  { src: "/img/sello9.png", title: "Sello Ecuador" },
];

const SellosTextiles = () => {
  const openModal = (index) => {
    alert(`Abriendo modal para el sello número ${index + 1}`);
  };

  return (
    <div className="container py-4 bg-dark text-light">
      <h1 className="text-center text-warning py-3">
        SELLOS TEXTILES PERSONALIZADOS
      </h1>
      <div className="row justify-content-center">
        {sellos.map((sello, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card bg-secondary text-light text-center shadow">
              <img
                src={sello.src}
                alt={sello.title}
                className="card-img-top p-3 rounded"
                onClick={() => openModal(index)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title text-warning">{sello.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellosTextiles;
