import React, { useState, useEffect, FC, ReactNode } from 'react';
import './NexAlert.scss';
import { NexAlertProps } from './NexAlert.types';

const NexAlert: FC<NexAlertProps> = ({ message = '', type = 'info', timeout = 0, handleDismiss = null }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Apply the fade-in effect with a slight delay to prevent flickering
    return () => clearTimeout(timer);
  }, [])

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
  }, [timeout, handleDismiss])

  const dismissAlert = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(false);
    if (handleDismiss) {
      setTimeout(() => {
        handleDismiss();
      }, 300); // Delay dismissal to match the fade-out animation duration
    }
  }

  const getAlertClass = (type: string): string => {
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

  return message?.length ? (
    <div className={alertClass}>
      <div className="nex-alert__message">{message}</div>
      {handleDismiss &&  (
        <button className="nex-alert__dismiss-button" onClick={dismissAlert}>Dismiss</button>
      )}
    </div>
  ) : null;
}

interface NexAlertsWrapperProps {
  children: ReactNode;
}

const NexAlertsWrapper: FC<NexAlertsWrapperProps> = ({ children }) => {
  return (
    <div className="nex-alerts-wrapper">
      {children}
    </div>
  )
}

export { NexAlert, NexAlertsWrapper };