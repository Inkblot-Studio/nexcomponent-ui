import { PanInfo } from 'framer-motion';
import { CarouselAnimation } from '../../NexCarousel.types';

export interface CarouselContainerProps {
  children?: React.ReactNode;
  currentSlide: number;
  direction: number;
  animation?: CarouselAnimation;
  infinite?: boolean;
  totalSlides?: number;
  touchEnabled?: boolean;
  onDragStart?: () => void;
  onDragEnd?: (event: any, info: PanInfo) => void;
  className?: string;
} 