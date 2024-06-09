import React from 'react';
import { NexCardProps } from './NexCard.types';
import NexSeparator from '../NexSeparator';
import './NexCard.scss';

const NexCard: React.FC<NexCardProps> = ({ title, image, content, actions, footer }) => {
  return (
    <div className="nex-card-wrapper">
      <div className="nex-card-inner-wrapper">
        {image && <img className="nex-card-image" src={image} alt={title || 'Card Image'} />}
        {title && <div className="nex-card-title">{title}</div>}
        {content && <p className="nex-card-text">{content}</p>}
        {actions && <div className="nex-card-actions">{actions}</div>}
      </div>
      {footer && (
        <div className="nex-card-footer">
          <NexSeparator />
          {footer}
        </div>
      )}
    </div>
  );
};

export default NexCard;