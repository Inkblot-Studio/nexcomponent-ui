import React, { useState, useEffect } from 'react';
import './NexAlert.scss';
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
const NexAlert = ({ message = '', type = 'info', timeout = 0, handleDismiss = null }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50); // Apply the fade-in effect with a slight delay to prevent flickering
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        if (timeout > 0 && handleDismiss) {
            const dismissTimer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => {
                    handleDismiss();
                }, 300); // Delay dismissal to match the fade-out animation duration
            }, timeout * 1000);
            return () => clearTimeout(dismissTimer);
        }
        return undefined; // Explicit return for when condition is false
    }, [timeout, handleDismiss]);
    const dismissAlert = (e) => {
        e.preventDefault();
        setIsVisible(false);
        if (handleDismiss) {
            setTimeout(() => {
                handleDismiss();
            }, 300); // Delay dismissal to match the fade-out animation duration
        }
    };
    const getAlertClass = (type) => {
        switch (type) {
            case 'error':
                return 'nex-alert--error';
            case 'success':
                return 'nex-alert--success';
            case 'info':
                return 'nex-alert--info';
            case 'warning':
                return 'nex-alert--warning';
            default:
                return '';
        }
    };
    const alertClass = `nex-alert ${getAlertClass(type)} ${isVisible ? 'visible' : 'hidden'}`;
    return message?.length ? (<div className={alertClass}>
      <div className="nex-alert__message">{message}</div>
      {handleDismiss && (<button className="nex-alert__dismiss-button" onClick={dismissAlert}>Dismiss</button>)}
    </div>) : null;
};
/**
 * NexAlertsWrapper component
 *
 * A wrapper component for grouping multiple NexAlert components.
 *
 * @param {ReactNode} children - The child components to be wrapped inside the alerts wrapper.
 */
const NexAlertsWrapper = ({ children }) => {
    return (<div className="nex-alerts-wrapper">
      {children}
    </div>);
};
export { NexAlert, NexAlertsWrapper };
//# sourceMappingURL=NexAlert.jsx.map