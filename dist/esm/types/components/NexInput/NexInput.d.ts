import React from 'react';
import { NexInputProps } from './NexInput.types';
import './NexInput.scss';
/**
 * NexInput component
 *
 * A customizable input component with support for different types, sizes, and an optional peek button for password fields.
 *
 * @param {string} type - The type of the input field (e.g., 'text', 'password', 'email').
 * @param {boolean} [peekButton] - Whether to show a button to toggle password visibility.
 * @param {string} [className] - Additional class names to apply to the input field.
 * @param {number} [width] - The width of the input field in pixels.
 * @param {'small' | 'normal' | 'large'} [fieldSize='normal'] - The size of the input field.
 * @param {object} rest - Additional props to pass to the input element.
 */
declare const NexInput: React.FC<NexInputProps>;
export default NexInput;
