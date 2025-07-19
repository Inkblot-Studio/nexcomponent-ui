import React from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import UserMenu from '../UserMenu';
import ThemeToggle from '../ThemeToggle';
import { useAnimationConfig, ANIMATION_VARIANTS } from '../../../../utils/animationConfig';
const NavControls = ({ isAuthenticated, user, onLogin, onLogout, onProfile, languageOptions, currentLocale, onLocaleChange, isLanguageOpen, onLanguageToggle, onLanguageClose, isUserOpen, onUserToggle, onUserClose, isAtTop, endorsementCount, subscription, onEndorsementsClick, onSubscriptionClick, onActivityLogClick, onSecurityClick, onIntegrationsClick, onAdminPanelClick, theme = 'auto' }) => {
    const { timing, spring } = useAnimationConfig();
    const handleLoginClick = () => {
        if (onLogin) {
            onLogin();
        }
    };
    return (<motion.div className="nex-nav-right" role="group" aria-label="User controls" variants={ANIMATION_VARIANTS.mobileNav.navItem}>
      <motion.div variants={ANIMATION_VARIANTS.mobileNav.navItem}>
        <ThemeToggle isAtTop={isAtTop} theme={theme}/>
      </motion.div>
      
      <motion.div variants={ANIMATION_VARIANTS.mobileNav.navItem}>
        <LanguageSwitcher currentLocale={currentLocale} options={languageOptions} onChange={onLocaleChange} isAtTop={isAtTop} open={isLanguageOpen} onOpen={onLanguageToggle} onClose={onLanguageClose} theme={theme}/>
      </motion.div>
      
      {isAuthenticated && user && onLogout && onProfile ? (<motion.div variants={ANIMATION_VARIANTS.mobileNav.navItem}>
          <UserMenu user={user} onLogout={onLogout} onProfile={onProfile} endorsementCount={endorsementCount} subscription={subscription} onEndorsementsClick={onEndorsementsClick} onSubscriptionClick={onSubscriptionClick} onActivityLogClick={onActivityLogClick} onSecurityClick={onSecurityClick} onIntegrationsClick={onIntegrationsClick} onAdminPanelClick={onAdminPanelClick} isAtTop={isAtTop} open={isUserOpen} onOpen={onUserToggle} onClose={onUserClose} theme={theme}/>
        </motion.div>) : (<motion.button className="nex-nav-login-button" onClick={handleLoginClick} role="button" tabIndex={0} aria-label="Sign in to your account" onKeyDown={(e) => e.key === 'Enter' && handleLoginClick()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileFocus={{
                outline: "2px solid var(--nex-signature)",
                outlineOffset: "2px",
                transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] }
            }} transition={spring.responsive}>
          <LogIn size={16} aria-hidden="true"/>
          <span>Sign In</span>
        </motion.button>)}
    </motion.div>);
};
export default NavControls;
//# sourceMappingURL=NavControls.jsx.map