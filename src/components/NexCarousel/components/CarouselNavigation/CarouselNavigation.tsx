import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselNavigationProps } from './CarouselNavigation.types';
import './CarouselNavigation.scss';

/**
 * CarouselNavigation - Clean, simple carousel navigation
 * 
 * A minimal navigation component that combines controls and indicators.
 * Designed for complete carousel navigation experience.
 */
const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ 
  totalSlides, 
  currentSlide, 
  onPrevious, 
  onNext, 
  onSlideChange,
  hasPrevious, 
  hasNext,
  showControls = true,
  showIndicators = true,
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  return (
    <motion.div 
      className={`nex-carousel-navigation ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {showControls && (
        <motion.div 
          className="nex-carousel-navigation-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
        >
          <motion.button
            className="nex-carousel-nav-button nex-carousel-nav-button--prev"
            onClick={onPrevious}
            disabled={!hasPrevious}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
            aria-label="Previous slide"
          >
            ←
          </motion.button>

          <motion.button
            className="nex-carousel-nav-button nex-carousel-nav-button--next"
            onClick={onNext}
            disabled={!hasNext}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
            aria-label="Next slide"
          >
            →
          </motion.button>
        </motion.div>
      )}

      {showIndicators && totalSlides > 1 && (
        <motion.div 
          className="nex-carousel-navigation-indicators"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
        >
          {Array.from({ length: totalSlides }, (_, index) => (
            <motion.button
              key={index}
              className={`nex-carousel-nav-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => onSlideChange(index)}
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.2 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CarouselNavigation; 