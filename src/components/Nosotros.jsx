import React from 'react'

const Nosotros = () => {

  return (
    /* contenedor section */
    <section className='w-full min-h-screen bg-gray-100 md:pt-20 p-4' id='nosotros'>
      <div className=" flex-start max-w-[1200px] mx-auto">
        <div className='experiencia max-w-[1000px] pt-10 lg:pt-24 lg:text-left justify-center md:justify-start text-center md:text-start w-full h-full'>
          <h1 className='texto-gris lg:text-7xl md:text-7xl text-5xl font-serif'>Experiencia.</h1>
          <p className='texto-gris lg:text-4xl md:text-3xl text-2xl lg:pt-5 pl-2'>50 años en el Mercado.</p>
        </div>
        <div className="mx-auto video-descripcion flex-block lg:flex lg:pt-20 pt-5 justify-center items-center">
          <div className="video md:w-1/2 text-center">
            <iframe className='w-full md:h-96 h-72 p-4' src="https://www.youtube.com/embed/EPMqM_v-PMU?si=mDIfVormYGVrK8yD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="descripcion md:w-1/2 p-4 lg:pl-12 w-full">
            <div className='border-red-500 border-2 border-solid lg:w-1/3 w-full lg:mb-6 mb-3'></div>
            <h1 className='texto-gris font-bold text-center lg:text-start lg:text-4xl md:text-3xl text-2xl'>Protagonistas hace 50 años</h1>
            <p className='pt-5 text-center lg:text-start text-xl texto-gris'>En 1973, José Vicente Paoletti y Teresa Belio fundaron nuestra empresa familiar como un pequeño negocio de golosinas. A lo largo de los años, su dedicación y trabajo arduo nos llevaron al éxito que somos hoy en día. Celebramos con orgullo nuestros 50 años de historia, honrando el legado de nuestros fundadores y comprometiéndonos a seguir su ejemplo de excelencia empresarial. ¡Feliz 50 aniversario!</p>
            <button className='border-gray-500 border border-solid rounded-lg  hover:bg-red-500 p-2 hover:rounded-lg hover:text-white mt-5 w-full lg:w-2/5 texto-gris'>Mas sobre nosotros</button>
          </div>
        </div>
      </div>
    </section >

  )
}

export default Nosotros