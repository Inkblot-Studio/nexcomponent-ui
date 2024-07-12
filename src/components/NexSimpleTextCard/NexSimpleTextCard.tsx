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
const NexSimpleTextCard: React.FC<NexSimpleTextCardProps> = ({ title, subtitle, border = true }) => {
  return (
    <div className={`nex-simple-text-card-wrapper ${border ? 'border' : '' }`}>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default NexSimpleTextCard;