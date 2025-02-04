import type { FC } from 'react';
import start from '@/assets/icons/startYellow.svg';
export const Comments: FC = () => {
  return (
    <div className="max-w-[1400px] min-h-[80vh] flex flex-col justify-center items-center mx-auto px-8 py-16 ">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-evenly">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <span className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-primary-500">
            Testimonios
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-black">
            Los <span className="text-secondary-500">clientes</span> han dicho
            esto acerca de nosotros
          </h2>
          <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-lg text-gray-600 leading-relaxed">
            Descubre por qué nuestros clientes confían en nosotros para sus
            proyectos tecnológicos. Sus experiencias son el mejor testimonio de
            nuestro compromiso con la excelencia y la innovación.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 max-w-[610px] gap-5">
          <div className="bg-primary-500/10 p-8 rounded-xl">
            <div className="flex gap-1 mb-4">
              <img src={start.src} alt="start" />
              <img src={start.src} alt="start" />
              <img src={start.src} alt="start" />
              <img src={start.src} alt="start" />
              <img src={start.src} alt="start" />
            </div>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-700 mb-6 max-w-[400px]">
              "Son un personal muy profesional, me ayudaron a crear el sistema
              que necesitaba, los recomiendo."
            </p>

            <div className="flex items-center gap-4">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold text-gray-900">
                  Carlos Martínez
                </h4>
                <p className="text-xs xs:text-sm sm:text-base md:text-base lg:text-base xl:text-base text-gray-600">
                  CEO, TechVision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
