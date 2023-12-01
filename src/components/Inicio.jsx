import React from 'react'
import '../styles/inicio.css';
import Datos from './datos';
/* import Typed from 'react-typed'; */




const Inicio = () => {

    return (
        <section className='w-full min-h-screen bg-white md:pt-26 p-4 justify-center' id='inicio'>

            <div className="home flex-block lg:flex">
                <div className='Distribuidora max-w-[1000px] mx-auto lg:pl-28 pt-10 lg:pt-24 flex-block md:flex-col lg:text-left justify-center text-center w-full md:w-3/5 p-4 h-full'>
                    <h1 className='texto-gris lg:text-9xl md:text-7xl text-5xl'>Distribuidora.</h1>
                    <p className='texto-gris lg:text-4xl md:text-3xl text-2xl lg:pt-5 pl-2'>Lider en servicio de ventas y logística.</p>
                    <div className='md:pt-20 lg:flex pt-4'>
                        <div className="iconos-texto flex text-left justify-center md:justify-start items-center lg:w-3/4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke='currentColor' class="w-6 h-6 lg:w-16 lg:h-16 stroke-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                            </svg>
                            <p className='lg:pl-4 pl-2 texto-gris'>Variedad de Productos.</p>
                        </div>
                        <div className="iconos-texto flex text-left justify-center md:justify-start items-center lg:w-3/4 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-16 lg:h-16 stroke-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <p className='lg:pl-4 pl-2 texto-gris'>Entrega rápida y segura.</p>
                        </div>
                        <div className="iconos-texto flex text-left justify-center md:justify-start items-center lg:w-3/4 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 lg:w-16 lg:h-16 stroke-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                            </svg>

                            <p className='lg:pl-4 pl-2 texto-gris'>Estrategia comerciales.</p>
                        </div>

                    </div>
                </div>
                <div className='dibujo-home md:w-2/5 w-full h-full lg:p-4 '>
                    <div className='max-w-[1000px] mx-auto justify-center text-center lg:justify-start w-full h-full'>
                        <img src="https://i.ibb.co/ZYsBVzM/imagen-pagina-2-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='md:pt-20'>
                <Datos />
            </div>

        </section>
    );
};

export default Inicio