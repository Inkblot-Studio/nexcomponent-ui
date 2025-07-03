import React, { useState, useEffect, useRef } from 'react';
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

  useClickAway(menuRef, (e) => {
    if (!(e.target as HTMLElement).closest('.nex-nav-burger')) {
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

  const handleLocaleChange = (code: string) => {
    setLocale(code);
    localStorage.setItem(LANG_KEY, code);
  };

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
              duration: 1.2,
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
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
            },
          },
        }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 'var(--nex-z-index-sticky)', overflow: 'visible' }}
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
        />
        <nav className="nex-nav-inner-wrapper">
          {logoSrc ? (
            <div className="nex-nav-client-logo" onClick={homeButtonHandler}>
              <img src={logoSrc} alt={displayName} className="nex-nav-logo" />
            </div>
          ) : (
            <div className="nex-nav-client-name" onClick={homeButtonHandler}>
              <div className="client-name">{displayName}</div>
            </div>
          )}

          <ul className="nex-nav-list" role="menubar">
            {navItems.map((item, i) => (
              <NavItem key={i} label={item.label} onClick={item.onClick} />
            ))}
          </ul>

          <div className="nex-nav-right">
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
              <div className="nex-nav-login-button" onClick={onLogin} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: 'var(--nex-font-size-xs)', fontWeight: 'var(--nex-font-weight-medium)', cursor: 'pointer' }}>
                <Fingerprint size={18} />
                <span>Login</span>
              </div>
            )}
            <button
              className={`nex-nav-burger-btn${isMenuOpen ? ' menu-open' : ''}`}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              style={{}}
            >
              <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} initial={false} animate={isMenuOpen ? 'open' : 'closed'}>
                <motion.div
                  key="menu"
                  initial={{ opacity: 1, scale: 1, rotate: 0 }}
                  animate={isMenuOpen ? { opacity: 0, scale: 0.7, rotate: 45 } : { opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: 45 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  style={{ position: 'absolute' }}
                >
                  <Menu size={24} />
                </motion.div>
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
                  animate={isMenuOpen ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.7, rotate: -45 }}
                  exit={{ opacity: 0, scale: 0.7, rotate: -45 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  style={{ position: 'absolute' }}
                >
                  <X size={24} className="nex-nav-x-shimmer" />
                </motion.div>
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
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
    </>
  );
};

export default NexNav;
