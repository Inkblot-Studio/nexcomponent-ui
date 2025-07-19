import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import './NexButton.scss';
/**
 * NexButton component - Enterprise Grade
 *
 * A high-performance, animated button component with glassmorphic styling and enterprise-grade animations.
 * Features optimized animations, accessibility compliance, and cross-browser compatibility.
 *
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {string} className - Additional class names to apply to the button.
 * @param {'small' | 'normal' | 'large'} size - The size of the button. Default is 'normal'.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | 'enterprise' | string} type - The type of the button which determines its color and style.
 * @param {boolean} inverted - Whether to apply an inverted style to the button.
 * @param {string} text - The text to display inside the button.
 * @param {boolean} disabled - Whether the button is disabled.
 * @param {boolean} loading - Whether to show a loading state.
 * @param {React.ReactNode} icon - Optional icon to display.
 * @param {'left' | 'right'} iconPosition - Position of the icon relative to text.
 */
const NexButton = ({ onClick, className, size = 'normal', inverted, type, text, disabled = false, loading = false, icon, iconPosition = 'left', ...rest }) => {
    const { timing, spring, shouldReduceMotion } = useAnimationConfig();
    const getTypeClass = (type) => {
        if (!type)
            return '';
        const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass', 'enterprise'];
        return colorNames.includes(type) ? `nex-button--${type}` : '';
    };
    const getSizeClass = (size) => {
        return size ? `nex-button--${size}` : '';
    };
    const buttonClasses = `nex-button ${className || ''} ${getSizeClass(size)} ${getTypeClass(type)} ${inverted ? 'inverted' : ''} ${!type && inverted ? 'inverted-default' : ''} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`;
    const handleClick = (e) => {
        if (disabled || loading)
            return;
        onClick?.(e);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!disabled && !loading) {
                onClick?.(e);
            }
        }
    };
    // Animation variants - no scale animations
    const buttonVariants = {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0.2 : 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        hover: {
            y: shouldReduceMotion ? 0 : -2,
            transition: timing.fast
        },
        tap: {
            y: shouldReduceMotion ? 0 : 1,
            transition: timing.fast
        }
    };
    const iconVariants = {
        initial: { opacity: 0, x: iconPosition === 'left' ? -10 : 10 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: shouldReduceMotion ? 0.1 : 0.2,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };
    const loadingVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };
    // Animated dots for loading
    const LoadingDots = () => (<motion.div className="nex-button-loading-dots" variants={loadingVariants} initial="initial" animate="animate">
      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
        .
      </motion.span>
      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
        .
      </motion.span>
      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
        .
      </motion.span>
    </motion.div>);
    return (<motion.button className={buttonClasses} onClick={handleClick} onKeyDown={handleKeyDown} disabled={disabled || loading} role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled || loading} aria-label={text} variants={buttonVariants} initial="initial" animate="animate" whileHover={disabled || loading ? {} : "hover"} whileTap={disabled || loading ? {} : "tap"} whileFocus={{
            outline: "2px solid var(--nex-signature)",
            outlineOffset: "2px",
            transition: timing.fast
        }} {...rest}>
      {/* Loading Dots */}
      {loading && <LoadingDots />}

      {/* Content Container */}
      <div className="nex-button-content">
        {/* Icon */}
        {icon && !loading && (<motion.div className={`nex-button-icon nex-button-icon--${iconPosition}`} variants={iconVariants} initial="initial" animate="animate">
            {icon}
          </motion.div>)}

        {/* Text */}
        {text && !loading && (<motion.span className="nex-button-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}>
            {text}
          </motion.span>)}
      </div>

      {/* Ripple Effect */}
      <motion.div className="nex-button-ripple" initial={{ scale: 0, opacity: 0 }} whileTap={{
            scale: 2,
            opacity: [0, 0.3, 0],
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }}/>
    </motion.button>);
};
export default NexButton;
//# sourceMappingURL=NexButton.jsx.map