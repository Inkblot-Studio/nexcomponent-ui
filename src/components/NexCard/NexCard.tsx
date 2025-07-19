import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import { NexCardProps } from './NexCard.types';
import './NexCard.scss';

/**
 * NexCard component - Enterprise Grade
 *
 * A high-performance, animated card component with glassmorphic styling and enterprise-grade animations.
 * Features optimized animations, accessibility compliance, and cross-browser compatibility.
 *
 * @param {string} title - The title of the card.
 * @param {string} content - The content or body text of the card.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | 'enterprise' | string} type - The type of the card which determines its style.
 * @param {string} imageUrl - The URL of the image to display in the card.
 * @param {React.ReactNode} actions - The actions or buttons to display in the card.
 * @param {boolean} [border=true] - Whether to display a border around the card
 * @param {string} className - Additional class names to apply to the card.
 * @param {boolean} [elevated=false] - Whether to apply elevated shadow effects.
 * @param {boolean} [interactive=false] - Whether the card is interactive (clickable).
 * @param {() => void} [onClick] - Click handler for interactive cards.
 * @param {React.ReactNode} [icon] - Optional icon to display in the card header.
 * @param {string} [badge] - Optional badge text to display.
 * @param {boolean} [loading=false] - Whether to show a loading state.
 */
const NexCard: React.FC<NexCardProps> = ({ 
  title, 
  content, 
  type, 
  imageUrl, 
  actions, 
  border = true, 
  className,
  elevated = false,
  interactive = false,
  onClick,
  icon,
  badge,
  loading = false,
  ...rest
}) => {
  const { timing, spring, shouldReduceMotion } = useAnimationConfig();

  const getTypeClass = (type: string | undefined): string => {
    if (imageUrl) {
      return '';
    } else if (!type) {
      return 'nex-card-wrapper--primary';
    }

    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass', 'enterprise'];
    return colorNames.includes(type as string) ? `nex-card-wrapper--${type}` : '';
  };

  const cardClasses = `nex-card-wrapper ${getTypeClass(type)} ${imageUrl ? 'has-image' : ''} ${border ? 'border' : ''} ${className ? className : ''} ${elevated ? 'elevated' : ''} ${interactive ? 'interactive' : ''} ${loading ? 'loading' : ''}`;

  const backgroundStyle = imageUrl ? { '--background-url': `url(${imageUrl})` } as React.CSSProperties : {};

  const handleClick = () => {
    if (interactive && onClick && !loading) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (interactive && onClick && !loading) {
        onClick();
      }
    }
  };

  // Animation variants - no scale animations
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
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: interactive ? {
      y: shouldReduceMotion ? 0 : -8,
      transition: timing.medium
    } : {},
    tap: interactive ? {
      y: shouldReduceMotion ? 0 : -4,
      transition: timing.fast
    } : {}
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const shimmerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: shouldReduceMotion ? 0 : 0.6,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      className={cardClasses}
      style={backgroundStyle}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={interactive && !loading ? "hover" : {}}
      whileTap={interactive && !loading ? "tap" : {}}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? title : undefined}
      {...rest}
    >
      {/* Background blob for non-image cards */}
      {!imageUrl && (
        <motion.div 
          className="background-blob"
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
      )}

      {/* Loading overlay */}
      {loading && (
        <motion.div
          className="nex-card-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="nex-card-spinner"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      )}

      <motion.div 
        className="nex-card-inner-wrapper"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        {/* Image */}
        {imageUrl && (
          <motion.div 
            className="nex-card-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        )}

        {/* Header with icon and badge */}
        {(title || icon || badge) && (
          <motion.div 
            className="nex-card-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            {icon && (
              <motion.div 
                className="nex-card-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                {icon}
              </motion.div>
            )}
            
            {title && (
              <motion.h3 
                className="nex-card-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
              >
                {title}
              </motion.h3>
            )}

            {badge && (
              <motion.div 
                className="nex-card-badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
              >
                {badge}
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Content */}
        {content && (
          <motion.p 
            className="nex-card-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            {content}
          </motion.p>
        )}

        {/* Actions */}
        {actions && (
          <motion.div 
            className="nex-card-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            {actions}
          </motion.div>
        )}
      </motion.div>

      {/* Ripple effect for interactive cards */}
      {interactive && (
        <motion.div
          className="nex-card-ripple"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{
            scale: 2,
            opacity: [0, 0.2, 0],
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
          }}
        />
      )}
    </motion.div>
  );
};

export default NexCard;