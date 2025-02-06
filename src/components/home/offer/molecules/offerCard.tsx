import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import type { OfferCardProps } from '@/types/offercard';

export const OfferCard: FC<OfferCardProps> = ({
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
      className={`bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-500 flex flex-col items-center xl:gap-6 xs:gap-2 md:gap-4 lg:gap-5 ${
        shouldAnimate && !isAnimated
          ? 'opacity-0 translate-x-[300px]'
          : 'opacity-100 translate-x-0'
      }`}
    >
      <img src={icon.src} alt={title} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};
