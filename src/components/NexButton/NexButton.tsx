import React from 'react';
import './NexButton.scss';
import { NexButtonProps } from './NexButton.types';

/**
 * NexButton component
 *
 * A versatile button component with customizable styles and behavior.
 * 
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {string} className - Additional class names to apply to the button.
 * @param {'small' | 'normal' | 'large'} size - The size of the button. Default is 'normal'.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | string} type - The type of the button which determines its color and style.
 * @param {boolean} inverted - Whether to apply an inverted style to the button.
 * @param {string} text - The text to display inside the button.
 */
const NexButton: React.FC<NexButtonProps> = ({ onClick, className, size = 'normal', inverted, type, text }) => {
  const getTypeClass = (type: string | undefined): string => {
    if (!type) return '';
    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass'];
    return colorNames.includes(type as string) ? `nex-button--${type}` : '';
  };

  const getSizeClass = (size: string | undefined): string => {
    return size ? `nex-button--${size}` : '';
  };

  const buttonClasses = `nex-button ${className || ''} ${getSizeClass(size)} ${getTypeClass(type)} ${inverted ? 'inverted' : ''} ${!type && inverted ? 'inverted-default' : ''}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default NexButton;