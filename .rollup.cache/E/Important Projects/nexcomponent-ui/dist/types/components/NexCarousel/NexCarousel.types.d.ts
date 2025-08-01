/// <reference types="react" />
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
    slides: CarouselSlide[];
    variant?: CarouselVariant;
    size?: CarouselSize;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    pauseOnHover?: boolean;
    infinite?: boolean;
    showControls?: boolean;
    showIndicators?: boolean;
    showCounter?: boolean;
    onSlideChange?: (index: number) => void;
    onSlideClick?: (slide: CarouselSlide, index: number) => void;
    className?: string;
    style?: React.CSSProperties;
}
//# sourceMappingURL=NexCarousel.types.d.ts.map