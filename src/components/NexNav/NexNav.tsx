import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import './NexNav.scss';

import NavItem from './components/NavItem';
import UserMenu from './components/UserMenu';
import LanguageSwitcher from './components/LanguageSwitcher';
import MobileNav from './components/MobileNav';

import { NexNavProps } from './NexNav.types';
import { Fingerprint, Menu, X } from 'lucide-react';

const LANG_KEY = 'nex-locale';

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
  const menuRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);

  // Memoize scroll handler for performance
  const handleScroll = useCallback(() => {
    setIsAtTop(window.scrollY === 0);
  }, []);

  // Memoize resize handler for performance
  const handleResize = useCallback(() => {
    if (window.innerWidth > 767) setIsMenuOpen(false);
  }, []);

  // Memoize locale change handler
  const handleLocaleChange = useCallback((code: string) => {
    setLocale(code);
    localStorage.setItem(LANG_KEY, code);
  }, []);

  // Memoize menu toggle handler
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
      <motion.div
        className={`nex-nav${!isAtTop ? ' not-at-top' : ''}`}
        initial={false}
        animate={isAtTop ? 'atTop' : 'scrolled'}
        variants={{
          atTop: {
            background: 'rgba(0,0,0,0)',
            boxShadow: '0 0 0 0 rgba(0,0,0,0)',
            borderBottom: '0px solid rgba(255,255,255,0)',
            backdropFilter: 'blur(0px) saturate(100%)',
            WebkitBackdropFilter: 'blur(0px) saturate(100%)',
            transition: {
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            },
          },
          scrolled: {
            background: 'rgba(255,255,255,0.7)',
            boxShadow: '0 8px 32px -8px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(255,255,255,0.13) inset',
            borderBottom: '1.5px solid rgba(255,255,255,0.22)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            transition: {
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 'var(--nex-z-index-sticky)', overflow: 'visible' }}
        role="banner"
        aria-label="Main navigation"
      >
        <motion.div
          className="nex-nav-shimmer"
          initial={{ opacity: 0, x: '-30%' }}
          animate={isAtTop ? { opacity: 0, x: '-30%' } : { opacity: 0.7, x: '0%' }}
          transition={{ duration: 2.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            pointerEvents: 'none',
            zIndex: 0,
            background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 30%, rgba(255,24,1,0.12) 60%, rgba(0,184,255,0.12) 100%)',
            filter: 'blur(8px)',
          }}
          aria-hidden="true"
        />
        <nav 
          className="nex-nav-inner-wrapper" 
          ref={navRef}
          role="navigation"
          aria-label="Primary navigation"
          onKeyDown={handleNavKeyDown}
        >


          {/* Logo Placeholder - Maintains space for mobile logo */}
          <div 
            className="nex-nav-logo-placeholder"
            style={{
              width: 'calc(100px + var(--nex-spacing-md) * 2)',
              height: '44px',
              flexShrink: 0,
              marginLeft: 'var(--nex-spacing-md)'
            }}
          />

          {/* Navigation Items */}
          <ul 
            className="nex-nav-list" 
            role="menubar"
            aria-label="Main menu"
          >
            {memoizedNavItems.map((item, i) => (
              <NavItem 
                key={item.key || i}
                label={item.label} 
                onClick={item.onClick}
                isActive={false} // You can add logic to determine active state
                disabled={item.disabled}
                badge={item.badge}
                subItems={item.subItems}
                description={item.description}
                isAtTop={isAtTop}
              />
            ))}
          </ul>

          {/* Right Section */}
          <div className="nex-nav-right" role="group" aria-label="User controls">
            <LanguageSwitcher
              currentLocale={locale}
              options={languageOptions}
              onChange={handleLocaleChange}
            />
            {isAuthenticated && user && onLogout && onProfile ? (
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
            ) : (
              <motion.div 
                className="nex-nav-login-button" 
                onClick={handleLoginClick}
                role="button"
                tabIndex={0}
                aria-label="Sign in to your account"
                onKeyDown={(e) => e.key === 'Enter' && handleLoginClick()}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{
                  backgroundColor: "rgba(255, 24, 1, 0.15)",
                  borderColor: "rgba(255, 24, 1, 0.2)"
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Fingerprint size={18} aria-hidden="true" />
                <span>Login</span>
              </motion.div>
            )}
          </div>
        </nav>
      </motion.div>

      {/* Hamburger button outside nav container to avoid z-index stacking context issues */}
      <motion.button
        className={`nex-nav-burger-btn${isMenuOpen ? ' menu-open' : ''}`}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav-menu"
        onClick={toggleMenu}
        type="button"
        ref={menuRef}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.12)",
          boxShadow: "0 3px 12px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
        }}
        whileTap={{
          backgroundColor: "rgba(255, 24, 1, 0.1)",
          borderColor: "rgba(255, 24, 1, 0.15)",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 24, 1, 0.2)"
        }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <motion.div 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
          initial={false} 
          animate={isMenuOpen ? 'open' : 'closed'}
        >
          <motion.div
            key="menu"
            initial={{ opacity: 1, scale: 1, rotate: 0 }}
            animate={isMenuOpen ? { opacity: 0, scale: 0.7, rotate: 45 } : { opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 45 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'absolute' }}
          >
            <Menu size={20} aria-hidden="true" />
          </motion.div>
          <motion.div
            key="close"
            initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
            animate={isMenuOpen ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.7, rotate: -45 }}
            exit={{ opacity: 0, scale: 0.7, rotate: -45 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'absolute' }}
          >
            <X size={20} className="nex-nav-x-shimmer" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
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

      {/* Mobile Logo - Always on top like hamburger */}
      <motion.div
        className="nex-nav-mobile-logo"
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
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onClick={handleHomeClick}
        role="button"
        tabIndex={0}
        aria-label={`${displayName} - Go to home`}
        onKeyDown={(e) => e.key === 'Enter' && handleHomeClick()}

      >
        {logoSrc ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '8px',
            boxSizing: 'border-box'
          }}>
            <img 
              src={logoSrc} 
              alt={displayName} 
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
            <div 
              className="fallback-hidden"
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
            </div>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '4px 12px',
            boxSizing: 'border-box'
          }}>
            <div style={{
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
            }}>
              {displayName || 'NexComponent'}
            </div>
          </div>
        )}
      </motion.div>

    </>
  );
};

export default NexNav;
