import { useReducedMotion } from 'framer-motion';

// Enterprise Animation System - Comprehensive Configuration
export const ANIMATION_CONFIG = {
  // Core timing presets with cubic-bezier easing
  timing: {
    instant: { duration: 0.05, ease: [0.4, 0, 0.2, 1] },
    fast: { duration: 0.12, ease: [0.4, 0, 0.2, 1] },
    medium: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    slow: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    slower: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    slowest: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  },
  
  // Advanced spring configurations
  spring: {
    // Responsive spring for interactive elements
    responsive: { 
      type: "spring", 
      stiffness: 450, 
      damping: 28,
      mass: 0.8,
      restDelta: 0.001
    },
    // Fast spring for immediate feedback
    fast: {
      type: "spring",
      stiffness: 600,
      damping: 25,
      mass: 0.6,
      restDelta: 0.001
    },
    // Smooth spring for elegant animations
    smooth: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      mass: 1.0,
      restDelta: 0.001
    },
    // Heavy spring for substantial elements
    heavy: {
      type: "spring",
      stiffness: 200,
      damping: 40,
      mass: 1.4,
      restDelta: 0.001
    }
  },
  
  // Enterprise stagger configurations
  stagger: {
    // Main container stagger
    container: {
      animate: {
        transition: {
          delayChildren: 0.08,
          staggerChildren: 0.04,
          staggerDirection: 1
        }
      }
    },
    // Fast stagger for immediate feedback
    fast: {
      animate: {
        transition: {
          delayChildren: 0.02,
          staggerChildren: 0.02,
          staggerDirection: 1
        }
      }
    },
    // Slow stagger for dramatic reveals
    slow: {
      animate: {
        transition: {
          delayChildren: 0.15,
          staggerChildren: 0.08,
          staggerDirection: 1
        }
      }
    },
    // Dropdown stagger for menu items
    dropdown: {
      animate: {
        transition: {
          delayChildren: 0.04,
          staggerChildren: 0.03,
          staggerDirection: 1
        }
      }
    },
    // Grid stagger for card layouts
    grid: {
      animate: {
        transition: {
          delayChildren: 0.06,
          staggerChildren: 0.05,
          staggerDirection: 1
        }
      }
    }
  }
};

// Enterprise Animation Variants
export const ANIMATION_VARIANTS = {
  // Core fade animations
  fade: {
    in: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    inUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    },
    inDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    },
    inLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    },
    inRight: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 }
    }
  },
  
  // Scale animations
  scale: {
    in: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 }
    },
    inUp: {
      initial: { scale: 0.8, y: 20, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
      exit: { scale: 0.8, y: -20, opacity: 0 }
    },
    inDown: {
      initial: { scale: 0.8, y: -20, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
      exit: { scale: 0.8, y: 20, opacity: 0 }
    }
  },
  
  // Mobile Navigation System
  mobileNav: {
    // Main container animation
    container: {
      initial: { 
        y: '-100%', 
        opacity: 0,
        backdropFilter: 'blur(0px) saturate(100%)'
      },
      animate: { 
        y: 0, 
        opacity: 1,
        backdropFilter: 'blur(24px) saturate(180%)',
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 35,
          mass: 1.0
        }
      },
      exit: { 
        y: '-100%', 
        opacity: 0,
        backdropFilter: 'blur(0px) saturate(100%)',
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8
        }
      }
    },
    
    // Header section
    header: {
      initial: { opacity: 0, y: -10 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      },
      exit: { opacity: 0, y: -10 }
    },
    
    // Navigation items
    navItem: {
      initial: { opacity: 0, y: -8, scale: 0.95 },
      animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 450,
          damping: 28
        }
      },
      exit: { opacity: 0, y: -8, scale: 0.95 }
    },
    
    // Section titles
    sectionTitle: {
      initial: { opacity: 0, x: -10 },
      animate: { 
        opacity: 1, 
        x: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      },
      exit: { opacity: 0, x: -10 }
    },
    
    // Dropdown containers
    dropdownContainer: {
      initial: { 
        opacity: 0, 
        height: 0,
        scale: 0.95
      },
      animate: { 
        opacity: 1, 
        height: 'auto',
        scale: 1,
        transition: {
          height: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
        }
      },
      exit: { 
        opacity: 0, 
        height: 0,
        scale: 0.95,
        transition: {
          height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
        }
      }
    },
    
    // Dropdown items
    dropdownItem: {
      initial: { opacity: 0, y: -6, scale: 0.95, x: -5 },
      animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 25
        }
      },
      exit: { opacity: 0, y: -6, scale: 0.95, x: -5 }
    },
    
    // User avatar
    avatar: {
      initial: { opacity: 0, scale: 0.8, rotate: -10 },
      animate: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      },
      exit: { opacity: 0, scale: 0.8, rotate: -10 }
    },
    
    // Badge animations
    badge: {
      initial: { opacity: 0, scale: 0.5 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 600,
          damping: 25
        }
      },
      exit: { opacity: 0, scale: 0.5 }
    },
    
    // Icon rotations
    iconRotate: {
      closed: { rotate: 0 },
      open: { rotate: 180 }
    }
  },
  
  // Interactive elements
  interactive: {
    // Button states
    button: {
      idle: {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
      },
      hover: {
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        borderColor: "rgba(255, 255, 255, 0.18)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)"
      },
      tap: {
        scale: 0.98,
        backgroundColor: "rgba(255, 24, 1, 0.15)",
        borderColor: "rgba(255, 24, 1, 0.25)",
        boxShadow: "0 2px 8px rgba(255, 24, 1, 0.2)"
      },
      focus: {
        outline: "2px solid var(--nex-signature)",
        outlineOffset: "2px",
        boxShadow: "0 0 0 4px rgba(255, 24, 1, 0.1)"
      }
    },
    
    // Nav item states (removed translateX for mobile nav)
    navItem: {
      idle: {
        backgroundColor: "transparent"
      },
      hover: {
        backgroundColor: "rgba(255, 255, 255, 0.06)"
      },
      active: {
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      }
    },

    // Enterprise hamburger button animations
    hamburger: {
      // Container rotation
      container: {
        closed: {
          rotate: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 30
          }
        },
        open: {
          rotate: 180,
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 30
          }
        }
      },
      
      // Menu icon (hamburger lines)
      menuIcon: {
        closed: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
          }
        },
        open: {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
          }
        }
      },
      
      // Close icon (X)
      closeIcon: {
        closed: {
          opacity: 0,
          scale: 0.8,
          rotate: 45,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
          }
        },
        open: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
          }
        }
      }
    }
  },
  
  // Background transitions
  background: {
    transparent: {
      background: 'rgba(255,255,255,0)',
      backdropFilter: 'blur(0px) saturate(100%)',
      WebkitBackdropFilter: 'blur(0px) saturate(100%)',
      borderBottom: 'none',
      boxShadow: 'none'
    },
    light: {
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      borderBottom: '1.5px solid rgba(255,255,255,0.22)',
      boxShadow: '0 8px 32px -8px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(255,255,255,0.13) inset'
    },
    medium: {
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(32px) saturate(200%)',
      WebkitBackdropFilter: 'blur(32px) saturate(200%)',
      borderBottom: '1.5px solid rgba(255,255,255,0.3)',
      boxShadow: '0 12px 40px -12px rgba(0,0,0,0.15), 0 0 0 1.5px rgba(255,255,255,0.2) inset'
    },
    dark: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(40px) saturate(220%)',
      WebkitBackdropFilter: 'blur(40px) saturate(220%)',
      borderBottom: '1.5px solid rgba(255,255,255,0.4)',
      boxShadow: '0 16px 48px -16px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(255,255,255,0.25) inset'
    }
  }
};

// Performance optimization system
export const PERFORMANCE_CONFIG = {
  // Hardware acceleration presets
  hardwareAcceleration: {
    transform: 'translateZ(0)' as const,
    backfaceVisibility: 'hidden' as const,
    perspective: '1000px',
    willChange: 'transform, opacity'
  },
  
  // Will-change hints for different animation types
  willChange: {
    transform: 'transform',
    opacity: 'opacity',
    background: 'background-color',
    backdrop: 'backdrop-filter',
    all: 'transform, opacity, background-color, border-color, box-shadow, backdrop-filter'
  },
  
  // Animation performance modes
  performance: {
    high: {
      willChange: 'transform, opacity, backdrop-filter',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden'
    },
    medium: {
      willChange: 'transform, opacity',
      transform: 'translateZ(0)'
    },
    low: {
      willChange: 'opacity'
    }
  }
};

// Enterprise color schemes
export const COLOR_SCHEMES = {
  // Mobile navigation system
  mobileNav: {
    background: {
      primary: 'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%), linear-gradient(90deg, rgba(255,24,1,0.08) 0%, rgba(0,184,255,0.08) 100%)',
      secondary: 'linear-gradient(120deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)',
      dark: 'linear-gradient(120deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.6) 100%)'
    },
    backdrop: {
      light: 'blur(24px) saturate(180%)',
      medium: 'blur(32px) saturate(200%)',
      heavy: 'blur(40px) saturate(220%)'
    },
    border: {
      light: '1.5px solid rgba(255, 255, 255, 0.22)',
      medium: '1.5px solid rgba(255, 255, 255, 0.3)',
      heavy: '1.5px solid rgba(255, 255, 255, 0.4)'
    },
    shadow: {
      light: '0 8px 32px -8px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(255,255,255,0.13) inset',
      medium: '0 12px 40px -12px rgba(0,0,0,0.15), 0 0 0 1.5px rgba(255,255,255,0.2) inset',
      heavy: '0 16px 48px -16px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(255,255,255,0.25) inset'
    }
  },
  
  // Interactive elements
  interactive: {
    navItem: {
      idle: 'rgba(255, 255, 255, 0.02)',
      hover: 'rgba(255, 255, 255, 0.06)',
      active: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(255, 24, 1, 0.08)'
    },
    button: {
      primary: {
        idle: 'rgba(255, 255, 255, 0.08)',
        hover: 'rgba(255, 255, 255, 0.12)',
        active: 'rgba(255, 24, 1, 0.15)'
      },
      secondary: {
        idle: 'rgba(255, 255, 255, 0.06)',
        hover: 'rgba(255, 255, 255, 0.1)',
        active: 'rgba(255, 24, 1, 0.12)'
      }
    }
  }
};

// Enterprise hook with comprehensive configuration
export const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();
  
  // Reduced motion overrides
  const reducedMotionConfig = {
    timing: {
      instant: { duration: 0.02, ease: [0.4, 0, 0.2, 1] },
      fast: { duration: 0.08, ease: [0.4, 0, 0.2, 1] },
      medium: { duration: 0.12, ease: [0.4, 0, 0.2, 1] },
      slow: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
      slower: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
      slowest: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    stagger: {
      container: {
        animate: {
          transition: {
            delayChildren: 0.02,
            staggerChildren: 0.01,
            staggerDirection: 1
          }
        }
      },
      fast: {
        animate: {
          transition: {
            delayChildren: 0.01,
            staggerChildren: 0.005,
            staggerDirection: 1
          }
        }
      },
      slow: {
        animate: {
          transition: {
            delayChildren: 0.05,
            staggerChildren: 0.02,
            staggerDirection: 1
          }
        }
      },
      dropdown: {
        animate: {
          transition: {
            delayChildren: 0.01,
            staggerChildren: 0.01,
            staggerDirection: 1
          }
        }
      },
      grid: {
        animate: {
          transition: {
            delayChildren: 0.02,
            staggerChildren: 0.01,
            staggerDirection: 1
          }
        }
      }
    }
  };
  
  return {
    ...ANIMATION_CONFIG,
    ...(shouldReduceMotion && reducedMotionConfig),
    shouldReduceMotion,
    performance: PERFORMANCE_CONFIG,
    variants: ANIMATION_VARIANTS,
    colors: COLOR_SCHEMES
  };
};

// Legacy exports for backward compatibility
export const fast = ANIMATION_CONFIG.timing.fast;
export const medium = ANIMATION_CONFIG.timing.medium;
export const slow = ANIMATION_CONFIG.timing.slow;
export const slower = ANIMATION_CONFIG.timing.slower;
export const spring = ANIMATION_CONFIG.spring.responsive;
export const stagger = ANIMATION_CONFIG.stagger.container; 