import React, { createContext, useState, useContext, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import NexAlert from './NexAlert';
import styles from './NexAlert.module.scss';
import type { 
  NexAlertProps, 
  NexAlertContextValue, 
  NexAlertsProviderProps,
  NexAlertPosition,
  NexAlertPreset
} from './NexAlert.types';
import { NEX_ALERT_PRESETS } from './NexAlert.types';

const NexAlertsContext = createContext<NexAlertContextValue | undefined>(undefined);

/**
 * NexAlertsProvider - Premium Alert Management System
 *
 * Provides a comprehensive alert management system with global state,
 * keyboard shortcuts, and advanced positioning options.
 */
const NexAlertsProvider: React.FC<NexAlertsProviderProps> = ({ 
  children,
  maxAlerts = 4,
  defaultPosition = 'top',
  defaultTimeout = 4000,
  defaultVariant = 'default',
  defaultSize = 'md',
  enableKeyboardShortcuts = true,
  enableClickOutside = true,
  enableSwipeToDismiss = true,
}) => {
  const { shouldReduceMotion } = useAnimationConfig();
  const [alerts, setAlerts] = useState<NexAlertProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Add alert with smart management
  const addAlert = useCallback((alert: Omit<NexAlertProps, 'id'>): string => {
    const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
    
    // Apply defaults
    const newAlert: NexAlertProps = {
      id,
      type: alert.type || 'info',
      variant: alert.variant || defaultVariant,
      size: alert.size || defaultSize,
      timeout: alert.timeout ?? defaultTimeout,
      dismissible: alert.dismissible ?? true,
      pauseOnHover: alert.pauseOnHover ?? true,
      ...alert,
    };

    setAlerts((prev) => {
      const newAlerts = [newAlert, ...prev];
      
      // Limit number of alerts
      if (newAlerts.length > maxAlerts) {
        return newAlerts.slice(0, maxAlerts);
      }
      
      return newAlerts;
    });

    return id;
  }, [maxAlerts, defaultVariant, defaultSize, defaultTimeout]);

  // Dismiss specific alert
  const dismissAlert = useCallback((id: string): void => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }, []);

  // Dismiss all alerts
  const dismissAll = useCallback((): void => {
    setAlerts([]);
  }, []);

  // Update specific alert
  const updateAlert = useCallback((id: string, updates: Partial<NexAlertProps>): void => {
    setAlerts((prev) => 
      prev.map((alert) => 
        alert.id === id ? { ...alert, ...updates } : alert
      )
    );
  }, []);

  // Clear all alerts
  const clearAlerts = useCallback((): void => {
    setAlerts([]);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dismissAll();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts, dismissAll]);

  // Click outside to dismiss
  useEffect(() => {
    if (!enableClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Only dismiss non-persistent alerts
        setAlerts((prev) => prev.filter((alert) => alert.persistent));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [enableClickOutside]);

  // Context value
  const contextValue: NexAlertContextValue = {
    alerts,
    addAlert,
    dismissAlert,
    dismissAll,
    updateAlert,
    clearAlerts,
  };

  // Animation variants for container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
      }
    }
  };

  return (
    <NexAlertsContext.Provider value={contextValue}>
      <AnimatePresence>
        {alerts.length > 0 && (
          <motion.div
            ref={containerRef}
            className={`${styles['alertGroup']} ${styles[`position${defaultPosition.charAt(0).toUpperCase() + defaultPosition.slice(1)}`]}`}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {alerts.map((alert) => (
              <NexAlert
                key={alert.id}
                {...alert}
                onDismiss={() => dismissAlert(alert.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </NexAlertsContext.Provider>
  );
};

/**
 * useAlerts - Hook for managing alerts
 *
 * Provides a convenient interface for adding and managing alerts
 * with preset configurations and advanced features.
 */
const useAlerts = () => {
  const context = useContext(NexAlertsContext);
  
  if (!context) {
    throw new Error('useAlerts must be used within a NexAlertsProvider');
  }

  const { addAlert, dismissAlert, dismissAll, updateAlert, clearAlerts } = context;

  // Preset-based alert creators
  const createToast = useCallback((message: string, options?: Partial<NexAlertProps>) => {
    const preset = NEX_ALERT_PRESETS['toast'];
    return addAlert({
      ...preset,
      message,
      ...options,
    });
  }, [addAlert]);

  const createNotification = useCallback((message: string, options?: Partial<NexAlertProps>) => {
    const preset = NEX_ALERT_PRESETS['notification'];
    return addAlert({
      ...preset,
      message,
      ...options,
    });
  }, [addAlert]);

  const createBanner = useCallback((message: string, options?: Partial<NexAlertProps>) => {
    const preset = NEX_ALERT_PRESETS['banner'];
    return addAlert({
      ...preset,
      message,
      ...options,
    });
  }, [addAlert]);

  const createError = useCallback((message: string, options?: Partial<NexAlertProps>) => {
    const preset = NEX_ALERT_PRESETS['error'];
    return addAlert({
      ...preset,
      message,
      ...options,
    });
  }, [addAlert]);

  const createSuccess = useCallback((message: string, options?: Partial<NexAlertProps>) => {
    const preset = NEX_ALERT_PRESETS['success'];
    return addAlert({
      ...preset,
      message,
      ...options,
    });
  }, [addAlert]);

  return {
    // Core functions
    addAlert,
    dismissAlert,
    dismissAll,
    updateAlert,
    clearAlerts,
    
    // Preset creators
    createToast,
    createNotification,
    createBanner,
    createError,
    createSuccess,
    
    // Quick actions
    showSuccess: createSuccess,
    showError: createError,
    showInfo: (message: string, options?: Partial<NexAlertProps>) => 
      addAlert({ type: 'info', message, ...options }),
    showWarning: (message: string, options?: Partial<NexAlertProps>) => 
      addAlert({ type: 'warning', message, ...options }),
  };
};

export { NexAlertsProvider, useAlerts };