import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CardHeaderProps } from './CardHeader.types';
import './CardHeader.scss';

/**
 * CardHeader - Clean, simple header component
 * 
 * A minimal header that displays title and optional badge with smooth animations.
 * Designed for lead generation with clear, compelling titles.
 */
const CardHeader: React.FC<CardHeaderProps> = ({ 
  title, 
  badge, 
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  if (!title && !badge) return null;

  return (
    <motion.div 
      className={`nex-card-header ${className || ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {title && (
        <motion.h3 
          className="nex-card-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
        >
          {title}
        </motion.h3>
      )}

      {badge && (
        <motion.div 
          className="nex-card-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          {badge}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CardHeader; 