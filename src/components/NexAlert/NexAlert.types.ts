import { ReactNode } from "react";

export interface NexAlertProps {
    id: string,
    type: 'error' | 'success' | 'info' | 'warning';
    message: string;
    timeout?: number;
    handleDismiss?: () => void;
}  

export interface AlertsContextType {
    alerts: NexAlertProps[];
    addAlert: (alert: Omit<NexAlertProps, 'id'>) => string;
    dismissAlert: (id: string) => void;
}

export interface NexAlertsProviderProps {
    children: ReactNode;
}