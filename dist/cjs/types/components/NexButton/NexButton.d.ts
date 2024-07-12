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
declare const NexButton: React.FC<NexButtonProps>;
export default NexButton;
