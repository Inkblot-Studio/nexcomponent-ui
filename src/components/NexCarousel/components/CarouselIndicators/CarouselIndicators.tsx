import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselIndicatorsProps } from './CarouselIndicators.types';
import './CarouselIndicators.scss';

/**
 * CarouselIndicators - Premium carousel indicators
 * 
 * A premium indicators component that shows current slide position with
 * multiple styles, variants, and enhanced accessibility features.
 */
const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ 
  totalSlides, 
  currentSlide, 
  onSlideChange,
  style = 'dots',
  variant = 'default',
  size = 'md',
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  if (totalSlides <= 1) return null;

  const indicatorVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: shouldReduceMotion ? 1 : 1.2,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: shouldReduceMotion ? 1 : 0.9,
      transition: { duration: 0.1 }
    }
  };

  const containerClasses = [
    'nex-carousel-indicators',
    `nex-carousel-indicators--${style}`,
    `nex-carousel-indicators--${variant}`,
    `nex-carousel-indicators--${size}`,
    className
  ].filter(Boolean).join(' ');

  const renderIndicator = (index: number) => {
    const isActive = index === currentSlide;
    
    switch (style) {
      case 'lines':
        return (
          <motion.div
            key={index}
            className={`nex-carousel-indicator-line ${isActive ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
            variants={indicatorVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? 'true' : 'false'}
          />
        );

      case 'numbers':
        return (
          <motion.button
            key={index}
            className={`nex-carousel-indicator-number ${isActive ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
            variants={indicatorVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? 'true' : 'false'}
          >
            {index + 1}
          </motion.button>
        );

      case 'thumbnails':
        return (
          <motion.button
            key={index}
            className={`nex-carousel-indicator-thumbnail ${isActive ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
            variants={indicatorVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? 'true' : 'false'}
          >
            <span className="nex-carousel-indicator-thumbnail-number">{index + 1}</span>
          </motion.button>
        );

      default: // dots
        return (
          <motion.button
            key={index}
            className={`nex-carousel-indicator ${isActive ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
            variants={indicatorVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? 'true' : 'false'}
          />
        );
    }
  };

  return (
    <motion.div 
      className={containerClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.6,
        ease: [0.4, 0, 0.2, 1]
      }}
      role="tablist"
      aria-label="Slide navigation"
    >
      {Array.from({ length: totalSlides }, (_, index) => renderIndicator(index))}
    </motion.div>
  );
};

export default CarouselIndicators; 