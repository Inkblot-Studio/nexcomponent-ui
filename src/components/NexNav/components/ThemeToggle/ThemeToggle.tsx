import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../ThemeContext';
import './ThemeToggle.scss';

interface ThemeToggleProps {
  isAtTop?: boolean;
  className?: string;
  theme?: 'light' | 'auto' | 'black-glass';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  isAtTop = true,
  className = '',
  theme = 'auto'
}) => {
  const { isDark, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    toggleTheme();
    
    // Reset animation flag after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  // Get initial background state based on theme and position
  const getInitialBackground = () => {
    if (isDark) {
      // Check if black glass theme is active
      const isBlackGlass = document.documentElement.getAttribute('data-theme-variant') === 'black-glass';
      return isAtTop ? (isBlackGlass ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.4)') : 'transparent';
    } else {
      return isAtTop ? 'rgba(255, 255, 255, 0.25)' : 'transparent';
    }
  };

  // Enterprise-level hover animations with icon emphasis
  const hoverVariants = {
    idle: {
      scale: 1,
      backgroundColor: getInitialBackground(),
      borderColor: "rgba(255, 255, 255, 0.12)",
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.25)",
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1]
      }
    },
    tap: {
      scale: 0.98,
      backgroundColor: "rgba(255, 24, 1, 0.08)",
      borderColor: "rgba(255, 24, 1, 0.12)",
      transition: { 
        duration: 0.15, 
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Icon-specific hover animations for enterprise feel
  const iconHoverVariants = {
    idle: {
      scale: 1,
      filter: "brightness(1)",
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      scale: 1.1,
      filter: "brightness(1.3) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
      transition: { 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1]
      }
    },
    tap: {
      scale: 0.95,
      filter: "brightness(1.1)",
      transition: { 
        duration: 0.15, 
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.button
      className={`nex-theme-toggle ${className}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      tabIndex={0}
      disabled={isAnimating}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      variants={hoverVariants}
      whileFocus={{
        outline: "2px solid var(--nex-signature)",
        outlineOffset: "2px",
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
      }}
    >
      {/* Icon container with enterprise-level hover emphasis */}
      <motion.div
        className="nex-theme-toggle__icon-container"
        animate={{
          rotate: isDark ? 180 : 0
        }}
        variants={iconHoverVariants}
        initial="idle"
        whileHover="hover"
        whileTap="tap"
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8,
          restDelta: 0.001
        }}
      >
        {/* Theme icon with refined transitions */}
        <AnimatePresence mode="wait">
          {!isDark ? (
                         <motion.div
               key="sun"
               className="nex-theme-toggle__icon nex-theme-toggle__icon--sun"
               initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
               transition={{
                 duration: 0.2,
                 ease: [0.4, 0, 0.2, 1],
                 scale: { duration: 0.15 }
               }}
               style={{
                 color: '#fbbf24',
                 filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))'
               }}
             >
               <Sun size={16} />
             </motion.div>
          ) : (
                         <motion.div
               key="moon"
               className="nex-theme-toggle__icon nex-theme-toggle__icon--moon"
               initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
               transition={{
                 duration: 0.2,
                 ease: [0.4, 0, 0.2, 1],
                 scale: { duration: 0.15 }
               }}
               style={{
                 color: '#8b5cf6',
                 filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.3))'
               }}
             >
               <Moon size={16} />
             </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subtle ripple effect on click */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="nex-theme-toggle__ripple"
            initial={{ opacity: 0.6, scale: 0.8 }}
            animate={{ opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.4, 0, 0.2, 1],
              scale: { duration: 0.25 }
            }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle; 