import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useClickAway } from 'react-use';
import './NexNav.scss';

import NavItem from './components/NavItem';
import UserMenu from './components/UserMenu';
import LanguageSwitcher from './components/LanguageSwitcher';
import MobileNav from './components/MobileNav';

import { NexNavProps } from './NexNav.types';

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
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`nex-nav ${!isAtTop ? 'not-at-top' : ''}`}>
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
              <div className="nex-nav-login-button" onClick={onLogin}>
                Log In
              </div>
            )}
          </div>
        </nav>
      </div>

      <div
        className={`nex-nav-burger ${isMenuOpen ? 'menu-open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div /><div /><div />
      </div>

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
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NexNav;
