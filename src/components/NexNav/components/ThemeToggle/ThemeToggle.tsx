import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.scss';

interface ThemeToggleProps {
  isAtTop?: boolean;
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  isAtTop = true,
  className = ''
}) => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('nex-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      setIsDark(systemPrefersDark);
      document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update localStorage
    localStorage.setItem('nex-theme', newTheme ? 'dark' : 'light');
    
    // Update document attribute
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    
    // Reset animation flag after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <motion.button
      className={`nex-theme-toggle ${className}`}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      tabIndex={0}
      disabled={isAnimating}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{
        transition: { duration: 0.08, ease: [0.4, 0, 0.2, 1] }
      }}
      whileFocus={{
        outline: "2px solid var(--nex-signature)",
        outlineOffset: "2px",
        transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] }
      }}
    >
      {/* Icon container */}
      <motion.div
        className="nex-theme-toggle__icon-container"
        animate={{
          rotate: isDark ? 180 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 25,
          mass: 0.6,
          restDelta: 0.001
        }}
      >
        {/* Sun icon */}
        <AnimatePresence mode="wait">
          {!isDark ? (
            <motion.div
              key="sun"
              className="nex-theme-toggle__icon nex-theme-toggle__icon--sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{
                duration: 0.12,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <Sun size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              className="nex-theme-toggle__icon nex-theme-toggle__icon--moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{
                duration: 0.12,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <Moon size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Ripple effect on click */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="nex-theme-toggle__ripple"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: [0.4, 0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle; 