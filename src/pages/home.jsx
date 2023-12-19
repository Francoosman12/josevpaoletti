import React from 'react'
import Inicio from "../components/Inicio";
import Nosotros from "../components/Nosotros";
import Empresas from "../components/Empresas";
import Noticias from "../components/Noticias";
import Contacto from "../components/Contacto";
import RRHH from "../components/RRHH";

const home = () => {
    return (
        <section>
            <Inicio />
            <Nosotros />
            <Empresas />
            <RRHH />
            <Noticias />
            <Contacto />

        </section>

    )
}

export default home;