import React from 'react';
import { NexSimpleTextCardProps } from './NexSimpleTextCard.types';
import './NexSimpleTextCard.scss';

/**
 * NexSimpleTextCard component
 *
 * Component to display a simple text card with title and subtitle.
 *
 * @param {string} title - Title of the card
 * @param {string} subtitle - Subtitle of the card
 * @param {boolean} [border=true] - Whether to display a border around the card
 * @param {string} className -  Additional class names to apply to the button.
 */
const NexSimpleTextCard: React.FC<NexSimpleTextCardProps> = ({ title, subtitle, border = true, className }) => {
  return (
    <div className={`nex-simple-text-card-wrapper ${border ? 'border' : '' } ${className ? className : '' }`}>
      <div className="nex-simple-text-card-inner-wrapper">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default NexSimpleTextCard;