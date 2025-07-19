export interface CarouselNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
  onSlideChange: (index: number) => void;
  hasPrevious: boolean;
  hasNext: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
} 