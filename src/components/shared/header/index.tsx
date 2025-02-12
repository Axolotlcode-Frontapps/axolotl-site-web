import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import AxolotlPink from '@/assets/images/shared/axolotl-pink.png';
import AxolotlWhite from '@/assets/images/shared/axolotl-white.png';

import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import { useTranslations } from '@/libs/i18n/utils';

interface Props {
  menu: { label: string; link: string }[];
  isHomePage: boolean;
  lang: string;
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export const Header: React.FC<Props> = ({ menu, isHomePage, lang }) => {
  const t = useTranslations(lang);

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
    setTimeout(() => {
      setButtonText(isOpen ? t('header.close') : t('header.open'));
      setAxolotlImage(
        isOpen || isHomePage ? AxolotlPink.src : AxolotlWhite.src
      );
      setColor(isOpen || isHomePage ? 'text-body-color' : 'text-white');
      setFillColor(isOpen || isHomePage ? 'fill-body-color' : 'fill-white');
    }, 1000);
  }, [isOpen, isHomePage]);

  useEffect(() => {
    const elements = {
      menu: menuRef.current,
      overlay: overlayRef.current,
      content: contentRef.current,
      headerContent: headerContentRef.current,
    };

    if (!Object.values(elements).every(Boolean)) return;

    const initialState = {
      bottom: -window.innerHeight,
      display: 'block',
    };

    const contentInitialState = {
      opacity: 0,
      y: 20,
    };

    const openAnimation = gsap
      .timeline({ paused: true })
      .set([elements.overlay, elements.menu], initialState)
      .set([elements.content, elements.headerContent], contentInitialState)
      .to(elements.overlay, {
        bottom: 0,
        duration: 0.75,
        ease: 'power3.out',
      })
      .to(
        elements.menu,
        {
          bottom: 0,
          duration: 0.75,
          ease: 'power3.out',
        },
        '-=0.2'
      )
      .to(
        elements.headerContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
        },
        '-=0.4'
      )
      .to(
        elements.content,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
        },
        '-=0.3'
      );

    const closeAnimation = () => {
      const tl = gsap.timeline();

      tl.to([elements.content, elements.headerContent], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.in',
      })
        .to(elements.menu, {
          bottom: -window.innerHeight,
          duration: 0.6,
          ease: 'power2.in',
        })
        .to(
          elements.overlay,
          {
            bottom: -window.innerHeight,
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => {
              if (elements.menu && elements.overlay) {
                elements.menu.style.display = 'none';
                elements.overlay.style.display = 'none';
              }
            },
          },
          '-=0.1'
        );

      return tl;
    };

    if (isOpen) {
      openAnimation.play();
    } else {
      closeAnimation();
    }

    return () => {
      gsap.killTweensOf([
        elements.overlay,
        elements.menu,
        elements.content,
        elements.headerContent,
      ]);
    };
  }, [isOpen]);

  const HeaderSection = () => (
    <header className="h-28 text-body-color absolute top-0 left-0 right-0 z-10">
      <div
        ref={headerContentRef}
        className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2 text-white"
      >
        <a href="/" aria-label="Home">
          <img
            className="w-[112px]"
            src={axolotlImage}
            width={284}
            height={249}
            alt="Axolotl code"
          />
        </a>
        <button
          type="button"
          className={`font-bold leading-7  flex items-center gap-2 ${color}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6875 9.3125C11.0938 9.6875 11.0938 10.3438 10.6875 10.7188C10.5 10.9062 10.25 11 10 11C9.71875 11 9.46875 10.9062 9.28125 10.7188L6 7.4375L2.6875 10.7188C2.5 10.9062 2.25 11 2 11C1.71875 11 1.46875 10.9062 1.28125 10.7188C0.875 10.3438 0.875 9.6875 1.28125 9.3125L4.5625 6L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L6 4.59375L9.28125 1.3125C9.65625 0.90625 10.3125 0.90625 10.6875 1.3125C11.0938 1.6875 11.0938 2.34375 10.6875 2.71875L7.40625 6.03125L10.6875 9.3125Z"
                className={fillColor}
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
                className={fillColor}
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
        className="absolute left-0 right-0 bottom-0 h-full hidden bg-[#EFEFEF]"
        style={{ zIndex: 40 }}
      />
      <div
        ref={menuRef}
        className="fixed left-0 right-0 bottom-0 h-full hidden"
        style={{ zIndex: 50 }}
      >
        <div className="bg-white absolute inset-0">
          <HeaderSection />
          <div
            ref={contentRef}
            className="h-dvh pt-[115px] pb-[115px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center px-4 justify-between md:justify-around divide-y sm:divide-y-0 sm:divide-x divide-body-color"
          >
            <nav className="w-full sm:w-auto h-fit py-8 px-4 flex-grow">
              <ol className="flex flex-col gap-y-[30px] lg:gap-y-[70px]">
                {menu?.map(({ label, link }, index) => (
                  <li key={label} className="flex gap-x-2 items-end">
                    <span className="text-primary-100 text-base md:text-xl lg:text-2xl xl:text-3xl inline-block">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <a
                      className="text-2xl md:text-3xl lg:text-4xl xl:text-7xl hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
                      href={link}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="w-full sm:w-auto py-8 px-4 sm:pl-10 lg:pl-20 flex-grow">
              <div className="flex flex-col gap-y-[5px] mb-8 lg:mb-[68px]">
                <span className="text-2xl lg:text-[32px] lg:leading-9 font-bold">
                  {t('header.info.city')}
                </span>
                <span className="text-lg lg:text-xl font-light">
                  {t('header.info.locality')}
                </span>
              </div>

              <div className="flex flex-col gap-y-[5px] mb-8 lg:mb-[26px]">
                <span className="text-2xl lg:text-[32px] lg:leading-9 text-primary-500">
                  {t('header.contact')}
                </span>
                <ul className="mb-[15px] text-lg lg:text-xl lg:leading-9 font-light">
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
                <span className="text-2xl lg:text-[32px] leading-9 text-primary-500 mb-2">
                  {t('header.social.label')}
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
    </>
  );
};
