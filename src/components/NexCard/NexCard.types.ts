export interface NexCardProps {
    title?: string;
    imageUrl?: string;
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | 'enterprise') | string;
    content?: string;
    actions?: React.ReactNode;
    border?: boolean;
    className?: string;
    elevated?: boolean;
    interactive?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
    badge?: string;
    loading?: boolean;
}