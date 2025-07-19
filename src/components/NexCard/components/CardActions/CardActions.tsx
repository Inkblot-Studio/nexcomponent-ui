import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CardActionsProps } from './CardActions.types';
import './CardActions.scss';

/**
 * CardActions - Clean, simple actions component
 * 
 * A minimal actions component that displays call-to-action buttons for lead generation.
 * Designed with clear, compelling buttons that drive conversions.
 */
const CardActions: React.FC<CardActionsProps> = ({ 
  children, 
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  if (!children) return null;

  return (
    <motion.div 
      className={`nex-card-actions ${className || ''}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardActions; 