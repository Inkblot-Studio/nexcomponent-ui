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
const NexCard: React.FC<NexCardProps> = ({ title, content, type, imageUrl, actions }) => {
  const getTypeClass = (type: string | undefined): string => {
    if (imageUrl) {
      return '';
    } else if (!type) {
      return 'nex-card-wrapper--primary';
    }

    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass'];
    return colorNames.includes(type as string) ? `nex-card-wrapper--${type}` : '';
  };

  const cardClasses = `nex-card-wrapper ${getTypeClass(type)} ${imageUrl ? 'has-image' : ''}`;

  const backgroundStyle = imageUrl ? { '--background-url': `url(${imageUrl})` } as React.CSSProperties : {};

  return (
    <div className={cardClasses}>
      {!imageUrl && (
        <div className="background-blob"></div>
      )}

      <div className="nex-card-inner-wrapper">
        {imageUrl && <div className="nex-card-image" style={backgroundStyle}/>}
        {title && <div className="nex-card-title">{title}</div>}
        {content && <p className="nex-card-text">{content}</p>}
        {actions && <div className="nex-card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default NexCard;