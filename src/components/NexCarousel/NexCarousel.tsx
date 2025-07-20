import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1
    })
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
    <div
      className={carouselClasses}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Magic Hover Navigation */}
      {totalSlides > 1 && (
        <div className="nex-carousel-hover-nav">
          <div 
            className="nex-carousel-nav-side left"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <div className="nex-carousel-nav-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
          </div>
          <div 
            className="nex-carousel-nav-side right"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <div className="nex-carousel-nav-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Slides Container */}
      <div className="nex-carousel-slides">
                          <AnimatePresence mode="wait" initial={false}>
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
                 type: "tween", 
                 duration: shouldReduceMotion ? 0 : 0.5,
                 ease: [0.4, 0, 0.2, 1]
               },
               opacity: { 
                 duration: shouldReduceMotion ? 0 : 0.3,
                 ease: [0.4, 0, 0.2, 1]
               }
             }}
             custom={1}
           >
            <img
              src={currentSlideData.imageUrl}
              alt={currentSlideData.title || `Slide ${currentSlide + 1}`}
              className="nex-carousel-image"
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
            />
            
            {/* Content Overlay */}
            {(currentSlideData.title || currentSlideData.subtitle || currentSlideData.description || currentSlideData.ctaText) && (
              <motion.div 
                className="nex-carousel-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {currentSlideData.title && (
                  <h2 className="nex-carousel-title">
                    {currentSlideData.title}
                  </h2>
                )}
                {currentSlideData.subtitle && (
                  <h3 className="nex-carousel-subtitle">
                    {currentSlideData.subtitle}
                  </h3>
                )}
                {currentSlideData.description && (
                  <p className="nex-carousel-description">
                    {currentSlideData.description}
                  </p>
                )}
                {currentSlideData.ctaText && (
                  <a
                    href={currentSlideData.ctaUrl || '#'}
                    className="nex-carousel-cta"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {currentSlideData.ctaText}
                  </a>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>



      {/* Slide Indicators */}
      {showIndicators && totalSlides > 1 && (
        <div 
          className="nex-carousel-indicators" 
          role="tablist"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nex-carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {showCounter && totalSlides > 1 && (
        <div className="nex-carousel-counter">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}

      {/* Auto-play Indicator */}
      {autoPlay && !isPaused && (
        <div 
          className="nex-carousel-autoplay" 
          aria-label="Auto-play active"
        />
      )}
    </div>
  );
};

export default NexCarousel; 