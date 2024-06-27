import React from 'react';
import './NexButton.scss';
import { NexButtonProps } from './NexButton.types';

const NexButton: React.FC<NexButtonProps> = ({ onClick, className, size = 'normal', inverted, type, text }) => {
  const getColorClass = (type: string | undefined): string => {
    if (!type) return '';
    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger'];
    return colorNames.includes(type as string) ? `nex-button--${type}` : '';
  };

  const getSizeClass = (size: string | undefined): string => {
    return size ? `nex-button--${size}` : '';
  };

  const buttonClasses = `nex-button ${className || ''} ${getSizeClass(size)} ${getColorClass(type)} ${inverted ? 'inverted' : ''} ${!type && inverted ? 'inverted-default' : ''}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default NexButton;