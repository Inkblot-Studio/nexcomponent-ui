import React from 'react';
import { NexHeroCardProps } from './NexHeroCard.types';
import NexButton from '../NexButton';
import './NexHeroCard.scss';

const NexHeroCard: React.FC<NexHeroCardProps> = ({ title, subtitle, type, buttonLabel, buttonHandle, backgroundUrl }) => {
  const getTypeClass = (type: string | undefined): string => {
    if (backgroundUrl) {
      return '';
    } else if (!type) {
      return 'nex-hero-card-wrapper--primary';
    }

    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass'];
    return colorNames.includes(type as string) ? `nex-hero-card-wrapper--${type}` : '';
  };

  const heroCardClasses = `nex-hero-card-wrapper ${getTypeClass(type)} ${backgroundUrl ? 'has-background' : ''}`;

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