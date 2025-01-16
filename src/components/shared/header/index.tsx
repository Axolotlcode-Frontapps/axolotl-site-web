import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import AxolotlPink from '@/assets/images/axolotl-pink.png';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';

interface Props {
  menu: { label: string; link: string }[];
}

// Registrar GSAP fuera del componente
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export const Header: React.FC<Props> = ({ menu }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!menuRef.current) return;

    const menuAnimation = gsap
      .timeline({ paused: true })
      .set(menuRef.current, {
        bottom: -window.innerHeight,
        display: 'block',
      })
      .to(menuRef.current, {
        bottom: 0,
        duration: 0.5,
        ease: 'power3.out',
      });

    if (isOpen) {
      menuAnimation.play();
    } else {
      gsap.to(menuRef.current, {
        bottom: -window.innerHeight,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = 'none';
          }
        },
      });
    }

    return () => {
      menuAnimation.kill();
    };
  }, [isOpen]);

  const MenuButton = () => (
    <button
      type="button"
      className="border border-primary-500 rounded-[5px] px-4 py-2 relative focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <div className="flex flex-col justify-center items-center gap-[6px] w-6 h-full">
        <span
          className={`w-6 h-[2px] bg-primary-500 transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-primary-500 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-[2px] bg-primary-500 transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </div>
    </button>
  );

  return (
    <header className="h-28 text-body-color relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2">
        <a href="/" aria-label="Home">
          <img
            className="w-[112px]"
            src={AxolotlPink.src}
            width={284}
            height={249}
            alt="Axolotl code"
          />
        </a>
        <MenuButton />
      </div>

      <div
        ref={menuRef}
        className="fixed left-0 right-0 bottom-0 h-[90vh] hidden"
        style={{ zIndex: 50 }}
      >
        <div className="bg-[#F6F6F6] absolute inset-0">
          <div className="max-w-7xl mx-auto flex h-full p-4 items-center justify-between md:justify-around divide-x divide-blue-200">
            <nav className="flex-1">
              <ol className="flex flex-col gap-y-[30px] lg:gap-y-[70px]">
                {menu?.map(({ label, link }, index) => (
                  <li key={label} className="flex gap-x-2 items-end">
                    <span className="text-primary-100 text-2xl lg:text-[40px] leading-[48px]">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <a
                      className="text-[40px] lg:text-7xl hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
                      href={link}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="px-4 md:px-8 lg:px-16">
              <div className="flex flex-col gap-y-[5px] mb-[68px]">
                <span className="text-[32px] leading-9 font-bold">
                  Ciudad de México
                </span>
                <span className="text-xl font-light">Area metropolitana</span>
              </div>

              <div className="flex flex-col gap-y-[5px] mb-[26px]">
                <span className="text-[32px] leading-9 text-primary-500">
                  Contacto
                </span>
                <ul className="mb-[15px] text-xl leading-9 font-light">
                  <li>
                    <a
                      href="mailto:soporte@axolotlcode.tech"
                      className="hover:underline"
                    >
                      soporte@axolotlcode.tech
                    </a>
                  </li>
                  <li>
                    <a href="tel:+525591651260" className="hover:underline">
                      +(55) 91 65 12 60
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-y-[8px]">
                <span className="text-[32px] leading-9 text-primary-500 mb-2">
                  Redes sociales
                </span>
                <ul className="flex gap-x-[15px] text-sm">
                  <li>
                    <img
                      src={InstagramIcon.src}
                      width={29}
                      height={29}
                      alt="Instagram"
                    />
                  </li>
                  <li>
                    <img
                      src={TwitterIcon.src}
                      width={32}
                      height={26}
                      alt="Instagram"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
