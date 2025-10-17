import React, { useState } from "react";
import "./style.css";

const Favoritos = () => {
  const [favoritos] = useState([]); // Aquí se podría conectar LocalStorage en el futuro

  return (
    <div className="favoritos-contenedor">
      <h2>Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No tienes consejos guardados.</p>
      ) : (
        <ul>
          {favoritos.map((fav, i) => (
            <li key={i}>{fav}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favoritos;
