import React, { useState } from 'react';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS

const RRHH = () => {

    return (
        <section className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url(https://i.ibb.co/J2kGx4Y/Dise-o-sin-t-tulo-1.png)" }} id='RRHH'>
            <div >
                <div className="relative"></div>
                <div className="min-h-screen lg:flex justify-center pt-10">
                    <div className="w-full md:w-1/2 mx-auto flex justify-center items-center">
                        <div className="px-10 text-center">
                            <h2 className="md:text-7xl text-2xl font-bold md:text-white text-gray-600">
                                Trabajá con nosotros
                            </h2>
                            <p className="mt-4 md:text-white text-gray-600 md:text-2xl">
                                Llená el siguiente formulario para participar en el proceso de selección.
                            </p>
                            <div className='mt-10'>
                                <a href="https://forms.gle/KjtsYHSaULy3TjzH6" className='uppercase bg-red-500 rounded-xl  hover:bg-red-500 p-2 hover:rounded-lg hover:text-white w-full lg:w-2/5 text-white'>Formulario de Trabajo</a>
                            </div>
                            <form action="https://getform.io/f/f3215236-c97b-4303-83e7-489a7196a4d2" method="POST" enctype="multipart/form-data">
                                <input name="file" class="my-4 w-full md:w-2/3 bg-gray-100 text-gray-900 mt-8 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="file" placeholder="Archivo pdf" required />
                                <div class="my-4 w-full flex justify-center items-center">
                                    <button class="uppercase text-sm font-bold tracking-wide bg-red-500 text-gray-100 p-3 rounded-lg  focus:outline-none focus:shadow-outline " type="submit">
                                        Enviar mensaje
                                    </button>
                                </div>
                            </form>




                        </div>

                    </div>

                    <div class="flex items-center justify-center h-full md:h-screen mx-auto w-full md:w-1/2 from-indigo-500 to-indigo-800 z-2 pt-16 md:pt-5 pb-8">
                        <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                            <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                            <h1 class="text-lg text-gray-700"> John Doe </h1>
                            <h3 class="text-sm text-gray-400 "> Creative Director </h3>
                            <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button class="bg-red-600 px-8 py-2 mt-8 rounded-3xl text-white font-semibold uppercase tracking-wide hover:bg-red-500">Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default RRHH;
