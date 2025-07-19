import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import { NexCardProps } from './NexCard.types';
import CardHeader from './components/CardHeader/CardHeader';
import CardImage from './components/CardImage/CardImage';
import CardContent from './components/CardContent/CardContent';
import CardActions from './components/CardActions/CardActions';
import './NexCard.scss';

/**
 * NexCard - Enterprise Grade Card Component
 *
 * A clean, simple card component designed for lead generation and conversion.
 * Features smooth animations, professional styling, and compelling visuals.
 *
 * @param {string} title - Compelling title for lead generation
 * @param {string} content - Persuasive content that drives action
 * @param {string} imageUrl - Hero image to capture attention
 * @param {React.ReactNode} actions - Call-to-action buttons
 * @param {string} badge - Status badge (e.g., "New", "Featured", "Premium")
 * @param {'primary' | 'secondary' | 'glass' | 'enterprise'} type - Card styling variant
 * @param {boolean} interactive - Whether card is clickable
 * @param {() => void} onClick - Click handler for interactive cards
 * @param {boolean} elevated - Enhanced shadow effects
 * @param {string} className - Additional CSS classes
 */
const NexCard: React.FC<NexCardProps> = ({ 
  title, 
  content, 
  imageUrl, 
  actions, 
  badge,
  type = 'primary',
  interactive = false,
  onClick,
  elevated = false,
  className,
  ...rest
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  const cardClasses = `nex-card nex-card--${type} ${elevated ? 'elevated' : ''} ${interactive ? 'interactive' : ''} ${className || ''}`;

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (interactive && onClick) {
        onClick();
      }
    }
  };

  // Animation variants - clean and simple
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
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    } : {},
    tap: interactive ? {
      y: shouldReduceMotion ? 0 : -4,
      transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] }
    } : {}
  };

  return (
    <motion.div
      className={cardClasses}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={interactive ? "hover" : {}}
      whileTap={interactive ? "tap" : {}}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? title : undefined}
      {...rest}
    >
      {/* Hero Image */}
      <CardImage src={imageUrl} alt={title} />

      {/* Card Content */}
      <div className="nex-card-body">
        {/* Header with Title and Badge */}
        <CardHeader title={title} badge={badge} />

        {/* Main Content */}
        <CardContent>
          {content}
        </CardContent>

        {/* Call-to-Action Buttons */}
        <CardActions>
          {actions}
        </CardActions>
      </div>

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