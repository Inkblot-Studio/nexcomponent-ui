import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Settings, 
  User, 
  LogOut, 
  Shield, 
  Activity, 
  Zap, 
  Crown, 
  ChevronDown,
  ChevronUp,
  Globe,
  Fingerprint,
  Menu,
  X
} from 'lucide-react';
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
  onAdminPanelClick
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);
  const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);
  const handleSettingsToggle = () => setIsSettingsOpen(!isSettingsOpen);

  const currentLanguage = languageOptions.find(lang => lang.code === currentLocale);

  const hasHome = navItems.some(item => item.label.toLowerCase() === 'home');

  return (
    <motion.div
      className="nex-mobile-nav"
      initial={{
        height: 0,
        opacity: 1,
        y: -24
      }}
      animate={{
        height: '100vh',
        opacity: 1,
        y: 0
      }}
      exit={{
        height: 0,
        opacity: 1,
        y: -24
      }}
      transition={{
        height: { duration: 0.44, ease: [0.4, 0, 0.2, 1] },
        y: { duration: 0.44, ease: [0.4, 0, 0.2, 1] }
      }}
      style={{
        overflow: 'hidden',
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--nex-z-index-modal)',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.10)'
      }}
    >
      <motion.div
        className="nex-mobile-nav-inner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header with User Info */}
        <div className="nex-mobile-nav-header">
          {isAuthenticated && user ? (
            <>
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="nex-mobile-nav-user-avatar"
                />
              ) : (
                <span className="nex-mobile-nav-user-avatar nex-mobile-nav-avatar-fallback">
                  {/* Premium animated SVG avatar with initials */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="mobileAvatarGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#e0e7ef" stopOpacity="0.95"/>
                      </radialGradient>
                      <linearGradient id="mobileAvatarShimmer" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" stopOpacity="0.2"/>
                        <stop offset="0.5" stopColor="#ff1801" stopOpacity="0.12"/>
                        <stop offset="1" stopColor="#00b8ff" stopOpacity="0.12"/>
                      </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="20" fill="url(#mobileAvatarGradient)"/>
                    <motion.rect
                      x="-40" y="0" width="40" height="40"
                      fill="url(#mobileAvatarShimmer)"
                      animate={{ x: [ -40, 40 ] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                      style={{ mixBlendMode: 'lighten' }}
                    />
                    <text x="50%" y="54%" textAnchor="middle" fill="#3a4256" fontSize="18" fontWeight="bold" fontFamily="inherit" dominantBaseline="middle" style={{ letterSpacing: 1 }}>
                      {user.name?.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}
                    </text>
                  </svg>
                </span>
              )}
              <div className="nex-mobile-nav-user-info">
                <h3 className="nex-mobile-nav-user-name">{user.name}</h3>
                <div 
                  className="nex-mobile-nav-user-tier"
                  onClick={onSubscriptionClick}
                >
                  {subscription?.tier === 'pro' ? 'Pro' : 'Free'}
                </div>
              </div>
            </>
          ) : (
            <div className="nex-mobile-nav-guest-content">
              <button
                className="nex-mobile-nav-signup-btn"
                onClick={onLogin}
              >
                Sign Up
              </button>
              <button 
                className="nex-mobile-nav-login-link"
                onClick={onLogin}
              >
                Already have an account? Sign in
              </button>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <div className="nex-mobile-nav-list">
          {/* Main Navigation */}
          <div className="nex-mobile-nav-section">
            <h4 className="nex-mobile-nav-section-title">Navigation</h4>
            {!hasHome && (
              <div 
                className="nex-mobile-nav-item"
                onClick={onClose}
              >
                <Home className="nex-mobile-nav-icon" />
                <span className="nex-mobile-nav-text">Home</span>
              </div>
            )}
            {navItems.map((item, index) => (
              <div
                key={index}
                className="nex-mobile-nav-item"
                onClick={() => {
                  item.onClick();
                  onClose();
                }}
              >
                <span className="nex-mobile-nav-text">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="nex-mobile-nav-section">
            <h4 className="nex-mobile-nav-section-title">Language</h4>
            <div 
              className="nex-mobile-nav-item"
              onClick={handleLanguageToggle}
            >
              <span className="nex-mobile-lang-abbr">
                {currentLocale.toUpperCase()}
              </span>
              <span className="nex-mobile-nav-text">
                {currentLanguage?.label || currentLocale.toUpperCase()}
              </span>
              {isLanguageOpen ? (
                <ChevronUp className="nex-mobile-nav-icon" />
              ) : (
                <ChevronDown className="nex-mobile-nav-icon" />
              )}
            </div>
            {isLanguageOpen && (
              <motion.div
                initial={{ 
                  opacity: 0, 
                  height: 0,
                  filter: "blur(4px)",
                  backdropFilter: "blur(0px)"
                }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  filter: "blur(0px)",
                  backdropFilter: "blur(16px)"
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  filter: "blur(8px)",
                  backdropFilter: "blur(0px)"
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{ overflow: 'hidden' }}
              >
                {languageOptions.map((lang) => (
                  <div
                    key={lang.code}
                    className={`nex-mobile-nav-item ${lang.code === currentLocale ? 'active' : ''}`}
                    onClick={() => {
                      onLocaleChange(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                  >
                    <span className="nex-mobile-lang-abbr">
                      {lang.code.toUpperCase()}
                    </span>
                    <span className="nex-mobile-nav-text">{lang.label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Profile Section */}
          {isAuthenticated && user && (
            <div className="nex-mobile-nav-section">
              <h4 className="nex-mobile-nav-section-title">Profile</h4>
              <div 
                className="nex-mobile-nav-item"
                onClick={handleProfileToggle}
              >
                <User className="nex-mobile-nav-icon" />
                <span className="nex-mobile-nav-text">Profile</span>
                {endorsementCount && endorsementCount > 0 && (
                  <span className="nex-mobile-nav-badge">{endorsementCount}</span>
                )}
                {isProfileOpen ? (
                  <ChevronUp className="nex-mobile-nav-icon" />
                ) : (
                  <ChevronDown className="nex-mobile-nav-icon" />
                )}
              </div>
              {isProfileOpen && (
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    height: 0,
                    filter: "blur(4px)",
                    backdropFilter: "blur(0px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    filter: "blur(0px)",
                    backdropFilter: "blur(16px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    filter: "blur(8px)",
                    backdropFilter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    className="nex-mobile-nav-item"
                    onClick={() => {
                      onProfile?.();
                      onClose();
                    }}
                    style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                  >
                    <User className="nex-mobile-nav-icon" />
                    <span className="nex-mobile-nav-text">View Profile</span>
                  </div>
                  {onEndorsementsClick && (
                    <div
                      className="nex-mobile-nav-item"
                      onClick={() => {
                        onEndorsementsClick();
                        onClose();
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                    >
                      <Crown className="nex-mobile-nav-icon" />
                      <span className="nex-mobile-nav-text">Endorsements</span>
                      {endorsementCount && endorsementCount > 0 && (
                        <span className="nex-mobile-nav-badge">{endorsementCount}</span>
                      )}
                    </div>
                  )}
                  {onSubscriptionClick && subscription && (
                    <div
                      className="nex-mobile-nav-item"
                      onClick={() => {
                        onSubscriptionClick();
                        onClose();
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)' }}
                    >
                      <Zap className="nex-mobile-nav-icon" />
                      <span className="nex-mobile-nav-text">Subscription</span>
                      <span className="nex-mobile-nav-badge">
                        {subscription.tier === 'pro' ? 'Pro' : 'Free'}
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {/* Settings Section */}
          {isAuthenticated && (onActivityLogClick || onSecurityClick || onIntegrationsClick || onAdminPanelClick) && (
            <div className="nex-mobile-nav-section">
              <h4 className="nex-mobile-nav-section-title">Settings</h4>
              <div 
                className="nex-mobile-nav-item"
                onClick={handleSettingsToggle}
              >
                <Settings className="nex-mobile-nav-icon" />
                <span className="nex-mobile-nav-text">Settings</span>
                {isSettingsOpen ? (
                  <ChevronUp className="nex-mobile-nav-icon" />
                ) : (
                  <ChevronDown className="nex-mobile-nav-icon" />
                )}
              </div>
              {isSettingsOpen && (
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    height: 0,
                    filter: "blur(4px)",
                    backdropFilter: "blur(0px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    filter: "blur(0px)",
                    backdropFilter: "blur(16px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    filter: "blur(8px)",
                    backdropFilter: "blur(0px)"
                  }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  {onActivityLogClick && (
                    <div
                      className="nex-mobile-nav-item"
                      onClick={() => {
                        onActivityLogClick();
                        onClose();
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                    >
                      <Activity className="nex-mobile-nav-icon" />
                      <span className="nex-mobile-nav-text">Activity Log</span>
                    </div>
                  )}
                  {onSecurityClick && (
                    <div
                      className="nex-mobile-nav-item"
                      onClick={() => {
                        onSecurityClick();
                        onClose();
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                    >
                      <Shield className="nex-mobile-nav-icon" />
                      <span className="nex-mobile-nav-text">Security</span>
                    </div>
                  )}
                  {onIntegrationsClick && (
                    <div
                      className="nex-mobile-nav-item"
                      onClick={() => {
                        onIntegrationsClick();
                        onClose();
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                    >
                      <Zap className="nex-mobile-nav-icon" />
                      <span className="nex-mobile-nav-text">Integrations</span>
                    </div>
                  )}
                  {onAdminPanelClick && (
                    <div
                      className="nex-mobile-nav-item"
                      onClick={() => {
                        onAdminPanelClick();
                        onClose();
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)' }}
                    >
                      <Settings className="nex-mobile-nav-icon" />
                      <span className="nex-mobile-nav-text">Admin Panel</span>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {/* Logout */}
          {isAuthenticated && onLogout && (
            <div className="nex-mobile-nav-item danger">
              <LogOut className="nex-mobile-nav-icon" />
              <span className="nex-mobile-nav-text">Log Out</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
