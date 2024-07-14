import React from 'react';
import { NexHeroCardProps } from './NexHeroCard.types';
import './NexHeroCard.scss';
/**
 * NexHeroCard component
 *
 * A hero card component that displays a title, subtitle, and an optional button with customizable background and type styles.
 *
 * @param {string} title - The main title text to be displayed on the hero card.
 * @param {string} subtitle - The subtitle text to be displayed below the title.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | string} [type] - The type of the hero card which determines its color style.
 * @param {string} [buttonLabel] - The label text for the button.
 * @param {() => void} [buttonHandle] - The click handler function for the button.
 * @param {string} [backgroundUrl] - The URL for the background image of the hero card.
 * @param {string} className - Additional class names to apply to the hero card.
 */
declare const NexHeroCard: React.FC<NexHeroCardProps>;
export default NexHeroCard;
