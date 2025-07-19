import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CardContentProps } from './CardContent.types';
import './CardContent.scss';

/**
 * CardContent - Clean, simple content component
 * 
 * A minimal content component that displays compelling text for lead generation.
 * Designed with clear typography and smooth animations.
 */
const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  if (!children) return null;

  return (
    <motion.div 
      className={`nex-card-content ${className || ''}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardContent; 