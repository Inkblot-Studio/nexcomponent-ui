import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import './CarouselContainer.scss';
/**
 * CarouselContainer - Premium fluid carousel container
 *
 * A premium container that manages slide transitions with advanced animations,
 * touch gestures, and smooth interactions for the best user experience.
 */
const CarouselContainer = ({ children, currentSlide, direction, animation = 'slide', infinite = false, totalSlides = 0, touchEnabled = true, onDragStart, onDragEnd, className }) => {
    const { shouldReduceMotion } = useAnimationConfig();
    // Enhanced slide variants for different animation types
    const getSlideVariants = () => {
        const baseTransition = {
            duration: shouldReduceMotion ? 0.2 : 0.6,
            ease: [0.4, 0, 0.2, 1]
        };
        switch (animation) {
            case 'fade':
                return {
                    enter: { opacity: 0, scale: 0.95 },
                    center: {
                        opacity: 1,
                        scale: 1,
                        transition: baseTransition
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        transition: { ...baseTransition, duration: shouldReduceMotion ? 0.1 : 0.4 }
                    }
                };
            case 'zoom':
                return {
                    enter: { opacity: 0, scale: 1.2 },
                    center: {
                        opacity: 1,
                        scale: 1,
                        transition: baseTransition
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8,
                        transition: { ...baseTransition, duration: shouldReduceMotion ? 0.1 : 0.4 }
                    }
                };
            case 'flip':
                return {
                    enter: (direction) => ({
                        opacity: 0,
                        rotateY: direction > 0 ? 90 : -90,
                        scale: 0.8
                    }),
                    center: {
                        opacity: 1,
                        rotateY: 0,
                        scale: 1,
                        transition: baseTransition
                    },
                    exit: (direction) => ({
                        opacity: 0,
                        rotateY: direction < 0 ? 90 : -90,
                        scale: 0.8,
                        transition: { ...baseTransition, duration: shouldReduceMotion ? 0.1 : 0.4 }
                    })
                };
            case 'cube':
                return {
                    enter: (direction) => ({
                        opacity: 0,
                        rotateY: direction > 0 ? 90 : -90,
                        scale: 0.9
                    }),
                    center: {
                        opacity: 1,
                        rotateY: 0,
                        scale: 1,
                        transition: baseTransition
                    },
                    exit: (direction) => ({
                        opacity: 0,
                        rotateY: direction < 0 ? 90 : -90,
                        scale: 0.9,
                        transition: { ...baseTransition, duration: shouldReduceMotion ? 0.1 : 0.4 }
                    })
                };
            default: // slide
                return {
                    enter: (direction) => ({
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
                            ...baseTransition,
                            opacity: { duration: shouldReduceMotion ? 0.1 : 0.4 },
                            scale: { duration: shouldReduceMotion ? 0.1 : 0.5 },
                            filter: { duration: shouldReduceMotion ? 0.1 : 0.3 }
                        }
                    },
                    exit: (direction) => ({
                        x: direction < 0 ? '100%' : '-100%',
                        opacity: 0,
                        scale: 0.95,
                        filter: 'blur(4px)',
                        transition: { ...baseTransition, duration: shouldReduceMotion ? 0.1 : 0.4 }
                    })
                };
        }
    };
    const slideVariants = getSlideVariants();
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
    // Touch gesture handling
    const handleDragEnd = (event, info) => {
        onDragEnd?.(event, info);
    };
    return (<motion.div className={`nex-carousel-container ${className || ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
            duration: shouldReduceMotion ? 0.1 : 0.4,
            ease: [0.4, 0, 0.2, 1]
        }} drag={touchEnabled ? 'x' : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.1} onDragStart={onDragStart} onDragEnd={handleDragEnd} style={{
            perspective: animation === 'flip' || animation === 'cube' ? '1000px' : 'none'
        }}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div key={currentSlide} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" className="nex-carousel-slide-wrapper" style={{
            transformStyle: animation === 'flip' || animation === 'cube' ? 'preserve-3d' : 'flat'
        }}>
          {/* Background blur layer for depth */}
          <motion.div className="nex-carousel-background" variants={backgroundVariants} initial="enter" animate="center" exit="exit"/>
          
          {/* Main content */}
          <motion.div className="nex-carousel-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
            duration: shouldReduceMotion ? 0.1 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: [0.4, 0, 0.2, 1]
        }}>
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>);
};
export default CarouselContainer;
//# sourceMappingURL=CarouselContainer.jsx.map