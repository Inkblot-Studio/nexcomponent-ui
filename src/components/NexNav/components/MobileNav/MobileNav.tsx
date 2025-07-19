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
import ThemeToggle from '../ThemeToggle';

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
  onAdminPanelClick,
  theme = 'auto'
}) => {
  // Check for black glass theme variant
  const [currentThemeVariant, setCurrentThemeVariant] = useState<string | null>(null);

  useEffect(() => {
    const checkThemeVariant = () => {
      const variant = document.documentElement.getAttribute('data-theme-variant');
      setCurrentThemeVariant(variant);
    };

    // Initial check
    checkThemeVariant();

    // Create a mutation observer to watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
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

  const isBlackGlass = theme === 'black-glass' || currentThemeVariant === 'black-glass';
  // State management
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNavItems, setOpenNavItems] = useState<Set<number>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
  
  const handleNavItemToggle = (index: number) => {
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

  return (
    <motion.div
      className={`nex-mobile-nav${isBlackGlass ? ' nex-mobile-nav--black-glass' : ''}`}
      variants={variants.mobileNav.container}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
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
          boxShadow: colors.mobileNav.shadow.medium,
        } : {}),
        ...performance.hardwareAcceleration
      }}
    >
      <motion.div
        className="nex-mobile-nav-inner"
        variants={variants.fade.in}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={timing.medium}
        style={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          overflowY: 'auto',
          ...performance.hardwareAcceleration
        }}
      >
        {/* Header with User Info and Theme Toggle */}
        <motion.div 
          className="nex-mobile-nav-header"
          variants={variants.mobileNav.header}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="nex-mobile-nav-header-content">
            {isAuthenticated && user ? (
              <>
                {user.avatarUrl ? (
                  <motion.img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="nex-mobile-nav-user-avatar"
                    variants={variants.mobileNav.avatar}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ) : (
                  <motion.span 
                    className="nex-mobile-nav-user-avatar nex-mobile-nav-avatar-fallback"
                    variants={variants.mobileNav.avatar}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                  </motion.span>
                )}
                <motion.div 
                  className="nex-mobile-nav-user-info"
                  variants={variants.fade.in}
                  initial="initial"
                  animate="animate"
                  transition={{ ...timing.medium, delay: 0.1 }}
                >
                  <h3 className="nex-mobile-nav-user-name">{user.name}</h3>
                  <motion.div 
                    className="nex-mobile-nav-user-tier"
                    onClick={onSubscriptionClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={spring.fast}
                  >
                    {subscription?.tier === 'pro' ? 'Pro' : 'Free'}
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <motion.div 
                className="nex-mobile-nav-guest-content"
                variants={variants.fade.in}
                initial="initial"
                animate="animate"
                transition={{ ...timing.medium, delay: 0.15 }}
              >
                <motion.button
                  className="nex-mobile-nav-signup-btn"
                  onClick={onLogin}
                              whileHover={{
              backgroundColor: isBlackGlass ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.15)",
              borderColor: isBlackGlass ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.2)",
              boxShadow: isBlackGlass ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
                    scale: 1.02
                  }}
                  whileTap={{
                    backgroundColor: "rgba(255, 24, 1, 0.15)",
                    borderColor: "rgba(255, 24, 1, 0.2)",
                    scale: 0.98
                  }}
                  transition={spring.responsive}
                >
                  Sign Up
                </motion.button>
                <motion.button 
                  className="nex-mobile-nav-login-link"
                  onClick={onLogin}
                  whileHover={{ 
                    opacity: 0.8,
                    scale: 1.02
                  }}
                  whileTap={{ 
                    scale: 0.98
                  }}
                  transition={spring.fast}
                >
                  Already have an account? Sign in
                </motion.button>
              </motion.div>
            )}
            
            {/* Theme Toggle in Header */}
            <motion.div
              className="nex-mobile-nav-theme-toggle"
              variants={variants.fade.in}
              initial="initial"
              animate="animate"
              transition={{ ...timing.medium, delay: 0.2 }}
            >
              <ThemeToggle isAtTop={false} />
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Items */}
        <motion.div 
          className="nex-mobile-nav-list"
          variants={stagger.container}
          initial="initial"
          animate="animate"
          style={performance.hardwareAcceleration}
        >
          {/* Main Navigation */}
          <motion.div 
            className="nex-mobile-nav-section"
            variants={variants.mobileNav.navItem}
          >
            <motion.h4 
              className="nex-mobile-nav-section-title"
              variants={variants.mobileNav.sectionTitle}
            >
              Navigation
            </motion.h4>
            {!hasHome && (
              <motion.div 
                className="nex-mobile-nav-item"
                variants={variants.mobileNav.navItem}
                whileHover={variants.interactive.navItem.hover}
                whileTap={variants.interactive.navItem.active}
                transition={spring.responsive}
              >
                <span className="nex-mobile-nav-text">Home</span>
              </motion.div>
            )}
            {navItems.map((item, index) => (
              <motion.div 
                key={index} 
                style={{ marginBottom: 'var(--nex-spacing-xs)' }}
                variants={variants.mobileNav.navItem}
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
                  whileHover={variants.interactive.navItem.hover}
                  whileTap={variants.interactive.navItem.active}
                  transition={spring.responsive}
                >
                  <span className="nex-mobile-nav-text">{item.label}</span>
                  {item.subItems && item.subItems.length > 0 && (
                    <motion.div
                      animate={openNavItems.has(index) ? "open" : "closed"}
                      variants={variants.mobileNav.iconRotate}
                      transition={spring.fast}
                    >
                      <ChevronDown className="nex-mobile-nav-icon" />
                    </motion.div>
                  )}
                </motion.div>
                <AnimatePresence>
                  {item.subItems && item.subItems.length > 0 && openNavItems.has(index) && (
                    <motion.div
                      variants={variants.mobileNav.dropdownContainer}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{ overflow: 'hidden', marginTop: 'var(--nex-spacing-sm)' }}
                    >
                      <motion.div
                        variants={stagger.dropdown}
                        initial="initial"
                        animate="animate"
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
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
                          >
                            <span className="nex-mobile-nav-text">{subItem.label}</span>
                            {subItem.badge && (
                              <motion.span 
                                className="nex-mobile-nav-badge"
                                variants={variants.mobileNav.badge}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                              >
                                {subItem.badge}
                              </motion.span>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Language Switcher */}
          <motion.div 
            className="nex-mobile-nav-section"
            variants={variants.mobileNav.navItem}
          >
            <motion.h4 
              className="nex-mobile-nav-section-title"
              variants={variants.mobileNav.sectionTitle}
            >
              Language
            </motion.h4>
            <motion.div 
              className="nex-mobile-nav-item"
              onClick={handleLanguageToggle}
              variants={variants.mobileNav.navItem}
              whileHover={variants.interactive.navItem.hover}
              whileTap={variants.interactive.navItem.active}
              transition={spring.responsive}
            >
              <span className="nex-mobile-lang-abbr">
                {currentLocale.toUpperCase()}
              </span>
              <span className="nex-mobile-nav-text">
                {currentLanguage?.label || currentLocale.toUpperCase()}
              </span>
              <motion.div
                animate={openDropdown === 'language' ? "open" : "closed"}
                variants={variants.mobileNav.iconRotate}
                transition={spring.fast}
              >
                <ChevronDown className="nex-mobile-nav-icon" />
              </motion.div>
            </motion.div>
            <AnimatePresence>
              {openDropdown === 'language' && (
                <motion.div
                  variants={variants.mobileNav.dropdownContainer}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ overflow: 'hidden' }}
                >
                  <motion.div
                    variants={stagger.dropdown}
                    initial="initial"
                    animate="animate"
                  >
                    {languageOptions.map((lang) => (
                      <motion.div
                        key={lang.code}
                        className={`nex-mobile-nav-item ${lang.code === currentLocale ? 'active' : ''}`}
                        onClick={() => {
                          onLocaleChange(lang.code);
                          setOpenDropdown(null);
                        }}
                        style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                        variants={variants.mobileNav.dropdownItem}
                        whileHover={variants.interactive.navItem.hover}
                        whileTap={variants.interactive.navItem.active}
                        transition={spring.responsive}
                      >
                        <span className="nex-mobile-lang-abbr">
                          {lang.code.toUpperCase()}
                        </span>
                        <span className="nex-mobile-nav-text">{lang.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>



          {/* Profile Section */}
          {isAuthenticated && user && (
            <motion.div 
              className="nex-mobile-nav-section"
              variants={variants.mobileNav.navItem}
            >
              <motion.h4 
                className="nex-mobile-nav-section-title"
                variants={variants.mobileNav.sectionTitle}
              >
                Profile
              </motion.h4>
              <motion.div 
                style={{ marginBottom: 'var(--nex-spacing-xs)' }}
                variants={variants.mobileNav.navItem}
              >
                <motion.div 
                  className="nex-mobile-nav-item"
                  onClick={handleProfileToggle}
                  variants={variants.mobileNav.navItem}
                  whileHover={variants.interactive.navItem.hover}
                  whileTap={variants.interactive.navItem.active}
                  transition={spring.responsive}
                >
                  <User className="nex-mobile-nav-icon" />
                  <span className="nex-mobile-nav-text">Profile</span>
                  <motion.div
                    animate={openDropdown === 'profile' ? "open" : "closed"}
                    variants={variants.mobileNav.iconRotate}
                    transition={spring.fast}
                  >
                    <ChevronDown className="nex-mobile-nav-icon" />
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {openDropdown === 'profile' && (
                    <motion.div
                      variants={variants.mobileNav.dropdownContainer}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{ overflow: 'hidden', marginTop: 'var(--nex-spacing-sm)' }}
                    >
                      <motion.div
                        variants={stagger.fast}
                        initial="initial"
                        animate="animate"
                      >
                        {onProfile && (
                          <motion.div
                            className="nex-mobile-nav-item"
                            onClick={onProfile}
                            style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
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
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
                          >
                            <Fingerprint className="nex-mobile-nav-icon" />
                            <span className="nex-mobile-nav-text">Endorsements</span>
                            <motion.span 
                              className="nex-mobile-nav-badge"
                              variants={variants.mobileNav.badge}
                              initial="initial"
                              animate="animate"
                              exit="exit"
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
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
                          >
                            <Zap className="nex-mobile-nav-icon" />
                            <span className="nex-mobile-nav-text">Subscription</span>
                            <motion.span 
                              className="nex-mobile-nav-badge"
                              variants={variants.mobileNav.badge}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                            >
                              {subscription.tier === 'pro' ? 'Pro' : 'Free'}
                            </motion.span>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {/* Settings Section */}
          {isAuthenticated && (onActivityLogClick || onSecurityClick || onIntegrationsClick || onAdminPanelClick) && (
            <motion.div 
              className="nex-mobile-nav-section"
              variants={variants.mobileNav.navItem}
            >
              <motion.h4 
                className="nex-mobile-nav-section-title"
                variants={variants.mobileNav.sectionTitle}
              >
                Settings
              </motion.h4>
              <motion.div 
                style={{ marginBottom: 'var(--nex-spacing-xs)' }}
                variants={variants.mobileNav.navItem}
              >
                <motion.div 
                  className="nex-mobile-nav-item"
                  onClick={handleSettingsToggle}
                  variants={variants.mobileNav.navItem}
                  whileHover={variants.interactive.navItem.hover}
                  whileTap={variants.interactive.navItem.active}
                  transition={spring.responsive}
                >
                  <Settings className="nex-mobile-nav-icon" />
                  <span className="nex-mobile-nav-text">Settings</span>
                  <motion.div
                    animate={openDropdown === 'settings' ? "open" : "closed"}
                    variants={variants.mobileNav.iconRotate}
                    transition={spring.fast}
                  >
                    <ChevronDown className="nex-mobile-nav-icon" />
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {openDropdown === 'settings' && (
                    <motion.div
                      variants={variants.mobileNav.dropdownContainer}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{ overflow: 'hidden', marginTop: 'var(--nex-spacing-sm)' }}
                    >
                      <motion.div
                        variants={stagger.fast}
                        initial="initial"
                        animate="animate"
                      >
                        {onActivityLogClick && (
                          <motion.div
                            className="nex-mobile-nav-item"
                            onClick={onActivityLogClick}
                            style={{ marginLeft: 'var(--nex-spacing-md)', marginBottom: 'var(--nex-spacing-xs)' }}
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
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
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
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
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
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
                            variants={variants.mobileNav.dropdownItem}
                            whileHover={variants.interactive.navItem.hover}
                            whileTap={variants.interactive.navItem.active}
                            transition={spring.responsive}
                          >
                            <Crown className="nex-mobile-nav-icon" />
                            <span className="nex-mobile-nav-text">Admin Panel</span>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}

          {/* Logout Section */}
          {isAuthenticated && onLogout && (
            <motion.div 
              className="nex-mobile-nav-section"
              variants={variants.mobileNav.navItem}
            >
              <motion.div 
                className="nex-mobile-nav-item danger"
                onClick={onLogout}
                variants={variants.mobileNav.navItem}
                whileHover={{ 
                  backgroundColor: "rgba(255, 24, 1, 0.1)",
                  scale: 1.02
                }}
                whileTap={{ 
                  backgroundColor: "rgba(255, 24, 1, 0.15)",
                  scale: 0.98
                }}
                transition={spring.responsive}
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
