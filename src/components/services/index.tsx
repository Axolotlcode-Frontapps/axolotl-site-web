import type { FC } from 'react';
import { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import call from '@/assets/icons/call.svg';
import person from '@/assets/icons/person.svg';
import devs from '@/assets/icons/dev.svg';
import pencil from '@/assets/icons/pencil.svg';
import star from '@/assets/icons/start.svg';
import interrogatory from '@/assets/icons/interrogatory.svg';
import { ServiceCard } from './molecules/serviceCard';

export const Services: FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const offers = [
    {
      icon: devs,
      title: 'Desarrollo de software',
      description:
        'Desarrollo de software enfocado en la innovación y la eficiencia',
    },
    {
      icon: pencil,
      title: 'Consultorías',
      description: 'Consultorías en tecnologías y desarrollo de software',
    },
    {
      icon: person,
      title: 'Profesionales a tu disposición',
      description:
        'Profesionales en tecnologías y desarrollo de software a tu disposición',
    },
    {
      icon: star,
      title: 'Desarrollo a la medida',
      description: 'Desarrollo de software a la medida de tus necesidades',
    },
    {
      icon: call,
      title: 'Soporte técnico',
      description: 'Soporte técnico a la medida de tus necesidades',
    },
    {
      icon: interrogatory,
      title: 'Incubación de proyectos',
      description: 'Incubación de proyectos, desde la idea hasta el desarrollo',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animate title
    anime({
      targets: titleRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2500,
      easing: 'easeOutExpo',
      complete: () => {
        // Start showing cards after title animation
        setCurrentCardIndex(0);
      },
    });
  }, [isVisible]);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentCardIndex((prev) => Math.min(prev + 1, offers.length - 1));
    }, 100);
  };

  return (
    <div
      ref={containerRef}
      className="max-w-[1400px] min-h-[70vh] mx-auto px-8 py-16 flex flex-col gap-16"
    >
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center opacity-0"
      >
        <span className="text-2xl text-primary-500 mb-4">Novedades</span>
        <h2 className="text-5xl font-bold text-black">¿Que ofrecemos?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.slice(0, currentCardIndex + 1).map((offer, index) => (
          <ServiceCard
            key={index}
            icon={offer.icon.src}
            title={offer.title}
            description={offer.description}
            shouldAnimate={index === currentCardIndex}
            onAnimationComplete={handleAnimationComplete}
          />
        ))}
      </div>
    </div>
  );
};
