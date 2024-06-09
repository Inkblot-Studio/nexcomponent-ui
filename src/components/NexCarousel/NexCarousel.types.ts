export interface NexCarouselProps {
    children: React.ReactNode[];
    navButtons?: boolean;
    navigationPosition?: 'top' | 'bottom';
    line?: boolean;
    interval?: number;
}