import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../utils/animationConfig';
import type { NexCarouselProps } from './NexCarousel.types';
import CarouselContainer from './components/CarouselContainer/CarouselContainer';
import CarouselSlide from './components/CarouselSlide/CarouselSlide';
import CarouselControls from './components/CarouselControls/CarouselControls';
import CarouselIndicators from './components/CarouselIndicators/CarouselIndicators';
import './NexCarousel.scss';

/**
 * NexCarousel - Enterprise Grade Carousel Component
 *
 * A clean, simple carousel component designed for compelling visual presentations.
 * Features smooth animations, professional styling, and intuitive navigation.
 *
 * @param {Array} slides - Array of slide data with imageUrl, title, and content
 * @param {boolean} autoPlay - Whether to automatically advance slides
 * @param {number} autoPlayInterval - Interval between auto-advance (in milliseconds)
 * @param {boolean} showControls - Whether to show navigation controls
 * @param {boolean} showIndicators - Whether to show slide indicators
 * @param {string} className - Additional CSS classes
 */
const NexCarousel: React.FC<NexCarouselProps> = ({ 
  slides = [], 
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className,
  ...rest
}) => {
  const { shouldReduceMotion } = useAnimationConfig();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalSlides = slides.length;
  const hasPrevious = currentSlide > 0;
  const hasNext = currentSlide < totalSlides - 1;

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide, totalSlides]);

  const goToPrevious = useCallback(() => {
    if (hasPrevious) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide, hasPrevious]);

  const goToNext = useCallback(() => {
    if (hasNext) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, hasNext]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const interval = setInterval(() => {
      if (hasNext) {
        goToNext();
      } else {
        goToSlide(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, hasNext, goToNext, goToSlide, totalSlides]);

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

  if (totalSlides === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];

  // Safety check for currentSlideData
  if (!currentSlideData) {
    return null;
  }

  return (
    <motion.div
      className={`nex-carousel ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
      aria-live="polite"
      {...rest}
    >
      <CarouselContainer 
        currentSlide={currentSlide}
        direction={direction}
      >
        <CarouselSlide 
          imageUrl={currentSlideData.imageUrl}
          title={currentSlideData.title}
          content={currentSlideData.content}
        />
      </CarouselContainer>

      {/* Navigation Controls */}
      {showControls && (
        <CarouselControls
          onPrevious={goToPrevious}
          onNext={goToNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />
      )}

      {/* Slide Indicators */}
      {showIndicators && (
        <CarouselIndicators
          totalSlides={totalSlides}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
        />
      )}

      {/* Slide Counter */}
      <motion.div 
        className="nex-carousel-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.7 }}
      >
        {currentSlide + 1} / {totalSlides}
      </motion.div>
    </motion.div>
  );
};

export default NexCarousel;