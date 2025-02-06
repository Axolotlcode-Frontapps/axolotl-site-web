import type { FC } from 'react';

export const ContactHome: FC = () => {
  return (
    <div className="max-w-[1400px] min-h-[80vh] mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <span className="text-lg sm:text-xl md:text-2xl text-primary-500">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            ¿Listo para <span className="text-secondary-500">impulsar</span> tu
            proyecto?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Estamos aquí para convertir tus ideas en realidad. Contáctanos y
            descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            con soluciones personalizadas y un servicio excepcional.
          </p>
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block rounded-xl bg-primary-600 px-6 py-3 text-base md:text-lg font-semibold text-white shadow-lg hover:bg-primary-500 transition-colors duration-200"
            >
              Contáctanos
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 space-y-8">
          <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.153810829641!2d-99.01649832478631!3d19.40575918186784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fcccd6785e7f%3A0x3a021142afc0d326!2sC.%20Monedita%20de%20Oro%20105%2C%20Benito%20Ju%C3%A1rez%2C%2057709%20Cdad.%20Nezahualc%C3%B3yotl%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1738631302720!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="font-semibold text-lg">Ubicación</h3>
              </div>
              <p className="text-gray-600">
                Monedita de Oro 105 57000 Nezahualcóyotl, Mexico
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="font-semibold text-lg">Email</h3>
              </div>
              <p className="text-gray-600">contacto@axolotlcode.com</p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="font-semibold text-lg">Teléfono</h3>
              </div>
              <p className="text-gray-600">+52 56 6007 2998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
