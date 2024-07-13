export interface NexCarouselProps {
    children: React.ReactNode[];
    className?: string;
    navButtons?: boolean;
    navigationPosition?: 'top' | 'bottom';
    line?: boolean;
    interval?: number;
}