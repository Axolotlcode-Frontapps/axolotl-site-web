import type { FC } from 'react';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  shouldAnimate?: boolean;
  onAnimationComplete?: () => void;
  isFirst?: boolean;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  shouldAnimate = false,
  onAnimationComplete,
  isFirst = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldAnimate || isFirst) {
      anime({
        targets: cardRef.current,
        opacity: [0, 1],
        duration: 400,
        delay: 70,
        easing: 'easeInOutQuad',
        complete: onAnimationComplete,
      });
    }
  }, [shouldAnimate, isFirst, onAnimationComplete]);

  return (
    <div
      ref={cardRef}
      className="flex flex-row p-6 bg-white rounded-lg shadow-lg gap-4"
    >
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-10 h-10 text-secondary-500" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
