import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import './NexNav.scss';

import {
  NavItems,
  NavControls,
  NavLogo,
  MobileNav,
  ThemeToggle
} from './components';

import { NexNavProps } from './NexNav.types';
import { Menu, X } from 'lucide-react';
import { useAnimationConfig, ANIMATION_VARIANTS } from '../../utils/animationConfig';

const LANG_KEY = 'nex-locale';

const getDefaultLocale = (): string => {
  const lang = navigator.language || 'en';
  return lang.split('-')[0];
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
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const menuRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);
  
  // Use centralized animation configuration
  const { timing, spring, stagger, shouldReduceMotion, variants } = useAnimationConfig();

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

  // Use centralized animation variants
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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 'var(--nex-z-index-sticky)',
          overflow: 'visible'
        }}
        role="banner"
        aria-label="Main navigation"
      >
        {/* Background state animation */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 0
          }}
          initial="atTop"
          animate={isAtTop && !isMenuOpen ? "atTop" : isMenuOpen ? "mobileOpen" : "scrolled"}
          variants={backgroundVariants}
        />
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
            zIndex: 1,
            background: 'linear-gradient(120deg, rgba(255,255,255,0.15) 30%, rgba(255,24,1,0.08) 60%, rgba(0,184,255,0.08) 100%)',
            filter: 'blur(6px)',
            willChange: 'transform, opacity'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="nex-nav-inner-wrapper"
          variants={stagger}
          style={{
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Logo Placeholder - Maintains space for mobile logo */}
          <motion.div 
            className="nex-nav-logo-placeholder"
            variants={variants.mobileNav.navItem}
            style={{
              width: 'calc(100px + var(--nex-spacing-md) * 2)',
              height: '44px',
              flexShrink: 0,
              marginLeft: 'var(--nex-spacing-md)'
            }}
          />

          {/* Navigation Items */}
          <NavItems 
            navItems={navItems}
            isAtTop={isAtTop}
            onItemClick={(item) => item.onClick?.()}
          />

          {/* Right Section */}
          <NavControls
            isAuthenticated={isAuthenticated}
            user={user}
            onLogin={onLogin}
            onLogout={onLogout}
            onProfile={onProfile}
            languageOptions={languageOptions}
            currentLocale={locale}
            onLocaleChange={handleLocaleChange}
            isLanguageOpen={isLanguageOpen}
            onLanguageToggle={() => setIsLanguageOpen(!isLanguageOpen)}
            onLanguageClose={() => setIsLanguageOpen(false)}
            isUserOpen={isUserOpen}
            onUserToggle={() => setIsUserOpen(!isUserOpen)}
            onUserClose={() => setIsUserOpen(false)}
            isAtTop={isAtTop}
            endorsementCount={endorsementCount}
            subscription={subscription}
            onEndorsementsClick={onEndorsementsClick}
            onSubscriptionClick={onSubscriptionClick}
            onActivityLogClick={onActivityLogClick}
            onSecurityClick={onSecurityClick}
            onIntegrationsClick={onIntegrationsClick}
            onAdminPanelClick={onAdminPanelClick}
          />
            
          {/* Hamburger Button with Enterprise Animations */}
          <motion.button
            className="nex-nav-burger-btn"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            onClick={toggleMenu}
            type="button"
            variants={variants.interactive.hamburger.container}
            animate={isMenuOpen ? "open" : "closed"}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              borderColor: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              transition: timing.fast
            }}
            whileTap={{
              backgroundColor: "rgba(255, 24, 1, 0.12)",
              borderColor: "rgba(255, 24, 1, 0.2)",
              transition: timing.fast
            }}
            whileFocus={{
              outline: "2px solid var(--nex-signature)",
              outlineOffset: "2px",
              transition: timing.fast
            }}
          >
            <motion.div 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
              initial={false}
            >
              <motion.div
                key="menu"
                variants={variants.interactive.hamburger.menuIcon}
                animate={isMenuOpen ? "open" : "closed"}
                style={{ position: 'absolute' }}
              >
                <Menu size={20} aria-hidden="true" />
              </motion.div>
              <motion.div
                key="close"
                variants={variants.interactive.hamburger.closeIcon}
                animate={isMenuOpen ? "open" : "closed"}
                style={{ position: 'absolute' }}
              >
                <X size={20} aria-hidden="true" />
              </motion.div>
            </motion.div>
          </motion.button>
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
      <NavLogo
        logoSrc={logoSrc}
        displayName={displayName}
        onHomeClick={handleHomeClick}
        left={useResponsiveLeft()}
      />
    </>
  );
};

export default NexNav;
