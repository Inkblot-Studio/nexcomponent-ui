import React, { useState, useEffect } from 'react';
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
import { useAnimationConfig, ANIMATION_VARIANTS, COLOR_SCHEMES, PERFORMANCE_CONFIG } from '../../../../utils/animationConfig';

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
  const [openNavItems, setOpenNavItems] = useState<Set<number>>(new Set());

  // Use centralized animation configuration
  const { fast, medium, slow, stagger, shouldReduceMotion } = useAnimationConfig();

  const handleProfileToggle = () => setIsProfileOpen(!isProfileOpen);
  const handleLanguageToggle = () => setIsLanguageOpen(!isLanguageOpen);
  const handleSettingsToggle = () => setIsSettingsOpen(!isSettingsOpen);
  
  const handleNavItemToggle = (index: number) => {
    setOpenNavItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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

  return (
    <motion.div
      className="nex-mobile-nav"
      variants={ANIMATION_VARIANTS.mobileNav}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slow}
      style={{
        overflow: 'hidden',
        position: 'fixed',
        top: '71.99px', // exact nav height
        left: 0,
        right: 0,
        width: '100%',
        height: 'calc(100dvh - 71.99px)',
        zIndex: 'var(--nex-z-index-modal)',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 100%), linear-gradient(90deg, rgba(255,24,1,0.08) 0%, rgba(0,184,255,0.08) 100%)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1.5px solid rgba(255, 255, 255, 0.22)',
        boxShadow: '0 8px 32px -8px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(255,255,255,0.13) inset'
      }}
    >
      <motion.div
        className="nex-mobile-nav-inner"
        variants={ANIMATION_VARIANTS.fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ...slow, delay: 0.15 }}
        style={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          overflowY: 'auto'
        }}
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
                      transition={{ repeat: Infinity, duration: shouldReduceMotion ? 0 : 4.5, ease: 'linear' }}
                      style={{ mixBlendMode: 'lighten' }}
                    />
                    <text x="50%" y="54%" textAnchor="middle" fill="#3a4256" fontSize="18" fontWeight="bold" fontFamily="inherit" dominantBaseline="middle" style={{ letterSpacing: 1 }}>
                      {user.name?.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}
                    </text>
                  </svg>
                </span>
              )}
              <motion.div 
                className="nex-mobile-nav-user-info"
                variants={ANIMATION_VARIANTS.fadeIn}
                initial="initial"
                animate="animate"
                transition={{ ...slow, delay: 0.25 }}
              >
                <h3 className="nex-mobile-nav-user-name">{user.name}</h3>
                <motion.div 
                  className="nex-mobile-nav-user-tier"
                  onClick={onSubscriptionClick}
                >
                  {subscription?.tier === 'pro' ? 'Pro' : 'Free'}
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.div 
              className="nex-mobile-nav-guest-content"
              variants={ANIMATION_VARIANTS.fadeIn}
              initial="initial"
              animate="animate"
              transition={{ ...slow, delay: 0.3 }}
            >
              <motion.button
                className="nex-mobile-nav-signup-btn"
                onClick={onLogin}
              >
                Sign Up
              </motion.button>
              <motion.button 
                className="nex-mobile-nav-login-link"
                onClick={onLogin}
              >
                Already have an account? Sign in
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Navigation Items */}
        <motion.div 
          className="nex-mobile-nav-list"
          variants={stagger}
          initial="initial"
          animate="animate"
          transition={{ ...slow, delayChildren: 0.2, staggerChildren: 0.08 }}
        >
          {/* Main Navigation */}
          <motion.div 
            className="nex-mobile-nav-section"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <motion.h4 
              className="nex-mobile-nav-section-title"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              Navigation
            </motion.h4>
            {!hasHome && (
              <motion.div 
                className="nex-mobile-nav-item"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <span className="nex-mobile-nav-text">Home</span>
              </motion.div>
            )}
            {navItems.map((item, index) => (
              <motion.div 
                key={index} 
                style={{ marginBottom: 'var(--nex-spacing-xs)' }}
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <motion.div
                  className="nex-mobile-nav-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.subItems && item.subItems.length > 0) {
                      handleNavItemToggle(index);
                    } else if (item.onClick) {
                      item.onClick();
                    }
                  }}
                >
                  <span className="nex-mobile-nav-text">{item.label}</span>
                  {item.subItems && item.subItems.length > 0 && (
                    <motion.div
                      animate={{ rotate: openNavItems.has(index) ? 180 : 0 }}
                      transition={slow}
                    >
                      <ChevronDown className="nex-mobile-nav-icon" />
                    </motion.div>
                  )}
                </motion.div>
                {item.subItems && item.subItems.length > 0 && openNavItems.has(index) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={slow}
                      style={{ overflow: 'hidden', marginTop: 'var(--nex-spacing-sm)' }}
                    >
                    {item.subItems.map((subItem, subIndex) => (
                      <motion.div
                        key={subIndex}
                        className={`nex-mobile-nav-item ${subItem.disabled ? 'disabled' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!subItem.disabled) {
                            subItem.onClick();
                          }
                        }}
                        style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...slow, delay: subIndex * 0.05 }}
                      >
                        <span className="nex-mobile-nav-text">{subItem.label}</span>
                        {subItem.badge && (
                          <motion.span 
                            className="nex-mobile-nav-badge"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={slow}
                          >
                            {subItem.badge}
                          </motion.span>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Language Switcher */}
          <motion.div 
            className="nex-mobile-nav-section"
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <motion.h4 
              className="nex-mobile-nav-section-title"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              Language
            </motion.h4>
            <motion.div 
              className="nex-mobile-nav-item"
              onClick={handleLanguageToggle}
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <span className="nex-mobile-lang-abbr">
                {currentLocale.toUpperCase()}
              </span>
              <span className="nex-mobile-nav-text">
                {currentLanguage?.label || currentLocale.toUpperCase()}
              </span>
              <motion.div
                animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                transition={slow}
              >
                <ChevronDown className="nex-mobile-nav-icon" />
              </motion.div>
            </motion.div>
            {isLanguageOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={slow}
                  style={{ overflow: 'hidden' }}
                >
                  {languageOptions.map((lang) => (
                    <motion.div
                      key={lang.code}
                      className={`nex-mobile-nav-item ${lang.code === currentLocale ? 'active' : ''}`}
                      onClick={() => {
                        onLocaleChange(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ...slow, delay: languageOptions.indexOf(lang) * 0.05 }}
                    >
                      <span className="nex-mobile-lang-abbr">
                        {lang.code.toUpperCase()}
                      </span>
                      <span className="nex-mobile-nav-text">{lang.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
          </motion.div>

          {/* Profile Section */}
          {isAuthenticated && user && (
            <motion.div 
              className="nex-mobile-nav-section"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <motion.h4 
                className="nex-mobile-nav-section-title"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                Profile
              </motion.h4>
              <motion.div 
                style={{ marginBottom: 'var(--nex-spacing-xs)' }}
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <motion.div 
                  className="nex-mobile-nav-item"
                  onClick={handleProfileToggle}
                  variants={ANIMATION_VARIANTS.fadeIn}
                >
                  <User className="nex-mobile-nav-icon" />
                  <span className="nex-mobile-nav-text">Profile</span>
                  <motion.div
                    animate={{ rotate: isProfileOpen ? 180 : 0 }}
                    transition={slow}
                  >
                    <ChevronDown className="nex-mobile-nav-icon" />
                  </motion.div>
                </motion.div>
                {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={slow}
                      style={{ overflow: 'hidden', marginTop: 'var(--nex-spacing-sm)' }}
                    >
                      {onProfile && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onProfile}
                          style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.05 }}
                        >
                          <User className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">View Profile</span>
                        </motion.div>
                      )}
                      {onEndorsementsClick && endorsementCount !== undefined && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onEndorsementsClick}
                          style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.1 }}
                        >
                          <Fingerprint className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">Endorsements</span>
                          <motion.span 
                            className="nex-mobile-nav-badge"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={slow}
                          >
                            {endorsementCount}
                          </motion.span>
                        </motion.div>
                      )}
                      {onSubscriptionClick && subscription && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onSubscriptionClick}
                          style={{ marginLeft: 'var(--nex-spacing-md)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.15 }}
                        >
                          <Zap className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">Subscription</span>
                          <motion.span 
                            className="nex-mobile-nav-badge"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={slow}
                          >
                            {subscription.tier === 'pro' ? 'Pro' : 'Free'}
                          </motion.span>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
              </motion.div>
            </motion.div>
          )}

          {/* Settings Section */}
          {isAuthenticated && (onActivityLogClick || onSecurityClick || onIntegrationsClick || onAdminPanelClick) && (
            <motion.div 
              className="nex-mobile-nav-section"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <motion.h4 
                className="nex-mobile-nav-section-title"
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                Settings
              </motion.h4>
              <motion.div 
                style={{ marginBottom: 'var(--nex-spacing-xs)' }}
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <motion.div 
                  className="nex-mobile-nav-item"
                  onClick={handleSettingsToggle}
                  variants={ANIMATION_VARIANTS.fadeIn}
                >
                  <Settings className="nex-mobile-nav-icon" />
                  <span className="nex-mobile-nav-text">Settings</span>
                  <motion.div
                    animate={{ rotate: isSettingsOpen ? 180 : 0 }}
                    transition={slow}
                  >
                    <ChevronDown className="nex-mobile-nav-icon" />
                  </motion.div>
                </motion.div>
                {isSettingsOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={slow}
                      style={{ overflow: 'hidden', marginTop: 'var(--nex-spacing-sm)' }}
                    >
                      {onActivityLogClick && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onActivityLogClick}
                          style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.05 }}
                        >
                          <Activity className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">Activity Log</span>
                        </motion.div>
                      )}
                      {onSecurityClick && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onSecurityClick}
                          style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.1 }}
                        >
                          <Shield className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">Security</span>
                        </motion.div>
                      )}
                      {onIntegrationsClick && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onIntegrationsClick}
                          style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.15 }}
                        >
                          <Globe className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">Integrations</span>
                        </motion.div>
                      )}
                      {onAdminPanelClick && (
                        <motion.div
                          className="nex-mobile-nav-item"
                          onClick={onAdminPanelClick}
                          style={{ marginLeft: 'var(--nex-spacing-md)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ ...slow, delay: 0.2 }}
                        >
                          <Crown className="nex-mobile-nav-icon" />
                          <span className="nex-mobile-nav-text">Admin Panel</span>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
              </motion.div>
            </motion.div>
          )}

          {/* Logout Section */}
          {isAuthenticated && onLogout && (
            <motion.div 
              className="nex-mobile-nav-section"
              variants={ANIMATION_VARIANTS.fadeIn}
            >
              <motion.div 
                className="nex-mobile-nav-item danger"
                onClick={onLogout}
                variants={ANIMATION_VARIANTS.fadeIn}
              >
                <LogOut className="nex-mobile-nav-icon" />
                <span className="nex-mobile-nav-text">Log Out</span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
