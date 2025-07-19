import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselControlsProps } from './CarouselControls.types';
import './CarouselControls.scss';

/**
 * CarouselControls - Clean, simple carousel controls
 * 
 * A minimal controls component that provides navigation buttons.
 * Designed for intuitive carousel navigation.
 */
const CarouselControls: React.FC<CarouselControlsProps> = ({ 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext,
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

  return (
    <motion.div 
      className={`nex-carousel-controls ${className || ''}`}
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
      >
        <ChevronLeft size={24} />
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
      >
        <ChevronRight size={24} />
      </motion.button>
    </motion.div>
  );
};

export default CarouselControls; 