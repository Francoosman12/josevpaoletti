import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Empresas from "./components/Empresas";
import Noticias from "./components/Noticias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import RRHH from "./components/RRHH";
import Publicidad from "./components/Publicidad";
import "./styles/contacto.css"
function App() {

  const [mostrarPublicidad, setMostrarPublicidad] = useState(true);

  const cerrarPublicidad = () => {
    setMostrarPublicidad(false);
  };


  return (
    <>
      {mostrarPublicidad && <Publicidad onClose={cerrarPublicidad} />}
      <Navbar />
      <Inicio />
      <Nosotros />
      <Empresas />
      <RRHH />
      <Noticias />
      <Contacto />
      <Footer />

    </>
  );
}

export default App
