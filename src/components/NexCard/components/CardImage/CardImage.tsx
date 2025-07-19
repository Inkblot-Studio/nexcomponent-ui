import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CardImageProps } from './CardImage.types';
import './CardImage.scss';

/**
 * CardImage - Clean, simple image component
 * 
 * A minimal image component that displays hero images with smooth animations.
 * Designed for lead generation with compelling visuals.
 */
const CardImage: React.FC<CardImageProps> = ({ 
  src, 
  alt, 
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  if (!src) return null;

  return (
    <motion.div 
      className={`nex-card-image ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <img 
        src={src} 
        alt={alt || 'Card image'} 
        className="nex-card-image-element"
      />
    </motion.div>
  );
};

export default CardImage; 