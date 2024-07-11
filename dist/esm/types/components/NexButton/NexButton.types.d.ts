export interface NexButtonProps {
    onClick?: () => void;
    className?: string;
    size?: 'small' | 'normal' | 'large';
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    inverted?: boolean;
    text?: string;
}
