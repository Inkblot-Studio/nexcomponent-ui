import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { InputFieldProps } from './InputField.types';
import './InputField.scss';

/**
 * InputField - Clean, simple input field
 * 
 * A minimal input field component with smooth animations and professional styling.
 * Designed for optimal user experience and accessibility.
 */
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  required = false,
  className,
  ...rest
}, ref) => {
  const { shouldReduceMotion } = useAnimationConfig();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <motion.input
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      required={required}
      className={`nex-input-field ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
      {...rest}
    />
  );
});

InputField.displayName = 'InputField';

export default InputField; 