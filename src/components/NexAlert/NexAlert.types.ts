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
  // Core props
  id: string;
  type?: NexAlertType;
  variant?: NexAlertVariant;
  size?: NexAlertSize;
  
  // Content
  title?: string;
  message: string;
  description?: string;
  icon?: ReactNode;
  
  // Behavior
  timeout?: number; // in milliseconds, 0 = no auto-dismiss
  dismissible?: boolean;
  pauseOnHover?: boolean;
  persistent?: boolean; // won't auto-dismiss
  
  // Actions
  actions?: NexAlertAction[];
  onUndo?: () => void;
  
  // Callbacks
  onDismiss?: () => void;
  onShow?: () => void;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
  
  // Legacy support
  handleDismiss?: () => void; // deprecated, use onDismiss
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

// Preset configurations for common use cases
export interface NexAlertPreset {
  type: NexAlertType;
  variant: NexAlertVariant;
  size: NexAlertSize;
  timeout: number;
  dismissible: boolean;
  pauseOnHover: boolean;
  icon?: ReactNode;
}

export const NEX_ALERT_PRESETS: Record<string, NexAlertPreset> = {
  toast: {
    type: 'info',
    variant: 'glass',
    size: 'sm',
    timeout: 4000,
    dismissible: true,
    pauseOnHover: true,
  },
  notification: {
    type: 'info',
    variant: 'default',
    size: 'md',
    timeout: 0,
    dismissible: true,
    pauseOnHover: false,
  },
  banner: {
    type: 'warning',
    variant: 'premium',
    size: 'lg',
    timeout: 0,
    dismissible: false,
    pauseOnHover: false,
  },
  error: {
    type: 'error',
    variant: 'default',
    size: 'md',
    timeout: 0,
    dismissible: true,
    pauseOnHover: false,
  },
  success: {
    type: 'success',
    variant: 'default',
    size: 'md',
    timeout: 3000,
    dismissible: true,
    pauseOnHover: true,
  },
};