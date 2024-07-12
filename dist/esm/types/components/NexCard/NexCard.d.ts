import React from 'react';
import { NexCardProps } from './NexCard.types';
import './NexCard.scss';
/**
 * NexCard component
 *
 * A versatile card component that can display a title, content, image, and actions.
 *
 * @param {string} title - The title of the card.
 * @param {string} content - The content or body text of the card.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | string} type - The type of the card which determines its style.
 * @param {string} imageUrl - The URL of the image to display in the card.
 * @param {React.ReactNode} actions - The actions or buttons to display in the card.
 */
declare const NexCard: React.FC<NexCardProps>;
export default NexCard;
