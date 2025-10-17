import React, { useEffect, useState } from "react";
import "./style.css";

function Home() {
  const [consejos, setConsejos] = useState([]);
  const [busqueda, setBusqueda] = useState("life");
  const [modo, setModo] = useState("general");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obtenerConsejos(busqueda);
  }, []);

  const obtenerConsejos = async (termino) => {
    setLoading(true);
    try {
      const resp = await fetch(`https://api.adviceslip.com/advice/search/${termino}`);
      const data = await resp.json();
      if (data.slips) {
        setConsejos(data.slips);
      } else {
        setConsejos([]);
      }
    } catch (error) {
      console.error("Error al obtener consejos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBuscar = (e) => {
    e.preventDefault();
    obtenerConsejos(busqueda);
  };

  return (
    <>
      <div className="botones">
        <button onClick={() => { setModo("general"); setBusqueda("life"); obtenerConsejos("life"); }}>
          Mostrar Consejos de Vida
        </button>
        <button onClick={() => { setModo("motivacion"); setBusqueda("success"); obtenerConsejos("success"); }}>
          Mostrar Consejos Motivacionales
        </button>
      </div>

      <div>
        <form onSubmit={handleBuscar}>
          <input
            type="text"
            placeholder="Buscar consejo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </form>
      </div>

      <div className="lugar">
        {loading ? (
          <p>Cargando consejos...</p>
        ) : consejos.length > 0 ? (
          <ul className="lista">
            {consejos.map((item) => (
              <li key={item.id}>"{item.advice}"</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron consejos.</p>
        )}
      </div>
    </>
  );
}

export default Home;
