import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import './CarouselSlide.scss';
/**
 * CarouselSlide - Premium carousel slide component
 *
 * A premium slide component that displays content with advanced animations,
 * lazy loading, and enhanced visual effects for compelling presentations.
 */
const CarouselSlide = ({ slide, index, variant = 'default', size = 'md', lazy = false, isLoaded = true, onClick, className }) => {
    const { shouldReduceMotion } = useAnimationConfig();
    const { imageUrl, title, content, description, actionText, actionUrl, overlay = true, overlayOpacity = 0.6, customClass } = slide;
    const handleClick = () => {
        onClick?.(slide, index);
    };
    const handleActionClick = (e) => {
        e.stopPropagation();
        if (actionUrl) {
            window.open(actionUrl, '_blank');
        }
    };
    return (<motion.div className={`nex-carousel-slide nex-carousel-slide--${variant} nex-carousel-slide--${size} ${customClass || ''} ${className || ''}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
            duration: shouldReduceMotion ? 0.1 : 0.5,
            ease: [0.4, 0, 0.2, 1]
        }} onClick={handleClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {/* Background Image */}
      {imageUrl && (<motion.div className="nex-carousel-slide-image" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{
                duration: shouldReduceMotion ? 0.1 : 0.8,
                ease: [0.4, 0, 0.2, 1]
            }}>
          {lazy && !isLoaded ? (<div className="nex-carousel-slide-placeholder">
              <div className="nex-carousel-slide-loading"/>
            </div>) : (<img src={imageUrl} alt={title || `Slide ${index + 1}`} loading={lazy ? 'lazy' : 'eager'}/>)}
        </motion.div>)}

      {/* Overlay */}
      {overlay && (title || content || description || actionText) && (<motion.div className="nex-carousel-slide-overlay" style={{
                background: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, ${overlayOpacity}) 100%)`
            }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                duration: shouldReduceMotion ? 0.1 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.4, 0, 0.2, 1]
            }}/>)}

      {/* Content */}
      {(title || content || description || actionText) && (<motion.div className="nex-carousel-slide-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{
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

          {description && (<motion.p className="nex-carousel-slide-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}>
              {description}
            </motion.p>)}

          {actionText && (<motion.button className="nex-carousel-slide-action" onClick={handleActionClick} whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }} whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.7 }}>
              {actionText}
            </motion.button>)}
        </motion.div>)}
    </motion.div>);
};
export default CarouselSlide;
//# sourceMappingURL=CarouselSlide.jsx.map