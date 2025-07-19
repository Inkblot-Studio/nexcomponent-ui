import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselContainerProps } from './CarouselContainer.types';
import './CarouselContainer.scss';

/**
 * CarouselContainer - Fluid, smooth carousel container
 * 
 * A fluid container that manages slide transitions with smooth, professional animations.
 * Designed for the best UX with adaptive content and smooth interactions.
 */
const CarouselContainer: React.FC<CarouselContainerProps> = ({ 
  children, 
  currentSlide,
  direction,
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  // Enhanced slide variants for better UX
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: shouldReduceMotion ? 0.1 : 0.4 },
        scale: { duration: shouldReduceMotion ? 0.1 : 0.5 },
        filter: { duration: shouldReduceMotion ? 0.1 : 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  // Background blur effect for depth
  const backgroundVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.8, ease: [0.4, 0, 0.2, 1] }
    },
    exit: { 
      opacity: 0, 
      scale: 1.1,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <motion.div 
      className={`nex-carousel-container ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="nex-carousel-slide-wrapper"
        >
          {/* Background blur layer for depth */}
          <motion.div
            className="nex-carousel-background"
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
          
          {/* Main content */}
          <motion.div
            className="nex-carousel-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.1 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CarouselContainer; 