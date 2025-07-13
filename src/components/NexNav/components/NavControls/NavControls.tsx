import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import UserMenu from '../UserMenu';
import { NexNavProps } from '../../NexNav.types';
import { useAnimationConfig, ANIMATION_VARIANTS } from '../../../../utils/animationConfig';

interface NavControlsProps {
  isAuthenticated: boolean;
  user?: NexNavProps['user'];
  onLogin?: () => void;
  onLogout?: () => void;
  onProfile?: () => void;
  languageOptions: NexNavProps['languageOptions'];
  currentLocale: string;
  onLocaleChange: (code: string) => void;
  isLanguageOpen: boolean;
  onLanguageToggle: () => void;
  onLanguageClose: () => void;
  isUserOpen: boolean;
  onUserToggle: () => void;
  onUserClose: () => void;
  isAtTop: boolean;
  endorsementCount?: number;
  subscription?: NexNavProps['subscription'];
  onEndorsementsClick?: () => void;
  onSubscriptionClick?: () => void;
  onActivityLogClick?: () => void;
  onSecurityClick?: () => void;
  onIntegrationsClick?: () => void;
  onAdminPanelClick?: () => void;
}

const NavControls: React.FC<NavControlsProps> = ({
  isAuthenticated,
  user,
  onLogin,
  onLogout,
  onProfile,
  languageOptions,
  currentLocale,
  onLocaleChange,
  isLanguageOpen,
  onLanguageToggle,
  onLanguageClose,
  isUserOpen,
  onUserToggle,
  onUserClose,
  isAtTop,
  endorsementCount,
  subscription,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick
}) => {
  const { fast } = useAnimationConfig();

  const handleLoginClick = () => {
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <motion.div 
      className="nex-nav-right" 
      role="group" 
      aria-label="User controls"
      variants={ANIMATION_VARIANTS.navItem}
    >
      <motion.div variants={ANIMATION_VARIANTS.navItem}>
        <LanguageSwitcher
          currentLocale={currentLocale}
          options={languageOptions}
          onChange={onLocaleChange}
          isAtTop={isAtTop}
          open={isLanguageOpen}
          onOpen={onLanguageToggle}
          onClose={onLanguageClose}
        />
      </motion.div>
      
      {isAuthenticated && user && onLogout && onProfile ? (
        <motion.div variants={ANIMATION_VARIANTS.navItem}>
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
            isAtTop={isAtTop}
            open={isUserOpen}
            onOpen={onUserToggle}
            onClose={onUserClose}
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
          variants={ANIMATION_VARIANTS.navItem}
          whileHover={{
            ...ANIMATION_VARIANTS.button.hover,
            transition: fast
          }}
          whileTap={{
            ...ANIMATION_VARIANTS.button.tap,
            transition: fast
          }}
          whileFocus={{
            ...ANIMATION_VARIANTS.button.focus,
            transition: fast
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={fast}
          >
            <Fingerprint size={18} aria-hidden="true" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...fast, delay: 0.05 }}
          >
            Login
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavControls; 