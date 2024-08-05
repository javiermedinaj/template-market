import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4 ">
      
        <div className="text-center text-lg mb-8">
          <h2 className="text-xl font-bold mb-8">Newsletter</h2>
          <div className="flex justify-center items-center mb-8">
            <input
              type="email"
              placeholder="Email"
              className="p-2 bg-transparent border-b-2 border-black text-black focus:outline-none"
            />
            <button className="ml-8 p-2 bg-black text-white rounded-md">
              Suscribirse
            </button>
          </div>
          
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cómo comprar</h3>
            <p>Política de Envíos</p>
            <p>Cambios y Devoluciones</p>
            <p>Separar y Reciclar</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Social</h3>
            <p>Instagram</p>
            <p>shop@shop.com.ar</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ubicación</h3>
            <p>Malabia 912, Palermo</p>
            <p>Humboldt 2018, Palermo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
