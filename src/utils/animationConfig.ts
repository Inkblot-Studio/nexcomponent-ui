import { useReducedMotion } from 'framer-motion';

// Enterprise-level animation configuration
export const ANIMATION_CONFIG = {
  // Timing presets
  fast: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  medium: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  slower: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  
  // Spring configurations
  spring: { 
    type: "spring", 
    stiffness: 400, 
    damping: 30,
    mass: 0.8
  },
  springFast: {
    type: "spring",
    stiffness: 600,
    damping: 25,
    mass: 0.6
  },
  springSlow: {
    type: "spring",
    stiffness: 200,
    damping: 35,
    mass: 1.2
  },
  
  // Stagger configurations
  stagger: {
    container: { delayChildren: 0.1, staggerChildren: 0.05 },
    fast: { delayChildren: 0.05, staggerChildren: 0.03 },
    slow: { delayChildren: 0.15, staggerChildren: 0.08 }
  }
};

// Hook to get animation config with reduced motion support
export const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    ...ANIMATION_CONFIG,
    // Override durations for reduced motion
    fast: shouldReduceMotion ? { duration: 0.1, ease: [0.4, 0, 0.2, 1] } : ANIMATION_CONFIG.fast,
    medium: shouldReduceMotion ? { duration: 0.15, ease: [0.4, 0, 0.2, 1] } : ANIMATION_CONFIG.medium,
    slow: shouldReduceMotion ? { duration: 0.2, ease: [0.4, 0, 0.2, 1] } : ANIMATION_CONFIG.slow,
    slower: shouldReduceMotion ? { duration: 0.3, ease: [0.4, 0, 0.2, 1] } : ANIMATION_CONFIG.slower,
    shouldReduceMotion
  };
};

// Common animation variants
export const ANIMATION_VARIANTS = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  
  // Slide animations
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  },
  
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  },
  
  slideLeft: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  },
  
  slideRight: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  
  // Scale animations
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  
  // Nav-specific animations
  navItem: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  },
  
  // Mobile nav animations
  mobileNav: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 }
  },
  
  // Background state animations
  background: {
    atTop: {
      background: 'rgba(255,255,255,0)',
      backdropFilter: 'blur(0px) saturate(100%)',
      WebkitBackdropFilter: 'blur(0px) saturate(100%)',
      borderBottom: 'none',
      boxShadow: 'none'
    },
    scrolled: {
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      borderBottom: '1.5px solid rgba(255,255,255,0.22)',
      boxShadow: '0 8px 32px -8px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(255,255,255,0.13) inset'
    },
    mobileOpen: {
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(32px) saturate(200%)',
      WebkitBackdropFilter: 'blur(32px) saturate(200%)',
      borderBottom: '1.5px solid rgba(255,255,255,0.3)',
      boxShadow: '0 12px 40px -12px rgba(0,0,0,0.15), 0 0 0 1.5px rgba(255,255,255,0.2) inset'
    }
  },
  
  // Button animations
  button: {
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      borderColor: "rgba(255, 255, 255, 0.18)",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)"
    },
    tap: {
      scale: 0.98,
      backgroundColor: "rgba(255, 24, 1, 0.15)",
      borderColor: "rgba(255, 24, 1, 0.25)"
    },
    focus: {
      outline: "2px solid var(--nex-signature)",
      outlineOffset: "2px"
    }
  },
  
  // Icon animations
  icon: {
    closed: {
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    open: {
      opacity: 0,
      scale: 0.8,
      rotate: 45
    }
  },
  
  closeIcon: {
    closed: {
      opacity: 0,
      scale: 0.8,
      rotate: -45
    },
    open: {
      opacity: 1,
      scale: 1,
      rotate: 0
    }
  }
};

// Performance optimization helpers
export const PERFORMANCE_CONFIG = {
  // Hardware acceleration
  hardwareAcceleration: {
    transform: 'translateZ(0)' as const,
    backfaceVisibility: 'hidden' as const,
    perspective: '1000px'
  },
  
  // Will-change hints
  willChange: {
    transform: 'transform',
    opacity: 'opacity',
    background: 'background-color',
    backdrop: 'backdrop-filter',
    all: 'transform, opacity, background-color, border-color, box-shadow'
  }
};

// Color schemes for different states
export const COLOR_SCHEMES = {
  // Nav background colors
  navBackground: {
    transparent: 'rgba(255,255,255,0)',
    light: 'rgba(255,255,255,0.7)',
    medium: 'rgba(255,255,255,0.85)',
    dark: 'rgba(255,255,255,0.95)'
  },
  
  // Button colors
  button: {
    primary: {
      background: 'rgba(255, 255, 255, 0.08)',
      border: 'rgba(255, 255, 255, 0.1)',
      hover: {
        background: 'rgba(255, 255, 255, 0.12)',
        border: 'rgba(255, 255, 255, 0.18)'
      },
      active: {
        background: 'rgba(255, 24, 1, 0.15)',
        border: 'rgba(255, 24, 1, 0.25)'
      }
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.06)',
      border: 'rgba(255, 255, 255, 0.08)',
      hover: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.12)'
      },
      active: {
        background: 'rgba(255, 24, 1, 0.12)',
        border: 'rgba(255, 24, 1, 0.2)'
      }
    }
  },
  
  // Mobile nav colors
  mobileNav: {
    background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
    backdropFilter: 'blur(24px) saturate(180%)',
    border: 'rgba(255,255,255,0.18)',
    shadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.10)'
  }
}; 