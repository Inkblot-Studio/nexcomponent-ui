export interface NexCardProps {
    title?: string;
    imageUrl?: string;
    type: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    content?: string;
    actions?: React.ReactNode;
}