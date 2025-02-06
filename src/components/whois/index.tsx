import type { FC } from 'react';
import section1 from '@/assets/images/section1.webp';
import section2 from '@/assets/images/section2.webp';
import section3 from '@/assets/images/section3.webp';
import section4 from '@/assets/images/section4.webp';

export const WhoIs: FC = () => {
  const features = [
    {
      image: section1,
      title: 'Desarrollo Web Personalizado',
    },

    {
      image: section2,
      title: 'Soluciones Empresariales',
    },

    {
      image: section3,
      title: 'Diseño UI/UX',
    },

    {
      image: section4,
      title: 'Soporte Técnico 24/7',
    },
  ];

  const benefits = [
    'Desarrollo ágil y eficiente con las últimas tecnologías del mercado',
    'Equipo experto dedicado a la excelencia y calidad del código',
    'Soluciones escalables que crecen con tu negocio',
    'Atención personalizada y soporte continuo',
  ];

  return (
    <div className="max-w-[1400px] min-h-[70vh] mx-auto px-8 py-16 flex flex-col gap-16">
      <div className="w-full flex flex-col-reverse md:flex-row gap-4 xs:justify-center sm:justify-center md:justify-evenly lg:justify-evenly xl:justify-center xl:gap-20">
        {/* First Section - Grid */}
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={feature.image.src}
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-lg max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] max-h-[150px] xs:max-h-[180px] sm:max-h-[200px] md:max-h-[220px] lg:max-h-[250px] hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Section - Column */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <span className="text-[16px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-primary-500 mb-4">
            ¿Por qué AxolotlCode?
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6">
            Transformamos Ideas en{' '}
            <span className="text-secondary-500">Soluciones Digitales</span>
          </h2>
          <p className="text-[16px] xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-gray-600 max-w-2xl mb-12">
            En AxolotlCode, nos especializamos en convertir tus ideas en
            soluciones tecnológicas innovadoras. Nuestro equipo de expertos
            combina creatividad y experiencia técnica para entregar resultados
            excepcionales que impulsan tu negocio hacia el futuro digital.
          </p>

          <div className="grid grid-cols-1 gap-1 w-full">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 hover:bg-primary-500/10 p-2 md:p-1 xs:p-1 sm:p-1 rounded-lg transition-colors duration-300"
              >
                <div className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-secondary-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[16px] xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base text-gray-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
