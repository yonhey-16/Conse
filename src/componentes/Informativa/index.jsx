import React from "react";
import "./style.css";

const Informativa = () => {
  return (
    <div className="informativa-contenedor">
      <h2>Informativa</h2>
      <p>
        Esta aplicación muestra consejos de vida obtenidos de la API{" "}
        <a href="https://api.adviceslip.com/" target="_blank" rel="noreferrer">
          Advice Slip API
        </a>.
      </p>
    </div>
  );
};

export default Informativa;
