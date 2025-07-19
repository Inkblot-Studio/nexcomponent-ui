import React, { useState, useEffect } from 'react';
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
const NexInput = ({ type, peekButton, className, width, fieldSize = 'normal', ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        if (peekButton && width && width < 100) {
            console.error("NexInput error: Width should be at least 100px.");
        }
    }, [width]);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const getSizeClass = (size) => {
        return size ? `nex-input--${size}` : '';
    };
    const inputClasses = `${className || ''} ${type === 'password' ? 'password-wrapper' : ''}`;
    const inputStyle = width ? { width: `${width}px` } : {};
    return (<div className={`nex-input ${inputClasses} ${getSizeClass(fieldSize)}`} style={inputStyle}>
      <input {...rest} type={type === 'password' && showPassword ? 'text' : type}/>
      {peekButton && type === 'password' && (<button type='button' className="peek-button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>)}
    </div>);
};
export default NexInput;
//# sourceMappingURL=NexInput.jsx.map