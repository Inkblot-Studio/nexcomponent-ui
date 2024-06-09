export interface NexAlertProps {
    id: string,
    type: 'error' | 'success' | 'info' | 'warning';
    message: string;
    timeout?: number;
    handleDismiss?: () => void;
}  