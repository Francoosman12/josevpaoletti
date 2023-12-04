import React, { useState } from 'react';

const ModalNosotros = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    return (
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-2/5">
            <div>
                {/* Button to open the privacy policy modal */}
                <button
                    onClick={() => setShowPrivacyPolicy(true)}
                    className='border-gray-500 border border-solid rounded-lg  hover:bg-red-500 p-2 hover:rounded-lg hover:text-white mt-5  texto-gris'
                >
                    Mas sobre nosotros
                </button>

                {/* Privacy Policy Modal */}
                {showPrivacyPolicy && (
                    <div className="fixed z-10 inset-0 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4">
                            {/* Modal panel */}
                            <div className="px-6 py-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Misión | Visión
                                </h3>
                            </div>
                            <div
                                className="prose max-w-screen-md p-6 overflow-y-auto bg-gray-100"
                                style={{
                                    maxHeight: '70vh',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '0.375rem',
                                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {/* Privacy Policy content */}
                                <h1>Vision:</h1>
                                <h4>
                                    En 1973, José Vicente Paoletti y Teresa Belio fundaron nuestra empresa familiar como un pequeño negocio de golosinas. A lo largo de los años, su dedicación y trabajo arduo nos llevaron al éxito que somos hoy en día. Celebramos con orgullo nuestros 50 años de historia, honrando el legado de nuestros fundadores y comprometiéndonos a seguir su ejemplo de excelencia empresarial. ¡Feliz 50 aniversario!
                                </h4>

                                <hr className='py-4' />

                                <h1>Misión</h1>
                                <h4>
                                    En 1973, José Vicente Paoletti y Teresa Belio fundaron nuestra empresa familiar como un pequeño negocio de golosinas. A lo largo de los años, su dedicación y trabajo arduo nos llevaron al éxito que somos hoy en día. Celebramos con orgullo nuestros 50 años de historia, honrando el legado de nuestros fundadores y comprometiéndonos a seguir su ejemplo de excelencia empresarial. ¡Feliz 50 aniversario!
                                </h4>
                                {/* ... (your existing content) ... */}
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-center p-2 gap-4 flex-row">
                                <button
                                    onClick={() => setShowPrivacyPolicy(false)}
                                    type="button"
                                    className="border-gray-500 border border-solid rounded-lg  hover:bg-red-500 p-2 hover:rounded-lg hover:text-white mt-5  texto-gris"
                                >
                                    Salir
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalNosotros;
