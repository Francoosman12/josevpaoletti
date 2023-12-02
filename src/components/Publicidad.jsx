import React from 'react';

const Publicidad = ({ onClose }) => {
    return (
        <section className="bg-no-repeat  bg-contain lg:bg-cover bg-center min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/QFJ28P7/Mira-nuestras-ofertas.gif)" }} id='RRHH'>

            <button className='bg-red-500 rounded-lg p-2 text-white m-5' onClick={onClose}>Cerrar</button>
        </section>
    );
};

export default Publicidad;