import React from 'react'

const Empresas = () => {

    return (

        <section className='w-full min-h-screen bg-white md:pt-18 p-4' id='empresas'>
            <div className=" flex-start max-w-[1200px] mx-auto">
                <div className="mx-auto flex-block lg:flex lg:pt-20 pt-5 justify-center items-center">
                    <div className='md:w-1/2 max-w-[1000px] pt-5 lg:text-left lg:flex-block justify-center items-center md:justify-start text-center md:text-start w-full h-full'>
                        <h1 className='texto-gris lg:text-7xl md:text-7xl text-5xl'>Unión.</h1>
                        <p className='texto-gris lg:text-4xl md:text-3xl text-2xl lg:pt-5 italic'>Grupo Paoletti</p>
                        <p className='texto-gris lg:text-4xl md:text-3xl text-2xl lg:pt-5'>Empresas Líderes en el Mercado.</p>
                        <div className='border-red-500 border-2 border-solid lg:w-1/3 w-full lg:mt-6 m-5'></div>
                    </div>
                    <div className="descripcion md:w-1/2 p-4 lg:pl-12 pt-10 bg-red-500 rounded-xl">
                        <div>
                            <h1 className='text-white text-center lg:text-start pt-5 lg:text-4xl md:text-3xl text-2xl font-bold'>José V. Paoletti</h1>
                            <p className='pt-5 text-center lg:text-start text-white'>En 1973, José Vicente Paoletti y Teresa Belio fundaron nuestra empresa familiar como un pequeño negocio de golosinas. A lo largo de los años, su dedicación y trabajo arduo nos llevaron al éxito que somos hoy en día. Celebramos con orgullo nuestros 50 años de historia, honrando el legado de nuestros fundadores y comprometiéndonos a seguir su ejemplo de excelencia empresarial. ¡Feliz 50 aniversario!</p>
                        </div>
                        <div>
                            <h1 className='text-white text-center lg:text-start pt-5 lg:text-4xl md:text-3xl text-2xl font-bold'>Punto de Venta</h1>
                            <p className='pt-5 text-center lg:text-start text-white'>En 1973, José Vicente Paoletti y Teresa Belio fundaron nuestra empresa familiar como un pequeño negocio de golosinas. A lo largo de los años, su dedicación y trabajo arduo nos llevaron al éxito que somos hoy en día. Celebramos con orgullo nuestros 50 años de historia, honrando el legado de nuestros fundadores y comprometiéndonos a seguir su ejemplo de excelencia empresarial. ¡Feliz 50 aniversario!</p>
                        </div>
                        <div>
                            <h1 className='text-white text-center lg:text-start pt-5 lg:text-4xl md:text-3xl text-2xl font-bold'>D.T.S.</h1>
                            <p className='pt-5 text-center lg:text-start text-white'>En 1973, José Vicente Paoletti y Teresa Belio fundaron nuestra empresa familiar como un pequeño negocio de golosinas. A lo largo de los años, su dedicación y trabajo arduo nos llevaron al éxito que somos hoy en día. Celebramos con orgullo nuestros 50 años de historia, honrando el legado de nuestros fundadores y comprometiéndonos a seguir su ejemplo de excelencia empresarial. ¡Feliz 50 aniversario!</p>
                        </div>
                        <button className='border-gray-500 border border-solid rounded-lg hover:bg-red-500 p-2 hover:rounded-lg hover:text-white mt-5 w-full lg:w-2/5 texto-gris'>Ver empresas</button>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Empresas