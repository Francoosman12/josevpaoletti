import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Empresas from "./components/Empresas";
import Noticias from "./components/Noticias";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import RRHH from "./components/RRHH";
import "./styles/contacto.css"
function App() {


  return (
    <>
      <Navbar />
      <Inicio />
      <Nosotros />
      <Empresas />
      <Noticias />
      <RRHH />
      <Contacto />
      <Footer />

    </>
  );
}

export default App
