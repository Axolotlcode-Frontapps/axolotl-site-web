import type { FC } from 'react';

export const Comments: FC = () => {
  return (
    <div className="max-w-[1400px] min-h-[90vh] mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-evenly">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <span className="text-2xl text-primary-500">Testimonios</span>
          <h2 className="text-5xl font-bold text-black">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Descubre por qué nuestros clientes confían en nosotros para sus
            proyectos tecnológicos. Sus experiencias son el mejor testimonio de
            nuestro compromiso con la excelencia y la innovación.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 max-w-[410px]">
          <div className="bg-primary-500/10 p-8 rounded-xl">
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              "El equipo de Axolotl Code superó todas nuestras expectativas. Su
              profesionalismo, creatividad y atención al detalle hicieron que
              nuestro proyecto fuera un éxito total. Definitivamente los
              recomiendo para cualquier proyecto de desarrollo."
            </p>

            <div className="flex items-center gap-4">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Carlos Martínez</h4>
                <p className="text-gray-600">CEO, TechVision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
