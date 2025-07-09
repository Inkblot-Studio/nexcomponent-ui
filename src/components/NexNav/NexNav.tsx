import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useClickAway } from 'react-use';
import './NexNav.scss';

import NavItem from './components/NavItem';
import UserMenu from './components/UserMenu';
import LanguageSwitcher from './components/LanguageSwitcher';
import MobileNav from './components/MobileNav';

import { NexNavProps } from './NexNav.types';
import { Fingerprint, Menu, X } from 'lucide-react';

const LANG_KEY = 'nex-locale';

// Enterprise-level animation constants
const ANIMATION_CONFIG = {
  // Fast, responsive animations
  fast: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  medium: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  
  // Spring configurations for natural feel
  spring: { 
    type: "spring", 
    stiffness: 400, 
    damping: 30,
    mass: 0.8
  },
  
  // Stagger delays for sequential animations
  stagger: {
    container: { delayChildren: 0.1, staggerChildren: 0.05 }
  }
};

const getDefaultLocale = (): string => {
  const lang = navigator.language || 'en';
  return lang.split('-')[0];
};

const NexNav: React.FC<NexNavProps> = ({
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
  onAdminPanelClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [locale, setLocale] = useState('en');
  const [isInitialized, setIsInitialized] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);
  
  // Respect user's motion preferences
  const shouldReduceMotion = useReducedMotion();
  
  // Motion values for advanced animations
  const scrollY = useMotionValue(0);
  const backgroundOpacity = useTransform(scrollY, [0, 50], [0, 0.7]);
  const blurAmount = useTransform(scrollY, [0, 50], [0, 24]);
  const shadowIntensity = useTransform(scrollY, [0, 50], [0, 0.12]);
  
  // Spring-based transforms for smooth animations with better ease-in-out
  const springBackgroundOpacity = useSpring(backgroundOpacity, {
    stiffness: 200,
    damping: 25,
    mass: 1,
    restDelta: 0.001
  });
  
  const springBlurAmount = useSpring(blurAmount, {
    stiffness: 200,
    damping: 25,
    mass: 1,
    restDelta: 0.001
  });

  // Memoize scroll handler for performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsAtTop(scrollPosition === 0);
    scrollY.set(scrollPosition);
  }, [scrollY]);

  // Memoize resize handler for performance
  const handleResize = useCallback(() => {
    if (window.innerWidth > 767) setIsMenuOpen(false);
  }, []);

  // Memoize locale change handler
  const handleLocaleChange = useCallback((code: string) => {
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
  const handleLoginClick = useCallback(() => {
    if (onLogin) {
      onLogin();
    }
  }, [onLogin]);

  // Memoize nav items with proper accessibility
  const memoizedNavItems = useMemo(() => {
    return navItems.map((item, i) => ({
      ...item,
      key: `nav-item-${i}`,
      'aria-label': item.label,
      'aria-current': undefined // Will be set by NavItem component if needed
    }));
  }, [navItems]);

  // Optimized shimmer animation variants
  const shimmerVariants = {
    hidden: { 
      opacity: 0,
      x: '-100%',
      scale: 0.8
    },
    visible: { 
      opacity: shouldReduceMotion ? 0 : 0.6,
      x: '0%',
      scale: 1,
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

  // Nav item variants
  const navItemVariants = {
    initial: {
      y: -20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Burger button variants
  const burgerVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: ANIMATION_CONFIG.fast
    },
    open: {
      rotate: 180,
      scale: 1.05,
      transition: ANIMATION_CONFIG.fast
    }
  };

  // Icon variants for smooth transitions
  const iconVariants = {
    closed: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: ANIMATION_CONFIG.fast
    },
    open: {
      opacity: 0,
      scale: 0.8,
      rotate: 45,
      transition: ANIMATION_CONFIG.fast
    }
  };

  const closeIconVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      rotate: -45,
      transition: ANIMATION_CONFIG.fast
    },
    open: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: ANIMATION_CONFIG.fast
    }
  };

  useClickAway(menuRef, (e) => {
    if (!(e.target as HTMLElement).closest('.nex-nav-burger') && 
        !(e.target as HTMLElement).closest('.nex-mobile-nav')) {
      setIsMenuOpen(false);
    }
  });

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored) {
      setLocale(stored);
    } else {
      const fallback = languageOptions.find((l) => l.code === getDefaultLocale())?.code || 'en';
      setLocale(fallback);
      localStorage.setItem(LANG_KEY, fallback);
    }
    setIsInitialized(true);
  }, [languageOptions]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Keyboard navigation for the entire nav
  const handleNavKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <>
      <motion.nav
        className={`nex-nav${!isAtTop || isMenuOpen ? ' not-at-top' : ''}`}
        ref={navRef}
        initial="initial"
        animate={isInitialized ? "animate" : "initial"}
        variants={navVariants}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 'var(--nex-z-index-sticky)',
          overflow: 'visible',
          background: `rgba(255,255,255,${springBackgroundOpacity})`,
          backdropFilter: `blur(${springBlurAmount}px) saturate(180%)`,
          WebkitBackdropFilter: `blur(${springBlurAmount}px) saturate(180%)`,
          borderBottom: isAtTop ? 'none' : `1.5px solid rgba(255,255,255,${springBackgroundOpacity.get() * 0.3})`,
          boxShadow: isAtTop ? 'none' : `0 8px 32px -8px rgba(0,0,0,${shadowIntensity}), 0 0 0 1.5px rgba(255,255,255,${springBackgroundOpacity.get() * 0.15}) inset`
        }}
        role="banner"
        aria-label="Main navigation"
      >
        {/* Optimized Shimmer Effect */}
        <motion.div
          className="nex-nav-shimmer"
          variants={shimmerVariants}
          initial="hidden"
          animate={isAtTop && !isMenuOpen ? "hidden" : "visible"}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            pointerEvents: 'none',
            zIndex: 0,
            background: 'linear-gradient(120deg, rgba(255,255,255,0.15) 30%, rgba(255,24,1,0.08) 60%, rgba(0,184,255,0.08) 100%)',
            filter: 'blur(6px)',
            willChange: 'transform, opacity'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="nex-nav-inner-wrapper"
          variants={ANIMATION_CONFIG.stagger}
        >
          {/* Logo Placeholder - Maintains space for mobile logo */}
          <motion.div 
            className="nex-nav-logo-placeholder"
            variants={navItemVariants}
            style={{
              width: 'calc(100px + var(--nex-spacing-md) * 2)',
              height: '44px',
              flexShrink: 0,
              marginLeft: 'var(--nex-spacing-md)'
            }}
          />

          {/* Navigation Items */}
          <motion.ul 
            className="nex-nav-list" 
            role="menubar"
            aria-label="Main menu"
            variants={ANIMATION_CONFIG.stagger}
          >
            {memoizedNavItems.map((item, i) => (
              <motion.li
                key={item.key || i}
                variants={navItemVariants}
              >
                <NavItem 
                  label={item.label} 
                  onClick={item.onClick}
                  isActive={false} // You can add logic to determine active state
                  disabled={item.disabled}
                  badge={item.badge}
                  subItems={item.subItems}
                  description={item.description}
                  isAtTop={isAtTop}
                />
              </motion.li>
            ))}
          </motion.ul>

          {/* Right Section */}
          <motion.div 
            className="nex-nav-right" 
            role="group" 
            aria-label="User controls"
            variants={navItemVariants}
          >
            <motion.div variants={navItemVariants}>
              <LanguageSwitcher
                currentLocale={locale}
                options={languageOptions}
                onChange={handleLocaleChange}
              />
            </motion.div>
            
            {isAuthenticated && user && onLogout && onProfile ? (
              <motion.div variants={navItemVariants}>
                <UserMenu
                  user={user}
                  onLogout={onLogout}
                  onProfile={onProfile}
                  endorsementCount={endorsementCount}
                  subscription={subscription}
                  onEndorsementsClick={onEndorsementsClick}
                  onSubscriptionClick={onSubscriptionClick}
                  onActivityLogClick={onActivityLogClick}
                  onSecurityClick={onSecurityClick}
                  onIntegrationsClick={onIntegrationsClick}
                  onAdminPanelClick={onAdminPanelClick}
                />
              </motion.div>
            ) : (
              <motion.div 
                className="nex-nav-login-button" 
                onClick={handleLoginClick}
                role="button"
                tabIndex={0}
                aria-label="Sign in to your account"
                onKeyDown={(e) => e.key === 'Enter' && handleLoginClick()}
                variants={navItemVariants}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  borderColor: "rgba(255, 255, 255, 0.18)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                  scale: shouldReduceMotion ? 1 : 1.02,
                  transition: ANIMATION_CONFIG.fast
                }}
                whileTap={{
                  backgroundColor: "rgba(255, 24, 1, 0.15)",
                  borderColor: "rgba(255, 24, 1, 0.25)",
                  scale: shouldReduceMotion ? 1 : 0.98,
                  transition: ANIMATION_CONFIG.fast
                }}
                whileFocus={{
                  outline: "2px solid var(--nex-signature)",
                  outlineOffset: "2px",
                  transition: ANIMATION_CONFIG.fast
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={ANIMATION_CONFIG.fast}
                >
                  <Fingerprint size={18} aria-hidden="true" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...ANIMATION_CONFIG.fast, delay: 0.05 }}
                >
                  Login
                </motion.span>
              </motion.div>
            )}
            
            {/* Mobile Burger Button - Also in nav for better accessibility */}
            <motion.button
              className="nex-nav-burger-btn"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={toggleMenu}
              type="button"
              variants={burgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                scale: shouldReduceMotion ? 1 : 1.05,
                transition: ANIMATION_CONFIG.fast
              }}
              whileTap={{
                backgroundColor: "rgba(255, 24, 1, 0.12)",
                borderColor: "rgba(255, 24, 1, 0.2)",
                scale: shouldReduceMotion ? 1 : 0.95,
                transition: ANIMATION_CONFIG.fast
              }}
              whileFocus={{
                outline: "2px solid var(--nex-signature)",
                outlineOffset: "2px",
                transition: ANIMATION_CONFIG.fast
              }}
            >
              <motion.div 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                initial={false}
              >
                <motion.div
                  key="menu"
                  variants={iconVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  style={{ position: 'absolute' }}
                >
                  <Menu size={20} aria-hidden="true" />
                </motion.div>
                <motion.div
                  key="close"
                  variants={closeIconVariants}
                  animate={isMenuOpen ? "open" : "closed"}
                  style={{ position: 'absolute' }}
                >
                  <X size={20} aria-hidden="true" />
                </motion.div>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>



      {/* Mobile Navigation with Optimized Animations */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <MobileNav
            isOpen={isMenuOpen}
            onClose={closeMenu}
            navItems={navItems}
            user={user}
            isAuthenticated={isAuthenticated}
            onLogin={onLogin}
            onLogout={onLogout}
            onProfile={onProfile}
            currentLocale={locale}
            languageOptions={languageOptions}
            onLocaleChange={handleLocaleChange}
            endorsementCount={endorsementCount}
            subscription={subscription}
            onEndorsementsClick={onEndorsementsClick}
            onSubscriptionClick={onSubscriptionClick}
            onActivityLogClick={onActivityLogClick}
            onSecurityClick={onSecurityClick}
            onIntegrationsClick={onIntegrationsClick}
            onAdminPanelClick={onAdminPanelClick}
          />
        )}
      </AnimatePresence>

      {/* Mobile Logo with Smooth Animations */}
      <motion.div
        className="nex-nav-mobile-logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ANIMATION_CONFIG.medium}
        style={{
          position: 'fixed',
          top: 'var(--nex-spacing-md)',
          left: 'var(--nex-spacing-md)',
          zIndex: 'calc(var(--nex-z-index-modal) + 10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',
          height: '44px',
          cursor: 'pointer'
        }}
        onClick={handleHomeClick}
        role="button"
        tabIndex={0}
        aria-label={`${displayName} - Go to home`}
        onKeyDown={(e) => e.key === 'Enter' && handleHomeClick()}
        whileHover={{
          scale: shouldReduceMotion ? 1 : 1.05,
          transition: ANIMATION_CONFIG.fast
        }}
        whileTap={{
          scale: shouldReduceMotion ? 1 : 0.95,
          transition: ANIMATION_CONFIG.fast
        }}
      >
        {logoSrc ? (
          <motion.div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              padding: '8px',
              boxSizing: 'border-box'
            }}
            whileHover={{
              scale: shouldReduceMotion ? 1 : 1.1,
              transition: ANIMATION_CONFIG.fast
            }}
          >
            <motion.img 
              src={logoSrc} 
              alt={displayName} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={ANIMATION_CONFIG.medium}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'brightness(0.9) contrast(1.1)',
                maxWidth: '24px',
                maxHeight: '24px'
              }}
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('fallback-hidden');
              }}
            />
            <motion.div 
              className="fallback-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={ANIMATION_CONFIG.medium}
              style={{
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
              }}
            >
              {displayName?.slice(0, 2)}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              padding: '4px 12px',
              boxSizing: 'border-box'
            }}
            whileHover={{
              scale: shouldReduceMotion ? 1 : 1.05,
              transition: ANIMATION_CONFIG.fast
            }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={ANIMATION_CONFIG.medium}
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--nex-color-text-primary)',
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
              }}
            >
              {displayName || 'NexComponent'}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default NexNav;
