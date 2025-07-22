export interface CarouselSlide {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  content?: string;
  actionText?: string;
  actionUrl?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  customClass?: string;
}

export type CarouselVariant = 'default' | 'hero' | 'gallery' | 'minimal';
export type CarouselSize = 'sm' | 'md' | 'lg' | 'xl';
export type CarouselAnimation = 'slide' | 'fade' | 'zoom' | 'flip' | 'cube';
export type CarouselControlPosition = 'inside' | 'outside' | 'overlay';
export type CarouselIndicatorStyle = 'dots' | 'lines' | 'numbers' | 'thumbnails';

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