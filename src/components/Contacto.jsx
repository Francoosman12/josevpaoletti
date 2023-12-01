import React from "react";
import "../styles/contacto.css";
const Contacto = () => {
  return (
    <>
      <section className='w-full min-h-screen bg-withe md:pt-32 p-4' id='contacto'>
        <div class="flex justify-center items-center w-full h-full bg-white">

          <div class="container mx-auto my-4 px-4 lg:px-20">

            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div class="flex-block">
                <h1 class="font-bold uppercase lg:text-5xl text-3xl">Contactanos<br /></h1>
                <p className="pt-5 text-2xl">Dejanos un mensaje, te respondemos a la brevedad</p>
              </div>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Nombre*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Apellido*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email" placeholder="Email*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number" placeholder="Celular*" />
              </div>
              <div class="my-4">
                <textarea placeholder="Mensaje*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div class="my-2 w-1/2 lg:w-1/4">
                <button class="uppercase text-sm font-bold tracking-wide bg-red-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                  Enviar mensaje
                </button>
              </div>
            </div>

            <div
              class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-red-500 rounded-2xl">
              <div class="flex flex-col text-white">
                <h1 class="font-bold uppercase text-4xl">Sucursales</h1>
                <p class="text-withe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  tincidunt arcu diam,
                  eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                </p>

                <div class="flex my-2 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="text-3xl">Tucumán</h2>
                    <p class="text-withe">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                    <p class="text-withe">Fax: xxx-xxx-xxx</p>
                  </div>
                </div>

                <div class="flex my-2 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="text-3xl">Santiago</h2>
                    <p class="text-withe">Tel: xxx-xxx-xxx</p>
                    <p class="text-withe">Fax: xxx-xxx-xxx</p>
                  </div>
                </div>

                <div class="flex my-2 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="text-3xl">Catamarca</h2>
                    <p class="text-withe">Tel: xxx-xxx-xxx</p>
                    <p class="text-withe">Fax: xxx-xxx-xxx</p>
                  </div>
                </div>

                <div class="flex my-2 w-2/3 lg:w-1/2">
                  <div class="flex flex-col">
                    <i class="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="text-3xl">La Rioja</h2>
                    <p class="text-withe">Tel: xxx-xxx-xxx</p>
                    <p class="text-withe">Fax: xxx-xxx-xxx</p>
                  </div>
                </div>

                <div class="flex justify-center my-4 w-full">
                  <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                    <i class="fab fa-facebook-f text-blue-900" />
                  </a>
                  <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                    <i class="fab fa-linkedin-in text-blue-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a title="Ir a Whatsapp" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
              <img class="object-cover object-center w-full h-full rounded-full" src="https://bassi.com.ar/wp-content/uploads/2021/03/png-clipart-whatsapp-logo-whatsapp-computer-icons-whatsapp-logo-mobile-phones.png" />
            </a>
          </div>
        </div>
      </section >
    </>
  );
};

export default Contacto;
