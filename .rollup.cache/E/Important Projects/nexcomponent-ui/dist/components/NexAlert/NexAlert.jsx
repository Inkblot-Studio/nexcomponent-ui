import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import styles from './NexAlert.module.scss';
// Default icons for each alert type
const defaultIcons = {
    error: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
    </svg>),
    success: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22,4 12,14.01 9,11.01"/>
    </svg>),
    info: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>),
    warning: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>),
    neutral: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>),
};
/**
 * NexAlert - Premium Enterprise Alert Component
 *
 * A sophisticated, animated alert component with Apple-like design principles.
 * Features rich content support, multiple variants, progress indicators, and
 * comprehensive accessibility support.
 *
 * @example
 * ```tsx
 * <NexAlert
 *   id="alert-1"
 *   type="success"
 *   title="Success!"
 *   message="Your changes have been saved"
 *   variant="glass"
 *   timeout={5000}
 *   onDismiss={() => console.log('Alert dismissed')}
 * />
 * ```
 */
const NexAlert = ({ id, type = 'info', variant = 'default', size = 'md', title, message, description, icon, timeout = 0, dismissible = true, pauseOnHover = false, persistent = false, actions = [], onUndo, onDismiss, onShow, className, style, 
// Legacy support
handleDismiss, }) => {
    const { shouldReduceMotion } = useAnimationConfig();
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(100);
    const timeoutRef = useRef(null);
    const progressRef = useRef(null);
    const startTimeRef = useRef(Date.now());
    const totalDurationRef = useRef(timeout);
    // Legacy support
    const finalOnDismiss = onDismiss || handleDismiss;
    // Auto-dismiss logic with pause on hover
    useEffect(() => {
        if (timeout > 0 && !persistent && finalOnDismiss) {
            const startTimer = () => {
                startTimeRef.current = Date.now();
                totalDurationRef.current = timeout;
                // Progress bar animation
                if (!shouldReduceMotion) {
                    progressRef.current = setInterval(() => {
                        const elapsed = Date.now() - startTimeRef.current;
                        const remaining = Math.max(0, 100 - (elapsed / timeout) * 100);
                        setProgress(remaining);
                    }, 16); // ~60fps
                }
                // Dismiss timer
                timeoutRef.current = setTimeout(() => {
                    if (!isPaused) {
                        finalOnDismiss();
                    }
                }, timeout);
            };
            if (!isPaused) {
                startTimer();
            }
            return () => {
                if (timeoutRef.current)
                    clearTimeout(timeoutRef.current);
                if (progressRef.current)
                    clearInterval(progressRef.current);
            };
        }
    }, [timeout, persistent, finalOnDismiss, isPaused, shouldReduceMotion]);
    // Pause/resume on hover
    const handleMouseEnter = useCallback(() => {
        if (pauseOnHover && timeout > 0 && !persistent) {
            setIsPaused(true);
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            if (progressRef.current)
                clearInterval(progressRef.current);
        }
    }, [pauseOnHover, timeout, persistent]);
    const handleMouseLeave = useCallback(() => {
        if (pauseOnHover && timeout > 0 && !persistent) {
            setIsPaused(false);
            // Restart timer with remaining time
            const elapsed = Date.now() - startTimeRef.current;
            const remaining = Math.max(0, timeout - elapsed);
            if (remaining > 0) {
                timeoutRef.current = setTimeout(() => {
                    finalOnDismiss();
                }, remaining);
            }
        }
    }, [pauseOnHover, timeout, persistent, finalOnDismiss]);
    // Show animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            onShow?.();
        }, 50);
        return () => clearTimeout(timer);
    }, [onShow]);
    // Dismiss handler
    const dismissAlert = useCallback(() => {
        setIsVisible(false);
        if (finalOnDismiss) {
            setTimeout(() => {
                finalOnDismiss();
            }, 300); // Match animation duration
        }
    }, [finalOnDismiss]);
    // Action handler
    const handleAction = useCallback((action) => {
        if (!action.disabled) {
            action.onClick();
            if (action.variant === 'primary') {
                dismissAlert();
            }
        }
    }, [dismissAlert]);
    // Build class names
    const alertClasses = [
        styles['nexAlert'],
        styles[`type${type.charAt(0).toUpperCase() + type.slice(1)}`],
        styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        className
    ].filter(Boolean).join(' ');
    // Animation variants
    const alertVariants = {
        initial: {
            opacity: 0,
            y: -20,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: shouldReduceMotion ? 0.2 : 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: shouldReduceMotion ? 0.1 : 0.2,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };
    // Get the appropriate icon
    const alertIcon = icon || defaultIcons[type];
    return (<AnimatePresence>
      {isVisible && (<motion.div className={alertClasses} style={style} variants={alertVariants} initial="initial" animate="animate" exit="exit" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="alert" aria-live="polite" aria-atomic="true">
          {/* Icon */}
          <div className={`${styles.icon} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}>
            {alertIcon}
          </div>

          {/* Content */}
          <div className={styles.content}>
            {/* Header */}
            {(title || message) && (<div className={styles.header}>
                {title && (<h4 className={`${styles.title} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}>
                    {title}
                  </h4>)}
                {message && !title && (<p className={`${styles.message} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}>
                    {message}
                  </p>)}
              </div>)}

            {/* Message (if title is provided) */}
            {message && title && (<p className={`${styles.message} ${styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}>
                {message}
              </p>)}

            {/* Description */}
            {description && (<p className={styles.description}>
                {description}
              </p>)}

            {/* Actions */}
            {(actions.length > 0 || onUndo) && (<div className={styles.actions}>
                {actions.map((action, index) => (<button key={index} className={`${styles.actionButton} ${action.variant === 'primary' ? styles.primary : ''}`} onClick={() => handleAction(action)} disabled={action.disabled}>
                    {action.label}
                  </button>))}
                {onUndo && (<button className={styles.actionButton} onClick={onUndo}>
                    Undo
                  </button>)}
              </div>)}
          </div>

          {/* Dismiss button */}
          {dismissible && (<button className={styles.dismissButton} onClick={handleDismiss} aria-label="Dismiss alert">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>)}

          {/* Progress bar */}
          {timeout > 0 && !persistent && !shouldReduceMotion && (<div className={styles.progressBar} style={{
                    width: `${progress}%`,
                    animationDuration: `${timeout}ms`
                }}/>)}
        </motion.div>)}
    </AnimatePresence>);
};
export default NexAlert;
//# sourceMappingURL=NexAlert.jsx.map