import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Publicidad from "./components/Publicidad";
function App() {

  const [mostrarPublicidad, setMostrarPublicidad] = useState(true);

  const cerrarPublicidad = () => {
    setMostrarPublicidad(false);
  };


  return (
    <>
      {mostrarPublicidad && <Publicidad onClose={cerrarPublicidad} />}
      <Navbar />
      <Home />
      <Footer />

    </>
  );
}

export default App
