import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselControlsProps } from './CarouselControls.types';
import './CarouselControls.scss';

/**
 * CarouselControls - Premium carousel controls
 * 
 * A premium controls component that provides navigation buttons with
 * advanced positioning, styling, and accessibility features.
 */
const CarouselControls: React.FC<CarouselControlsProps> = ({ 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext,
  position = 'inside',
  variant = 'default',
  size = 'md',
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { 
      scale: shouldReduceMotion ? 1 : 1.1,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: shouldReduceMotion ? 1 : 0.95,
      transition: { duration: 0.1 }
    }
  };

  const containerClasses = [
    'nex-carousel-controls',
    `nex-carousel-controls--${position}`,
    `nex-carousel-controls--${variant}`,
    `nex-carousel-controls--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.div 
      className={containerClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.5,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <motion.button
        className="nex-carousel-control nex-carousel-control--prev"
        onClick={onPrevious}
        disabled={!hasPrevious}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        aria-label="Previous slide"
        aria-disabled={!hasPrevious}
      >
        <ChevronLeft size={size === 'sm' ? 20 : size === 'lg' ? 28 : size === 'xl' ? 32 : 24} />
      </motion.button>

      <motion.button
        className="nex-carousel-control nex-carousel-control--next"
        onClick={onNext}
        disabled={!hasNext}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        aria-label="Next slide"
        aria-disabled={!hasNext}
      >
        <ChevronRight size={size === 'sm' ? 20 : size === 'lg' ? 28 : size === 'xl' ? 32 : 24} />
      </motion.button>
    </motion.div>
  );
};

export default CarouselControls; 