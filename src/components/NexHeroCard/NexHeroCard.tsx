import React from 'react';
import { NexHeroCardProps } from './NexHeroCard.types';
import NexButton from '../NexButton';
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
const NexHeroCard: React.FC<NexHeroCardProps> = ({ title, subtitle, type, buttonLabel, buttonHandle, backgroundUrl, className }) => {
  const getTypeClass = (type: string | undefined): string => {
    if (backgroundUrl) {
      return '';
    } else if (!type) {
      return 'nex-hero-card-wrapper--primary';
    }

    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass'];
    return colorNames.includes(type as string) ? `nex-hero-card-wrapper--${type}` : '';
  };

  const heroCardClasses = `nex-hero-card-wrapper ${getTypeClass(type)} ${backgroundUrl ? 'has-background' : ''} ${className || ''}`;

  const backgroundStyle = backgroundUrl ? { '--background-url': `url(${backgroundUrl})` } as React.CSSProperties : {};

  return (
    <div className={heroCardClasses} style={backgroundStyle}>
      {!backgroundUrl && (
          <div className="background-blob"></div>
      )}

      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        {buttonLabel && buttonHandle && (
          <NexButton type={backgroundUrl ? 'glass' : ''} size='large' text={buttonLabel} onClick={buttonHandle} className='hero-button'></NexButton>
        )}
      </div>
    </div>
  );
}

export default NexHeroCard;