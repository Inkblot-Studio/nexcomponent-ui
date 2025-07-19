import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselIndicatorsProps } from './CarouselIndicators.types';
import './CarouselIndicators.scss';
/**
 * CarouselIndicators - Clean, simple carousel indicators
 *
 * A minimal indicators component that shows current slide position.
 * Designed for clear navigation feedback.
 */
const CarouselIndicators = ({ totalSlides, currentSlide, onSlideChange, className }) => {
    const { shouldReduceMotion } = useAnimationConfig();
    if (totalSlides <= 1)
        return null;
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
    return (<motion.div className={`nex-carousel-indicators ${className || ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
            duration: shouldReduceMotion ? 0.1 : 0.3,
            delay: shouldReduceMotion ? 0 : 0.6,
            ease: [0.4, 0, 0.2, 1]
        }}>
      {Array.from({ length: totalSlides }, (_, index) => (<motion.button key={index} className={`nex-carousel-indicator ${index === currentSlide ? 'active' : ''}`} onClick={() => onSlideChange(index)} variants={indicatorVariants} initial="initial" animate="animate" whileHover="hover" whileTap="tap" aria-label={`Go to slide ${index + 1}`} aria-current={index === currentSlide ? 'true' : 'false'}/>))}
    </motion.div>);
};
export default CarouselIndicators;
//# sourceMappingURL=CarouselIndicators.jsx.map