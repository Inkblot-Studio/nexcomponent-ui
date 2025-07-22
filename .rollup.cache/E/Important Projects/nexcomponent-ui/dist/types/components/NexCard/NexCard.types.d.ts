import React from 'react';
export type NexCardElevation = 'flat' | 'raised' | 'hoverable' | 'interactive';
export type NexCardLayout = 'vertical' | 'horizontal' | 'auto';
export type NexCardVariant = 'default' | 'glass' | 'premium' | 'minimal';
export interface NexCardProps {
    title?: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
    image?: {
        src: string;
        alt?: string;
        aspectRatio?: 'square' | 'video' | 'wide' | 'auto';
    };
    icon?: React.ReactNode;
    variant?: NexCardVariant;
    elevation?: NexCardElevation;
    layout?: NexCardLayout;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    interactive?: boolean;
    clickable?: boolean;
    href?: string;
    as?: 'div' | 'button' | 'a';
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    loading?: boolean;
    disabled?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    'aria-label'?: string;
    'aria-describedby'?: string;
    className?: string;
    style?: React.CSSProperties;
    animate?: boolean;
    delay?: number;
    content?: string;
    imageUrl?: string;
    badge?: string;
    type?: 'primary' | 'secondary' | 'glass' | 'enterprise';
    elevated?: boolean;
}
export interface NexCardContextValue {
    variant: NexCardVariant;
    elevation: NexCardElevation;
    layout: NexCardLayout;
    size: 'sm' | 'md' | 'lg' | 'xl';
    interactive: boolean;
    clickable: boolean;
    loading: boolean;
    disabled: boolean;
}
//# sourceMappingURL=NexCard.types.d.ts.map