import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import React, { useState } from "react";

import Detalle from "./componentes/Detalle";
import Favoritos from "./componentes/Favoritos";
import Home from "./componentes/Home";
import Informativa from "./componentes/Informativa";
import Mapa from "./componentes/Mapa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav className="c-menu">
        <Link to="/">Home</Link>
        <Link to="/informativa">Informativa</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalle/:depto/:municipio" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default App;
