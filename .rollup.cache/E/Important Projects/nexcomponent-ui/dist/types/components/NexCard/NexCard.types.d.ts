/// <reference types="react" />
export interface NexCardProps {
    title?: string;
    content?: string;
    imageUrl?: string;
    actions?: React.ReactNode;
    badge?: string;
    type?: 'primary' | 'secondary' | 'glass' | 'enterprise';
    interactive?: boolean;
    onClick?: () => void;
    elevated?: boolean;
    className?: string;
}
//# sourceMappingURL=NexCard.types.d.ts.map