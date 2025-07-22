import React, { createContext, useContext, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import styles from './NexCard.module.scss';
// Context for sub-components
const NexCardContext = createContext(null);
export const useNexCard = () => {
    const context = useContext(NexCardContext);
    if (!context) {
        throw new Error('useNexCard must be used within a NexCard component');
    }
    return context;
};
/**
 * NexCard - Premium Enterprise Card Component
 *
 * A sophisticated, animated card component with Apple-like design principles.
 * Features smooth animations, multiple elevation levels, responsive layouts,
 * and comprehensive accessibility support.
 *
 * @example
 * ```tsx
 * <NexCard
 *   title="Premium Feature"
 *   subtitle="Enterprise Grade"
 *   description="Advanced functionality for professional users"
 *   elevation="interactive"
 *   onClick={() => console.log('Card clicked')}
 * />
 * ```
 */
const NexCard = ({ 
// Content
title, subtitle, description, children, 
// Media
image, icon, 
// Layout & Styling
variant = 'default', elevation = 'flat', layout = 'vertical', size = 'md', 
// Interactive Features
interactive = false, clickable = false, href, as, onClick, 
// States
loading = false, disabled = false, 
// Custom Slots
header, footer, actions, 
// Accessibility
'aria-label': ariaLabel, 'aria-describedby': ariaDescribedBy, 
// Styling
className, style, 
// Animation
animate = true, delay = 0, 
// Legacy support
content, imageUrl, badge, type, elevated, ...rest }) => {
    const { shouldReduceMotion } = useAnimationConfig();
    const [isPressed, setIsPressed] = useState(false);
    const [rippleKey, setRippleKey] = useState(0);
    const cardRef = useRef(null);
    // Legacy prop mapping
    const finalDescription = description || content;
    const finalImage = image || (imageUrl ? { src: imageUrl } : undefined);
    const finalVariant = variant || (type === 'glass' ? 'glass' : type === 'enterprise' ? 'premium' : 'default');
    const finalElevation = elevation || (elevated ? 'raised' : 'flat');
    const finalInteractive = interactive || clickable || !!onClick || !!href;
    // Determine the element type
    const Element = as || (href ? 'a' : finalInteractive ? 'button' : 'div');
    // Context value
    const contextValue = useMemo(() => ({
        variant: finalVariant,
        elevation: finalElevation,
        layout,
        size,
        interactive: finalInteractive,
        clickable: finalInteractive,
        loading,
        disabled,
    }), [finalVariant, finalElevation, layout, size, finalInteractive, loading, disabled]);
    // Animation variants - Clean, elegant Apple-like animations
    const cardVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: shouldReduceMotion ? 0.2 : 0.4,
                delay: shouldReduceMotion ? 0 : delay * 0.1,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        hover: finalInteractive && !loading && !disabled ? {
            y: shouldReduceMotion ? 0 : -2,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        } : {},
        tap: finalInteractive && !loading && !disabled ? {
            y: shouldReduceMotion ? 0 : -1,
            transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] }
        } : {}
    };
    // Ripple animation variants - Subtle, elegant effect
    const rippleVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: 1.5,
            opacity: [0, 0.2, 0],
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        }
    };
    // Event handlers
    const handleClick = (event) => {
        if (loading || disabled)
            return;
        if (finalInteractive) {
            // Create ripple effect
            setRippleKey((prev) => prev + 1);
            // Call onClick if provided
            if (onClick) {
                onClick(event);
            }
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (finalInteractive && !loading && !disabled) {
                handleClick(event);
            }
        }
    };
    const handleMouseDown = () => {
        if (finalInteractive && !loading && !disabled) {
            setIsPressed(true);
        }
    };
    const handleMouseUp = () => {
        setIsPressed(false);
    };
    // Build class names
    const cardClasses = [
        styles.nexCard,
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        styles[`layout${layout.charAt(0).toUpperCase() + layout.slice(1)}`],
        styles[`elevation${finalElevation.charAt(0).toUpperCase() + finalElevation.slice(1)}`],
        styles[`variant${finalVariant.charAt(0).toUpperCase() + finalVariant.slice(1)}`],
        loading && styles.loading,
        disabled && styles.disabled,
        className
    ].filter(Boolean).join(' ');
    // Accessibility props
    const accessibilityProps = {
        role: Element === 'button' ? 'button' : Element === 'a' ? 'link' : undefined,
        tabIndex: finalInteractive ? 0 : undefined,
        'aria-label': ariaLabel || (finalInteractive ? title : undefined),
        'aria-describedby': ariaDescribedBy,
        'aria-disabled': disabled || loading,
        'aria-busy': loading,
    };
    // Element props
    const elementProps = {
        href: Element === 'a' ? href : undefined,
        type: Element === 'button' ? 'button' : undefined,
    };
    // Render skeleton loading state
    if (loading) {
        return (<div className={cardClasses} style={style} {...rest}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <div className={`${styles.skeleton} ${styles.skeletonTitle}`}/>
              {subtitle && <div className={`${styles.skeleton} ${styles.skeletonDescription}`}/>}
            </div>
            {icon && <div className={styles.icon}>{icon}</div>}
          </div>
          <div className={styles.body}>
            <div className={`${styles.skeleton} ${styles.skeletonDescription}`}/>
            <div className={`${styles.skeleton} ${styles.skeletonDescription}`}/>
            <div className={`${styles.skeleton} ${styles.skeletonDescription}`}/>
          </div>
        </div>
      </div>);
    }
    return (<NexCardContext.Provider value={contextValue}>
      <motion.div ref={cardRef} className={cardClasses} style={style} variants={animate ? cardVariants : undefined} initial="initial" animate="animate" whileHover={finalInteractive && !loading && !disabled ? "hover" : undefined} whileTap={finalInteractive && !loading && !disabled ? "tap" : undefined} onClick={handleClick} onKeyDown={handleKeyDown} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} {...accessibilityProps} {...elementProps} {...rest}>
        {/* Media Section */}
        {finalImage && (<div className={styles.media}>
            <img src={finalImage.src} alt={finalImage.alt || title || 'Card image'} className={`${styles.image} ${styles[`aspectRatio${finalImage.aspectRatio ? finalImage.aspectRatio.charAt(0).toUpperCase() + finalImage.aspectRatio.slice(1) : 'Auto'}`]}`}/>
            <div className={styles.imageOverlay}/>
          </div>)}
        
        {/* Content Section */}
        <div className={styles.content}>
          {/* Header */}
          {(header || title || subtitle || icon) && (<div className={styles.header}>
              <div className={styles.headerContent}>
                {header || (<>
                    {title && <h3 className={styles.title}>{title}</h3>}
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                  </>)}
              </div>
              {icon && <div className={styles.icon}>{icon}</div>}
            </div>)}
          
          {/* Body */}
          <div className={styles.body}>
            {finalDescription && <p className={styles.description}>{finalDescription}</p>}
            {children}
          </div>
          
          {/* Footer */}
          {(footer || actions) && (<div className={styles.footer}>
              {footer}
              {actions && <div className={styles.actions}>{actions}</div>}
            </div>)}
        </div>
        
        {/* Ripple Effect */}
        <AnimatePresence>
          {finalInteractive && isPressed && (<motion.div key={rippleKey} className={styles.ripple} variants={rippleVariants} initial="initial" animate="animate" exit={{ opacity: 0 }}/>)}
        </AnimatePresence>
      </motion.div>
    </NexCardContext.Provider>);
};
export default NexCard;
//# sourceMappingURL=NexCard.jsx.map