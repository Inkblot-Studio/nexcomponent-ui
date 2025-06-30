import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileNav.scss';
import { MobileNavProps } from './MobileNav.types';

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navItems,
  user,
  isAuthenticated,
  onLogin,
  onLogout,
  onProfile,
  onDevSwitchToggle,
  isDevMode,
  currentLocale,
  languageOptions,
  onLocaleChange
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="nex-mobile-nav"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="nex-mobile-nav-inner">
            <ul className="nex-mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nex-mobile-nav-item" onClick={() => {
                  item.onClick();
                  onClose();
                }}>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="nex-mobile-nav-section">
              {isAuthenticated ? (
                <>
                  <div className="nex-mobile-nav-item" onClick={() => {
                    onProfile?.();
                    onClose();
                  }}>
                    Profile
                  </div>
                  {onDevSwitchToggle && (
                    <div className="nex-mobile-nav-item" onClick={() => {
                      onDevSwitchToggle();
                      onClose();
                    }}>
                      {isDevMode ? 'Exit Dev Mode' : 'Enter Dev Mode'}
                    </div>
                  )}
                  <div className="nex-mobile-nav-item danger" onClick={() => {
                    onLogout?.();
                    onClose();
                  }}>
                    Log Out
                  </div>
                </>
              ) : (
                <div className="nex-mobile-nav-item" onClick={() => {
                  onLogin?.();
                  onClose();
                }}>
                  Log In
                </div>
              )}
            </div>

            <div className="nex-mobile-nav-section">
              {languageOptions.map(lang => (
                <div key={lang.code} className={`nex-mobile-nav-item ${lang.code === currentLocale ? 'active' : ''}`} onClick={() => {
                  onLocaleChange(lang.code);
                  onClose();
                }}>
                  {lang.icon && <img src={lang.icon} alt={lang.label} className="nex-mobile-lang-icon" />}
                  {lang.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
