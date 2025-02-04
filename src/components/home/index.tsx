import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import './home.css';
import Hero from '@/assets/images/hero.webp';

export const Home = () => {
  const wave1 =
      'M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z',
    wave2 =
      'M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z',
    wave3 =
      'M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z',
    wave4 =
      'M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z';

  useEffect(() => {
    anime({
      targets: '.wave-top > path',
      easing: 'linear',
      duration: 7500,
      loop: true,
      d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 },
      ],
    });

    anime({
      targets: '.text-section',
      translateX: [-1000, 0],
      duration: 2500,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.image-section',
      translateX: [1000, 0],
      duration: 2500,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <div className="min-h-[90vh] w-full xl:py-5 xl:px-14 sm:pt-10 md:pt-10 lg:pt-8 xl:pt-6 pt-14 flex justify-center items-center">
      <div className=" max-w-[1200px] w-full flex flex-row justify-center items-center  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12">
          <div className="text-section w-full space-y-6 md:space-y-8">
            <div className="text-center md:text-left">
              <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-[#212529]">
                Desarrollo de soluciones tecnológicas a tu medida
              </h1>
              <p className="mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl font-normal text-gray-600 leading-relaxed">
                En{' '}
                <span className="font-bold text-primary-500">Axolotl Code</span>{' '}
                transformamos ideas en realidades digitales. Creamos
                aplicaciones innovadoras, seguras y personalizadas que impulsan
                tu negocio hacia el éxito. Con tecnologías de vanguardia y un
                enfoque en calidad, somos tu aliado estratégico en la
                transformación digital.
              </p>
              <div className="mt-8 md:mt-10 flex flex-row items-center justify-center md:justify-start gap-4 sm:gap-x-6">
                <a
                  href="#"
                  className="rounded-xl bg-primary-600 px-5 py-3 text-base md:text-lg font-semibold text-white shadow-lg hover:bg-primary-500 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Conocer más
                </a>
                <a
                  href="#"
                  className="group text-base md:text-lg font-semibold text-secondary-600 hover:text-black transition-colors duration-200 rounded-xl px-5 py-3 border border-secondary-500"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>

          <div className="image-section ">
            <img
              src={Hero.src}
              alt="Soluciones tecnológicas"
              className="max-w-[500px] w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[432px] lg:h-[432px] xl:w-[500px] xl:h-[500px] object-contain"
            />
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
      </div>
      <svg
        className="wave-top absolute"
        width="100%"
        height="100%"
        viewBox="0 0 800 1200"
      >
        <circle
          cx="600"
          cy="400"
          r={100}
          fill="#b1e7e8"
          filter="blur(15px)"
          style={{
            animation: 'bounce1 15s ease-in-out infinite alternate',
          }}
        />
        <circle
          cx="600"
          cy="400"
          r={100}
          fill="#ffa7b7"
          filter="blur(15px)"
          style={{
            animation: 'bounce2 15s ease-in-out infinite alternate',
          }}
        />
        <circle
          cx="600"
          cy="400"
          r={100}
          fill="#b1e7e8"
          filter="blur(15px)"
          style={{
            animation: 'bounce3 15s ease-in-out infinite alternate',
          }}
        />
        <circle
          cx="600"
          cy="400"
          r={100}
          fill="#ffa7b7"
          filter="blur(15px)"
          style={{
            animation: 'bounce4 15s ease-in-out infinite alternate',
          }}
        />
        <circle
          cx="600"
          cy="400"
          r={100}
          fill="#fbc3d2"
          filter="blur(15px)"
          style={{
            animation: 'bounce5 15s ease-in-out infinite alternate',
          }}
        />
        <defs>
          <style>
            {`
                            @keyframes bounce1 {
                                0% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                                20% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                40% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                60% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                80% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                100% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                            }
                            @keyframes bounce2 {
                                0% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                                20% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                40% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                60% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                80% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                100% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                            }
                            @keyframes bounce3 {
                                0% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                                20% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                40% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                60% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                80% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                100% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                            }
                            @keyframes bounce4 {
                                0% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                                20% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                40% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                60% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                80% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                100% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                            }
                            @keyframes bounce5 {
                                0% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                                20% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                40% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                60% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                80% { transform: translate(${Math.random() * window.innerWidth}px, ${Math.random() * window.innerHeight}px) rotate(${Math.random() * 360}deg); }
                                100% { transform: translate(0, 0) rotate(${Math.random() * 360}deg); }
                            }
                        `}
          </style>
        </defs>
      </svg>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
        style={{ zIndex: '-1', marginTop: '100px' }}
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
    </div>
  );
};
