import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../utils/animationConfig';
import './FooterContainer.scss';

interface FooterContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact' | 'contact';
  theme?: 'auto' | 'light' | 'dark' | 'black-glass';
  className?: string;
}

const FooterContainer: React.FC<FooterContainerProps> = ({
  children,
  variant = 'default',
  theme = 'auto',
  className = ''
}) => {
  const { timing, shouldReduceMotion } = useAnimationConfig();

  // Get theme-aware styles
  const getThemeStyles = () => {
    if (theme === 'dark') {
      return {
        background: 'linear-gradient(120deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.6) 100%), linear-gradient(90deg, rgba(255,24,1,0.08) 0%, rgba(0,184,255,0.08) 100%)',
        backgroundLayer: 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 30%, rgba(0, 0, 0, 0.02) 60%, rgba(0, 0, 0, 0.01) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        shimmer: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.015), transparent)',
        gradientOverlay: `
          radial-gradient(circle at 20% 40%, rgba(255,24,1,0.08) 0%, rgba(255,24,1,0.04) 40%, transparent 70%),
          radial-gradient(circle at 80% 60%, rgba(0,184,255,0.06) 0%, rgba(0,184,255,0.04) 40%, transparent 70%),
          radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 80%)
        `
      };
    } else if (theme === 'black-glass') {
      return {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.92) 0%, rgba(15, 15, 15, 0.88) 50%, rgba(0, 0, 0, 0.92) 100%)',
        backgroundLayer: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(15, 15, 15, 0.25) 30%, rgba(30, 30, 30, 0.15) 60%, rgba(0, 0, 0, 0.08) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        shimmer: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.08), rgba(247, 147, 30, 0.08), transparent)',
        gradientOverlay: `
          radial-gradient(circle at 20% 40%, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0.05) 40%, transparent 70%),
          radial-gradient(circle at 80% 60%, rgba(247,147,30,0.08) 0%, rgba(247,147,30,0.04) 40%, transparent 70%),
          radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 80%)
        `
      };
    } else {
      // Light theme (default)
      return {
        background: 'linear-gradient(120deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%), linear-gradient(90deg, rgba(255,24,1,0.12) 0%, rgba(0,184,255,0.12) 100%)',
        backgroundLayer: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 30%, rgba(255, 255, 255, 0.02) 60%, rgba(255, 255, 255, 0.01) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        shimmer: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)',
        gradientOverlay: `
          radial-gradient(circle at 20% 40%, rgba(255,24,1,0.15) 0%, rgba(255,24,1,0.08) 40%, transparent 70%),
          radial-gradient(circle at 80% 60%, rgba(0,184,255,0.12) 0%, rgba(0,184,255,0.08) 40%, transparent 70%),
          radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 80%)
        `
      };
    }
  };

  const themeStyles = getThemeStyles();

  // Background variants matching NexNav approach
  const backgroundVariants = {
    initial: {
      backdropFilter: 'blur(0px) saturate(100%)',
      background: 'rgba(255, 255, 255, 0)'
    },
    animate: {
      backdropFilter: 'blur(24px) saturate(180%)',
      background: themeStyles.background,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Shimmer effect variants
  const shimmerVariants = {
    initial: { 
      opacity: 0,
      x: '-100%',
      scale: 0.8
    },
    animate: { 
      opacity: shouldReduceMotion ? 0 : 0.6,
      x: '0%',
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const containerClass = `nex-footer-container nex-footer-container--${variant} ${theme !== 'auto' ? `nex-footer-container--${theme}` : ''} ${className}`;

  return (
    <motion.div
      className={containerClass}
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      style={{
        position: 'relative',
        width: '100%',
        fontFamily: 'var(--nex-font-family-primary)',
        willChange: 'transform, opacity, backdrop-filter',
        overflow: 'hidden'
      }}
    >
      {/* Enhanced Liquid Glass Background Layer */}
      <motion.div
        className="nex-footer-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: themeStyles.backgroundLayer,
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderTop: themeStyles.borderTop,
          pointerEvents: 'none',
          zIndex: 0
        }}
        variants={backgroundVariants}
      />

      {/* Ambient Light Flow Effect - Enhanced */}
      <motion.div
        className="nex-footer-shimmer"
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: themeStyles.shimmer,
          pointerEvents: 'none',
          zIndex: 0
        }}
        variants={shimmerVariants}
        animate={{
          x: shouldReduceMotion ? '-100%' : '100%',
          transition: {
            duration: shouldReduceMotion ? 0 : 12,
            ease: [0.4, 0, 0.2, 1],
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatDelay: shouldReduceMotion ? 0 : 4
          }
        }}
      />

      {/* Subtle gradient overlays for depth */}
      <motion.div
        className="nex-footer-gradient-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: themeStyles.gradientOverlay,
          opacity: 0.8,
          filter: 'blur(8px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        animate={{
          opacity: shouldReduceMotion ? 0.4 : 0.8,
          transition: {
            duration: shouldReduceMotion ? 0 : 8,
            ease: [0.4, 0, 0.2, 1],
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: 'reverse'
          }
        }}
      />

      {/* Main Content Area */}
      <motion.div
        className="nex-footer-content-wrapper"
        style={{
          position: 'relative',
          zIndex: 1
        }}
        variants={{
          initial: { opacity: 0 },
          animate: { 
            opacity: 1,
            transition: {
              duration: shouldReduceMotion ? 0.2 : 0.4,
              ease: [0.4, 0, 0.2, 1],
              delay: shouldReduceMotion ? 0 : 0.1
            }
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FooterContainer; 