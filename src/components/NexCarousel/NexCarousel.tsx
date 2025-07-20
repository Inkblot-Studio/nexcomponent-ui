import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnimationConfig } from '../../utils/animationConfig';
import { NexCarouselProps, CarouselSlide } from './NexCarousel.types';
import './NexCarousel.scss';

/**
 * NexCarousel - Apple-Inspired Carousel Component
 *
 * A clean, minimal carousel with Apple-like design principles:
 * - Elegant simplicity
 * - Smooth animations with Framer Motion
 * - Premium feel
 * - Intuitive interactions
 * - Beautiful typography
 */
const NexCarousel: React.FC<NexCarouselProps> = ({
  slides,
  variant = 'default',
  size = 'md',
  autoPlay = false,
  autoPlayInterval = 5000,
  pauseOnHover = true,
  infinite = false,
  showControls = true,
  showIndicators = true,
  showCounter = true,
  onSlideChange,
  onSlideClick,
  className,
  style,
}) => {
  const { shouldReduceMotion } = useAnimationConfig();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;
  const hasPrevious = infinite || currentSlide > 0;
  const hasNext = infinite || currentSlide < totalSlides - 1;

  // Framer Motion variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2
      }
    }
  };

  const controlVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const indicatorVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    active: { 
      scale: 1.3,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Smooth slide navigation
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      onSlideChange?.(index);
    }
  }, [totalSlides, onSlideChange]);

  const goToPrevious = useCallback(() => {
    if (hasPrevious) {
      const newIndex = infinite && currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      goToSlide(newIndex);
    }
  }, [currentSlide, hasPrevious, infinite, totalSlides, goToSlide]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      const newIndex = infinite && currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      goToSlide(newIndex);
    }
  }, [currentSlide, hasNext, infinite, totalSlides, goToSlide]);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || totalSlides <= 1 || isPaused) return;

    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, totalSlides, isPaused, goToNext]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    stopAutoPlay();
  }, [stopAutoPlay]);

  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false);
    if (autoPlay) {
      startAutoPlay();
    }
  }, [autoPlay, startAutoPlay]);

  // Auto-play management
  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [autoPlay, startAutoPlay, stopAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Mouse event handlers
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      pauseAutoPlay();
    }
  }, [pauseOnHover, pauseAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      resumeAutoPlay();
    }
  }, [pauseOnHover, resumeAutoPlay]);

  // Slide click handler
  const handleSlideClick = useCallback((slide: CarouselSlide, index: number) => {
    onSlideClick?.(slide, index);
  }, [onSlideClick]);

  if (totalSlides === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];
  if (!currentSlideData) {
    return null;
  }

  // Build class names
  const carouselClasses = [
    'nex-carousel',
    `nex-carousel--${variant}`,
    `nex-carousel--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      className={carouselClasses}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
      aria-live="polite"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      {/* Slides Container */}
      <div className="nex-carousel-slides">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="nex-carousel-slide"
            onClick={() => handleSlideClick(currentSlideData, currentSlide)}
            role="button"
            tabIndex={0}
            aria-label={`Slide ${currentSlide + 1}: ${currentSlideData.title || 'Image'}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSlideClick(currentSlideData, currentSlide);
              }
            }}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: shouldReduceMotion ? 0 : 0.6
              },
              opacity: { 
                duration: shouldReduceMotion ? 0 : 0.3 
              }
            }}
            custom={1}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            <motion.img
              src={currentSlideData.imageUrl}
              alt={currentSlideData.title || `Slide ${currentSlide + 1}`}
              className="nex-carousel-image"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
              }}
            />
            
            {/* Content Overlay */}
            {(currentSlideData.title || currentSlideData.subtitle || currentSlideData.description || currentSlideData.ctaText) && (
              <motion.div 
                className="nex-carousel-content"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                whileHover="visible"
              >
                {currentSlideData.title && (
                  <motion.h2 
                    className="nex-carousel-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {currentSlideData.title}
                  </motion.h2>
                )}
                {currentSlideData.subtitle && (
                  <motion.h3 
                    className="nex-carousel-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.h3>
                )}
                {currentSlideData.description && (
                  <motion.p 
                    className="nex-carousel-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {currentSlideData.description}
                  </motion.p>
                )}
                {currentSlideData.ctaText && (
                  <motion.a
                    href={currentSlideData.ctaUrl || '#'}
                    className="nex-carousel-cta"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] }
                    }}
                  >
                    {currentSlideData.ctaText}
                  </motion.a>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {showControls && totalSlides > 1 && (
        <div className="nex-carousel-controls">
          <AnimatePresence>
            {hasPrevious && (
              <motion.button
                className="nex-carousel-control"
                onClick={goToPrevious}
                aria-label="Previous slide"
                variants={controlVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                exit="hidden"
              >
                <ChevronLeft size={20} />
              </motion.button>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {hasNext && (
              <motion.button
                className="nex-carousel-control"
                onClick={goToNext}
                aria-label="Next slide"
                variants={controlVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                exit="hidden"
              >
                <ChevronRight size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Slide Indicators */}
      {showIndicators && totalSlides > 1 && (
        <motion.div 
          className="nex-carousel-indicators" 
          role="tablist"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`nex-carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
              variants={indicatorVariants}
              initial="hidden"
              animate={index === currentSlide ? "active" : "visible"}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Slide Counter */}
      {showCounter && totalSlides > 1 && (
        <motion.div 
          className="nex-carousel-counter"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {currentSlide + 1} / {totalSlides}
        </motion.div>
      )}

      {/* Auto-play Indicator */}
      {autoPlay && !isPaused && (
        <motion.div 
          className="nex-carousel-autoplay" 
          aria-label="Auto-play active"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default NexCarousel; 