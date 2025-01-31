import type { FC } from 'react';
import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';

interface OfferCardProps {
  icon: string;
  title: string;
  description: string;
  onAnimationComplete: () => void;
  shouldAnimate: boolean;
  isFirst: boolean;
}

const OfferCard: FC<OfferCardProps> = ({
  icon,
  title,
  description,
  onAnimationComplete,
  shouldAnimate,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      setIsAnimated(true);
      onAnimationComplete();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: cardRef.current,
              translateX: [500, 0],
              opacity: [0, 1],
              duration: 800,
              easing: 'easeOutExpo',
              complete: () => {
                setIsAnimated(true);
                onAnimationComplete();
              },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [shouldAnimate, onAnimationComplete]);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-500 flex flex-col items-center ${
        shouldAnimate && !isAnimated
          ? 'opacity-0 translate-x-[300px]'
          : 'opacity-100 translate-x-0'
      }`}
    >
      <i className={`${icon} text-primary-500 text-4xl mb-4`}></i>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export const Offer: FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const offers = [
    {
      icon: 'fas fa-code',
      title: 'Desarrollo de software',
      description:
        'Desarrollo de software enfocado en la innovación y la eficiencia',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Consultorías',
      description: 'Consultorías en tecnologías y desarrollo de software',
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Profesionales a tu disposición',
      description:
        'Profesionales en tecnologías y desarrollo de software a tu disposición',
    },
    {
      icon: 'fas fa-cloud',
      title: 'Desarrollo a la medida',
      description: 'Desarrollo de software a la medida de tus necesidades',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Soporte técnico',
      description: 'Soporte técnico a la medida de tus necesidades',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Incubación de proyectos',
      description: 'Incubación de proyectos, desde la idea hasta el desarrollo',
    },
  ];

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentCardIndex((prev) => Math.min(prev + 1, offers.length - 1));
    }, 200);
  };

  return (
    <div className="max-w-[1400px] min-h-[90vh] mx-auto px-8 py-16 flex flex-col gap-16">
      <div className="flex flex-col items-center text-center">
        <span className="text-2xl text-primary-500 mb-4">Novedades</span>
        <h2 className="text-5xl font-bold text-black">¿Que ofrecemos?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.slice(0, currentCardIndex + 1).map((offer, index) => (
          <OfferCard
            key={index}
            icon={offer.icon}
            title={offer.title}
            description={offer.description}
            shouldAnimate={index === currentCardIndex}
            onAnimationComplete={handleAnimationComplete}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
