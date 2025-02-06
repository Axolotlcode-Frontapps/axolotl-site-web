import type { FC } from 'react';
import { useState } from 'react';
import call from '@/assets/icons/call.svg';
import person from '@/assets/icons/person.svg';
import devs from '@/assets/icons/dev.svg';
import pencil from '@/assets/icons/pencil.svg';
import star from '@/assets/icons/start.svg';
import interrogatory from '@/assets/icons/interrogatory.svg';
import { OfferCard } from './molecules/offerCard';

export const Offer: FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentCardIndex((prev) => Math.min(prev + 1, offers.length - 1));
    }, 200);
  };

  return (
    <div className="max-w-[1400px] min-h-[70vh] mx-auto px-8 py-16 flex flex-col gap-16">
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
