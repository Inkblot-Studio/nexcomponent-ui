import React, { useState, useEffect } from 'react';
import { NexCarouselProps } from './NexCarousel.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './NexCarousel.scss';

/**
 * NexCarousel component
 *
 * A carousel component to display slides with optional navigation buttons, dots, and automatic slide transition.
 *
 * @param {React.ReactNode[]} children - The slides to display in the carousel.
 * @param {string} className - Additional class names to apply to the carousel.
 * @param {boolean} [navButtons=false] - Whether to display navigation buttons.
 * @param {'top' | 'bottom' | 'left' | 'right'} [navigationPosition='bottom'] - The position of the navigation dots.
 * @param {boolean} [line] - Whether to display a progress line indicating the current slide.
 * @param {number} [interval] - The time in seconds between automatic slide transitions.
 */
const NexCarousel: React.FC<NexCarouselProps> = ({ children, className, navButtons = false, navigationPosition = 'bottom', line, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  };

  // Function to jump to a specific slide
  const handleJumpToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Effect to handle automatic carousel movement
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    
    // Start automatic carousel movement if interval is provided
    if (interval && interval > 0) {
      intervalId = setInterval(() => {
        handleNext();
      }, interval * 1000);
    }

    // Clean up interval when component unmounts or interval changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [interval]);

  return (
    <div className={`nex-carousel nex-carousel-dots-${navigationPosition} ${className ? className : '' }`}>
      <div className="nex-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children.map((child, index) => (
          <div className="nex-slide" key={index}>
            {child}
          </div>
        ))}
      </div>

      {line && (
        <div className="nex-carousel-line" style={{ width: `${((currentIndex + 1) / children.length) * 100}%` }}></div>
      )}

      { navButtons && (
        <>
          <FontAwesomeIcon icon={faChevronLeft} className="nex-carousel-nav-button nex-prev" onClick={handlePrev}/>
          <FontAwesomeIcon icon={faChevronRight} className="nex-carousel-nav-button nex-next" onClick={handleNext}/>
        </>
      )}
      
      <div className={`nex-carousel-dots ${navigationPosition}`}>
        {children.map((_, index) => (
          <div className={`nex-carousel-dot ${index === currentIndex ? 'active' : ''}`} key={index} onClick={() => handleJumpToSlide(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default NexCarousel;