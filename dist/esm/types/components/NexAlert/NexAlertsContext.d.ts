import { FC } from 'react';
import { NexAlertProps } from './NexAlert.types';
import { NexAlertsProviderProps } from './NexAlert.types';
declare const NexAlertsProvider: FC<NexAlertsProviderProps>;
declare const useAlerts: () => {
    addAlert: (alert: Omit<NexAlertProps, 'id'>) => void;
    clearAlerts: () => void;
};
export { NexAlertsProvider, useAlerts };
