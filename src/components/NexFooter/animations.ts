import { useAnimationConfig } from '../../utils/animationConfig';

// Footer-specific animation configurations
export const FOOTER_ANIMATIONS = {
  // Container entrance animations
  container: {
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
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  },

  // Section entrance animations
  section: {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Link entrance animations
  link: {
    initial: { opacity: 0, x: -5 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Form field animations
  formField: {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Button animations
  button: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  },

  // Message animations
  message: {
    initial: { opacity: 0, y: -10, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  },

  // Hover animations
  hover: {
    y: -1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },

  // Tap animations
  tap: {
    y: 0,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1]
    }
  },

  // Liquid glass shimmer effect
  shimmer: {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        duration: 8,
        ease: [0.4, 0, 0.2, 1],
        repeat: Infinity,
        repeatDelay: 4
      }
    }
  },

  // Stagger animations for lists
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.1
        }
      }
    },
    item: {
      initial: { opacity: 0, x: -10 },
      animate: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    }
  }
};

// Hook for footer animations with reduced motion support
export const useFooterAnimations = () => {
  const { shouldReduceMotion } = useAnimationConfig();

  // Return simplified animations if reduced motion is preferred
  if (shouldReduceMotion) {
    return {
      container: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.2 }
        }
      },
      section: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.2 }
        }
      },
      link: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.1 }
        }
      },
      formField: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.2 }
        }
      },
      button: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.2 }
        }
      },
      message: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: { duration: 0.2 }
        },
        exit: { 
          opacity: 0,
          transition: { duration: 0.1 }
        }
      },
      hover: {},
      tap: {},
      shimmer: { initial: {}, animate: {} },
      stagger: {
        container: { animate: {} },
        item: {
          initial: { opacity: 0 },
          animate: { 
            opacity: 1,
            transition: { duration: 0.1 }
          }
        }
      }
    };
  }

  return FOOTER_ANIMATIONS;
}; 