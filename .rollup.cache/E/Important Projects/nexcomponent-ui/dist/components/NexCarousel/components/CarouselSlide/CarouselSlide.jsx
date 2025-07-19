import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { CarouselSlideProps } from './CarouselSlide.types';
import './CarouselSlide.scss';
/**
 * CarouselSlide - Clean, simple carousel slide
 *
 * A minimal slide component that displays content with smooth animations.
 * Designed for compelling visual presentations.
 */
const CarouselSlide = ({ imageUrl, title, content, className }) => {
    const { shouldReduceMotion } = useAnimationConfig();
    return (<motion.div className={`nex-carousel-slide ${className || ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
            duration: shouldReduceMotion ? 0.1 : 0.5,
            ease: [0.4, 0, 0.2, 1]
        }}>
      {/* Background Image */}
      {imageUrl && (<motion.div className="nex-carousel-slide-image" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{
                duration: shouldReduceMotion ? 0.1 : 0.8,
                ease: [0.4, 0, 0.2, 1]
            }}>
          <img src={imageUrl} alt={title || 'Carousel slide'}/>
        </motion.div>)}

      {/* Content Overlay */}
      {(title || content) && (<motion.div className="nex-carousel-slide-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
                duration: shouldReduceMotion ? 0.1 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.4, 0, 0.2, 1]
            }}>
          {title && (<motion.h2 className="nex-carousel-slide-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}>
              {title}
            </motion.h2>)}
          
          {content && (<motion.p className="nex-carousel-slide-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}>
              {content}
            </motion.p>)}
        </motion.div>)}
    </motion.div>);
};
export default CarouselSlide;
//# sourceMappingURL=CarouselSlide.jsx.map