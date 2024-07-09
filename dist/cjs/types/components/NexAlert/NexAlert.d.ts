import { FC, ReactNode } from 'react';
import './NexAlert.scss';
import { NexAlertProps } from './NexAlert.types';
declare const NexAlert: FC<NexAlertProps>;
interface NexAlertsWrapperProps {
    children: ReactNode;
}
declare const NexAlertsWrapper: FC<NexAlertsWrapperProps>;
export { NexAlert, NexAlertsWrapper };
