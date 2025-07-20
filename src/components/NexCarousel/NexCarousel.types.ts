export interface CarouselSlide {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export type CarouselVariant = 'default' | 'hero' | 'gallery' | 'minimal';
export type CarouselSize = 'sm' | 'md' | 'lg' | 'xl';

export interface NexCarouselProps {
  // Core props
  slides: CarouselSlide[];
  variant?: CarouselVariant;
  size?: CarouselSize;
  
  // Behavior
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
  infinite?: boolean;
  
  // Controls
  showControls?: boolean;
  showIndicators?: boolean;
  showCounter?: boolean;
  
  // Callbacks
  onSlideChange?: (index: number) => void;
  onSlideClick?: (slide: CarouselSlide, index: number) => void;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
} 