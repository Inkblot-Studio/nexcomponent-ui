import React, { useState, useEffect } from 'react';
import { NexInputProps } from './NexInput.types';
import './NexInput.scss';

const NexInput: React.FC<NexInputProps> = ({ type, peekButton, className, width, fieldSize = 'normal', ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (peekButton && width && width < 100) {
      console.error("NexInput error: Width should be at least 100px.");
    }
  }, [width]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getSizeClass = (size: string | undefined): string => {
    return size ? `nex-input--${size}` : '';
  };

  const inputClasses = `${className || ''} ${type === 'password' ? 'password-wrapper' : ''}`;

  const inputStyle = width ? { width: `${width}px` } : {};

  return (
    <div className={`nex-input ${inputClasses} ${getSizeClass(fieldSize)}`} style={inputStyle}>
      <input {...rest} type={type === 'password' && showPassword ? 'text' : type}/>
      {peekButton && type === 'password' && (
        <button type='button' className="peek-button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

export default NexInput;