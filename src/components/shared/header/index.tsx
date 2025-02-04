import AxolotlPink from '@/assets/images/axolotl-pink.png';
import { useState } from 'react';

import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';

interface Props {
  menu: { label: string; link: string }[];
}

export const Header: React.FC<Props> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerContainer = () => (
    <div className="max-w-[1400px] mx-auto flex items-center justify-between px-3 py-2">
      <img
        className=""
        src={AxolotlPink.src}
        width={180}
        height={180}
        alt="Axolotl code"
      />

      <button
        type="button"
        className="border border-primary-500 rounded-[5px] px-4 py-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col justify-center items-center gap-[6px] w-6 h-full">
          <span
            className={`w-6 h-[2px] bg-primary-500 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-primary-500 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-primary-500 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>
    </div>
  );

  return (
    <header className="h-28 text-body-color">
      <>{headerContainer()}</>
      {isOpen && (
        <div className="absolute bg-white inset-0 ">
          <>{headerContainer()}</>
          <div className="p-4">
            <ul className="w-full flex flex-col gap-y-[15px]">
              {menu?.map(({ label, link }) => (
                <li key={label}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
            <div>
              <div className="flex flex-col gap-y-[5px] mb-[68px]">
                <span className="text-[32px] leading-9 font-bold">
                  Ciudad de México
                </span>
                <span className="text-xl">Area metropolitana</span>
              </div>
              <div className="flex flex-col gap-y-[5px] mb-[26px]">
                <span className="text-[32px]  leading-9 text-primary-500">
                  Contacto
                </span>
                <ul className="flex flex-col gap-y-[15px] mb-[15px] text-sm">
                  <li>soporte@axolotlcode.tech</li>
                  <li>+(55) 91 65 12 60</li>
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
      )}
    </header>
  );
};
