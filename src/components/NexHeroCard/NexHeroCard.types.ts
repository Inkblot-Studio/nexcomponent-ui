export interface NexHeroCardProps {
    title: string,
    subtitle: string,
    type: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    buttonLabel?: string,
    buttonHandle?: () => void;
    backgroundUrl?: string;
}