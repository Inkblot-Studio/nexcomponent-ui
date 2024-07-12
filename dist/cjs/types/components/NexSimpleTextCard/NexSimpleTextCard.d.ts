import React from 'react';
import { NexSimpleTextCardProps } from './NexSimpleTextCard.types';
import './NexSimpleTextCard.scss';
/**
 * NexSimpleTextCard component
 *
 * Component to display a simple text card with title and subtitle.
 *
 * @param {NexSimpleTextCardProps} props - Component properties
 * @param {string} props.title - Title of the card
 * @param {string} props.subtitle - Subtitle of the card
 * @param {boolean} [props.border=true] - Whether to display a border around the card
 */
declare const NexSimpleTextCard: React.FC<NexSimpleTextCardProps>;
export default NexSimpleTextCard;
