import './NexAlert.scss';
import type { FC, ReactNode } from 'react';
import type { NexAlertProps } from './NexAlert.types';
/**
 * NexAlert component
 *
 * A component to display alert messages with various types and an optional auto-dismiss feature.
 *
 * @param {string} message - The message to display in the alert.
 * @param {'error' | 'success' | 'info' | 'warning'} type - The type of the alert which determines its style. Default is 'info'.
 * @param {number} [timeout=0] - The time in seconds before the alert automatically dismisses itself. Default is 0 (no auto-dismiss).
 * @param {function} [handleDismiss=null] - The function to call when the alert is dismissed.
 */
declare const NexAlert: FC<NexAlertProps>;
interface NexAlertsWrapperProps {
    children: ReactNode;
}
/**
 * NexAlertsWrapper component
 *
 * A wrapper component for grouping multiple NexAlert components.
 *
 * @param {ReactNode} children - The child components to be wrapped inside the alerts wrapper.
 */
declare const NexAlertsWrapper: FC<NexAlertsWrapperProps>;
export { NexAlert, NexAlertsWrapper };
//# sourceMappingURL=NexAlert.d.ts.map