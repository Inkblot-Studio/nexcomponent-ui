import { CarouselSlide as CarouselSlideType, CarouselVariant, CarouselSize } from '../../NexCarousel.types';

export interface CarouselSlideProps {
  slide: CarouselSlideType;
  index: number;
  variant?: CarouselVariant;
  size?: CarouselSize;
  lazy?: boolean;
  isLoaded?: boolean;
  onClick?: (slide: CarouselSlideType, index: number) => void;
  className?: string;
} 