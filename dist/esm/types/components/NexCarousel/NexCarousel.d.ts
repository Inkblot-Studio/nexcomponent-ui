import React from 'react';
import { NexCarouselProps } from './NexCarousel.types';
import './NexCarousel.scss';
/**
 * NexCarousel component
 *
 * A carousel component to display slides with optional navigation buttons, dots, and automatic slide transition.
 *
 * @param {React.ReactNode[]} children - The slides to display in the carousel.
 * @param {boolean} [navButtons=false] - Whether to display navigation buttons.
 * @param {'top' | 'bottom' | 'left' | 'right'} [navigationPosition='bottom'] - The position of the navigation dots.
 * @param {boolean} [line] - Whether to display a progress line indicating the current slide.
 * @param {number} [interval] - The time in seconds between automatic slide transitions.
 */
declare const NexCarousel: React.FC<NexCarouselProps>;
export default NexCarousel;
