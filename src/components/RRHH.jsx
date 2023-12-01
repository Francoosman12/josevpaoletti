import React from 'react';
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
                                Llená el siguiente formulario para ser tenido en cuenta en los procesos de selección.
                            </p>
                            <div className='mt-10'>
                                <a href="https://forms.gle/KjtsYHSaULy3TjzH6" className='bg-red-600 rounded-xl  hover:bg-red-500 p-2 hover:rounded-lg hover:text-white w-full lg:w-2/5 text-white'>Formulario de Trabajo</a>
                            </div>

                            <div className="flex flex-row items-center space-x-3">
                                {/* Add your social media links here */}
                            </div>
                        </div>

                    </div>

                    <div class="flex items-center justify-center h-screen md:h-screen mx-auto w-full md:w-1/2 from-indigo-500 to-indigo-800 z-2 pt-5">
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
