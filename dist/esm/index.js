import React, { useState, useRef, useEffect, useCallback, useContext, createContext, useMemo } from 'react';
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ChevronDown, Sun, Moon, LogIn, User, Fingerprint, Zap, Settings, Activity, Shield, Globe, Crown, LogOut, Menu, X, CheckCircle, AlertCircle, Mail, MessageCircle, Send } from 'lucide-react';
import classNames from 'classnames';

// Enterprise Animation System - Comprehensive Configuration
const ANIMATION_CONFIG = {
  // Core timing presets with cubic-bezier easing
  timing: {
    instant: {
      duration: 0.05,
      ease: [0.4, 0, 0.2, 1]
    },
    fast: {
      duration: 0.12,
      ease: [0.4, 0, 0.2, 1]
    },
    medium: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    },
    slow: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1]
    },
    slower: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    },
    slowest: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
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
const ANIMATION_VARIANTS = {
  // Core fade animations
  fade: {
    in: {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      }
    },
    inUp: {
      initial: {
        opacity: 0,
        y: 20
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: -20
      }
    },
    inDown: {
      initial: {
        opacity: 0,
        y: -20
      },
      animate: {
        opacity: 1,
        y: 0
      },
      exit: {
        opacity: 0,
        y: 20
      }
    },
    inLeft: {
      initial: {
        opacity: 0,
        x: 20
      },
      animate: {
        opacity: 1,
        x: 0
      },
      exit: {
        opacity: 0,
        x: -20
      }
    },
    inRight: {
      initial: {
        opacity: 0,
        x: -20
      },
      animate: {
        opacity: 1,
        x: 0
      },
      exit: {
        opacity: 0,
        x: 20
      }
    }
  },
  // Scale animations
  scale: {
    in: {
      initial: {
        scale: 0.8,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1
      },
      exit: {
        scale: 0.8,
        opacity: 0
      }
    },
    inUp: {
      initial: {
        scale: 0.8,
        y: 20,
        opacity: 0
      },
      animate: {
        scale: 1,
        y: 0,
        opacity: 1
      },
      exit: {
        scale: 0.8,
        y: -20,
        opacity: 0
      }
    },
    inDown: {
      initial: {
        scale: 0.8,
        y: -20,
        opacity: 0
      },
      animate: {
        scale: 1,
        y: 0,
        opacity: 1
      },
      exit: {
        scale: 0.8,
        y: 20,
        opacity: 0
      }
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
      initial: {
        opacity: 0,
        y: -10
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      },
      exit: {
        opacity: 0,
        y: -10
      }
    },
    // Navigation items
    navItem: {
      initial: {
        opacity: 0,
        y: -8,
        scale: 0.95
      },
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
      exit: {
        opacity: 0,
        y: -8,
        scale: 0.95
      }
    },
    // Section titles
    sectionTitle: {
      initial: {
        opacity: 0,
        x: -10
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }
      },
      exit: {
        opacity: 0,
        x: -10
      }
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
          height: {
            duration: 0.25,
            ease: [0.4, 0, 0.2, 1]
          },
          opacity: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          },
          scale: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      },
      exit: {
        opacity: 0,
        height: 0,
        scale: 0.95,
        transition: {
          height: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          },
          opacity: {
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1]
          },
          scale: {
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }
    },
    // Dropdown items
    dropdownItem: {
      initial: {
        opacity: 0,
        y: -6,
        scale: 0.95,
        x: -5
      },
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
      exit: {
        opacity: 0,
        y: -6,
        scale: 0.95,
        x: -5
      }
    },
    // User avatar
    avatar: {
      initial: {
        opacity: 0,
        scale: 0.8,
        rotate: -10
      },
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
      exit: {
        opacity: 0,
        scale: 0.8,
        rotate: -10
      }
    },
    // Badge animations
    badge: {
      initial: {
        opacity: 0,
        scale: 0.5
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 600,
          damping: 25
        }
      },
      exit: {
        opacity: 0,
        scale: 0.5
      }
    },
    // Icon rotations
    iconRotate: {
      closed: {
        rotate: 0
      },
      open: {
        rotate: 180
      }
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
const PERFORMANCE_CONFIG = {
  // Hardware acceleration presets
  hardwareAcceleration: {
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
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
const COLOR_SCHEMES = {
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
const useAnimationConfig = () => {
  const shouldReduceMotion = useReducedMotion();
  // Reduced motion overrides
  const reducedMotionConfig = {
    timing: {
      instant: {
        duration: 0.02,
        ease: [0.4, 0, 0.2, 1]
      },
      fast: {
        duration: 0.08,
        ease: [0.4, 0, 0.2, 1]
      },
      medium: {
        duration: 0.12,
        ease: [0.4, 0, 0.2, 1]
      },
      slow: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      },
      slower: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1]
      },
      slowest: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
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
ANIMATION_CONFIG.timing.fast;
ANIMATION_CONFIG.timing.medium;
ANIMATION_CONFIG.timing.slow;
ANIMATION_CONFIG.timing.slower;
ANIMATION_CONFIG.spring.responsive;
ANIMATION_CONFIG.stagger.container;

var styles$4 = {"nexAlert":"NexAlert-module_nexAlert__yf-EP","sizeSm":"NexAlert-module_sizeSm__75-5q","sizeMd":"NexAlert-module_sizeMd__3DIR2","sizeLg":"NexAlert-module_sizeLg__hKaSj","variantDefault":"NexAlert-module_variantDefault__nZGu8","variantGlass":"NexAlert-module_variantGlass__dG2Z9","variantPremium":"NexAlert-module_variantPremium__X9zau","variantMinimal":"NexAlert-module_variantMinimal__cyJ-s","typeError":"NexAlert-module_typeError__4JJvQ","typeSuccess":"NexAlert-module_typeSuccess__jkKPO","typeInfo":"NexAlert-module_typeInfo__4PVwl","typeWarning":"NexAlert-module_typeWarning__T5AJW","typeNeutral":"NexAlert-module_typeNeutral__YGSMH","content":"NexAlert-module_content__h-f2D","header":"NexAlert-module_header__-CLlQ","icon":"NexAlert-module_icon__ulim5","title":"NexAlert-module_title__tumVb","message":"NexAlert-module_message__32Mxx","description":"NexAlert-module_description__O5dZ1","actions":"NexAlert-module_actions__piUxm","actionButton":"NexAlert-module_actionButton__k3hTG","primary":"NexAlert-module_primary__yzE-Y","dismissButton":"NexAlert-module_dismissButton__y40Wl","progressBar":"NexAlert-module_progressBar__NGydb","swipeIndicator":"NexAlert-module_swipeIndicator__AvrcA","alertGroup":"NexAlert-module_alertGroup__MQxmj","positionTop":"NexAlert-module_positionTop__a-2GR","positionBottom":"NexAlert-module_positionBottom__kmCww","positionTopRight":"NexAlert-module_positionTopRight__TAV3L","positionBottomRight":"NexAlert-module_positionBottomRight__OWvBz","positionCenter":"NexAlert-module_positionCenter__XTdSk","progress-shrink":"NexAlert-module_progress-shrink__dKJFx"};

const defaultIcons = {
  error: /*#__PURE__*/jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [/*#__PURE__*/jsx("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/jsx("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }), /*#__PURE__*/jsx("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    })]
  }),
  success: /*#__PURE__*/jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [/*#__PURE__*/jsx("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), /*#__PURE__*/jsx("polyline", {
      points: "22,4 12,14.01 9,11.01"
    })]
  }),
  info: /*#__PURE__*/jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [/*#__PURE__*/jsx("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/jsx("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/jsx("line", {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    })]
  }),
  warning: /*#__PURE__*/jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [/*#__PURE__*/jsx("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/jsx("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/jsx("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    })]
  }),
  neutral: /*#__PURE__*/jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [/*#__PURE__*/jsx("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/jsx("line", {
      x1: "8",
      y1: "12",
      x2: "16",
      y2: "12"
    })]
  })
};
/**
 * NexAlert - Premium Enterprise Alert Component
 *
 * A sophisticated, animated alert component with Apple-like design principles.
 * Features rich content support, multiple variants, progress indicators, and
 * comprehensive accessibility support.
 *
 * @example
 * ```tsx
 * <NexAlert
 *   id="alert-1"
 *   type="success"
 *   title="Success!"
 *   message="Your changes have been saved"
 *   variant="glass"
 *   timeout={5000}
 *   onDismiss={() => console.log('Alert dismissed')}
 * />
 * ```
 */
const NexAlert = ({
  id,
  type = 'info',
  variant = 'default',
  size = 'md',
  title,
  message,
  description,
  icon,
  timeout = 0,
  dismissible = true,
  pauseOnHover = false,
  persistent = false,
  actions = [],
  onUndo,
  onDismiss,
  onShow,
  className,
  style,
  // Legacy support
  handleDismiss
}) => {
  const {
    shouldReduceMotion
  } = useAnimationConfig();
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);
  const timeoutRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(Date.now());
  const totalDurationRef = useRef(timeout);
  // Legacy support
  const finalOnDismiss = onDismiss || handleDismiss;
  // Auto-dismiss logic with pause on hover
  useEffect(() => {
    if (timeout > 0 && !persistent && finalOnDismiss) {
      const startTimer = () => {
        startTimeRef.current = Date.now();
        totalDurationRef.current = timeout;
        // Progress bar animation
        if (!shouldReduceMotion) {
          progressRef.current = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            const remaining = Math.max(0, 100 - elapsed / timeout * 100);
            setProgress(remaining);
          }, 16); // ~60fps
        }
        // Dismiss timer
        timeoutRef.current = setTimeout(() => {
          if (!isPaused) {
            finalOnDismiss();
          }
        }, timeout);
      };
      if (!isPaused) {
        startTimer();
      }
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (progressRef.current) clearInterval(progressRef.current);
      };
    }
  }, [timeout, persistent, finalOnDismiss, isPaused, shouldReduceMotion]);
  // Pause/resume on hover
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && timeout > 0 && !persistent) {
      setIsPaused(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    }
  }, [pauseOnHover, timeout, persistent]);
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && timeout > 0 && !persistent) {
      setIsPaused(false);
      // Restart timer with remaining time
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, timeout - elapsed);
      if (remaining > 0) {
        timeoutRef.current = setTimeout(() => {
          finalOnDismiss();
        }, remaining);
      }
    }
  }, [pauseOnHover, timeout, persistent, finalOnDismiss]);
  // Show animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      onShow?.();
    }, 50);
    return () => clearTimeout(timer);
  }, [onShow]);
  // Dismiss handler
  const dismissAlert = useCallback(() => {
    setIsVisible(false);
    if (finalOnDismiss) {
      setTimeout(() => {
        finalOnDismiss();
      }, 300); // Match animation duration
    }
  }, [finalOnDismiss]);
  // Action handler
  const handleAction = useCallback(action => {
    if (!action.disabled) {
      action.onClick();
      if (action.variant === 'primary') {
        dismissAlert();
      }
    }
  }, [dismissAlert]);
  // Build class names
  const alertClasses = [styles$4['nexAlert'], styles$4[`type${type.charAt(0).toUpperCase() + type.slice(1)}`], styles$4[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`], styles$4[`size${size.charAt(0).toUpperCase() + size.slice(1)}`], className].filter(Boolean).join(' ');
  // Animation variants
  const alertVariants = {
    initial: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  // Get the appropriate icon
  const alertIcon = icon || defaultIcons[type];
  return /*#__PURE__*/jsx(AnimatePresence, {
    children: isVisible && /*#__PURE__*/jsxs(motion.div, {
      className: alertClasses,
      style: style,
      variants: alertVariants,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      children: [/*#__PURE__*/jsx("div", {
        className: `${styles$4.icon} ${styles$4[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`,
        children: alertIcon
      }), /*#__PURE__*/jsxs("div", {
        className: styles$4.content,
        children: [(title || message) && /*#__PURE__*/jsxs("div", {
          className: styles$4.header,
          children: [title && /*#__PURE__*/jsx("h4", {
            className: `${styles$4.title} ${styles$4[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`,
            children: title
          }), message && !title && /*#__PURE__*/jsx("p", {
            className: `${styles$4.message} ${styles$4[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`,
            children: message
          })]
        }), message && title && /*#__PURE__*/jsx("p", {
          className: `${styles$4.message} ${styles$4[`size${size.charAt(0).toUpperCase() + size.slice(1)}`]}`,
          children: message
        }), description && /*#__PURE__*/jsx("p", {
          className: styles$4.description,
          children: description
        }), (actions.length > 0 || onUndo) && /*#__PURE__*/jsxs("div", {
          className: styles$4.actions,
          children: [actions.map((action, index) => /*#__PURE__*/jsx("button", {
            className: `${styles$4.actionButton} ${action.variant === 'primary' ? styles$4.primary : ''}`,
            onClick: () => handleAction(action),
            disabled: action.disabled,
            children: action.label
          }, index)), onUndo && /*#__PURE__*/jsx("button", {
            className: styles$4.actionButton,
            onClick: onUndo,
            children: "Undo"
          })]
        })]
      }), dismissible && /*#__PURE__*/jsx("button", {
        className: styles$4.dismissButton,
        onClick: handleDismiss,
        "aria-label": "Dismiss alert",
        children: /*#__PURE__*/jsxs("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/jsx("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }), /*#__PURE__*/jsx("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          })]
        })
      }), timeout > 0 && !persistent && !shouldReduceMotion && /*#__PURE__*/jsx("div", {
        className: styles$4.progressBar,
        style: {
          width: `${progress}%`,
          animationDuration: `${timeout}ms`
        }
      })]
    })
  });
};

const NEX_ALERT_PRESETS = {
  toast: {
    type: 'info',
    variant: 'glass',
    size: 'sm',
    timeout: 4000,
    dismissible: true,
    pauseOnHover: true
  },
  notification: {
    type: 'info',
    variant: 'default',
    size: 'md',
    timeout: 0,
    dismissible: true,
    pauseOnHover: false
  },
  banner: {
    type: 'warning',
    variant: 'premium',
    size: 'lg',
    timeout: 0,
    dismissible: false,
    pauseOnHover: false
  },
  error: {
    type: 'error',
    variant: 'default',
    size: 'md',
    timeout: 0,
    dismissible: true,
    pauseOnHover: false
  },
  success: {
    type: 'success',
    variant: 'default',
    size: 'md',
    timeout: 3000,
    dismissible: true,
    pauseOnHover: true
  }
};

const NexAlertsContext = /*#__PURE__*/createContext(undefined);
/**
 * NexAlertsProvider - Premium Alert Management System
 *
 * Provides a comprehensive alert management system with global state,
 * keyboard shortcuts, and advanced positioning options.
 */
const NexAlertsProvider = ({
  children,
  maxAlerts = 4,
  defaultPosition = 'top',
  defaultTimeout = 4000,
  defaultVariant = 'default',
  defaultSize = 'md',
  enableKeyboardShortcuts = true,
  enableClickOutside = true,
  enableSwipeToDismiss = true
}) => {
  const {
    shouldReduceMotion
  } = useAnimationConfig();
  const [alerts, setAlerts] = useState([]);
  const containerRef = useRef(null);
  // Add alert with smart management
  const addAlert = useCallback(alert => {
    const id = Math.random().toString(36).slice(2, 9) + new Date().getTime().toString(36);
    // Apply defaults
    const newAlert = {
      id,
      type: alert.type || 'info',
      variant: alert.variant || defaultVariant,
      size: alert.size || defaultSize,
      timeout: alert.timeout ?? defaultTimeout,
      dismissible: alert.dismissible ?? true,
      pauseOnHover: alert.pauseOnHover ?? true,
      ...alert
    };
    setAlerts(prev => {
      const newAlerts = [newAlert, ...prev];
      // Limit number of alerts
      if (newAlerts.length > maxAlerts) {
        return newAlerts.slice(0, maxAlerts);
      }
      return newAlerts;
    });
    return id;
  }, [maxAlerts, defaultVariant, defaultSize, defaultTimeout]);
  // Dismiss specific alert
  const dismissAlert = useCallback(id => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);
  // Dismiss all alerts
  const dismissAll = useCallback(() => {
    setAlerts([]);
  }, []);
  // Update specific alert
  const updateAlert = useCallback((id, updates) => {
    setAlerts(prev => prev.map(alert => alert.id === id ? {
      ...alert,
      ...updates
    } : alert));
  }, []);
  // Clear all alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);
  // Keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        dismissAll();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts, dismissAll]);
  // Click outside to dismiss
  useEffect(() => {
    if (!enableClickOutside) return;
    const handleClickOutside = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        // Only dismiss non-persistent alerts
        setAlerts(prev => prev.filter(alert => alert.persistent));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [enableClickOutside]);
  // Context value
  const contextValue = {
    alerts,
    addAlert,
    dismissAlert,
    dismissAll,
    updateAlert,
    clearAlerts
  };
  // Animation variants for container
  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2
      }
    }
  };
  return /*#__PURE__*/jsxs(NexAlertsContext.Provider, {
    value: contextValue,
    children: [/*#__PURE__*/jsx(AnimatePresence, {
      children: alerts.length > 0 && /*#__PURE__*/jsx(motion.div, {
        ref: containerRef,
        className: `${styles$4['alertGroup']} ${styles$4[`position${defaultPosition.charAt(0).toUpperCase() + defaultPosition.slice(1)}`]}`,
        variants: containerVariants,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: alerts.map(alert => /*#__PURE__*/jsx(NexAlert, {
          ...alert,
          onDismiss: () => dismissAlert(alert.id)
        }, alert.id))
      })
    }), children]
  });
};
/**
 * useAlerts - Hook for managing alerts
 *
 * Provides a convenient interface for adding and managing alerts
 * with preset configurations and advanced features.
 */
const useAlerts = () => {
  const context = useContext(NexAlertsContext);
  if (!context) {
    throw new Error('useAlerts must be used within a NexAlertsProvider');
  }
  const {
    addAlert,
    dismissAlert,
    dismissAll,
    updateAlert,
    clearAlerts
  } = context;
  // Preset-based alert creators
  const createToast = useCallback((message, options) => {
    const preset = NEX_ALERT_PRESETS['toast'];
    return addAlert({
      ...preset,
      message,
      ...options
    });
  }, [addAlert]);
  const createNotification = useCallback((message, options) => {
    const preset = NEX_ALERT_PRESETS['notification'];
    return addAlert({
      ...preset,
      message,
      ...options
    });
  }, [addAlert]);
  const createBanner = useCallback((message, options) => {
    const preset = NEX_ALERT_PRESETS['banner'];
    return addAlert({
      ...preset,
      message,
      ...options
    });
  }, [addAlert]);
  const createError = useCallback((message, options) => {
    const preset = NEX_ALERT_PRESETS['error'];
    return addAlert({
      ...preset,
      message,
      ...options
    });
  }, [addAlert]);
  const createSuccess = useCallback((message, options) => {
    const preset = NEX_ALERT_PRESETS['success'];
    return addAlert({
      ...preset,
      message,
      ...options
    });
  }, [addAlert]);
  return {
    // Core functions
    addAlert,
    dismissAlert,
    dismissAll,
    updateAlert,
    clearAlerts,
    // Preset creators
    createToast,
    createNotification,
    createBanner,
    createError,
    createSuccess,
    // Quick actions
    showSuccess: createSuccess,
    showError: createError,
    showInfo: (message, options) => addAlert({
      type: 'info',
      message,
      ...options
    }),
    showWarning: (message, options) => addAlert({
      type: 'warning',
      message,
      ...options
    })
  };
};

const NexButton = ({
  onClick,
  className,
  size = 'normal',
  inverted,
  type,
  text,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  ...rest
}) => {
  const {
    timing,
    spring,
    shouldReduceMotion
  } = useAnimationConfig();
  const getTypeClass = type => {
    if (!type) return '';
    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass', 'enterprise'];
    return colorNames.includes(type) ? `nex-button--${type}` : '';
  };
  const getSizeClass = size => {
    return size ? `nex-button--${size}` : '';
  };
  const buttonClasses = `nex-button ${className || ''} ${getSizeClass(size)} ${getTypeClass(type)} ${inverted ? 'inverted' : ''} ${!type && inverted ? 'inverted-default' : ''} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`;
  const handleClick = e => {
    if (disabled || loading) return;
    onClick?.(e);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled && !loading) {
        onClick?.(e);
      }
    }
  };
  // Animation variants - no scale animations
  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: shouldReduceMotion ? 0 : -2,
      transition: timing.fast
    },
    tap: {
      y: shouldReduceMotion ? 0 : 1,
      transition: timing.fast
    }
  };
  const iconVariants = {
    initial: {
      opacity: 0,
      x: iconPosition === 'left' ? -10 : 10
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  const loadingVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  // Animated dots for loading
  const LoadingDots = () => /*#__PURE__*/jsxs(motion.div, {
    className: "nex-button-loading-dots",
    variants: loadingVariants,
    initial: "initial",
    animate: "animate",
    children: [/*#__PURE__*/jsx(motion.span, {
      animate: {
        opacity: [0.3, 1, 0.3]
      },
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut"
      },
      children: "."
    }), /*#__PURE__*/jsx(motion.span, {
      animate: {
        opacity: [0.3, 1, 0.3]
      },
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2
      },
      children: "."
    }), /*#__PURE__*/jsx(motion.span, {
      animate: {
        opacity: [0.3, 1, 0.3]
      },
      transition: {
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4
      },
      children: "."
    })]
  });
  return /*#__PURE__*/jsxs(motion.button, {
    className: buttonClasses,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    disabled: disabled || loading,
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled || loading,
    "aria-label": text,
    variants: buttonVariants,
    initial: "initial",
    animate: "animate",
    whileHover: disabled || loading ? {} : "hover",
    whileTap: disabled || loading ? {} : "tap",
    whileFocus: {
      outline: "2px solid var(--nex-signature)",
      outlineOffset: "2px",
      transition: timing.fast
    },
    ...rest,
    children: [loading && /*#__PURE__*/jsx(LoadingDots, {}), /*#__PURE__*/jsxs("div", {
      className: "nex-button-content",
      children: [icon && !loading && /*#__PURE__*/jsx(motion.div, {
        className: `nex-button-icon nex-button-icon--${iconPosition}`,
        variants: iconVariants,
        initial: "initial",
        animate: "animate",
        children: icon
      }), text && !loading && /*#__PURE__*/jsx(motion.span, {
        className: "nex-button-text",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: {
          delay: shouldReduceMotion ? 0 : 0.1
        },
        children: text
      })]
    }), /*#__PURE__*/jsx(motion.div, {
      className: "nex-button-ripple",
      initial: {
        scale: 0,
        opacity: 0
      },
      whileTap: {
        scale: 2,
        opacity: [0, 0.3, 0],
        transition: {
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    })]
  });
};

var styles$3 = {"nexCard":"NexCard-module_nexCard__R-GNN","sizeSm":"NexCard-module_sizeSm__an0N3","sizeMd":"NexCard-module_sizeMd__65SfJ","sizeLg":"NexCard-module_sizeLg__mQIDI","sizeXl":"NexCard-module_sizeXl__F3pvi","layoutHorizontal":"NexCard-module_layoutHorizontal__mnQhY","content":"NexCard-module_content__de7gS","media":"NexCard-module_media__a-rqN","layoutAuto":"NexCard-module_layoutAuto__aXZfA","elevationFlat":"NexCard-module_elevationFlat__pP-hg","elevationRaised":"NexCard-module_elevationRaised__xuRdM","elevationHoverable":"NexCard-module_elevationHoverable__x609F","elevationInteractive":"NexCard-module_elevationInteractive__px3gA","variantDefault":"NexCard-module_variantDefault__pWbL-","variantGlass":"NexCard-module_variantGlass__8koFA","variantPremium":"NexCard-module_variantPremium__APZ-X","variantMinimal":"NexCard-module_variantMinimal__Yu9Kn","loading":"NexCard-module_loading__Eq9Kd","disabled":"NexCard-module_disabled__GZQBb","header":"NexCard-module_header__k1x2-","headerContent":"NexCard-module_headerContent__jeAey","icon":"NexCard-module_icon__OO6F0","title":"NexCard-module_title__2X8yw","subtitle":"NexCard-module_subtitle__1y0RW","description":"NexCard-module_description__gJYN4","body":"NexCard-module_body__CPZSu","footer":"NexCard-module_footer__rtvgr","actions":"NexCard-module_actions__QrzMI","image":"NexCard-module_image__-K2tb","aspectRatioSquare":"NexCard-module_aspectRatioSquare__E8FCT","aspectRatioVideo":"NexCard-module_aspectRatioVideo__ZSboW","aspectRatioWide":"NexCard-module_aspectRatioWide__BpNP4","aspectRatioAuto":"NexCard-module_aspectRatioAuto__RBIUQ","imageOverlay":"NexCard-module_imageOverlay__6BFUK","ripple":"NexCard-module_ripple__zYUIj","skeleton":"NexCard-module_skeleton__Gz-m6","skeleton-loading":"NexCard-module_skeleton-loading__Pw--n","skeletonTitle":"NexCard-module_skeletonTitle__VgOtV","skeletonDescription":"NexCard-module_skeletonDescription__xi-8Y"};

const NexCardContext = /*#__PURE__*/createContext(null);
/**
 * NexCard - Premium Enterprise Card Component
 *
 * A sophisticated, animated card component with Apple-like design principles.
 * Features smooth animations, multiple elevation levels, responsive layouts,
 * and comprehensive accessibility support.
 *
 * @example
 * ```tsx
 * <NexCard
 *   title="Premium Feature"
 *   subtitle="Enterprise Grade"
 *   description="Advanced functionality for professional users"
 *   elevation="interactive"
 *   onClick={() => console.log('Card clicked')}
 * />
 * ```
 */
const NexCard = ({
  // Content
  title,
  subtitle,
  description,
  children,
  // Media
  image,
  icon,
  // Layout & Styling
  variant = 'default',
  elevation = 'flat',
  layout = 'vertical',
  size = 'md',
  // Interactive Features
  interactive = false,
  clickable = false,
  href,
  as,
  onClick,
  // States
  loading = false,
  disabled = false,
  // Custom Slots
  header,
  footer,
  actions,
  // Accessibility
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  // Styling
  className,
  style,
  // Animation
  animate = true,
  delay = 0,
  // Legacy support
  content,
  imageUrl,
  badge,
  type,
  elevated,
  ...rest
}) => {
  const {
    shouldReduceMotion
  } = useAnimationConfig();
  const [isPressed, setIsPressed] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);
  const cardRef = useRef(null);
  // Legacy prop mapping
  const finalDescription = description || content;
  const finalImage = image || (imageUrl ? {
    src: imageUrl
  } : undefined);
  const finalVariant = variant || (type === 'glass' ? 'glass' : type === 'enterprise' ? 'premium' : 'default');
  const finalElevation = elevation || (elevated ? 'raised' : 'flat');
  const finalInteractive = interactive || clickable || !!onClick || !!href;
  // Determine the element type
  const Element = as || (href ? 'a' : finalInteractive ? 'button' : 'div');
  // Context value
  const contextValue = useMemo(() => ({
    variant: finalVariant,
    elevation: finalElevation,
    layout,
    size,
    interactive: finalInteractive,
    clickable: finalInteractive,
    loading,
    disabled
  }), [finalVariant, finalElevation, layout, size, finalInteractive, loading, disabled]);
  // Animation variants - Clean, elegant Apple-like animations
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        delay: shouldReduceMotion ? 0 : delay * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: finalInteractive && !loading && !disabled ? {
      y: shouldReduceMotion ? 0 : -2,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    } : {},
    tap: finalInteractive && !loading && !disabled ? {
      y: shouldReduceMotion ? 0 : -1,
      transition: {
        duration: 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    } : {}
  };
  // Ripple animation variants - Subtle, elegant effect
  const rippleVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1.5,
      opacity: [0, 0.2, 0],
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  // Event handlers
  const handleClick = event => {
    if (loading || disabled) return;
    if (finalInteractive) {
      // Create ripple effect
      setRippleKey(prev => prev + 1);
      // Call onClick if provided
      if (onClick) {
        onClick(event);
      }
    }
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (finalInteractive && !loading && !disabled) {
        handleClick(event);
      }
    }
  };
  const handleMouseDown = () => {
    if (finalInteractive && !loading && !disabled) {
      setIsPressed(true);
    }
  };
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  // Build class names
  const cardClasses = [styles$3.nexCard, styles$3[`size${size.charAt(0).toUpperCase() + size.slice(1)}`], styles$3[`layout${layout.charAt(0).toUpperCase() + layout.slice(1)}`], styles$3[`elevation${finalElevation.charAt(0).toUpperCase() + finalElevation.slice(1)}`], styles$3[`variant${finalVariant.charAt(0).toUpperCase() + finalVariant.slice(1)}`], loading && styles$3.loading, disabled && styles$3.disabled, className].filter(Boolean).join(' ');
  // Accessibility props
  const accessibilityProps = {
    role: Element === 'button' ? 'button' : Element === 'a' ? 'link' : undefined,
    tabIndex: finalInteractive ? 0 : undefined,
    'aria-label': ariaLabel || (finalInteractive ? title : undefined),
    'aria-describedby': ariaDescribedBy,
    'aria-disabled': disabled || loading,
    'aria-busy': loading
  };
  // Element props
  const elementProps = {
    href: Element === 'a' ? href : undefined,
    type: Element === 'button' ? 'button' : undefined
  };
  // Render skeleton loading state
  if (loading) {
    return /*#__PURE__*/jsx("div", {
      className: cardClasses,
      style: style,
      ...rest,
      children: /*#__PURE__*/jsxs("div", {
        className: styles$3.content,
        children: [/*#__PURE__*/jsxs("div", {
          className: styles$3.header,
          children: [/*#__PURE__*/jsxs("div", {
            className: styles$3.headerContent,
            children: [/*#__PURE__*/jsx("div", {
              className: `${styles$3.skeleton} ${styles$3.skeletonTitle}`
            }), subtitle && /*#__PURE__*/jsx("div", {
              className: `${styles$3.skeleton} ${styles$3.skeletonDescription}`
            })]
          }), icon && /*#__PURE__*/jsx("div", {
            className: styles$3.icon,
            children: icon
          })]
        }), /*#__PURE__*/jsxs("div", {
          className: styles$3.body,
          children: [/*#__PURE__*/jsx("div", {
            className: `${styles$3.skeleton} ${styles$3.skeletonDescription}`
          }), /*#__PURE__*/jsx("div", {
            className: `${styles$3.skeleton} ${styles$3.skeletonDescription}`
          }), /*#__PURE__*/jsx("div", {
            className: `${styles$3.skeleton} ${styles$3.skeletonDescription}`
          })]
        })]
      })
    });
  }
  return /*#__PURE__*/jsx(NexCardContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsxs(motion.div, {
      ref: cardRef,
      className: cardClasses,
      style: style,
      variants: animate ? cardVariants : undefined,
      initial: "initial",
      animate: "animate",
      whileHover: finalInteractive && !loading && !disabled ? "hover" : undefined,
      whileTap: finalInteractive && !loading && !disabled ? "tap" : undefined,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
      ...accessibilityProps,
      ...elementProps,
      ...rest,
      children: [finalImage && /*#__PURE__*/jsxs("div", {
        className: styles$3.media,
        children: [/*#__PURE__*/jsx("img", {
          src: finalImage.src,
          alt: finalImage.alt || title || 'Card image',
          className: `${styles$3.image} ${styles$3[`aspectRatio${finalImage.aspectRatio ? finalImage.aspectRatio.charAt(0).toUpperCase() + finalImage.aspectRatio.slice(1) : 'Auto'}`]}`
        }), /*#__PURE__*/jsx("div", {
          className: styles$3.imageOverlay
        })]
      }), /*#__PURE__*/jsxs("div", {
        className: styles$3.content,
        children: [(header || title || subtitle || icon) && /*#__PURE__*/jsxs("div", {
          className: styles$3.header,
          children: [/*#__PURE__*/jsx("div", {
            className: styles$3.headerContent,
            children: header || /*#__PURE__*/jsxs(Fragment, {
              children: [title && /*#__PURE__*/jsx("h3", {
                className: styles$3.title,
                children: title
              }), subtitle && /*#__PURE__*/jsx("p", {
                className: styles$3.subtitle,
                children: subtitle
              })]
            })
          }), icon && /*#__PURE__*/jsx("div", {
            className: styles$3.icon,
            children: icon
          })]
        }), /*#__PURE__*/jsxs("div", {
          className: styles$3.body,
          children: [finalDescription && /*#__PURE__*/jsx("p", {
            className: styles$3.description,
            children: finalDescription
          }), children]
        }), (footer || actions) && /*#__PURE__*/jsxs("div", {
          className: styles$3.footer,
          children: [footer, actions && /*#__PURE__*/jsx("div", {
            className: styles$3.actions,
            children: actions
          })]
        })]
      }), /*#__PURE__*/jsx(AnimatePresence, {
        children: finalInteractive && isPressed && /*#__PURE__*/jsx(motion.div, {
          className: styles$3.ripple,
          variants: rippleVariants,
          initial: "initial",
          animate: "animate",
          exit: {
            opacity: 0
          }
        }, rippleKey)
      })]
    })
  });
};

const NexHeroCard = ({
  title,
  subtitle,
  type,
  buttonLabel,
  buttonHandle,
  backgroundUrl,
  className
}) => {
  const getTypeClass = type => {
    if (backgroundUrl) {
      return '';
    } else if (!type) {
      return 'nex-hero-card-wrapper--primary';
    }
    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger', 'glass'];
    return colorNames.includes(type) ? `nex-hero-card-wrapper--${type}` : '';
  };
  const heroCardClasses = `nex-hero-card-wrapper ${getTypeClass(type)} ${backgroundUrl ? 'has-background' : ''} ${className || ''}`;
  const backgroundStyle = backgroundUrl ? {
    '--background-url': `url(${backgroundUrl})`
  } : {};
  return /*#__PURE__*/jsxs("div", {
    className: heroCardClasses,
    style: backgroundStyle,
    children: [!backgroundUrl && /*#__PURE__*/jsx("div", {
      className: "background-blob"
    }), /*#__PURE__*/jsxs("div", {
      className: "content",
      children: [/*#__PURE__*/jsx("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/jsx("div", {
        className: "subtitle",
        children: subtitle
      }), buttonLabel && buttonHandle && /*#__PURE__*/jsx(NexButton, {
        type: backgroundUrl ? 'glass' : '',
        size: "large",
        text: buttonLabel,
        onClick: buttonHandle,
        className: "hero-button"
      })]
    })]
  });
};

const NexSimpleTextCard = ({
  title,
  subtitle,
  border = true,
  className
}) => {
  return /*#__PURE__*/jsx("div", {
    className: `nex-simple-text-card-wrapper ${border ? 'border' : ''} ${className ? className : ''}`,
    children: /*#__PURE__*/jsxs("div", {
      className: "nex-simple-text-card-inner-wrapper",
      children: [/*#__PURE__*/jsx("div", {
        className: "title",
        children: title
      }), /*#__PURE__*/jsx("div", {
        className: "subtitle",
        children: subtitle
      })]
    })
  });
};

const NexInfoPanel = ({
  className,
  title,
  content,
  imageUrl
}) => {
  const backgroundStyle = imageUrl ? {
    '--background-url': `url(${imageUrl})`
  } : {};
  return /*#__PURE__*/jsxs("div", {
    className: `nex-info-panel ${className || ''}`,
    children: [/*#__PURE__*/jsxs("div", {
      className: "nex-info-panel-content",
      children: [/*#__PURE__*/jsx("div", {
        className: "nex-info-panel-title",
        children: title
      }), imageUrl && /*#__PURE__*/jsx("div", {
        className: "nex-info-panel-image mobile",
        style: backgroundStyle
      }), /*#__PURE__*/jsx("div", {
        className: "nex-info-panel-description",
        children: content
      })]
    }), imageUrl && /*#__PURE__*/jsx("div", {
      className: "nex-info-panel-image desktop",
      style: backgroundStyle
    })]
  });
};

const NexCarousel = ({
  slides,
  variant = 'default',
  size = 'md',
  autoPlay = false,
  autoPlayInterval = 5000,
  pauseOnHover = true,
  infinite = false,
  showControls = true,
  showIndicators = true,
  showCounter = true,
  onSlideChange,
  onSlideClick,
  className,
  style
}) => {
  const {
    shouldReduceMotion
  } = useAnimationConfig();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);
  const totalSlides = slides.length;
  const hasPrevious = infinite || currentSlide > 0;
  const hasNext = infinite || currentSlide < totalSlides - 1;
  // Framer Motion variants
  // Smooth slide navigation
  const goToSlide = useCallback(index => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      onSlideChange?.(index);
    }
  }, [totalSlides, onSlideChange]);
  const goToPrevious = useCallback(() => {
    if (hasPrevious) {
      const newIndex = infinite && currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      goToSlide(newIndex);
    }
  }, [currentSlide, hasPrevious, infinite, totalSlides, goToSlide]);
  const goToNext = useCallback(() => {
    if (hasNext) {
      const newIndex = infinite && currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      goToSlide(newIndex);
    }
  }, [currentSlide, hasNext, infinite, totalSlides, goToSlide]);
  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || totalSlides <= 1 || isPaused) return;
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
  }, [autoPlay, autoPlayInterval, totalSlides, isPaused, goToNext]);
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);
  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    stopAutoPlay();
  }, [stopAutoPlay]);
  const resumeAutoPlay = useCallback(() => {
    setIsPaused(false);
    if (autoPlay) {
      startAutoPlay();
    }
  }, [autoPlay, startAutoPlay]);
  // Auto-play management
  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [autoPlay, startAutoPlay, stopAutoPlay]);
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);
  // Mouse event handlers
  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      pauseAutoPlay();
    }
  }, [pauseOnHover, pauseAutoPlay]);
  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      resumeAutoPlay();
    }
  }, [pauseOnHover, resumeAutoPlay]);
  // Slide click handler
  const handleSlideClick = useCallback((slide, index) => {
    onSlideClick?.(slide, index);
  }, [onSlideClick]);
  if (totalSlides === 0) {
    return null;
  }
  const currentSlideData = slides[currentSlide];
  if (!currentSlideData) {
    return null;
  }
  // Build class names
  const carouselClasses = ['nex-carousel', `nex-carousel--${variant}`, `nex-carousel--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/jsxs("div", {
    className: carouselClasses,
    style: style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    role: "region",
    "aria-label": "Carousel",
    "aria-roledescription": "carousel",
    "aria-live": "polite",
    children: [totalSlides > 1 && /*#__PURE__*/jsxs("div", {
      className: "nex-carousel-hover-nav",
      children: [/*#__PURE__*/jsx("div", {
        className: "nex-carousel-nav-side left",
        onClick: goToPrevious,
        "aria-label": "Previous slide",
        children: /*#__PURE__*/jsx("div", {
          className: "nex-carousel-nav-arrow",
          children: /*#__PURE__*/jsx("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/jsx("path", {
              d: "M15 18l-6-6 6-6"
            })
          })
        })
      }), /*#__PURE__*/jsx("div", {
        className: "nex-carousel-nav-side right",
        onClick: goToNext,
        "aria-label": "Next slide",
        children: /*#__PURE__*/jsx("div", {
          className: "nex-carousel-nav-arrow",
          children: /*#__PURE__*/jsx("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/jsx("path", {
              d: "M9 18l6-6-6-6"
            })
          })
        })
      })]
    }), /*#__PURE__*/jsx("div", {
      className: "nex-carousel-slides",
      children: /*#__PURE__*/jsx(AnimatePresence, {
        mode: "wait",
        initial: false,
        children: /*#__PURE__*/jsxs(motion.div, {
          className: "nex-carousel-slide",
          onClick: () => handleSlideClick(currentSlideData, currentSlide),
          role: "button",
          tabIndex: 0,
          "aria-label": `Slide ${currentSlide + 1}: ${currentSlideData.title || 'Image'}`,
          onKeyDown: e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSlideClick(currentSlideData, currentSlide);
            }
          },
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: shouldReduceMotion ? 0 : 0.3,
            ease: [0.4, 0, 0.2, 1]
          },
          children: [/*#__PURE__*/jsx("img", {
            src: currentSlideData.imageUrl,
            alt: currentSlideData.title || `Slide ${currentSlide + 1}`,
            className: "nex-carousel-image",
            loading: currentSlide === 0 ? 'eager' : 'lazy'
          }), (currentSlideData.title || currentSlideData.subtitle || currentSlideData.description || currentSlideData.ctaText) && /*#__PURE__*/jsxs(motion.div, {
            className: "nex-carousel-content",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            },
            children: [currentSlideData.title && /*#__PURE__*/jsx("h2", {
              className: "nex-carousel-title",
              children: currentSlideData.title
            }), currentSlideData.subtitle && /*#__PURE__*/jsx("h3", {
              className: "nex-carousel-subtitle",
              children: currentSlideData.subtitle
            }), currentSlideData.description && /*#__PURE__*/jsx("p", {
              className: "nex-carousel-description",
              children: currentSlideData.description
            }), currentSlideData.ctaText && /*#__PURE__*/jsx("a", {
              href: currentSlideData.ctaUrl || '#',
              className: "nex-carousel-cta",
              onClick: e => e.stopPropagation(),
              children: currentSlideData.ctaText
            })]
          })]
        }, currentSlide)
      })
    }), showIndicators && totalSlides > 1 && /*#__PURE__*/jsx("div", {
      className: "nex-carousel-indicators",
      role: "tablist",
      children: slides.map((_, index) => /*#__PURE__*/jsx("button", {
        className: `nex-carousel-indicator ${index === currentSlide ? 'active' : ''}`,
        onClick: () => goToSlide(index),
        "aria-label": `Go to slide ${index + 1}`,
        "aria-selected": index === currentSlide,
        role: "tab"
      }, index))
    }), showCounter && totalSlides > 1 && /*#__PURE__*/jsxs("div", {
      className: "nex-carousel-counter",
      children: [currentSlide + 1, " / ", totalSlides]
    }), autoPlay && !isPaused && /*#__PURE__*/jsx("div", {
      className: "nex-carousel-autoplay",
      "aria-label": "Auto-play active"
    })]
  });
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION$1 = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e) {
    return false;
  }
}();
var FAMILY_CLASSIC = 'classic';
var FAMILY_SHARP = 'sharp';
var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];

function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
    }
  });
}
var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
  'fa': 'solid',
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fakd': 'kit',
  'fa-kit': 'kit',
  'fa-kit-duotone': 'kit'
}), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
  'fa': 'solid',
  'fass': 'solid',
  'fa-solid': 'solid',
  'fasr': 'regular',
  'fa-regular': 'regular',
  'fasl': 'light',
  'fa-light': 'light',
  'fast': 'thin',
  'fa-thin': 'thin'
}), _familyProxy));
var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
  solid: 'fas',
  regular: 'far',
  light: 'fal',
  thin: 'fat',
  duotone: 'fad',
  brands: 'fab',
  kit: 'fak'
}), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
  solid: 'fass',
  regular: 'fasr',
  light: 'fasl',
  thin: 'fast'
}), _familyProxy2));
var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
  fab: 'fa-brands',
  fad: 'fa-duotone',
  fak: 'fa-kit',
  fal: 'fa-light',
  far: 'fa-regular',
  fas: 'fa-solid',
  fat: 'fa-thin'
}), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
  fass: 'fa-solid',
  fasr: 'fa-regular',
  fasl: 'fa-light',
  fast: 'fa-thin'
}), _familyProxy3));
var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
}), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
  'fa-solid': 'fass',
  'fa-regular': 'fasr',
  'fa-light': 'fasl',
  'fa-thin': 'fast'
}), _familyProxy4));
var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
  900: 'fas',
  400: 'far',
  normal: 'far',
  300: 'fal',
  100: 'fat'
}), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
  900: 'fass',
  400: 'fasr',
  300: 'fasl',
  100: 'fast'
}), _familyProxy5));
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var prefixes = new Set();
Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray$1(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
}; // familyPrefix is deprecated but we must still support it if present

if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}

var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;

    _onChangeCb.forEach(function (cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, 0));\n          transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(cssPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$family = params.family,
      family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
function getCanonicalIcon(values) {
  var _famProps;

  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
  var givenPrefix = null;
  var family = FAMILY_CLASSIC;

  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
  })) {
    family = FAMILY_CLASSIC;
  }

  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
  })) {
    family = FAMILY_SHARP;
  }

  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.cssPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family: family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }

  if (values.includes('fa-duotone') || values.includes('fad')) {
    canonical.prefix = 'fad';
  }

  if (!canonical.prefix && family === FAMILY_SHARP && (styles['fass'] || config.autoFetchSvg)) {
    canonical.prefix = 'fass';
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof$1(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof$1(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2$1({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION$1 && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    ({
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    });

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.5.2\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (_abstract) {
        node.parentNode.insertBefore(convertSVG(_abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete _abstract2[0].attributes.id;

    if (_abstract2[0].attributes.class) {
      var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });

      _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = _abstract2.map(function (a) {
      return toHtml(a);
    }).join('\n');

    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }

  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2$1({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

var knownPrefixes = new Set();
FAMILIES.map(function (family) {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = _toConsumableArray$1(knownPrefixes);

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
    return "fa-".concat(f);
  }).concat(Object.keys(styles$2));

  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }

  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION$1) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2$1({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray$1(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray$1(classes))
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray$1(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var _abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));

          var element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = _abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2$1({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2$1({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(_abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
    _abstract.attributes.fill = 'black';
  }

  return _abstract;
}

function deGroup(_abstract2) {
  if (_abstract2.tag === 'g') {
    return _abstract2.children;
  } else {
    return [_abstract2];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2$1({}, trans.inner),
        children: [fillBlack(_objectSpread2$1({
          tag: mainPath.tag,
          attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2$1({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2$1({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
api.noAuto;
api.config;
api.library;
api.dom;
var parse$1 = api.parse;
api.findIconDefinition;
api.toHtml;
var icon = api.icon;
api.layer;
api.text;
api.counter;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

var _excluded = ["style"];

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded);

  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = process.env.NODE_ENV === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (parse$1.icon) {
    return parse$1.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

var defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
};
var FontAwesomeIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var allProps = _objectSpread2(_objectSpread2({}, defaultProps), props);

  var iconArgs = allProps.icon,
      maskArgs = allProps.mask,
      symbol = allProps.symbol,
      className = allProps.className,
      title = allProps.title,
      titleId = allProps.titleId,
      maskId = allProps.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(allProps)), _toConsumableArray((className || '').split(' '))));
  var transform = objectWithKey('transform', typeof allProps.transform === 'string' ? parse$1.transform(allProps.transform) : allProps.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
    symbol: symbol,
    title: title,
    titleId: titleId,
    maskId: maskId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: ref
  };
  Object.keys(allProps).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!defaultProps.hasOwnProperty(key)) {
      extraProps[key] = allProps[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
});
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  beat: PropTypes.bool,
  border: PropTypes.bool,
  beatFade: PropTypes.bool,
  bounce: PropTypes.bool,
  className: PropTypes.string,
  fade: PropTypes.bool,
  flash: PropTypes.bool,
  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  maskId: PropTypes.string,
  fixedWidth: PropTypes.bool,
  inverse: PropTypes.bool,
  flip: PropTypes.oneOf([true, false, 'horizontal', 'vertical', 'both']),
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  listItem: PropTypes.bool,
  pull: PropTypes.oneOf(['right', 'left']),
  pulse: PropTypes.bool,
  rotation: PropTypes.oneOf([0, 90, 180, 270]),
  shake: PropTypes.bool,
  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: PropTypes.bool,
  spinPulse: PropTypes.bool,
  spinReverse: PropTypes.bool,
  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
  titleId: PropTypes.string,
  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  swapOpacity: PropTypes.bool
};
var convertCurry = convert.bind(null, React.createElement);

var faArrowRight = {
  prefix: 'fas',
  iconName: 'arrow-right',
  icon: [448, 512, [8594], "f061", "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]
};
var faCopy = {
  prefix: 'fas',
  iconName: 'copy',
  icon: [448, 512, [], "f0c5", "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]
};

const NexCopyToClipboard = ({
  className,
  size = 'normal',
  type,
  textToCopy
}) => {
  const getColorClass = type => {
    if (!type) return '';
    const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger'];
    return colorNames.includes(type) ? `nex-copy-to-clipboard--${type}` : '';
  };
  const getSizeClass = size => {
    return size ? `nex-copy-to-clipboard--${size}` : '';
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };
  const buttonClasses = `nex-copy-to-clipboard ${className || ''} ${getColorClass(type)} ${getSizeClass(size)}`;
  return /*#__PURE__*/jsx("button", {
    className: buttonClasses,
    onClick: handleCopy,
    children: /*#__PURE__*/jsx(FontAwesomeIcon, {
      icon: faCopy
    })
  });
};

const NexInput = ({
  type,
  peekButton,
  className,
  width,
  fieldSize = 'normal',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (peekButton && width && width < 100) {
      console.error("NexInput error: Width should be at least 100px.");
    }
  }, [width]);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const getSizeClass = size => {
    return size ? `nex-input--${size}` : '';
  };
  const inputClasses = `${className || ''} ${type === 'password' ? 'password-wrapper' : ''}`;
  const inputStyle = width ? {
    width: `${width}px`
  } : {};
  return /*#__PURE__*/jsxs("div", {
    className: `nex-input ${inputClasses} ${getSizeClass(fieldSize)}`,
    style: inputStyle,
    children: [/*#__PURE__*/jsx("input", {
      ...rest,
      type: type === 'password' && showPassword ? 'text' : type
    }), peekButton && type === 'password' && /*#__PURE__*/jsx("button", {
      type: "button",
      className: "peek-button",
      onClick: togglePasswordVisibility,
      children: showPassword ? 'Hide' : 'Show'
    })]
  });
};

const NexLoader = ({
  size,
  color
}) => {
  const style = {};
  if (size) {
    style['--nex-loader-size'] = typeof size === "number" ? `${size}px` : size;
  }
  if (color) {
    style['--nex-loader-color'] = color;
  }
  return /*#__PURE__*/jsx("svg", {
    className: "nex-loader",
    viewBox: "0 0 50 50",
    style: style,
    children: /*#__PURE__*/jsx("circle", {
      className: "path",
      cx: "25",
      cy: "25",
      r: "20"
    })
  });
};

const NexModal = ({
  setOpenModal
}) => {
  const handleContinue = () => {
    setOpenModal(false);
  };
  return /*#__PURE__*/jsx("div", {
    className: "nex-modal-wrapper",
    children: /*#__PURE__*/jsxs(motion.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 0.3
      },
      className: "nex-modal-inner-wrapper",
      children: [/*#__PURE__*/jsx("div", {
        className: "nex-modal-body",
        children: /*#__PURE__*/jsx("p", {
          children: "The next page looks amazing. Hope you want to go there!"
        })
      }), /*#__PURE__*/jsxs("div", {
        className: "nex-modal-footer",
        children: [/*#__PURE__*/jsx(NexButton, {
          onClick: () => {
            setOpenModal(false);
          },
          text: "Cancel",
          type: "danger"
        }), /*#__PURE__*/jsx(NexButton, {
          onClick: handleContinue,
          text: "Continue",
          type: "primary"
        })]
      })]
    })
  });
};

function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}

var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = useRef(onClickAway);
    useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};

const NavItem = ({
  label,
  onClick,
  isActive = false,
  disabled = false,
  badge,
  tooltip,
  subItems,
  description,
  isAtTop = true
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hasSubItems = subItems && subItems.length > 0;
  useClickAway(dropdownRef, () => {
    setIsDropdownOpen(false);
  });
  const handleKeyDown = e => {
    if (disabled) return;
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (hasSubItems) {
          setIsDropdownOpen(prev => !prev);
        } else {
          onClick?.();
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (hasSubItems && isDropdownOpen) {
          // Focus first sub-item
          const firstSubItem = dropdownRef.current?.querySelector('.nex-nav-sub-item');
          firstSubItem?.focus();
        } else {
          // Focus next nav item
          const nextElement = e.currentTarget.nextElementSibling;
          if (nextElement?.classList.contains('nex-nav-item')) {
            nextElement.focus();
          }
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        // Focus previous nav item
        const prevElement = e.currentTarget.previousElementSibling;
        if (prevElement?.classList.contains('nex-nav-item')) {
          prevElement.focus();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (hasSubItems) {
          setIsDropdownOpen(true);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        break;
    }
  };
  const handleClick = () => {
    if (disabled) return;
    // If the nav item has sub-items, don't trigger the onClick
    // The dropdown should be the only interaction
    if (!hasSubItems) {
      onClick?.();
    }
  };
  const handleSubItemClick = subItem => {
    if (!subItem.disabled) {
      subItem.onClick();
      setIsDropdownOpen(false);
    }
  };
  const handleSubItemKeyDown = (e, subItem, index) => {
    if (subItem.disabled) return;
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSubItemClick(subItem);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const nextSubItem = e.currentTarget.nextElementSibling;
        if (nextSubItem?.classList.contains('nex-nav-sub-item')) {
          nextSubItem.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevSubItem = e.currentTarget.previousElementSibling;
        if (prevSubItem?.classList.contains('nex-nav-sub-item')) {
          prevSubItem.focus();
        } else {
          // Focus back to main nav item
          const navItem = e.currentTarget.parentElement?.parentElement?.querySelector('.nex-nav-item');
          navItem?.focus();
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        const navItem = e.currentTarget.parentElement?.parentElement?.querySelector('.nex-nav-item');
        navItem?.focus();
        break;
    }
  };
  return /*#__PURE__*/jsxs("div", {
    className: classNames('nex-nav-item-wrapper', {
      'has-dropdown-open': isDropdownOpen && hasSubItems
    }),
    ref: dropdownRef,
    onMouseEnter: () => {
      if (hasSubItems && !disabled) {
        setIsDropdownOpen(true);
      }
    },
    onMouseLeave: () => {
      if (hasSubItems) {
        setIsDropdownOpen(false);
      }
    },
    children: [/*#__PURE__*/jsx(motion.li, {
      className: classNames('nex-nav-item', {
        'active': isActive,
        'disabled': disabled,
        'has-dropdown': hasSubItems,
        'dropdown-open': isDropdownOpen
      }),
      role: "menuitem",
      "aria-haspopup": hasSubItems ? 'true' : undefined,
      "aria-expanded": hasSubItems ? isDropdownOpen : undefined,
      tabIndex: disabled ? -1 : 0,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      "aria-label": tooltip || label,
      "aria-disabled": disabled,
      "aria-current": isActive ? 'page' : undefined,
      initial: false,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      },
      children: /*#__PURE__*/jsxs("div", {
        className: "nex-nav-item-content",
        children: [/*#__PURE__*/jsx("span", {
          className: classNames('nex-nav-item__label', {
            active: isActive
          }),
          children: label
        }), badge && /*#__PURE__*/jsx("span", {
          className: "nex-nav-item-badge",
          "aria-label": `${badge} notifications`,
          children: badge
        }), hasSubItems && /*#__PURE__*/jsx(motion.span, {
          className: "nex-nav-item-chevron",
          animate: {
            rotate: isDropdownOpen ? 180 : 0
          },
          transition: {
            duration: 0.03,
            ease: [0.4, 0, 0.2, 1]
          },
          "aria-hidden": "true",
          children: /*#__PURE__*/jsx(ChevronDown, {
            size: 14
          })
        })]
      })
    }), /*#__PURE__*/jsx(AnimatePresence, {
      children: isDropdownOpen && hasSubItems && /*#__PURE__*/jsx(motion.div, {
        className: "nex-nav-dropdown",
        initial: {
          opacity: 0,
          y: -8
        },
        animate: {
          opacity: 1,
          y: 0,
          background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
          borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
          boxShadow: isAtTop ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
        },
        exit: {
          opacity: 0,
          y: -8
        },
        transition: {
          duration: 0,
          ease: [0.4, 0, 0.2, 1]
        },
        style: {
          transformOrigin: 'top center'
        },
        role: "menu",
        "aria-label": `${label} submenu`,
        children: /*#__PURE__*/jsx(motion.ul, {
          className: "nex-nav-dropdown-list",
          children: subItems.map((subItem, index) => /*#__PURE__*/jsx(motion.li, {
            className: classNames('nex-nav-sub-item', {
              'disabled': subItem.disabled
            }),
            role: "menuitem",
            tabIndex: subItem.disabled ? -1 : 0,
            onClick: () => handleSubItemClick(subItem),
            onKeyDown: e => handleSubItemKeyDown(e, subItem),
            "aria-disabled": subItem.disabled,
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: {
              duration: 0.1,
              delay: index * 0.02
            },
            children: /*#__PURE__*/jsxs("div", {
              className: "nex-nav-sub-item-content",
              children: [/*#__PURE__*/jsxs("div", {
                className: "nex-nav-sub-item-text",
                children: [/*#__PURE__*/jsx("span", {
                  className: "nex-nav-sub-item-label",
                  children: subItem.label
                }), subItem.description && /*#__PURE__*/jsx("span", {
                  className: "nex-nav-sub-item-description",
                  children: subItem.description
                })]
              }), subItem.badge && /*#__PURE__*/jsx("span", {
                className: "nex-nav-sub-item-badge",
                "aria-label": `${subItem.badge} notifications`,
                children: subItem.badge
              })]
            })
          }, `${subItem.label}-${index}`))
        })
      })
    })]
  });
};

const getResponsiveConstants = containerWidth => {
  if (containerWidth <= 400) {
    return {
      minItemWidth: 50,
      moreButtonWidth: 40,
      itemGap: 2,
      safetyMargin: 2
    };
  } else if (containerWidth <= 600) {
    return {
      minItemWidth: 60,
      moreButtonWidth: 45,
      itemGap: 3,
      safetyMargin: 3
    };
  } else if (containerWidth <= 800) {
    return {
      minItemWidth: 65,
      moreButtonWidth: 50,
      itemGap: 4,
      safetyMargin: 4
    };
  } else if (containerWidth <= 1200) {
    return {
      minItemWidth: 70,
      moreButtonWidth: 55,
      itemGap: 6,
      safetyMargin: 6
    };
  } else {
    return {
      minItemWidth: 75,
      moreButtonWidth: 60,
      itemGap: 8,
      safetyMargin: 8
    };
  }
};
// Debounce function for performance
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
const NavItems = ({
  navItems,
  isAtTop,
  onItemClick
}) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [lastContainerWidth, setLastContainerWidth] = useState(0);
  const navListRef = useRef(null);
  const moreDropdownRef = useRef(null);
  useAnimationConfig();
  // Calculate item width with responsive considerations
  const calculateItemWidth = useCallback((item, element, containerWidth) => {
    const constants = getResponsiveConstants(containerWidth || window.innerWidth);
    if (element) {
      const itemWidth = element.offsetWidth;
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const extraWidth = hasSubItems ? 8 : 0;
      return itemWidth + extraWidth + constants.itemGap;
    }
    // Fallback calculation
    const baseWidth = constants.minItemWidth;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const extraWidth = hasSubItems ? 8 : 0;
    const labelLength = item.label.length;
    let estimatedWidth = baseWidth;
    if (containerWidth && containerWidth <= 400) {
      estimatedWidth = Math.max(baseWidth, labelLength * 6 + extraWidth + 12);
    } else if (containerWidth && containerWidth <= 600) {
      estimatedWidth = Math.max(baseWidth, labelLength * 7 + extraWidth + 16);
    } else if (containerWidth && containerWidth <= 800) {
      estimatedWidth = Math.max(baseWidth, labelLength * 8 + extraWidth + 20);
    } else if (containerWidth && containerWidth <= 1200) {
      estimatedWidth = Math.max(baseWidth, labelLength * 9 + extraWidth + 24);
    } else {
      estimatedWidth = Math.max(baseWidth, labelLength * 10 + extraWidth + 28);
    }
    const badgeSpace = containerWidth && containerWidth <= 400 ? 8 : containerWidth && containerWidth <= 600 ? 10 : containerWidth && containerWidth <= 800 ? 12 : 16;
    const descriptionSpace = containerWidth && containerWidth <= 400 ? 4 : containerWidth && containerWidth <= 600 ? 6 : containerWidth && containerWidth <= 800 ? 8 : 10;
    if (item.badge) {
      estimatedWidth += badgeSpace;
    }
    if (item.description) {
      estimatedWidth += descriptionSpace;
    }
    return estimatedWidth + constants.itemGap;
  }, []);
  // Calculate visible items with optimized logic
  const calculateVisibleItems = useCallback(() => {
    if (!navListRef.current || isCalculating) return;
    setIsCalculating(true);
    requestAnimationFrame(() => {
      if (!navListRef.current) {
        setIsCalculating(false);
        return;
      }
      const container = navListRef.current;
      const containerWidth = container.offsetWidth;
      const itemElements = container.querySelectorAll('.nex-nav-item');
      const constants = getResponsiveConstants(containerWidth);
      // Hysteresis to prevent oscillation
      const widthChange = Math.abs(containerWidth - lastContainerWidth);
      const hysteresisThreshold = 20;
      if (widthChange < hysteresisThreshold && visibleItems.length > 0) {
        setIsCalculating(false);
        return;
      }
      // Calculate all item widths upfront
      const itemWidths = [];
      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        if (!item) continue; // Skip undefined items
        const itemElement = itemElements[i];
        const width = calculateItemWidth(item, itemElement, containerWidth);
        itemWidths.push(width);
      }
      // Determine if we should use condensation
      const shouldCondense = containerWidth < 800 || navItems.length > 4;
      if (!shouldCondense) {
        const newVisibleItems = Array.from({
          length: navItems.length
        }, (_, i) => i);
        setVisibleItems(newVisibleItems);
        setLastContainerWidth(containerWidth);
        setIsCalculating(false);
        return;
      }
      // Aggressive condensation logic
      const availableSpace = containerWidth - constants.safetyMargin;
      const moreButtonSpace = constants.moreButtonWidth;
      const spaceWithMore = availableSpace - moreButtonSpace;
      let totalWidth = 0;
      let visibleCount = 0;
      for (let i = 0; i < navItems.length; i++) {
        const itemWidth = itemWidths[i];
        if (itemWidth !== undefined && totalWidth + itemWidth <= spaceWithMore) {
          totalWidth += itemWidth;
          visibleCount = i + 1;
        } else {
          break;
        }
      }
      // Apply condensation rules
      let finalVisibleCount = visibleCount;
      if (navItems.length > 3) {
        finalVisibleCount = Math.min(finalVisibleCount, 3);
      }
      if (containerWidth <= 600) {
        finalVisibleCount = Math.min(finalVisibleCount, 2);
      }
      if (containerWidth <= 400) {
        finalVisibleCount = Math.min(finalVisibleCount, 1);
      }
      finalVisibleCount = Math.max(1, finalVisibleCount);
      const newVisibleItems = Array.from({
        length: finalVisibleCount
      }, (_, i) => i);
      setVisibleItems(newVisibleItems);
      setLastContainerWidth(containerWidth);
      setIsCalculating(false);
    });
  }, [navItems, calculateItemWidth, isCalculating, lastContainerWidth, visibleItems.length]);
  // Debounced resize handler
  const debouncedCalculateVisibleItems = useMemo(() => debounce(calculateVisibleItems, 30), [calculateVisibleItems]);
  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      debouncedCalculateVisibleItems();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [debouncedCalculateVisibleItems]);
  // Recalculate when nav items change
  useEffect(() => {
    const timer = setTimeout(calculateVisibleItems, 100);
    return () => clearTimeout(timer);
  }, [navItems, calculateVisibleItems]);
  // Initial calculation
  useEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);
  // Close more dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      const target = e.target;
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(target)) {
        setIsMoreOpen(false);
      }
    };
    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreOpen]);
  // Memoize nav items with proper accessibility
  const memoizedNavItems = useMemo(() => {
    return navItems.map((item, i) => ({
      ...item,
      key: `nav-item-${i}`,
      'aria-label': item.label,
      'aria-current': undefined
    }));
  }, [navItems]);
  // Separate visible items and overflow items
  const visibleNavItems = useMemo(() => {
    return visibleItems.map(index => memoizedNavItems[index]).filter(Boolean);
  }, [memoizedNavItems, visibleItems]);
  const overflowNavItems = useMemo(() => {
    return memoizedNavItems.filter((_, index) => !visibleItems.includes(index));
  }, [memoizedNavItems, visibleItems]);
  const hasOverflow = overflowNavItems.length > 0;
  return /*#__PURE__*/jsxs(motion.ul, {
    className: "nex-nav-list",
    role: "menubar",
    "aria-label": "Main menu",
    ref: navListRef,
    children: [(visibleItems.length === 0 ? memoizedNavItems.slice(0, 5) : visibleNavItems).map((item, i) => {
      if (!item) return null; // Skip undefined items
      return /*#__PURE__*/jsx(motion.li, {
        variants: ANIMATION_VARIANTS.mobileNav.navItem,
        children: /*#__PURE__*/jsx(NavItem, {
          label: item.label,
          onClick: () => onItemClick?.(item),
          isActive: false,
          disabled: item.disabled,
          badge: item.badge,
          subItems: item.subItems,
          description: item.description,
          isAtTop: isAtTop
        })
      }, item.key || i);
    }), hasOverflow && /*#__PURE__*/jsx(motion.li, {
      variants: ANIMATION_VARIANTS.mobileNav.navItem,
      style: {
        position: 'relative'
      },
      children: /*#__PURE__*/jsxs("div", {
        className: "nex-nav-item-wrapper",
        style: {
          position: 'relative'
        },
        ref: moreDropdownRef,
        children: [/*#__PURE__*/jsx(motion.button, {
          className: classNames('nex-nav-item', {
            'has-dropdown': true,
            'dropdown-open': isMoreOpen
          }),
          role: "menuitem",
          "aria-haspopup": "true",
          "aria-expanded": isMoreOpen,
          tabIndex: 0,
          onClick: e => {
            e.preventDefault();
            e.stopPropagation();
            setIsMoreOpen(prev => !prev);
          },
          onKeyDown: e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMoreOpen(prev => !prev);
            }
          },
          type: "button",
          initial: false,
          transition: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1]
          },
          children: /*#__PURE__*/jsxs("div", {
            className: "nex-nav-item-content",
            children: [/*#__PURE__*/jsx("span", {
              className: "nex-nav-item__label",
              style: {
                fontSize: 'var(--nex-font-size-xs)'
              },
              children: "More"
            }), /*#__PURE__*/jsx("span", {
              className: "nex-nav-item-badge",
              "aria-label": `${overflowNavItems.length} additional items`,
              children: overflowNavItems.length
            }), /*#__PURE__*/jsx(motion.span, {
              className: "nex-nav-item-chevron",
              animate: {
                rotate: isMoreOpen ? 180 : 0
              },
              transition: {
                duration: 0.03,
                ease: [0.4, 0, 0.2, 1]
              },
              "aria-hidden": "true",
              children: /*#__PURE__*/jsx(ChevronDown, {
                size: 14
              })
            })]
          })
        }), /*#__PURE__*/jsx(AnimatePresence, {
          children: isMoreOpen && /*#__PURE__*/jsx(motion.div, {
            className: "nex-nav-dropdown",
            initial: {
              opacity: 0,
              y: -8
            },
            animate: {
              opacity: 1,
              y: 0,
              background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
              boxShadow: isAtTop ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
            },
            exit: {
              opacity: 0,
              y: -8
            },
            transition: {
              duration: 0,
              ease: [0.4, 0, 0.2, 1]
            },
            style: {
              transformOrigin: 'top center',
              right: 0,
              left: 'auto'
            },
            role: "menu",
            "aria-label": "More options submenu",
            children: /*#__PURE__*/jsx(motion.ul, {
              className: "nex-nav-dropdown-list",
              children: overflowNavItems.map((item, index) => {
                if (!item) return null; // Skip undefined items
                // If item has subitems, render them directly
                if (item.subItems && item.subItems.length > 0) {
                  return item.subItems.map((subItem, subIndex) => /*#__PURE__*/jsx(motion.li, {
                    className: classNames('nex-nav-sub-item', {
                      'disabled': subItem.disabled,
                      'from-parent': true
                    }),
                    role: "menuitem",
                    tabIndex: subItem.disabled ? -1 : 0,
                    onClick: () => {
                      if (!subItem.disabled && subItem.onClick) {
                        subItem.onClick();
                        setIsMoreOpen(false);
                      }
                    },
                    "aria-disabled": subItem.disabled,
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: {
                      duration: 0.1,
                      delay: (index * item.subItems.length + subIndex) * 0.02
                    },
                    children: /*#__PURE__*/jsxs("div", {
                      className: "nex-nav-sub-item-content",
                      children: [/*#__PURE__*/jsxs("div", {
                        className: "nex-nav-sub-item-text",
                        children: [/*#__PURE__*/jsx("span", {
                          className: "nex-nav-sub-item-label",
                          children: subItem.label
                        }), subItem.description && /*#__PURE__*/jsx("span", {
                          className: "nex-nav-sub-item-description",
                          children: subItem.description
                        }), /*#__PURE__*/jsx("span", {
                          className: "nex-nav-sub-item-parent",
                          children: item.label
                        })]
                      }), subItem.badge && /*#__PURE__*/jsx("span", {
                        className: "nex-nav-sub-item-badge",
                        "aria-label": `${subItem.badge} notifications`,
                        children: subItem.badge
                      })]
                    })
                  }, `${subItem.label}-${subIndex}`));
                }
                // Regular item without subitems
                return /*#__PURE__*/jsx(motion.li, {
                  className: classNames('nex-nav-sub-item', {
                    'disabled': item.disabled
                  }),
                  role: "menuitem",
                  tabIndex: item.disabled ? -1 : 0,
                  onClick: () => {
                    if (!item.disabled && item.onClick) {
                      item.onClick();
                      setIsMoreOpen(false);
                    }
                  },
                  "aria-disabled": item.disabled,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: {
                    duration: 0.1,
                    delay: index * 0.02
                  },
                  children: /*#__PURE__*/jsxs("div", {
                    className: "nex-nav-sub-item-content",
                    children: [/*#__PURE__*/jsxs("div", {
                      className: "nex-nav-sub-item-text",
                      children: [/*#__PURE__*/jsx("span", {
                        className: "nex-nav-sub-item-label",
                        children: item.label
                      }), item.description && /*#__PURE__*/jsx("span", {
                        className: "nex-nav-sub-item-description",
                        children: item.description
                      })]
                    }), item.badge && /*#__PURE__*/jsx("span", {
                      className: "nex-nav-sub-item-badge",
                      "aria-label": `${item.badge} notifications`,
                      children: item.badge
                    })]
                  })
                }, item.key || `overflow-${index}`);
              })
            })
          })
        })]
      })
    })]
  });
};

const getFlagEmoji = code => {
  const iso = code.slice(0, 2).toUpperCase();
  return iso.replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));
};
const getLanguageName = code => {
  const nameMap = {
    'en': 'EN',
    'en-US': 'EN',
    'en-GB': 'EN',
    'de': 'DE',
    'fr': 'FR',
    'es': 'ES',
    'it': 'IT',
    'pt': 'PT',
    'ru': 'RU',
    'ja': 'JA',
    'ko': 'KO',
    'zh': 'ZH',
    'zh-CN': 'ZH',
    'zh-TW': 'ZH',
    'ar': 'AR',
    'hi': 'HI',
    'tr': 'TR',
    'nl': 'NL',
    'pl': 'PL',
    'sv': 'SV',
    'da': 'DA',
    'no': 'NO',
    'fi': 'FI',
    'cs': 'CS',
    'sk': 'SK',
    'hu': 'HU',
    'ro': 'RO',
    'bg': 'BG',
    'hr': 'HR',
    'sl': 'SL',
    'et': 'ET',
    'lv': 'LV',
    'lt': 'LT',
    'mt': 'MT',
    'el': 'EL',
    'he': 'HE',
    'th': 'TH',
    'vi': 'VI',
    'id': 'ID',
    'ms': 'MS',
    'tl': 'TL',
    'fa': 'FA',
    'ur': 'UR',
    'bn': 'BN',
    'ta': 'TA',
    'te': 'TE',
    'ml': 'ML',
    'kn': 'KN',
    'gu': 'GU',
    'pa': 'PA',
    'or': 'OR',
    'as': 'AS',
    'ne': 'NE',
    'si': 'SI',
    'my': 'MY',
    'km': 'KM',
    'lo': 'LO',
    'ka': 'KA',
    'hy': 'HY',
    'az': 'AZ',
    'eu': 'EU',
    'is': 'IS',
    'mk': 'MK',
    'sq': 'SQ',
    'be': 'BE',
    'uk': 'UK',
    'kk': 'KK',
    'ky': 'KY',
    'tg': 'TG',
    'uz': 'UZ',
    'mn': 'MN',
    'ps': 'PS',
    'ku': 'KU',
    'sd': 'SD',
    'bo': 'BO',
    'dz': 'DZ',
    'ti': 'TI',
    'am': 'AM',
    'so': 'SO',
    'sw': 'SW',
    'rw': 'RW',
    'wo': 'WO',
    'sn': 'SN',
    'zu': 'ZU',
    'af': 'AF',
    'xh': 'XH',
    'st': 'ST',
    'ts': 'TS',
    'tn': 'TN',
    've': 'VE',
    'nr': 'NR',
    'ss': 'SS',
    'qu': 'QU',
    'ay': 'AY',
    'gn': 'GN',
    'wa': 'WA',
    'br': 'BR',
    'co': 'CO',
    'oc': 'OC',
    'ca': 'CA',
    'gl': 'GL',
    'cy': 'CY',
    'ga': 'GA',
    'gv': 'GV',
    'kw': 'KW',
    'fo': 'FO',
    'fj': 'FJ',
    'sm': 'SM',
    'to': 'TO',
    'mi': 'MI',
    'haw': 'HAW',
    'ceb': 'CEB',
    'jv': 'JV',
    'su': 'SU',
    'lb': 'LB',
    'fy': 'FY',
    'yi': 'YI',
    'ht': 'HT',
    'sc': 'SC',
    'vec': 'VEC',
    'fur': 'FUR',
    'rm': 'RM',
    'lad': 'LAD',
    'an': 'AN',
    'ast': 'AST',
    'ext': 'EXT',
    'mwl': 'MWL',
    'pms': 'PMS',
    'lij': 'LIJ',
    'nap': 'NAP',
    'scn': 'SCN'
  };
  return nameMap[code.toLowerCase()] || code.toUpperCase().slice(0, 2);
};
const LanguageSwitcher = ({
  currentLocale,
  options,
  onChange,
  isAtTop = true,
  open = false,
  onOpen,
  onClose,
  theme = 'auto'
}) => {
  const [search, setSearch] = useState('');
  const ref = useRef(null);
  const searchRef = useRef(null);
  // Detect current theme
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  const isBlackGlass = document.documentElement.getAttribute('data-theme-variant') === 'black-glass';
  // Theme-aware animation configurations
  const getHoverAnimation = () => {
    if (isDarkMode) {
      if (isBlackGlass) {
        return {
          backgroundColor: isAtTop ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.12)',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          transition: {
            duration: 0.08,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        };
      } else {
        return {
          backgroundColor: isAtTop ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.1)',
          borderColor: 'rgba(255, 255, 255, 0.08)',
          transition: {
            duration: 0.08,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        };
      }
    } else {
      return {
        backgroundColor: isAtTop ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.85)',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        transition: {
          duration: 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      };
    }
  };
  const getTapAnimation = () => {
    if (isDarkMode) {
      return {
        backgroundColor: isAtTop ? 'rgba(255,24,1,0.12)' : 'rgba(255,24,1,0.15)',
        borderColor: 'rgba(255, 24, 1, 0.15)',
        transition: {
          duration: 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      };
    } else {
      return {
        backgroundColor: isAtTop ? 'rgba(255,24,1,0.15)' : 'rgba(255,24,1,0.2)',
        borderColor: 'rgba(255, 24, 1, 0.2)',
        transition: {
          duration: 0.08,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      };
    }
  };
  const hoverAnimation = getHoverAnimation();
  const tapAnimation = getTapAnimation();
  options.find(opt => opt.code === currentLocale);
  const showSearch = options.length > 5;
  // Filtered options
  const filtered = options.filter(opt => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return opt.label?.toLowerCase().includes(searchLower) || opt.code.toLowerCase().includes(searchLower) || getLanguageName(opt.code).toLowerCase().includes(searchLower);
  });
  useClickAway(ref, () => {
    onClose && onClose();
  });
  useEffect(() => {
    if (!open) {
      setSearch('');
      return;
    }
    // Focus search input when dropdown opens
    if (showSearch) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 10);
    }
  }, [open, showSearch]);
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape' && open) {
        onClose && onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);
  const handleToggle = () => {
    // Always call onOpen which now handles the toggle logic
    onOpen && onOpen();
  };
  return /*#__PURE__*/jsxs("div", {
    className: "nex-lang-switcher",
    ref: ref,
    children: [/*#__PURE__*/jsxs(motion.div, {
      className: "nex-lang-current",
      onClick: handleToggle,
      role: "button",
      tabIndex: 0,
      "aria-haspopup": "listbox",
      "aria-expanded": open,
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      },
      whileHover: hoverAnimation,
      whileTap: tapAnimation,
      children: [/*#__PURE__*/jsx("span", {
        className: "nex-lang-code",
        children: currentLocale.toUpperCase()
      }), /*#__PURE__*/jsx(motion.span, {
        className: "nex-lang-chevron",
        animate: {
          rotate: open ? 180 : 0
        },
        transition: {
          duration: 0.15,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/jsx(ChevronDown, {
          size: 14
        })
      })]
    }), /*#__PURE__*/jsx(AnimatePresence, {
      children: open && /*#__PURE__*/jsxs(motion.div, {
        className: "nex-lang-dropdown",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
          borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
          boxShadow: isAtTop ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        },
        role: "listbox",
        children: [showSearch && /*#__PURE__*/jsx("input", {
          className: "nex-lang-search",
          ref: searchRef,
          type: "text",
          placeholder: "Search languages...",
          value: search,
          onChange: e => setSearch(e.target.value),
          "aria-label": "Search language"
        }), /*#__PURE__*/jsxs("div", {
          className: "nex-lang-scroll",
          children: [filtered.length === 0 && /*#__PURE__*/jsx("div", {
            className: "nex-lang-item",
            style: {
              opacity: 0.6,
              cursor: 'default'
            },
            children: "No languages found"
          }), filtered.map((option, index) => /*#__PURE__*/jsxs(motion.div, {
            className: "nex-lang-item",
            role: "option",
            "aria-selected": option.code === currentLocale,
            onClick: () => {
              onChange(option.code);
              onClose && onClose();
            },
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: {
              duration: 0.1,
              delay: index * 0.02
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: [option.icon ? /*#__PURE__*/jsx("img", {
              src: option.icon,
              alt: "",
              className: "nex-lang-icon"
            }) : /*#__PURE__*/jsx("span", {
              className: "nex-lang-emoji",
              children: getFlagEmoji(option.code)
            }), /*#__PURE__*/jsx("span", {
              className: "nex-lang-label",
              children: option.label || getLanguageName(option.code)
            })]
          }, option.code))]
        })]
      })
    })]
  });
};

const UserMenu = ({
  user,
  onLogout,
  onProfile,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick,
  onSignUpClick,
  endorsementCount,
  subscription,
  enableEndorsements,
  enableSubscriptionInfo,
  enableAuditLog,
  enableSecuritySettings,
  enableIntegrations,
  enableAdminPanel,
  isAtTop = true,
  open = false,
  onOpen,
  onClose,
  theme = 'auto'
}) => {
  const ref = useRef(null);
  // Optimized animation configurations
  const hoverAnimation = {
    background: isAtTop ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.85)',
    transition: {
      duration: 0.08,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };
  const tapAnimation = {
    background: isAtTop ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.9)',
    transition: {
      duration: 0.05,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };
  const dangerHoverAnimation = {
    background: isAtTop ? 'rgba(255,180,180,0.18)' : 'rgba(255,180,180,0.85)',
    transition: {
      duration: 0.08,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };
  const dangerTapAnimation = {
    background: isAtTop ? 'rgba(255,180,180,0.22)' : 'rgba(255,180,180,0.9)',
    transition: {
      duration: 0.05,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };
  useClickAway(ref, () => {
    onClose && onClose();
  });
  const handleToggle = () => {
    // Always call onOpen which now handles the toggle logic
    onOpen && onOpen();
  };
  const initials = user?.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || '';
  user?.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${initials}`;
  return /*#__PURE__*/jsxs("div", {
    className: "nex-user-menu",
    ref: ref,
    children: [/*#__PURE__*/jsx(motion.button, {
      className: "nex-user-menu-trigger",
      onClick: handleToggle,
      "aria-haspopup": "true",
      "aria-expanded": open,
      "aria-label": "User menu",
      children: user?.avatarUrl ? /*#__PURE__*/jsx("img", {
        src: user.avatarUrl,
        alt: "User Avatar",
        className: "nex-user-menu-avatar"
      }) : /*#__PURE__*/jsx("span", {
        className: "nex-user-menu-avatar nex-user-menu-avatar-fallback",
        children: /*#__PURE__*/jsxs("div", {
          className: "nex-user-menu-avatar-inner",
          children: [/*#__PURE__*/jsx("div", {
            className: "nex-user-menu-avatar-background"
          }), /*#__PURE__*/jsx("span", {
            className: "nex-user-menu-avatar-text",
            children: initials
          })]
        })
      })
    }), /*#__PURE__*/jsx(AnimatePresence, {
      children: open && /*#__PURE__*/jsx(motion.ul, {
        className: "nex-user-menu-dropdown",
        initial: {
          opacity: 0,
          y: -8
        },
        animate: {
          opacity: 1,
          y: 0,
          background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
          borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
          boxShadow: isAtTop ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
        },
        exit: {
          opacity: 0,
          y: -8
        },
        transition: {
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        },
        role: "menu",
        children: user ? /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx("div", {
            className: "nex-user-menu-section",
            children: /*#__PURE__*/jsxs("li", {
              className: "nex-user-menu-header",
              children: [/*#__PURE__*/jsx("span", {
                children: user.name
              }), user.role && /*#__PURE__*/jsx("span", {
                className: "badge",
                children: user.role
              })]
            })
          }), onProfile && /*#__PURE__*/jsx(motion.li, {
            className: "nex-user-menu-item",
            role: "menuitem",
            onClick: () => {
              onClose && onClose();
              onProfile();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: "Profile"
          }), enableEndorsements && /*#__PURE__*/jsxs(motion.li, {
            className: "nex-user-menu-item",
            role: "menuitem",
            onClick: () => {
              onClose && onClose();
              onEndorsementsClick?.();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: ["Endorsements (", endorsementCount ?? 0, ")"]
          }), enableSubscriptionInfo && subscription && /*#__PURE__*/jsxs(motion.li, {
            className: "nex-user-menu-item",
            role: "menuitem",
            onClick: () => {
              onClose && onClose();
              onSubscriptionClick?.();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: ["Subscription: ", subscription.tier]
          }), enableAuditLog && /*#__PURE__*/jsx(motion.li, {
            className: "nex-user-menu-item",
            onClick: () => {
              onClose && onClose();
              onActivityLogClick?.();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: "Activity Log"
          }), enableSecuritySettings && /*#__PURE__*/jsx(motion.li, {
            className: "nex-user-menu-item",
            onClick: () => {
              onClose && onClose();
              onSecurityClick?.();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: "Security Settings"
          }), enableIntegrations && /*#__PURE__*/jsx(motion.li, {
            className: "nex-user-menu-item",
            onClick: () => {
              onClose && onClose();
              onIntegrationsClick?.();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: "Manage Integrations"
          }), enableAdminPanel && /*#__PURE__*/jsx(motion.li, {
            className: "nex-user-menu-item",
            onClick: () => {
              onClose && onClose();
              onAdminPanelClick?.();
            },
            whileHover: hoverAnimation,
            whileTap: tapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: "Admin Panel"
          }), onLogout && /*#__PURE__*/jsx(motion.li, {
            className: "nex-user-menu-item danger",
            onClick: () => {
              onClose && onClose();
              onLogout();
            },
            whileHover: dangerHoverAnimation,
            whileTap: dangerTapAnimation,
            style: {
              cursor: 'pointer'
            },
            children: "Log out"
          })]
        }) : /*#__PURE__*/jsx(motion.li, {
          className: "nex-user-menu-item sign-up-cta",
          onClick: () => {
            onClose && onClose();
            onSignUpClick?.();
          },
          whileHover: hoverAnimation,
          whileTap: tapAnimation,
          style: {
            cursor: 'pointer'
          },
          children: /*#__PURE__*/jsx(motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            transition: {
              duration: 0.3
            },
            children: "Sign up to personalize"
          })
        })
      })
    })]
  });
};

const ThemeContext = /*#__PURE__*/createContext(undefined);
const ThemeProvider = ({
  children
}) => {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('nex-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let shouldBeDark = false;
    if (savedTheme) {
      shouldBeDark = savedTheme === 'dark' || savedTheme === 'black-glass';
    } else {
      shouldBeDark = systemPrefersDark;
    }
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
    setIsInitialized(true);
  }, []);
  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = e => {
      if (!localStorage.getItem('nex-theme')) {
        setIsDark(e.matches);
        applyTheme(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  const applyTheme = dark => {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme-variant', 'black-glass');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.removeAttribute('data-theme-variant');
    }
  };
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    // Update localStorage
    localStorage.setItem('nex-theme', newTheme ? 'black-glass' : 'light');
    // Apply theme to document
    applyTheme(newTheme);
  };
  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? 'black-glass' : 'light'
  };
  if (!isInitialized) {
    return null; // Don't render until theme is initialized
  }
  return /*#__PURE__*/jsx(ThemeContext.Provider, {
    value: value,
    children: children
  });
};
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const ThemeToggle = ({
  isAtTop = true,
  className = '',
  theme = 'auto'
}) => {
  const {
    isDark,
    toggleTheme
  } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    toggleTheme();
    // Reset animation flag after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };
  return /*#__PURE__*/jsxs(motion.button, {
    className: `nex-theme-toggle ${className}`,
    onClick: handleToggle,
    onKeyDown: handleKeyDown,
    role: "switch",
    "aria-checked": isDark,
    "aria-label": `Switch to ${isDark ? 'light' : 'dark'} mode`,
    tabIndex: 0,
    disabled: isAnimating,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    whileHover: {
      transition: {
        duration: 0.12,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    whileTap: {
      transition: {
        duration: 0.08,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    whileFocus: {
      outline: "2px solid var(--nex-signature)",
      outlineOffset: "2px",
      transition: {
        duration: 0.12,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    children: [/*#__PURE__*/jsx(motion.div, {
      className: "nex-theme-toggle__icon-container",
      animate: {
        rotate: isDark ? 180 : 0
      },
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 25,
        mass: 0.6,
        restDelta: 0.001
      },
      children: /*#__PURE__*/jsx(AnimatePresence, {
        mode: "wait",
        children: !isDark ? /*#__PURE__*/jsx(motion.div, {
          className: "nex-theme-toggle__icon nex-theme-toggle__icon--sun",
          initial: {
            opacity: 0,
            rotate: -90
          },
          animate: {
            opacity: 1,
            rotate: 0
          },
          exit: {
            opacity: 0,
            rotate: 90
          },
          transition: {
            duration: 0.12,
            ease: [0.4, 0, 0.2, 1]
          },
          children: /*#__PURE__*/jsx(Sun, {
            size: 16
          })
        }, "sun") : /*#__PURE__*/jsx(motion.div, {
          className: "nex-theme-toggle__icon nex-theme-toggle__icon--moon",
          initial: {
            opacity: 0,
            rotate: -90
          },
          animate: {
            opacity: 1,
            rotate: 0
          },
          exit: {
            opacity: 0,
            rotate: 90
          },
          transition: {
            duration: 0.12,
            ease: [0.4, 0, 0.2, 1]
          },
          children: /*#__PURE__*/jsx(Moon, {
            size: 16
          })
        }, "moon")
      })
    }), /*#__PURE__*/jsx(AnimatePresence, {
      children: isAnimating && /*#__PURE__*/jsx(motion.div, {
        className: "nex-theme-toggle__ripple",
        initial: {
          opacity: 0.8
        },
        animate: {
          opacity: 0
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: 0.12,
          ease: [0.4, 0, 0.2, 1]
        }
      })
    })]
  });
};

const NavControls = ({
  isAuthenticated,
  user,
  onLogin,
  onLogout,
  onProfile,
  languageOptions,
  currentLocale,
  onLocaleChange,
  isLanguageOpen,
  onLanguageToggle,
  onLanguageClose,
  isUserOpen,
  onUserToggle,
  onUserClose,
  isAtTop,
  endorsementCount,
  subscription,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick,
  theme = 'auto'
}) => {
  const {
    timing,
    spring
  } = useAnimationConfig();
  const handleLoginClick = () => {
    if (onLogin) {
      onLogin();
    }
  };
  return /*#__PURE__*/jsxs(motion.div, {
    className: "nex-nav-right",
    role: "group",
    "aria-label": "User controls",
    variants: ANIMATION_VARIANTS.mobileNav.navItem,
    children: [/*#__PURE__*/jsx(motion.div, {
      variants: ANIMATION_VARIANTS.mobileNav.navItem,
      children: /*#__PURE__*/jsx(ThemeToggle, {
        isAtTop: isAtTop,
        theme: theme
      })
    }), /*#__PURE__*/jsx(motion.div, {
      variants: ANIMATION_VARIANTS.mobileNav.navItem,
      children: /*#__PURE__*/jsx(LanguageSwitcher, {
        currentLocale: currentLocale,
        options: languageOptions,
        onChange: onLocaleChange,
        isAtTop: isAtTop,
        open: isLanguageOpen,
        onOpen: onLanguageToggle,
        onClose: onLanguageClose,
        theme: theme
      })
    }), isAuthenticated && user && onLogout && onProfile ? /*#__PURE__*/jsx(motion.div, {
      variants: ANIMATION_VARIANTS.mobileNav.navItem,
      children: /*#__PURE__*/jsx(UserMenu, {
        user: user,
        onLogout: onLogout,
        onProfile: onProfile,
        endorsementCount: endorsementCount,
        subscription: subscription,
        onEndorsementsClick: onEndorsementsClick,
        onSubscriptionClick: onSubscriptionClick,
        onActivityLogClick: onActivityLogClick,
        onSecurityClick: onSecurityClick,
        onIntegrationsClick: onIntegrationsClick,
        onAdminPanelClick: onAdminPanelClick,
        isAtTop: isAtTop,
        open: isUserOpen,
        onOpen: onUserToggle,
        onClose: onUserClose,
        theme: theme
      })
    }) : /*#__PURE__*/jsxs(motion.button, {
      className: "nex-nav-login-button",
      onClick: handleLoginClick,
      role: "button",
      tabIndex: 0,
      "aria-label": "Sign in to your account",
      onKeyDown: e => e.key === 'Enter' && handleLoginClick(),
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      whileFocus: {
        outline: "2px solid var(--nex-signature)",
        outlineOffset: "2px",
        transition: {
          duration: 0.12,
          ease: [0.4, 0, 0.2, 1]
        }
      },
      transition: spring.responsive,
      children: [/*#__PURE__*/jsx(LogIn, {
        size: 16,
        "aria-hidden": "true"
      }), /*#__PURE__*/jsx("span", {
        children: "Sign In"
      })]
    })]
  });
};

const NavLogo = ({
  logoSrc,
  displayName,
  onHomeClick,
  left
}) => {
  const {
    timing
  } = useAnimationConfig();
  return /*#__PURE__*/jsx(motion.div, {
    className: "nex-nav-mobile-logo",
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0,
      left
    },
    transition: timing.medium,
    style: {
      position: 'fixed',
      top: 'var(--nex-spacing-md)',
      zIndex: 'calc(var(--nex-z-index-modal) + 10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      height: '44px',
      cursor: 'pointer',
      left
    },
    onClick: onHomeClick,
    role: "button",
    tabIndex: 0,
    "aria-label": `${displayName} - Go to home`,
    onKeyDown: e => e.key === 'Enter' && onHomeClick(),
    whileHover: {
      transition: timing.fast
    },
    whileTap: {
      transition: timing.fast
    },
    children: logoSrc ? /*#__PURE__*/jsxs(motion.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '8px',
        boxSizing: 'border-box'
      },
      whileHover: {
        transition: timing.fast
      },
      children: [/*#__PURE__*/jsx(motion.img, {
        src: logoSrc,
        alt: displayName,
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: timing.medium,
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'brightness(0.9) contrast(1.1)',
          maxWidth: '24px',
          maxHeight: '24px'
        },
        onError: e => {
          // Fallback to text if image fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('fallback-hidden');
        }
      }), /*#__PURE__*/jsx(motion.div, {
        className: "fallback-hidden",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        transition: timing.medium,
        style: {
          position: 'absolute',
          fontSize: 'var(--nex-font-size-xs)',
          fontWeight: 'var(--nex-font-weight-medium)',
          color: 'var(--nex-font-color)',
          textAlign: 'center',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '28px',
          display: 'none'
        },
        children: displayName?.slice(0, 2)
      })]
    }) : /*#__PURE__*/jsx(motion.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '4px 12px',
        boxSizing: 'border-box'
      },
      whileHover: {
        transition: timing.fast
      },
      children: /*#__PURE__*/jsx(motion.div, {
        initial: {
          opacity: 0,
          x: -10
        },
        animate: {
          opacity: 1,
          x: 0
        },
        transition: timing.medium,
        style: {
          fontSize: '0.9rem',
          fontWeight: 600,
          color: 'var(--nex-font-color)',
          textAlign: 'center',
          lineHeight: 1.2,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: 'none',
          fontFamily: 'var(--nex-font-family-primary)',
          letterSpacing: '0.02em',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility'
        },
        children: displayName || 'NexComponent'
      })
    })
  });
};

const MobileNav = ({
  isOpen,
  onClose,
  navItems,
  user,
  isAuthenticated,
  onLogin,
  onLogout,
  onProfile,
  currentLocale,
  languageOptions,
  onLocaleChange,
  endorsementCount,
  subscription,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick,
  theme = 'auto'
}) => {
  // Check for black glass theme variant
  const [currentThemeVariant, setCurrentThemeVariant] = useState(null);
  useEffect(() => {
    const checkThemeVariant = () => {
      const variant = document.documentElement.getAttribute('data-theme-variant');
      setCurrentThemeVariant(variant);
    };
    // Initial check
    checkThemeVariant();
    // Create a mutation observer to watch for theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme-variant') {
          checkThemeVariant();
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme-variant']
    });
    return () => observer.disconnect();
  }, []);
  // Get current theme state directly from DOM to ensure accuracy
  const currentThemeVariantFromDOM = document.documentElement.getAttribute('data-theme-variant');
  const isBlackGlass = theme === 'black-glass' || currentThemeVariant === 'black-glass' || currentThemeVariantFromDOM === 'black-glass';
  // State management
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNavItems, setOpenNavItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  // Enterprise animation configuration
  const {
    timing,
    spring,
    stagger,
    shouldReduceMotion,
    variants,
    colors,
    performance
  } = useAnimationConfig();
  // Toggle handlers with exclusivity logic
  const handleProfileToggle = () => {
    setOpenDropdown(openDropdown === 'profile' ? null : 'profile');
  };
  const handleLanguageToggle = () => {
    setOpenDropdown(openDropdown === 'language' ? null : 'language');
  };
  const handleSettingsToggle = () => {
    setOpenDropdown(openDropdown === 'settings' ? null : 'settings');
  };
  const handleNavItemToggle = index => {
    setOpenNavItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.clear();
        newSet.add(index);
      }
      return newSet;
    });
  };
  // Close all dropdowns when mobile nav closes
  useEffect(() => {
    if (!isOpen) {
      setOpenDropdown(null);
      setOpenNavItems(new Set());
      setHoveredItem(null);
    }
  }, [isOpen]);
  const currentLanguage = languageOptions.find(lang => lang.code === currentLocale);
  const hasHome = navItems.some(item => item.label.toLowerCase() === 'home');
  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nex-lock-scroll');
    } else {
      document.body.classList.remove('nex-lock-scroll');
    }
    return () => {
      document.body.classList.remove('nex-lock-scroll');
    };
  }, [isOpen]);
  return /*#__PURE__*/jsx(motion.div, {
    className: `nex-mobile-nav${isBlackGlass ? ' nex-mobile-nav--black-glass' : ''}`,
    variants: variants.mobileNav.container,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    style: {
      overflow: 'hidden',
      position: 'fixed',
      top: '71.99px',
      left: 0,
      right: 0,
      width: '100%',
      height: 'calc(100dvh - 71.99px)',
      zIndex: 'var(--nex-z-index-modal)',
      display: 'flex',
      flexDirection: 'column',
      // Only apply default styles when NOT black glass
      ...(!isBlackGlass ? {
        background: colors.mobileNav.background.primary,
        backdropFilter: colors.mobileNav.backdrop.medium,
        WebkitBackdropFilter: colors.mobileNav.backdrop.medium,
        borderBottom: colors.mobileNav.border.medium,
        boxShadow: colors.mobileNav.shadow.medium
      } : {}),
      ...performance.hardwareAcceleration
    },
    children: /*#__PURE__*/jsxs(motion.div, {
      className: "nex-mobile-nav-inner",
      variants: variants.fade.in,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      transition: timing.medium,
      style: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        ...performance.hardwareAcceleration
      },
      children: [/*#__PURE__*/jsx(motion.div, {
        className: "nex-mobile-nav-header",
        variants: variants.mobileNav.header,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: /*#__PURE__*/jsxs("div", {
          className: "nex-mobile-nav-header-content",
          children: [isAuthenticated && user ? /*#__PURE__*/jsxs(Fragment, {
            children: [user.avatarUrl ? /*#__PURE__*/jsx(motion.img, {
              src: user.avatarUrl,
              alt: user.name,
              className: "nex-mobile-nav-user-avatar",
              variants: variants.mobileNav.avatar,
              initial: "initial",
              animate: "animate",
              exit: "exit"
            }) : /*#__PURE__*/jsx(motion.span, {
              className: "nex-mobile-nav-user-avatar nex-mobile-nav-avatar-fallback",
              variants: variants.mobileNav.avatar,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: /*#__PURE__*/jsxs("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsxs("defs", {
                  children: [/*#__PURE__*/jsxs("radialGradient", {
                    id: "mobileAvatarGradient",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    children: [/*#__PURE__*/jsx("stop", {
                      offset: "0%",
                      stopColor: "#fff",
                      stopOpacity: "0.8"
                    }), /*#__PURE__*/jsx("stop", {
                      offset: "100%",
                      stopColor: "#e0e7ef",
                      stopOpacity: "0.95"
                    })]
                  }), /*#__PURE__*/jsxs("linearGradient", {
                    id: "mobileAvatarShimmer",
                    x1: "0",
                    y1: "0",
                    x2: "40",
                    y2: "40",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/jsx("stop", {
                      stopColor: "#fff",
                      stopOpacity: "0.2"
                    }), /*#__PURE__*/jsx("stop", {
                      offset: "0.5",
                      stopColor: "#ff1801",
                      stopOpacity: "0.12"
                    }), /*#__PURE__*/jsx("stop", {
                      offset: "1",
                      stopColor: "#00b8ff",
                      stopOpacity: "0.12"
                    })]
                  })]
                }), /*#__PURE__*/jsx("circle", {
                  cx: "20",
                  cy: "20",
                  r: "20",
                  fill: "url(#mobileAvatarGradient)"
                }), /*#__PURE__*/jsx(motion.rect, {
                  x: "-40",
                  y: "0",
                  width: "40",
                  height: "40",
                  fill: "url(#mobileAvatarShimmer)",
                  animate: {
                    x: [-40, 40]
                  },
                  transition: {
                    repeat: Infinity,
                    duration: shouldReduceMotion ? 0 : 4.5,
                    ease: 'linear'
                  },
                  style: {
                    mixBlendMode: 'lighten'
                  }
                }), /*#__PURE__*/jsx("text", {
                  x: "50%",
                  y: "54%",
                  textAnchor: "middle",
                  fill: "#3a4256",
                  fontSize: "18",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                  dominantBaseline: "middle",
                  style: {
                    letterSpacing: 1
                  },
                  children: user.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
                })]
              })
            }), /*#__PURE__*/jsxs(motion.div, {
              className: "nex-mobile-nav-user-info",
              variants: variants.fade.in,
              initial: "initial",
              animate: "animate",
              transition: {
                ...timing.medium,
                delay: 0.1
              },
              children: [/*#__PURE__*/jsx("h3", {
                className: "nex-mobile-nav-user-name",
                children: user.name
              }), /*#__PURE__*/jsx(motion.div, {
                className: "nex-mobile-nav-user-tier",
                onClick: onSubscriptionClick,
                transition: spring.fast,
                children: subscription?.tier === 'pro' ? 'Pro' : 'Free'
              })]
            })]
          }) : /*#__PURE__*/jsxs(motion.div, {
            className: "nex-mobile-nav-guest-content",
            variants: variants.fade.in,
            initial: "initial",
            animate: "animate",
            transition: {
              ...timing.medium,
              delay: 0.15
            },
            children: [/*#__PURE__*/jsx(motion.button, {
              className: "nex-mobile-nav-signup-btn",
              onClick: onLogin,
              whileHover: {
                backgroundColor: isBlackGlass ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.15)",
                borderColor: isBlackGlass ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.2)",
                boxShadow: isBlackGlass ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "0 4px 15px rgba(0, 0, 0, 0.1)"
              },
              whileTap: {
                backgroundColor: "rgba(255, 24, 1, 0.15)",
                borderColor: "rgba(255, 24, 1, 0.2)"
              },
              transition: spring.responsive,
              children: "Sign Up"
            }), /*#__PURE__*/jsx(motion.button, {
              className: "nex-mobile-nav-login-link",
              onClick: onLogin,
              whileHover: {
                opacity: 0.8
              },
              transition: spring.fast,
              children: "Already have an account? Sign in"
            })]
          }), /*#__PURE__*/jsx(motion.div, {
            className: "nex-mobile-nav-theme-toggle",
            variants: variants.fade.in,
            initial: "initial",
            animate: "animate",
            transition: {
              ...timing.medium,
              delay: 0.2
            },
            children: /*#__PURE__*/jsx(ThemeToggle, {
              isAtTop: false
            })
          })]
        })
      }), /*#__PURE__*/jsxs(motion.div, {
        className: "nex-mobile-nav-list",
        variants: stagger.container,
        initial: "initial",
        animate: "animate",
        style: performance.hardwareAcceleration,
        children: [/*#__PURE__*/jsxs(motion.div, {
          className: "nex-mobile-nav-section",
          variants: variants.mobileNav.navItem,
          children: [/*#__PURE__*/jsx(motion.h4, {
            className: "nex-mobile-nav-section-title",
            variants: variants.mobileNav.sectionTitle,
            children: "Navigation"
          }), !hasHome && /*#__PURE__*/jsx(motion.div, {
            className: "nex-mobile-nav-item",
            variants: variants.mobileNav.navItem,
            whileHover: variants.interactive.navItem.hover,
            whileTap: variants.interactive.navItem.active,
            transition: spring.responsive,
            children: /*#__PURE__*/jsx("span", {
              className: "nex-mobile-nav-text",
              children: "Home"
            })
          }), navItems.map((item, index) => /*#__PURE__*/jsxs(motion.div, {
            style: {
              marginBottom: 'var(--nex-spacing-xs)'
            },
            variants: variants.mobileNav.navItem,
            children: [/*#__PURE__*/jsxs(motion.div, {
              className: "nex-mobile-nav-item",
              onClick: e => {
                e.stopPropagation();
                if (item.subItems && item.subItems.length > 0) {
                  handleNavItemToggle(index);
                } else if (item.onClick) {
                  item.onClick();
                }
              },
              whileHover: variants.interactive.navItem.hover,
              whileTap: variants.interactive.navItem.active,
              transition: spring.responsive,
              children: [/*#__PURE__*/jsx("span", {
                className: "nex-mobile-nav-text",
                children: item.label
              }), item.subItems && item.subItems.length > 0 && /*#__PURE__*/jsx(motion.div, {
                animate: openNavItems.has(index) ? "open" : "closed",
                variants: variants.mobileNav.iconRotate,
                transition: spring.fast,
                children: /*#__PURE__*/jsx(ChevronDown, {
                  className: "nex-mobile-nav-icon"
                })
              })]
            }), /*#__PURE__*/jsx(AnimatePresence, {
              children: item.subItems && item.subItems.length > 0 && openNavItems.has(index) && /*#__PURE__*/jsx(motion.div, {
                variants: variants.mobileNav.dropdownContainer,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                style: {
                  overflow: 'hidden',
                  marginTop: 'var(--nex-spacing-sm)'
                },
                children: /*#__PURE__*/jsx(motion.div, {
                  variants: stagger.dropdown,
                  initial: "initial",
                  animate: "animate",
                  children: item.subItems.map((subItem, subIndex) => /*#__PURE__*/jsxs(motion.div, {
                    className: `nex-mobile-nav-item ${subItem.disabled ? 'disabled' : ''}`,
                    onClick: e => {
                      e.stopPropagation();
                      if (!subItem.disabled) {
                        subItem.onClick();
                      }
                    },
                    style: {
                      marginLeft: 'var(--nex-spacing-md)',
                      marginBottom: 'var(--nex-spacing-xs)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: subItem.label
                    }), subItem.badge && /*#__PURE__*/jsx(motion.span, {
                      className: "nex-mobile-nav-badge",
                      variants: variants.mobileNav.badge,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      children: subItem.badge
                    })]
                  }, subIndex))
                })
              })
            })]
          }, index))]
        }), /*#__PURE__*/jsxs(motion.div, {
          className: "nex-mobile-nav-section",
          variants: variants.mobileNav.navItem,
          children: [/*#__PURE__*/jsx(motion.h4, {
            className: "nex-mobile-nav-section-title",
            variants: variants.mobileNav.sectionTitle,
            children: "Language"
          }), /*#__PURE__*/jsxs(motion.div, {
            className: "nex-mobile-nav-item",
            onClick: handleLanguageToggle,
            variants: variants.mobileNav.navItem,
            whileHover: variants.interactive.navItem.hover,
            whileTap: variants.interactive.navItem.active,
            transition: spring.responsive,
            children: [/*#__PURE__*/jsx("span", {
              className: "nex-mobile-lang-abbr",
              children: currentLocale.toUpperCase()
            }), /*#__PURE__*/jsx("span", {
              className: "nex-mobile-nav-text",
              children: currentLanguage?.label || currentLocale.toUpperCase()
            }), /*#__PURE__*/jsx(motion.div, {
              animate: openDropdown === 'language' ? "open" : "closed",
              variants: variants.mobileNav.iconRotate,
              transition: spring.fast,
              children: /*#__PURE__*/jsx(ChevronDown, {
                className: "nex-mobile-nav-icon"
              })
            })]
          }), /*#__PURE__*/jsx(AnimatePresence, {
            children: openDropdown === 'language' && /*#__PURE__*/jsx(motion.div, {
              variants: variants.mobileNav.dropdownContainer,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              style: {
                overflow: 'hidden'
              },
              children: /*#__PURE__*/jsx(motion.div, {
                variants: stagger.dropdown,
                initial: "initial",
                animate: "animate",
                children: languageOptions.map(lang => /*#__PURE__*/jsxs(motion.div, {
                  className: `nex-mobile-nav-item ${lang.code === currentLocale ? 'active' : ''}`,
                  onClick: () => {
                    onLocaleChange(lang.code);
                    setOpenDropdown(null);
                  },
                  style: {
                    marginLeft: 'var(--nex-spacing-md)',
                    marginBottom: 'var(--nex-spacing-xs)'
                  },
                  variants: variants.mobileNav.dropdownItem,
                  whileHover: variants.interactive.navItem.hover,
                  whileTap: variants.interactive.navItem.active,
                  transition: spring.responsive,
                  children: [/*#__PURE__*/jsx("span", {
                    className: "nex-mobile-lang-abbr",
                    children: lang.code.toUpperCase()
                  }), /*#__PURE__*/jsx("span", {
                    className: "nex-mobile-nav-text",
                    children: lang.label
                  })]
                }, lang.code))
              })
            })
          })]
        }), isAuthenticated && user && /*#__PURE__*/jsxs(motion.div, {
          className: "nex-mobile-nav-section",
          variants: variants.mobileNav.navItem,
          children: [/*#__PURE__*/jsx(motion.h4, {
            className: "nex-mobile-nav-section-title",
            variants: variants.mobileNav.sectionTitle,
            children: "Profile"
          }), /*#__PURE__*/jsxs(motion.div, {
            style: {
              marginBottom: 'var(--nex-spacing-xs)'
            },
            variants: variants.mobileNav.navItem,
            children: [/*#__PURE__*/jsxs(motion.div, {
              className: "nex-mobile-nav-item",
              onClick: handleProfileToggle,
              variants: variants.mobileNav.navItem,
              whileHover: variants.interactive.navItem.hover,
              whileTap: variants.interactive.navItem.active,
              transition: spring.responsive,
              children: [/*#__PURE__*/jsx(User, {
                className: "nex-mobile-nav-icon"
              }), /*#__PURE__*/jsx("span", {
                className: "nex-mobile-nav-text",
                children: "Profile"
              }), /*#__PURE__*/jsx(motion.div, {
                animate: openDropdown === 'profile' ? "open" : "closed",
                variants: variants.mobileNav.iconRotate,
                transition: spring.fast,
                children: /*#__PURE__*/jsx(ChevronDown, {
                  className: "nex-mobile-nav-icon"
                })
              })]
            }), /*#__PURE__*/jsx(AnimatePresence, {
              children: openDropdown === 'profile' && /*#__PURE__*/jsx(motion.div, {
                variants: variants.mobileNav.dropdownContainer,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                style: {
                  overflow: 'hidden',
                  marginTop: 'var(--nex-spacing-sm)'
                },
                children: /*#__PURE__*/jsxs(motion.div, {
                  variants: stagger.fast,
                  initial: "initial",
                  animate: "animate",
                  children: [onProfile && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onProfile,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)',
                      marginBottom: 'var(--nex-spacing-xs)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(User, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "View Profile"
                    })]
                  }), onEndorsementsClick && endorsementCount !== undefined && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onEndorsementsClick,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)',
                      marginBottom: 'var(--nex-spacing-xs)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(Fingerprint, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "Endorsements"
                    }), /*#__PURE__*/jsx(motion.span, {
                      className: "nex-mobile-nav-badge",
                      variants: variants.mobileNav.badge,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      children: endorsementCount
                    })]
                  }), onSubscriptionClick && subscription && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onSubscriptionClick,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(Zap, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "Subscription"
                    }), /*#__PURE__*/jsx(motion.span, {
                      className: "nex-mobile-nav-badge",
                      variants: variants.mobileNav.badge,
                      initial: "initial",
                      animate: "animate",
                      exit: "exit",
                      children: subscription.tier === 'pro' ? 'Pro' : 'Free'
                    })]
                  })]
                })
              })
            })]
          })]
        }), isAuthenticated && (onActivityLogClick || onSecurityClick || onIntegrationsClick || onAdminPanelClick) && /*#__PURE__*/jsxs(motion.div, {
          className: "nex-mobile-nav-section",
          variants: variants.mobileNav.navItem,
          children: [/*#__PURE__*/jsx(motion.h4, {
            className: "nex-mobile-nav-section-title",
            variants: variants.mobileNav.sectionTitle,
            children: "Settings"
          }), /*#__PURE__*/jsxs(motion.div, {
            style: {
              marginBottom: 'var(--nex-spacing-xs)'
            },
            variants: variants.mobileNav.navItem,
            children: [/*#__PURE__*/jsxs(motion.div, {
              className: "nex-mobile-nav-item",
              onClick: handleSettingsToggle,
              variants: variants.mobileNav.navItem,
              whileHover: variants.interactive.navItem.hover,
              whileTap: variants.interactive.navItem.active,
              transition: spring.responsive,
              children: [/*#__PURE__*/jsx(Settings, {
                className: "nex-mobile-nav-icon"
              }), /*#__PURE__*/jsx("span", {
                className: "nex-mobile-nav-text",
                children: "Settings"
              }), /*#__PURE__*/jsx(motion.div, {
                animate: openDropdown === 'settings' ? "open" : "closed",
                variants: variants.mobileNav.iconRotate,
                transition: spring.fast,
                children: /*#__PURE__*/jsx(ChevronDown, {
                  className: "nex-mobile-nav-icon"
                })
              })]
            }), /*#__PURE__*/jsx(AnimatePresence, {
              children: openDropdown === 'settings' && /*#__PURE__*/jsx(motion.div, {
                variants: variants.mobileNav.dropdownContainer,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                style: {
                  overflow: 'hidden',
                  marginTop: 'var(--nex-spacing-sm)'
                },
                children: /*#__PURE__*/jsxs(motion.div, {
                  variants: stagger.fast,
                  initial: "initial",
                  animate: "animate",
                  children: [onActivityLogClick && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onActivityLogClick,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)',
                      marginBottom: 'var(--nex-spacing-xs)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(Activity, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "Activity Log"
                    })]
                  }), onSecurityClick && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onSecurityClick,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)',
                      marginBottom: 'var(--nex-spacing-xs)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(Shield, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "Security"
                    })]
                  }), onIntegrationsClick && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onIntegrationsClick,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)',
                      marginBottom: 'var(--nex-spacing-xs)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(Globe, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "Integrations"
                    })]
                  }), onAdminPanelClick && /*#__PURE__*/jsxs(motion.div, {
                    className: "nex-mobile-nav-item",
                    onClick: onAdminPanelClick,
                    style: {
                      marginLeft: 'var(--nex-spacing-md)'
                    },
                    variants: variants.mobileNav.dropdownItem,
                    whileHover: variants.interactive.navItem.hover,
                    whileTap: variants.interactive.navItem.active,
                    transition: spring.responsive,
                    children: [/*#__PURE__*/jsx(Crown, {
                      className: "nex-mobile-nav-icon"
                    }), /*#__PURE__*/jsx("span", {
                      className: "nex-mobile-nav-text",
                      children: "Admin Panel"
                    })]
                  })]
                })
              })
            })]
          })]
        }), isAuthenticated && onLogout && /*#__PURE__*/jsx(motion.div, {
          className: "nex-mobile-nav-section",
          variants: variants.mobileNav.navItem,
          children: /*#__PURE__*/jsxs(motion.div, {
            className: "nex-mobile-nav-item danger",
            onClick: onLogout,
            variants: variants.mobileNav.navItem,
            whileHover: {
              backgroundColor: "rgba(255, 24, 1, 0.1)"
            },
            whileTap: {
              backgroundColor: "rgba(255, 24, 1, 0.15)"
            },
            transition: spring.responsive,
            children: [/*#__PURE__*/jsx(LogOut, {
              className: "nex-mobile-nav-icon"
            }), /*#__PURE__*/jsx("span", {
              className: "nex-mobile-nav-text",
              children: "Log Out"
            })]
          })
        })]
      })]
    })
  });
};

const LANG_KEY = 'nex-locale';
const getDefaultLocale = () => {
  const lang = navigator.language || 'en';
  const parts = lang.split('-');
  return parts[0] || 'en';
};
// Responsive left position hook
function useResponsiveLeft() {
  const [left, setLeft] = useState('var(--nex-spacing-md)');
  useEffect(() => {
    function updateLeft() {
      const width = window.innerWidth;
      if (width <= 768) {
        setLeft('var(--nex-spacing-md)');
      } else if (width <= 1440) {
        setLeft('var(--nex-spacing-lg)');
      } else {
        setLeft(`calc((100vw - 1440px) / 2 + var(--nex-spacing-lg))`);
      }
    }
    updateLeft();
    window.addEventListener('resize', updateLeft);
    return () => window.removeEventListener('resize', updateLeft);
  }, []);
  return left;
}
const NexNavInner = ({
  logoSrc,
  displayName,
  homeButtonHandler,
  navItems,
  user,
  isAuthenticated,
  onLogin,
  onLogout,
  onProfile,
  languageOptions,
  subscription,
  endorsementCount,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick,
  theme = 'auto'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [locale, setLocale] = useState('en');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [currentThemeVariant, setCurrentThemeVariant] = useState(null);
  const menuRef = useRef(null);
  const navRef = useRef(null);
  // Use centralized animation configuration
  const {
    timing,
    spring,
    stagger,
    shouldReduceMotion,
    variants
  } = useAnimationConfig();
  // Ensure only one dropdown is open at a time
  useEffect(() => {
    if (isLanguageOpen && isUserOpen) {
      setIsUserOpen(false);
    }
  }, [isLanguageOpen]);
  useEffect(() => {
    if (isUserOpen && isLanguageOpen) {
      setIsLanguageOpen(false);
    }
  }, [isUserOpen]);
  // Memoize scroll handler for performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsAtTop(scrollPosition === 0);
  }, []);
  // Memoize resize handler for performance
  const handleResize = useCallback(() => {
    // Only close mobile menu on resize, don't interfere with condensation
    if (window.innerWidth > 767) {
      setIsMenuOpen(false);
    }
    // Don't reset condensation state - let calculateVisibleItems handle it
  }, []);
  // Memoize locale change handler
  const handleLocaleChange = useCallback(code => {
    setLocale(code);
    localStorage.setItem(LANG_KEY, code);
  }, []);
  // Memoize menu toggle handler with animation
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);
  // Memoize close menu handler
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  // Memoize home button handler
  const handleHomeClick = useCallback(() => {
    if (homeButtonHandler) {
      homeButtonHandler();
    }
  }, [homeButtonHandler]);
  // Memoize login handler
  useCallback(() => {
    if (onLogin) {
      onLogin();
    }
  }, [onLogin]);
  // Use centralized animation variants
  const shimmerVariants = {
    hidden: {
      opacity: 0,
      x: '-100%'
    },
    visible: {
      opacity: shouldReduceMotion ? 0 : 0.6,
      x: '0%',
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  // Nav container variants
  const navVariants = {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };
  // Background state variants with mobile nav integration
  const backgroundVariants = {
    atTop: {
      ...variants.background.transparent,
      transition: timing.medium
    },
    scrolled: {
      ...variants.background.light,
      transition: timing.medium
    },
    mobileOpen: {
      ...variants.background.medium,
      transition: timing.medium
    }
  };
  useClickAway(menuRef, e => {
    if (!e.target.closest('.nex-nav-burger') && !e.target.closest('.nex-mobile-nav')) {
      setIsMenuOpen(false);
    }
  });
  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored) {
      setLocale(stored);
    } else {
      const fallback = languageOptions.find(l => l.code === getDefaultLocale())?.code || 'en';
      setLocale(fallback);
      localStorage.setItem(LANG_KEY, fallback);
    }
    setIsInitialized(true);
  }, [languageOptions]);
  // Listen for theme changes
  useEffect(() => {
    const checkThemeVariant = () => {
      const variant = document.documentElement.getAttribute('data-theme-variant');
      setCurrentThemeVariant(variant);
    };
    // Initial check
    checkThemeVariant();
    // Create a mutation observer to watch for theme changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme-variant') {
          checkThemeVariant();
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme-variant']
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  useEffect(() => {
    window.addEventListener('resize', handleResize, {
      passive: true
    });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  // Keyboard navigation for the entire nav
  useCallback(e => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  }, []);
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsxs(motion.nav, {
      className: `nex-nav${!isAtTop || isMenuOpen ? ' not-at-top' : ''}${theme === 'black-glass' || currentThemeVariant === 'black-glass' ? ' nex-nav--black-glass' : ''}`,
      ref: navRef,
      initial: "initial",
      animate: isInitialized ? "animate" : "initial",
      variants: navVariants,
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 'var(--nex-z-index-sticky)',
        overflow: 'visible'
      },
      role: "banner",
      "aria-label": "Main navigation",
      children: [theme !== 'black-glass' && currentThemeVariant !== 'black-glass' && /*#__PURE__*/jsx(motion.div, {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0
        },
        initial: "atTop",
        animate: isAtTop && !isMenuOpen ? "atTop" : isMenuOpen ? "mobileOpen" : "scrolled",
        variants: backgroundVariants
      }), theme !== 'black-glass' && currentThemeVariant !== 'black-glass' && /*#__PURE__*/jsx(motion.div, {
        className: "nex-nav-shimmer",
        variants: shimmerVariants,
        initial: "hidden",
        animate: isAtTop && !isMenuOpen ? "hidden" : "visible",
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: 'linear-gradient(120deg, rgba(255,255,255,0.15) 30%, rgba(255,24,1,0.08) 60%, rgba(0,184,255,0.08) 100%)',
          filter: 'blur(6px)',
          willChange: 'transform, opacity'
        },
        "aria-hidden": "true"
      }), /*#__PURE__*/jsxs(motion.div, {
        className: "nex-nav-inner-wrapper",
        variants: stagger,
        style: {
          position: 'relative',
          zIndex: 2
        },
        children: [/*#__PURE__*/jsx(motion.div, {
          className: "nex-nav-logo-placeholder",
          variants: variants.mobileNav.navItem,
          style: {
            width: 'calc(100px + var(--nex-spacing-md) * 2)',
            height: '44px',
            flexShrink: 0,
            marginLeft: 'var(--nex-spacing-md)'
          }
        }), /*#__PURE__*/jsx(NavItems, {
          navItems: navItems,
          isAtTop: isAtTop,
          onItemClick: item => item.onClick?.()
        }), /*#__PURE__*/jsx(NavControls, {
          isAuthenticated: isAuthenticated,
          user: user,
          onLogin: onLogin,
          onLogout: onLogout,
          onProfile: onProfile,
          languageOptions: languageOptions,
          currentLocale: locale,
          onLocaleChange: handleLocaleChange,
          isLanguageOpen: isLanguageOpen,
          onLanguageToggle: () => setIsLanguageOpen(!isLanguageOpen),
          onLanguageClose: () => setIsLanguageOpen(false),
          isUserOpen: isUserOpen,
          onUserToggle: () => setIsUserOpen(!isUserOpen),
          onUserClose: () => setIsUserOpen(false),
          isAtTop: isAtTop,
          endorsementCount: endorsementCount,
          subscription: subscription,
          onEndorsementsClick: onEndorsementsClick,
          onSubscriptionClick: onSubscriptionClick,
          onActivityLogClick: onActivityLogClick,
          onSecurityClick: onSecurityClick,
          onIntegrationsClick: onIntegrationsClick,
          onAdminPanelClick: onAdminPanelClick,
          theme: theme
        }), /*#__PURE__*/jsx(motion.button, {
          className: "nex-nav-burger-btn",
          "aria-label": isMenuOpen ? 'Close menu' : 'Open menu',
          "aria-expanded": isMenuOpen,
          "aria-controls": "mobile-nav-menu",
          onClick: toggleMenu,
          type: "button",
          variants: variants.interactive.hamburger.container,
          animate: isMenuOpen ? "open" : "closed",
          whileHover: {
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            borderColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            transition: timing.fast
          },
          whileTap: {
            backgroundColor: "rgba(255, 24, 1, 0.12)",
            borderColor: "rgba(255, 24, 1, 0.2)",
            transition: timing.fast
          },
          whileFocus: {
            outline: "2px solid var(--nex-signature)",
            outlineOffset: "2px",
            transition: timing.fast
          },
          children: /*#__PURE__*/jsxs(motion.div, {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            initial: false,
            children: [/*#__PURE__*/jsx(motion.div, {
              variants: variants.interactive.hamburger.menuIcon,
              animate: isMenuOpen ? "open" : "closed",
              style: {
                position: 'absolute'
              },
              children: /*#__PURE__*/jsx(Menu, {
                size: 20,
                "aria-hidden": "true"
              })
            }, "menu"), /*#__PURE__*/jsx(motion.div, {
              variants: variants.interactive.hamburger.closeIcon,
              animate: isMenuOpen ? "open" : "closed",
              style: {
                position: 'absolute'
              },
              children: /*#__PURE__*/jsx(X, {
                size: 20,
                "aria-hidden": "true"
              })
            }, "close")]
          })
        })]
      })]
    }), /*#__PURE__*/jsx(AnimatePresence, {
      mode: "wait",
      children: isMenuOpen && /*#__PURE__*/jsx(MobileNav, {
        isOpen: isMenuOpen,
        onClose: closeMenu,
        navItems: navItems,
        user: user,
        isAuthenticated: isAuthenticated,
        onLogin: onLogin,
        onLogout: onLogout,
        onProfile: onProfile,
        currentLocale: locale,
        languageOptions: languageOptions,
        onLocaleChange: handleLocaleChange,
        endorsementCount: endorsementCount,
        subscription: subscription,
        onEndorsementsClick: onEndorsementsClick,
        onSubscriptionClick: onSubscriptionClick,
        onActivityLogClick: onActivityLogClick,
        onSecurityClick: onSecurityClick,
        onIntegrationsClick: onIntegrationsClick,
        onAdminPanelClick: onAdminPanelClick,
        theme: theme
      })
    }), /*#__PURE__*/jsx(NavLogo, {
      logoSrc: logoSrc,
      displayName: displayName,
      onHomeClick: handleHomeClick,
      left: useResponsiveLeft()
    })]
  });
};
const NexNav = props => {
  return /*#__PURE__*/jsx(ThemeProvider, {
    children: /*#__PURE__*/jsx(NexNavInner, {
      ...props
    })
  });
};

const FooterContainer = ({
  children,
  variant = 'default',
  theme = 'auto',
  className = ''
}) => {
  const {
    timing,
    shouldReduceMotion
  } = useAnimationConfig();
  // Get theme-aware styles
  const getThemeStyles = () => {
    if (theme === 'black-glass') {
      return {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.92) 50%, rgba(0, 0, 0, 0.95) 100%)',
        backgroundLayer: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(10, 10, 10, 0.3) 30%, rgba(20, 20, 20, 0.2) 60%, rgba(0, 0, 0, 0.1) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        shimmer: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)',
        gradientOverlay: `
          radial-gradient(circle at 20% 40%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 70%),
          radial-gradient(circle at 80% 60%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 40%, transparent 70%),
          radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 80%)
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
  return /*#__PURE__*/jsxs(motion.div, {
    className: containerClass,
    initial: "initial",
    animate: "animate",
    variants: backgroundVariants,
    style: {
      position: 'relative',
      width: '100%',
      fontFamily: 'var(--nex-font-family-primary)',
      willChange: 'transform, opacity, backdrop-filter',
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/jsx(motion.div, {
      className: "nex-footer-background",
      style: {
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
      },
      variants: backgroundVariants
    }), /*#__PURE__*/jsx(motion.div, {
      className: "nex-footer-shimmer",
      style: {
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: themeStyles.shimmer,
        pointerEvents: 'none',
        zIndex: 0
      },
      variants: shimmerVariants,
      animate: {
        x: shouldReduceMotion ? '-100%' : '100%',
        transition: {
          duration: shouldReduceMotion ? 0 : 12,
          ease: [0.4, 0, 0.2, 1],
          repeat: shouldReduceMotion ? 0 : Infinity,
          repeatDelay: shouldReduceMotion ? 0 : 4
        }
      }
    }), /*#__PURE__*/jsx(motion.div, {
      className: "nex-footer-gradient-overlay",
      style: {
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
      },
      animate: {
        opacity: shouldReduceMotion ? 0.4 : 0.8,
        transition: {
          duration: shouldReduceMotion ? 0 : 8,
          ease: [0.4, 0, 0.2, 1],
          repeat: shouldReduceMotion ? 0 : Infinity,
          repeatType: 'reverse'
        }
      }
    }), /*#__PURE__*/jsx(motion.div, {
      className: "nex-footer-content-wrapper",
      style: {
        position: 'relative',
        zIndex: 1
      },
      variants: {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: {
            duration: shouldReduceMotion ? 0.2 : 0.4,
            ease: [0.4, 0, 0.2, 1],
            delay: shouldReduceMotion ? 0 : 0.1
          }
        }
      },
      children: children
    })]
  });
};

const FooterBranding = ({
  logoSrc,
  displayName,
  tagline,
  showLogoText = true,
  newsletter,
  variant = 'default',
  theme = 'auto'
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const {
    timing,
    shouldReduceMotion
  } = useAnimationConfig();
  // Newsletter submission handler
  const handleNewsletterSubmit = useCallback(async e => {
    e.preventDefault();
    if (!email.trim() || !newsletter?.onSubmit) return;
    setIsSubmitting(true);
    setError('');
    try {
      await newsletter.onSubmit(email.trim());
      setIsSubmitted(true);
      setEmail('');
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, newsletter]);
  // Simplified section variants for clean entrance
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 8
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };
  // Simplified item variants for clean animations
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 4
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  // Simplified message variants
  const messageVariants = {
    initial: {
      opacity: 0,
      y: -4
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: {
        duration: 0.15
      }
    }
  };
  const brandingClass = `nex-footer-branding ${variant === 'contact' ? 'nex-footer-branding--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-branding--black-glass' : ''}`;
  return /*#__PURE__*/jsxs(motion.div, {
    className: brandingClass,
    variants: sectionVariants,
    initial: "initial",
    animate: "animate",
    children: [logoSrc ? /*#__PURE__*/jsx(motion.div, {
      className: "nex-footer-branding__logo",
      variants: itemVariants,
      whileHover: {
        opacity: 0.9
      },
      whileTap: {
        opacity: 0.8
      },
      transition: timing.fast,
      children: /*#__PURE__*/jsx("img", {
        src: logoSrc,
        alt: displayName
      })
    }) : showLogoText && /*#__PURE__*/jsx(motion.div, {
      className: "nex-footer-branding__name",
      variants: itemVariants,
      whileHover: {
        color: theme === 'black-glass' ? '#ff6b35' : undefined,
        opacity: 0.9
      },
      transition: timing.fast,
      children: /*#__PURE__*/jsx("span", {
        children: displayName
      })
    }), tagline && showLogoText && /*#__PURE__*/jsx(motion.p, {
      className: "nex-footer-branding__tagline",
      variants: itemVariants,
      whileHover: {
        color: theme === 'black-glass' ? '#ffffff' : undefined,
        opacity: 0.9
      },
      transition: timing.fast,
      children: tagline
    }), newsletter?.enabled && variant !== 'contact' && /*#__PURE__*/jsxs(motion.div, {
      className: "nex-footer-branding__newsletter-container",
      variants: itemVariants,
      children: [/*#__PURE__*/jsxs(AnimatePresence, {
        children: [isSubmitted && /*#__PURE__*/jsxs(motion.div, {
          className: "nex-footer-branding__message nex-footer-branding__message--success",
          variants: messageVariants,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          children: [/*#__PURE__*/jsx(CheckCircle, {
            size: 14
          }), /*#__PURE__*/jsx("span", {
            children: "Successfully subscribed!"
          })]
        }), error && /*#__PURE__*/jsxs(motion.div, {
          className: "nex-footer-branding__message nex-footer-branding__message--error",
          variants: messageVariants,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          children: [/*#__PURE__*/jsx(AlertCircle, {
            size: 14
          }), /*#__PURE__*/jsx("span", {
            children: error
          })]
        })]
      }), /*#__PURE__*/jsxs(motion.form, {
        className: "nex-footer-branding__newsletter",
        onSubmit: handleNewsletterSubmit,
        variants: itemVariants,
        children: [/*#__PURE__*/jsxs(motion.div, {
          className: "nex-footer-branding__newsletter-input",
          whileHover: {
            opacity: 0.9,
            backgroundColor: theme === 'black-glass' ? 'rgba(255, 107, 53, 0.1)' : undefined
          },
          transition: timing.fast,
          children: [/*#__PURE__*/jsx(Mail, {
            size: 16
          }), /*#__PURE__*/jsx("input", {
            type: "email",
            placeholder: newsletter.placeholder || "Stay updated",
            value: email,
            onChange: e => setEmail(e.target.value),
            required: true,
            disabled: isSubmitting
          })]
        }), /*#__PURE__*/jsx(motion.button, {
          type: "submit",
          disabled: isSubmitting || !email.trim(),
          className: "nex-footer-branding__newsletter-button",
          whileHover: {
            opacity: 0.9,
            backgroundColor: theme === 'black-glass' ? 'rgba(255, 107, 53, 0.2)' : undefined
          },
          whileTap: {
            opacity: 0.8
          },
          transition: timing.fast,
          children: /*#__PURE__*/jsx(AnimatePresence, {
            mode: "wait",
            children: isSubmitting ? /*#__PURE__*/jsx(motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              },
              transition: timing.fast,
              className: "nex-footer-branding__button-spinner",
              children: /*#__PURE__*/jsx("div", {
                className: "spinner"
              })
            }, "loading") : /*#__PURE__*/jsx(motion.span, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              },
              transition: timing.fast,
              children: "Subscribe"
            }, "subscribe")
          })
        })]
      })]
    })]
  });
};

// Footer-specific animation configurations using common animation config
const FOOTER_ANIMATIONS = {
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
    initial: {
      opacity: 0,
      y: 10
    },
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
    initial: {
      opacity: 0,
      x: -5
    },
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
    initial: {
      opacity: 0,
      y: 8
    },
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
    initial: {
      opacity: 0,
      y: 5
    },
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
    initial: {
      opacity: 0,
      y: -8
    },
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
      initial: {
        opacity: 0,
        x: -8
      },
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
const useFooterAnimations = () => {
  const {
    shouldReduceMotion,
    timing,
    spring
  } = useAnimationConfig();
  // Return simplified animations if reduced motion is preferred
  if (shouldReduceMotion) {
    return {
      container: {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: timing.fast
        }
      },
      section: {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: timing.fast
        }
      },
      link: {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: timing.instant
        }
      },
      formField: {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: timing.fast
        }
      },
      button: {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1,
          transition: timing.fast
        }
      },
      message: {
        initial: {
          opacity: 0
        },
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
        container: {
          animate: {}
        },
        item: {
          initial: {
            opacity: 0
          },
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

const FooterSections = ({
  sections,
  variant = 'default',
  theme = 'auto'
}) => {
  const animations = useFooterAnimations();
  // Limit sections to maximum of 4 for better layout control
  const limitedSections = sections.slice(0, 4);
  // Determine if we have many sections for class-based styling
  const hasManySections = limitedSections.length >= 3;
  const sectionsClass = `nex-footer-sections ${variant === 'contact' ? 'nex-footer-sections--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-sections--black-glass' : ''} ${hasManySections ? 'nex-footer-sections--many-sections' : ''}`;
  // Optimize animation delays based on number of sections
  const getStaggerDelay = index => {
    if (limitedSections.length <= 2) {
      return index * 0.05;
    } else if (limitedSections.length <= 3) {
      return index * 0.03;
    } else {
      return index * 0.02;
    }
  };
  return /*#__PURE__*/jsx(motion.div, {
    className: sectionsClass,
    variants: animations.section,
    initial: "initial",
    animate: "animate",
    children: limitedSections.map((section, index) => /*#__PURE__*/jsxs(motion.div, {
      className: "nex-footer-sections__section",
      variants: animations.stagger.item,
      initial: "initial",
      animate: "animate",
      transition: {
        delay: getStaggerDelay(index)
      },
      children: [/*#__PURE__*/jsx(motion.h3, {
        className: "nex-footer-sections__title",
        whileHover: {
          opacity: 0.9
        },
        transition: animations.hover,
        children: section.title
      }), /*#__PURE__*/jsx(motion.ul, {
        className: "nex-footer-sections__links",
        variants: animations.stagger.container,
        initial: "initial",
        animate: "animate",
        transition: {
          delayChildren: getStaggerDelay(index),
          staggerChildren: limitedSections.length > 3 ? 0.02 : 0.03
        },
        children: section.links.slice(0, 6).map((link, linkIndex) => /*#__PURE__*/jsx(motion.li, {
          variants: animations.stagger.item,
          children: /*#__PURE__*/jsx(motion.a, {
            href: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "nex-footer-sections__link",
            whileHover: {
              opacity: 0.8
            },
            whileTap: {
              opacity: 0.7
            },
            transition: animations.hover,
            children: link.label
          })
        }, linkIndex))
      })]
    }, index))
  });
};

const socialIcons = {
  github: () => /*#__PURE__*/jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "16",
    height: "16",
    children: /*#__PURE__*/jsx("path", {
      d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    })
  }),
  twitter: () => /*#__PURE__*/jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "16",
    height: "16",
    children: /*#__PURE__*/jsx("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    })
  }),
  linkedin: () => /*#__PURE__*/jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "16",
    height: "16",
    children: /*#__PURE__*/jsx("path", {
      d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    })
  }),
  youtube: () => /*#__PURE__*/jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "16",
    height: "16",
    children: /*#__PURE__*/jsx("path", {
      d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
    })
  }),
  discord: () => /*#__PURE__*/jsx("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "16",
    height: "16",
    children: /*#__PURE__*/jsx("path", {
      d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"
    })
  })
};
const FooterBottom = ({
  displayName,
  socials = [],
  variant = 'default',
  theme = 'auto'
}) => {
  const {
    timing,
    shouldReduceMotion
  } = useAnimationConfig();
  const currentYear = new Date().getFullYear();
  // Simplified section variants for clean entrance
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 8
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  const bottomClass = `nex-footer-bottom ${variant === 'contact' ? 'nex-footer-bottom--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-bottom--black-glass' : ''}`;
  return /*#__PURE__*/jsx(motion.div, {
    className: bottomClass,
    variants: sectionVariants,
    children: /*#__PURE__*/jsxs("div", {
      className: "nex-footer-bottom__container",
      children: [/*#__PURE__*/jsxs(motion.div, {
        className: "nex-footer-bottom__copyright",
        whileHover: {
          opacity: 0.9
        },
        transition: timing.fast,
        children: ["\xA9 ", currentYear, " ", displayName, ". All rights reserved."]
      }), socials.length > 0 && /*#__PURE__*/jsx(motion.div, {
        className: "nex-footer-bottom__socials",
        initial: {
          opacity: 0,
          y: 4
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: {
          delay: 0.1,
          ...timing.medium
        },
        children: socials.map((social, index) => {
          const IconComponent = socialIcons[social.type];
          if (!IconComponent) return null;
          return /*#__PURE__*/jsx(motion.a, {
            href: social.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `nex-footer-bottom__social-link ${social.type}`,
            "aria-label": `Follow us on ${social.type}`,
            whileHover: {
              opacity: 0.9,
              color: theme === 'black-glass' ? '#ffffff' : undefined
            },
            whileTap: {
              opacity: 0.7
            },
            transition: {
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            },
            children: /*#__PURE__*/jsx(IconComponent, {})
          }, index);
        })
      })]
    })
  });
};

const FooterContactForm = ({
  contact,
  variant = 'contact',
  theme = 'auto'
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const animations = useFooterAnimations();
  // Contact form submission handler
  const handleContactSubmit = useCallback(async e => {
    e.preventDefault();
    if (!email.trim() || !message.trim() || !contact?.onSubmit) return;
    setIsSubmitting(true);
    setError('');
    try {
      await contact.onSubmit({
        email: email.trim(),
        message: message.trim()
      });
      setIsSubmitted(true);
      setEmail('');
      setMessage('');
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Contact submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, message, contact]);
  const formClass = `nex-footer-contact-form ${variant === 'contact' ? 'nex-footer-contact-form--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-contact-form--black-glass' : ''}`;
  return /*#__PURE__*/jsxs(motion.div, {
    className: formClass,
    variants: animations.formField,
    initial: "initial",
    animate: "animate",
    children: [/*#__PURE__*/jsx(motion.h3, {
      className: "nex-footer-contact-form__title",
      variants: animations.link,
      whileHover: {
        opacity: 0.9,
        color: theme === 'black-glass' ? '#ff6b35' : undefined
      },
      transition: animations.hover,
      children: contact.title || 'Get in Touch'
    }), contact.description && /*#__PURE__*/jsx(motion.p, {
      className: "nex-footer-contact-form__description",
      variants: animations.link,
      whileHover: {
        opacity: 0.9,
        color: theme === 'black-glass' ? '#ffffff' : undefined
      },
      transition: animations.hover,
      children: contact.description
    }), /*#__PURE__*/jsxs(AnimatePresence, {
      children: [isSubmitted && /*#__PURE__*/jsxs(motion.div, {
        className: "nex-footer-contact-form__message nex-footer-contact-form__message--success",
        variants: animations.message,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: [/*#__PURE__*/jsx(CheckCircle, {
          size: 16
        }), /*#__PURE__*/jsx("span", {
          children: "Message sent successfully!"
        })]
      }), error && /*#__PURE__*/jsxs(motion.div, {
        className: "nex-footer-contact-form__message nex-footer-contact-form__message--error",
        variants: animations.message,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: [/*#__PURE__*/jsx(AlertCircle, {
          size: 16
        }), /*#__PURE__*/jsx("span", {
          children: error
        })]
      })]
    }), /*#__PURE__*/jsxs(motion.form, {
      onSubmit: handleContactSubmit,
      className: "nex-footer-contact-form__form",
      variants: animations.formField,
      children: [/*#__PURE__*/jsxs(motion.div, {
        className: `nex-footer-contact-form__input ${focusedField === 'email' ? 'nex-footer-contact-form__input--focused' : ''}`,
        variants: animations.formField,
        whileHover: {
          opacity: 0.9
        },
        transition: animations.hover,
        children: [/*#__PURE__*/jsx(Mail, {
          size: 16
        }), /*#__PURE__*/jsx("input", {
          type: "email",
          placeholder: "Your email address",
          value: email,
          onChange: e => setEmail(e.target.value),
          onFocus: () => setFocusedField('email'),
          onBlur: () => setFocusedField(null),
          required: true,
          disabled: isSubmitting
        })]
      }), /*#__PURE__*/jsxs(motion.div, {
        className: `nex-footer-contact-form__textarea ${focusedField === 'message' ? 'nex-footer-contact-form__textarea--focused' : ''}`,
        variants: animations.formField,
        whileHover: {
          opacity: 0.9
        },
        transition: animations.hover,
        children: [/*#__PURE__*/jsx(MessageCircle, {
          size: 16
        }), /*#__PURE__*/jsx("textarea", {
          placeholder: contact.placeholder || "Tell us about your project or inquiry...",
          value: message,
          onChange: e => setMessage(e.target.value),
          onFocus: () => setFocusedField('message'),
          onBlur: () => setFocusedField(null),
          required: true,
          disabled: isSubmitting,
          rows: 2
        })]
      }), /*#__PURE__*/jsx(motion.button, {
        type: "submit",
        disabled: isSubmitting || !email.trim() || !message.trim(),
        className: "nex-footer-contact-form__button",
        variants: animations.button,
        whileHover: {
          opacity: 0.9
        },
        whileTap: {
          opacity: 0.8
        },
        transition: animations.hover,
        children: /*#__PURE__*/jsx(AnimatePresence, {
          mode: "wait",
          children: isSubmitting ? /*#__PURE__*/jsx(motion.div, {
            initial: {
              opacity: 0,
              rotate: -90
            },
            animate: {
              opacity: 1,
              rotate: 0
            },
            exit: {
              opacity: 0,
              rotate: 90
            },
            transition: animations.hover,
            className: "nex-footer-contact-form__button-spinner",
            children: /*#__PURE__*/jsx("div", {
              className: "spinner"
            })
          }, "loading") : /*#__PURE__*/jsxs(motion.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            transition: animations.hover,
            className: "nex-footer-contact-form__button-content",
            children: [/*#__PURE__*/jsx(Send, {
              size: 16
            }), /*#__PURE__*/jsx("span", {
              children: "Send Message"
            })]
          }, "send")
        })
      })]
    })]
  });
};

const NexFooter = ({
  logoSrc,
  displayName,
  tagline,
  showLogoText = true,
  sections = [],
  newsletter,
  contact,
  socials = [],
  variant = 'default',
  theme = 'auto',
  className = ''
}) => {
  const animations = useFooterAnimations();
  // Determine theme class
  const themeClass = theme === 'black-glass' ? 'nex-footer-container--black-glass' : '';
  // Determine variant class
  const variantClass = variant === 'contact' ? 'nex-footer-container--contact' : !logoSrc && !displayName && sections.length > 0 ? 'nex-footer-container--sections-only' : '';
  // Add contact class when contact form is present
  const contactClass = contact?.enabled ? 'nex-footer-container--has-contact' : '';
  return /*#__PURE__*/jsx(motion.footer, {
    className: `nex-footer ${className}`,
    initial: "initial",
    animate: "animate",
    variants: animations.container,
    style: {
      position: 'relative',
      width: '100%',
      zIndex: 1
    },
    children: /*#__PURE__*/jsxs(FooterContainer, {
      variant: variant,
      theme: theme,
      className: `${className} ${themeClass} ${variantClass} ${contactClass}`,
      children: [/*#__PURE__*/jsx(motion.div, {
        className: "nex-footer-content",
        variants: animations.section,
        children: /*#__PURE__*/jsxs(motion.div, {
          className: "nex-footer-inner",
          variants: animations.stagger.container,
          children: [/*#__PURE__*/jsx(motion.div, {
            variants: animations.stagger.item,
            children: /*#__PURE__*/jsx(FooterBranding, {
              logoSrc: logoSrc,
              displayName: displayName,
              tagline: tagline,
              showLogoText: showLogoText,
              newsletter: newsletter,
              variant: variant,
              theme: theme
            })
          }), /*#__PURE__*/jsx(AnimatePresence, {
            children: sections.length > 0 && variant !== 'contact' && /*#__PURE__*/jsx(motion.div, {
              variants: animations.stagger.item,
              initial: "initial",
              animate: "animate",
              exit: "initial",
              children: /*#__PURE__*/jsx(FooterSections, {
                sections: sections,
                variant: variant,
                theme: theme
              })
            }, "footer-sections")
          }), /*#__PURE__*/jsx(AnimatePresence, {
            children: contact?.enabled && /*#__PURE__*/jsx(motion.div, {
              variants: animations.stagger.item,
              initial: "initial",
              animate: "animate",
              exit: "initial",
              className: `nex-footer-contact-side ${theme === 'black-glass' ? 'nex-footer-contact-side--black-glass' : ''}`,
              children: /*#__PURE__*/jsx(FooterContactForm, {
                contact: contact,
                variant: variant,
                theme: theme
              })
            }, "footer-contact")
          })]
        })
      }), /*#__PURE__*/jsx(motion.div, {
        variants: animations.section,
        transition: {
          delay: 0.15
        },
        children: /*#__PURE__*/jsx(FooterBottom, {
          displayName: displayName,
          socials: socials,
          variant: variant,
          theme: theme
        })
      })]
    })
  });
};

const NexSeparator = ({
  className,
  text,
  backgroundColor = '#fff',
  fontSize = 14,
  color
}) => {
  return /*#__PURE__*/jsxs("div", {
    className: `nex-separator ${className || ''}`,
    children: [/*#__PURE__*/jsx("div", {
      className: "separator-line",
      style: {
        borderColor: color
      }
    }), text && /*#__PURE__*/jsx("span", {
      className: "separator-text",
      style: {
        backgroundColor,
        fontSize,
        color
      },
      children: text
    }), /*#__PURE__*/jsx("div", {
      className: "separator-line",
      style: {
        borderColor: color
      }
    })]
  });
};

const NexVersion = ({
  version,
  handleSave
}) => {
  const wrapperRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newVersion, setNewVersion] = useState(version);
  const [originalVersion, setOriginalVersion] = useState(version);
  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNewVersion(originalVersion);
        setIsEditing(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [originalVersion]);
  const handleClick = () => {
    setIsEditing(true);
    setOriginalVersion(newVersion);
  };
  const handleInputChange = e => {
    setNewVersion(e.target.value);
  };
  const handleSaveClick = () => {
    if (handleSave) {
      handleSave(newVersion);
    }
    setIsEditing(false);
    setOriginalVersion(newVersion);
  };
  return /*#__PURE__*/jsxs("div", {
    className: "nex-version-wrapper",
    ref: wrapperRef,
    children: [/*#__PURE__*/jsx(motion.div, {
      className: `nex-version ${isEditing ? 'clicked' : ''}`,
      onClick: handleClick,
      initial: {
        opacity: 1
      },
      animate: {
        opacity: isEditing ? 0.5 : 1
      },
      transition: {
        duration: 0.3
      },
      children: originalVersion
    }), isEditing && /*#__PURE__*/jsxs(motion.div, {
      className: "nex-version-edit-wrapper",
      initial: {
        opacity: 0,
        x: -20
      },
      animate: {
        opacity: 1,
        x: 0
      },
      transition: {
        duration: 0.3
      },
      children: [/*#__PURE__*/jsx(FontAwesomeIcon, {
        icon: faArrowRight,
        className: "arrow-icon"
      }), /*#__PURE__*/jsx(NexInput, {
        type: "text",
        placeholder: newVersion,
        onChange: handleInputChange,
        fieldSize: "small",
        width: 80
      }), /*#__PURE__*/jsx(NexButton, {
        onClick: handleSaveClick,
        text: "Save",
        type: "success"
      })]
    })]
  });
};

export { NexAlert, NexAlertsProvider, NexButton, NexCard, NexCarousel, NexCopyToClipboard, NexFooter, NexHeroCard, NexInfoPanel, NexInput, NexLoader, NexModal, NexNav, NexSeparator, NexSimpleTextCard, NexVersion, useAlerts };
//# sourceMappingURL=index.js.map
