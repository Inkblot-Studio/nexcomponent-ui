import type { FC } from 'react';
import type { NexAlertProps } from './NexAlert.types';
import type { NexAlertsProviderProps } from './NexAlert.types';
declare const NexAlertsProvider: FC<NexAlertsProviderProps>;
declare const useAlerts: () => {
    addAlert: (alert: Omit<NexAlertProps, 'id'>) => void;
    clearAlerts: () => void;
};
export { NexAlertsProvider, useAlerts };
//# sourceMappingURL=NexAlertsContext.d.ts.map