import { useState, useRef, useEffect } from 'react';

import AxolotlPink from '@/assets/images/shared/axolotl-pink.webp';
import AxolotlWhite from '@/assets/images/shared/axolotl-white.webp';

import InstagramIcon from '@/assets/icons/instagram.svg';
import XIcon from '@/assets/icons/x.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import TikTokIcon from '@/assets/icons/tiktok.svg';
import { useTranslations, useTranslatedPath } from '@/libs/i18n/utils';

interface Props {
  menu: { label: string; link: string }[];
  isHomePage: boolean;
  lang: string;
}

export const Header: React.FC<Props> = ({ menu, isHomePage, lang }) => {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState(t('header.open'));
  const [axolotlImage, setAxolotlImage] = useState(
    isOpen || isHomePage ? AxolotlPink.src : AxolotlWhite.src
  );
  const [color, setColor] = useState('text-white');
  const [fillColor, setFillColor] = useState('fill-white');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    setButtonText(isOpen ? t('header.close') : t('header.open'));
    setAxolotlImage(isOpen || isHomePage ? AxolotlPink.src : AxolotlWhite.src);
    setColor(isOpen || isHomePage ? 'text-body-color' : 'text-white');
    setFillColor(isOpen || isHomePage ? 'fill-body-color' : 'fill-white');
  }, [isOpen, isHomePage]);

  const HeaderSection = () => (
    <header className="h-28 text-body-color absolute top-0 left-0 right-0 z-10">
      <div
        ref={headerContentRef}
        className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2 text-white"
      >
        <a href={translatePath('/')} aria-label="Home">
          <img
            className="w-[112px] xl:ml-[-16px]"
            src={axolotlImage}
            width={284}
            height={249}
            alt="AxolotlCode"
          />
        </a>
        <button
          type="button"
          className={`font-bold leading-7 group flex items-center gap-2 ${color} hover:text-primary-500 transition-colors`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
              <path
                d="M10.6875 9.3125C11.0938 9.6875 11.0938 10.3438 10.6875 10.7188C10.5 10.9062 10.25 11 10 11C9.71875 11 9.46875 10.9062 9.28125 10.7188L6 7.4375L2.6875 10.7188C2.5 10.9062 2.25 11 2 11C1.71875 11 1.46875 10.9062 1.28125 10.7188C0.875 10.3438 0.875 9.6875 1.28125 9.3125L4.5625 6L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L6 4.59375L9.28125 1.3125C9.65625 0.90625 10.3125 0.90625 10.6875 1.3125C11.0938 1.6875 11.0938 2.34375 10.6875 2.71875L7.40625 6.03125L10.6875 9.3125Z"
                className={`${fillColor} group-hover:!fill-primary-500 transition-colors`}
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1C0 0.46875 0.4375 0 1 0H13C13.5312 0 14 0.46875 14 1C14 1.5625 13.5312 2 13 2H1C0.4375 2 0 1.5625 0 1ZM0 6C0 5.46875 0.4375 5 1 5H13C13.5312 5 14 5.46875 14 6C14 6.5625 13.5312 7 13 7H1C0.4375 7 0 6.5625 0 6ZM13 12H1C0.4375 12 0 11.5625 0 11C0 10.4688 0.4375 10 1 10H13C13.5312 10 14 10.4688 14 11C14 11.5625 13.5312 12 13 12Z"
                className={`${fillColor} group-hover:!fill-primary-500 transition-colors`}
              />
            </svg>
          )}
          {buttonText}
        </button>
      </div>
    </header>
  );

  return (
    <>
      <HeaderSection />
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-[#EFEFEF] z-40 transition-opacity duration-700 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        ref={menuRef}
        className={`fixed left-0 right-0 bottom-0 h-full z-50 transition-transform duration-700 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white absolute inset-0">
          <HeaderSection />
          <div
            ref={contentRef}
            className={`h-[calc(90vh-50px)] xl:h-[calc(80vh)] overflow-y-scroll md:overflow-y-hidden  mt-[90px] xl:mt-[115px] pb-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center px-4 justify-start md:justify-around divide-y sm:divide-y-0 sm:divide-x divide-body-color transition-all duration-700 ease-in-out ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            <div
              ref={contentRef}
              className="w-full mt-10 md:mt-0 h-[calc(100dvh-20px)] xl:h-[calc(80dvh-50px)] pb-8 flex flex-col sm:flex-row items-center px-4 justify-start md:justify-between divide-y sm:divide-y-0 sm:divide-x divide-body-color"
            >
              <div className="w-full">
                <nav className="w-full md:max-w-[400px] mx-auto p-4">
                  <ol className="flex flex-col justify-center gap-y-5 lg:gap-y-12">
                    {menu?.map(({ label, link }, index) => (
                      <li key={label} className="flex gap-x-2 items-end">
                        <span className="text-primary-500 text-base md:text-xl lg:text-2xl xl:text-3xl inline-block">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <a
                          className="text-2xl md:text-3xl lg:text-4xl hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
                          href={link}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <div className="w-full">
                <div className="w-full md:max-w-[400px] mx-auto p-4">
                  <div className="flex flex-col gap-y-[5px] mb-8 lg:mb-[68px]">
                    <span className="text-2xl lg:text-[32px] lg:leading-9 font-bold">
                      {t('header.info.city')}
                    </span>
                    <span className="text-lg lg:text-xl font-light">
                      {t('header.info.locality')}
                    </span>
                  </div>

                  <div className="flex flex-col gap-y-[5px] mb-4 lg:mb-[26px]">
                    <span className="text-2xl lg:text-[32px] lg:leading-9 text-primary-500">
                      {t('header.contact')}
                    </span>
                    <ul className="mb-[15px] text-lg lg:text-xl lg:leading-9 font-light">
                      <li>
                        <a
                          href="mailto:soporte@axolotlcode.tech"
                          className="hover:underline"
                        >
                          {t('contact.contact.email-value')}
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+525660072998"
                          target="_blank"
                          className="hover:underline"
                        >
                          {t('contact.contact.phone-value')}
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <span className="text-2xl lg:text-[32px] leading-9 text-primary-500 mb-2">
                      {t('header.social.label')}
                    </span>
                    <ul className="flex gap-x-[15px] text-sm">
                      <li className="hover:scale-105 transition-all duration-300 ease-in-out hover:bg-primary-100/50 rounded-[5px]">
                        <a
                          href="https://www.instagram.com/axolotl.code/"
                          target="_blank"
                        >
                          <img
                            src={InstagramIcon.src}
                            width={50}
                            height={50}
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li className="hover:scale-105 transition-all duration-300 ease-in-out hover:bg-primary-100/50 rounded-[5px]">
                        <a href="https://x.com/AxolotlCode" target="_blank">
                          <img
                            src={XIcon.src}
                            width={50}
                            height={50}
                            alt="X Twitter"
                          />
                        </a>
                      </li>
                      <li className="hover:scale-105 transition-all duration-300 ease-in-out hover:bg-primary-100/50 rounded-[5px]">
                        <a
                          href="https://www.facebook.com/Desarrollo.software.axolotlcode"
                          target="_blank"
                        >
                          <img
                            src={FacebookIcon.src}
                            width={50}
                            height={50}
                            alt="Facebook"
                          />
                        </a>
                      </li>
                      <li className="hover:scale-105 transition-all duration-300 ease-in-out hover:bg-primary-100/50 rounded-[5px]">
                        <a
                          href="https://mx.linkedin.com/in/axolotl-code-86b85732a?trk=public_post_feed-actor-name"
                          target="_blank"
                        >
                          <img
                            src={LinkedInIcon.src}
                            width={50}
                            height={50}
                            alt="LinkedIn"
                          />
                        </a>
                      </li>
                      <li className="hover:scale-105 transition-all duration-300 ease-in-out hover:bg-primary-100/50 rounded-[5px]">
                        <a
                          href="https://www.tiktok.com/@axolotl.code"
                          target="_blank"
                        >
                          <img
                            src={TikTokIcon.src}
                            width={50}
                            height={50}
                            alt="LinkedIn"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
