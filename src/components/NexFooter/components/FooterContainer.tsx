import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../utils/animationConfig';
import './FooterContainer.scss';

interface FooterContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact' | 'contact';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

const FooterContainer: React.FC<FooterContainerProps> = ({
  children,
  variant = 'default',
  theme = 'auto',
  className = ''
}) => {
  const { timing, shouldReduceMotion } = useAnimationConfig();
  const [currentTheme, setCurrentTheme] = React.useState<'light' | 'dark'>('light');

  // Theme handling
  React.useEffect(() => {
    const handleThemeChange = () => {
      if (theme === 'auto') {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
        setCurrentTheme(isDark ? 'dark' : 'light');
      } else {
        setCurrentTheme(theme);
      }
    };

    handleThemeChange();
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const observer = new MutationObserver(handleThemeChange);
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    mediaQuery.addEventListener('change', handleThemeChange);
    
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [theme]);

  // Container variants for liquid glass entrance
  const containerVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      backdropFilter: 'blur(0px) saturate(100%)'
    },
    animate: { 
      opacity: 1, 
      y: 0,
      backdropFilter: 'blur(24px) saturate(180%)',
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const footerClass = `nex-footer-container ${variant === 'compact' ? 'nex-footer-container--compact' : ''} ${variant === 'contact' ? 'nex-footer-container--contact' : ''} ${currentTheme === 'dark' ? 'nex-footer-container--dark' : ''} ${className}`.trim();

  return (
    <motion.footer
      className={footerClass}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      role="contentinfo"
      aria-label="Footer"
      data-theme={currentTheme}
      data-variant={variant}
    >
      {children}
    </motion.footer>
  );
};

export default FooterContainer; 