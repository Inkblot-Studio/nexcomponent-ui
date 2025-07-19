export interface CarouselIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  className?: string;
} 