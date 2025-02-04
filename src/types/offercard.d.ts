export interface OfferCardProps {
  icon: Image;
  title: string;
  description: string;
  onAnimationComplete: () => void;
  shouldAnimate: boolean;
  isFirst: boolean;
}
