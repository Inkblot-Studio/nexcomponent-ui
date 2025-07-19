import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { InputContainerProps } from './InputContainer.types';
import './InputContainer.scss';

/**
 * InputContainer - Clean, simple input container
 * 
 * A minimal container that wraps input fields with proper styling and animations.
 * Designed for professional form experiences.
 */
const InputContainer: React.FC<InputContainerProps> = ({ 
  children, 
  focused = false,
  error = false,
  disabled = false,
  className 
}) => {
  const { shouldReduceMotion } = useAnimationConfig();

  const containerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    focus: { 
      scale: shouldReduceMotion ? 1 : 1.02,
      transition: { duration: 0.2 }
    }
  };

  const containerClasses = `nex-input-container ${focused ? 'focused' : ''} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${className || ''}`;

  return (
    <motion.div 
      className={containerClasses}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover={!disabled ? "focus" : {}}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default InputContainer; 