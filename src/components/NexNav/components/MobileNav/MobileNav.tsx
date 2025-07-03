import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const getLanguageEmoji = (code: string) => {
    const emojiMap: Record<string, string> = {
      'en': '🇺🇸',
      'es': '🇪🇸',
      'fr': '🇫🇷',
      'de': '🇩🇪',
      'it': '🇮🇹',
      'pt': '🇵🇹',
      'ru': '🇷🇺',
      'ja': '🇯🇵',
      'ko': '🇰🇷',
      'zh': '🇨🇳',
      'ar': '🇸🇦',
      'hi': '🇮🇳'
    };
    return emojiMap[code] || '🌐';
  };

  const currentLanguage = languageOptions.find(lang => lang.code === currentLocale);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="nex-mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="nex-mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              mass: 0.8
            }}
          >
            <div className="nex-mobile-nav-inner">
              {/* Header with User Info */}
              <div className="nex-mobile-nav-header">
                {isAuthenticated && user ? (
                  <>
                    <img
                      src={user.avatarUrl || 'https://via.placeholder.com/40'}
                      alt={user.name}
                      className="nex-mobile-nav-user-avatar"
                    />
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
                  <>
                    <div className="nex-mobile-nav-icon">
                      <Fingerprint size={18} />
                    </div>
                    <div className="nex-mobile-nav-user-info">
                      <h3 className="nex-mobile-nav-user-name">Guest User</h3>
                      <div 
                        className="nex-mobile-nav-user-tier"
                        onClick={onLogin}
                      >
                        Login
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Items */}
              <div className="nex-mobile-nav-list">
                {/* Main Navigation */}
                <div className="nex-mobile-nav-section">
                  <h4 className="nex-mobile-nav-section-title">Navigation</h4>
                  <div 
                    className="nex-mobile-nav-item"
                    onClick={onClose}
                  >
                    <Home className="nex-mobile-nav-icon" />
                    <span className="nex-mobile-nav-text">Home</span>
                  </div>
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
                    <span className="nex-mobile-lang-emoji">
                      {getLanguageEmoji(currentLocale)}
                    </span>
                    <span className="nex-mobile-nav-text">
                      {currentLanguage?.label || 'English'}
                    </span>
                    {isLanguageOpen ? (
                      <ChevronUp className="nex-mobile-nav-icon" />
                    ) : (
                      <ChevronDown className="nex-mobile-nav-icon" />
                    )}
                  </div>
                  <AnimatePresence>
                    {isLanguageOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
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
                            <span className="nex-mobile-lang-emoji">
                              {getLanguageEmoji(lang.code)}
                            </span>
                            <span className="nex-mobile-nav-text">{lang.label}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                    <AnimatePresence>
                      {isProfileOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
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
                    </AnimatePresence>
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
                    <AnimatePresence>
                      {isSettingsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
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
                    </AnimatePresence>
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

              {/* Footer */}
              <div className="nex-mobile-nav-footer">
                <div className="nex-mobile-nav-item">
                  <span className="nex-mobile-nav-text">Version 1.0.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
