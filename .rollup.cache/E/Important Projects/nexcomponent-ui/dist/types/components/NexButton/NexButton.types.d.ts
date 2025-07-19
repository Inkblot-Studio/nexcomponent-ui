/// <reference types="react" />
export interface NexButtonProps {
    onClick?: (e?: React.MouseEvent | React.KeyboardEvent) => void;
    className?: string;
    size?: 'small' | 'normal' | 'large';
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | 'enterprise') | string;
    inverted?: boolean;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}
//# sourceMappingURL=NexButton.types.d.ts.map