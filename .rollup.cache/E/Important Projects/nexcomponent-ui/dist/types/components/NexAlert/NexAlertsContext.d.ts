import React from 'react';
import type { NexAlertProps, NexAlertsProviderProps } from './NexAlert.types';
/**
 * NexAlertsProvider - Premium Alert Management System
 *
 * Provides a comprehensive alert management system with global state,
 * keyboard shortcuts, and advanced positioning options.
 */
declare const NexAlertsProvider: React.FC<NexAlertsProviderProps>;
/**
 * useAlerts - Hook for managing alerts
 *
 * Provides a convenient interface for adding and managing alerts
 * with preset configurations and advanced features.
 */
declare const useAlerts: () => {
    addAlert: (alert: Omit<NexAlertProps, "id">) => string;
    dismissAlert: (id: string) => void;
    dismissAll: () => void;
    updateAlert: (id: string, updates: Partial<NexAlertProps>) => void;
    clearAlerts: () => void;
    createToast: (message: string, options?: Partial<NexAlertProps>) => string;
    createNotification: (message: string, options?: Partial<NexAlertProps>) => string;
    createBanner: (message: string, options?: Partial<NexAlertProps>) => string;
    createError: (message: string, options?: Partial<NexAlertProps>) => string;
    createSuccess: (message: string, options?: Partial<NexAlertProps>) => string;
    showSuccess: (message: string, options?: Partial<NexAlertProps>) => string;
    showError: (message: string, options?: Partial<NexAlertProps>) => string;
    showInfo: (message: string, options?: Partial<NexAlertProps>) => string;
    showWarning: (message: string, options?: Partial<NexAlertProps>) => string;
};
export { NexAlertsProvider, useAlerts };
//# sourceMappingURL=NexAlertsContext.d.ts.map