import { useAnimationConfig } from '../../utils/animationConfig';

// Footer-specific animation configurations using common animation config
export const FOOTER_ANIMATIONS = {
  // Container entrance animations using common timing
  container: {
    initial: { 
      opacity: 0, 
      y: 20
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.06,
        delayChildren: 0.1
      }
    }
  },

  // Section entrance animations using common timing
  section: {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Link entrance animations using common timing
  link: {
    initial: { opacity: 0, x: -5 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Form field animations using common timing
  formField: {
    initial: { opacity: 0, y: 8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Button animations using common spring config
  button: {
    initial: { opacity: 0, y: 5 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },

  // Message animations using common spring config
  message: {
    initial: { opacity: 0, y: -8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -8,
      transition: {
        duration: 0.2
      }
    }
  },

  // Hover animations - no transform/scale to avoid layout shifts
  hover: {
    opacity: 0.8,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },

  // Tap animations - no transform/scale to avoid layout shifts
  tap: {
    opacity: 0.7,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 0.2, 1]
    }
  },

  // Spring configurations for interactive elements
  spring: {
    responsive: { 
      type: "spring", 
      stiffness: 450, 
      damping: 28,
      mass: 0.8,
      restDelta: 0.001
    },
    fast: {
      type: "spring",
      stiffness: 600,
      damping: 25,
      mass: 0.6,
      restDelta: 0.001
    },
    smooth: {
      type: "spring",
      stiffness: 300,
      damping: 35,
      mass: 1.0,
      restDelta: 0.001
    }
  },

  // Stagger animations for lists using common config
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.04,
          delayChildren: 0.08
        }
      }
    },
    item: {
      initial: { opacity: 0, x: -8 },
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
  const { shouldReduceMotion, timing, spring } = useAnimationConfig();

  // Return simplified animations if reduced motion is preferred
  if (shouldReduceMotion) {
    return {
      container: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: timing.fast
        }
      },
      section: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: timing.fast
        }
      },
      link: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: timing.instant
        }
      },
      formField: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: timing.fast
        }
      },
      button: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: timing.fast
        }
      },
      message: {
        initial: { opacity: 0 },
        animate: { 
          opacity: 1,
          transition: timing.fast
        },
        exit: { 
          opacity: 0,
          transition: timing.instant
        }
      },
      hover: {},
      tap: {},
      spring: spring,
      stagger: {
        container: { animate: {} },
        item: {
          initial: { opacity: 0 },
          animate: { 
            opacity: 1,
            transition: timing.instant
          }
        }
      }
    };
  }

  return FOOTER_ANIMATIONS;
}; 