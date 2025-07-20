import { CarouselControlPosition, CarouselVariant, CarouselSize } from '../../NexCarousel.types';

export interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  position?: CarouselControlPosition;
  variant?: CarouselVariant;
  size?: CarouselSize;
  className?: string;
} 