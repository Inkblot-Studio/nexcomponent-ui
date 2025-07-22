import type { ReactNode } from "react";
export type NexAlertType = 'error' | 'success' | 'info' | 'warning' | 'neutral';
export type NexAlertVariant = 'default' | 'glass' | 'premium' | 'minimal';
export type NexAlertPosition = 'top' | 'bottom' | 'top-right' | 'bottom-right' | 'center';
export type NexAlertSize = 'sm' | 'md' | 'lg';
export interface NexAlertAction {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    disabled?: boolean;
}
export interface NexAlertProps {
    id: string;
    type?: NexAlertType;
    variant?: NexAlertVariant;
    size?: NexAlertSize;
    title?: string;
    message: string;
    description?: string;
    icon?: ReactNode;
    timeout?: number;
    dismissible?: boolean;
    pauseOnHover?: boolean;
    persistent?: boolean;
    actions?: NexAlertAction[];
    onUndo?: () => void;
    onDismiss?: () => void;
    onShow?: () => void;
    className?: string;
    style?: React.CSSProperties;
    handleDismiss?: () => void;
}
export interface NexAlertContextValue {
    alerts: NexAlertProps[];
    addAlert: (alert: Omit<NexAlertProps, 'id'>) => string;
    dismissAlert: (id: string) => void;
    dismissAll: () => void;
    updateAlert: (id: string, updates: Partial<NexAlertProps>) => void;
    clearAlerts: () => void;
}
export interface NexAlertsProviderProps {
    children: ReactNode;
    maxAlerts?: number;
    defaultPosition?: NexAlertPosition;
    defaultTimeout?: number;
    defaultVariant?: NexAlertVariant;
    defaultSize?: NexAlertSize;
    enableKeyboardShortcuts?: boolean;
    enableClickOutside?: boolean;
    enableSwipeToDismiss?: boolean;
}
export interface NexAlertGroupProps {
    children: ReactNode;
    position?: NexAlertPosition;
    maxAlerts?: number;
    className?: string;
}
export interface NexAlertPreset {
    type: NexAlertType;
    variant: NexAlertVariant;
    size: NexAlertSize;
    timeout: number;
    dismissible: boolean;
    pauseOnHover: boolean;
    icon?: ReactNode;
}
export declare const NEX_ALERT_PRESETS: Record<string, NexAlertPreset>;
//# sourceMappingURL=NexAlert.types.d.ts.map