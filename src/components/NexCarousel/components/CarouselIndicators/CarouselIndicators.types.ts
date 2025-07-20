import { CarouselIndicatorStyle, CarouselVariant, CarouselSize } from '../../NexCarousel.types';

export interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  style?: CarouselIndicatorStyle;
  variant?: CarouselVariant;
  size?: CarouselSize;
  className?: string;
} 