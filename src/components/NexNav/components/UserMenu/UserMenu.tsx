import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickAway } from 'react-use';
import classNames from 'classnames';

import './UserMenu.scss';
import { UserMenuProps } from './UserMenu.types';

const UserMenu: React.FC<UserMenuProps> = ({
  user,
  onLogout,
  onProfile,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick,
  onSignUpClick,
  endorsementCount,
  subscription,
  enableEndorsements,
  enableSubscriptionInfo,
  enableAuditLog,
  enableSecuritySettings,
  enableIntegrations,
  enableAdminPanel,
  isAtTop = true,
  open = false,
  onOpen,
  onClose,
  theme = 'auto'
}) => {
  const ref = useRef(null);

  // Optimized animation configurations
  const hoverAnimation = {
    background: isAtTop ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.85)',
    transition: { duration: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const tapAnimation = {
    background: isAtTop ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.9)',
    transition: { duration: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const dangerHoverAnimation = {
    background: isAtTop ? 'rgba(255,180,180,0.18)' : 'rgba(255,180,180,0.85)',
    transition: { duration: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const dangerTapAnimation = {
    background: isAtTop ? 'rgba(255,180,180,0.22)' : 'rgba(255,180,180,0.9)',
    transition: { duration: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  useClickAway(ref, () => {
    onClose && onClose();
  });

  const handleToggle = () => {
    // Always call onOpen which now handles the toggle logic
    onOpen && onOpen();
  };

  const initials =
    user?.name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || '';

  const avatarSrc = user?.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${initials}`;

  return (
    <div className="nex-user-menu" ref={ref}>
      <motion.button
        className="nex-user-menu-trigger"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User menu"
      >
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt="User Avatar"
            className="nex-user-menu-avatar"
          />
        ) : (
          <span className="nex-user-menu-avatar nex-user-menu-avatar-fallback">
            {/* Theme-aware clean avatar with initials */}
            <div className="nex-user-menu-avatar-inner">
              <div className="nex-user-menu-avatar-background"></div>
              <span className="nex-user-menu-avatar-text">{initials}</span>
            </div>
          </span>
        )}

      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nex-user-menu-dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ 
              opacity: 1, 
              y: 0
            }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
              boxShadow: isAtTop 
                ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
            }}
            role="menu"
          >
            {user ? (
              <>
                <div className="nex-user-menu-section">
                  <li className="nex-user-menu-header">
                    <span>{user.name}</span>
                    {user.role && <span className="badge">{user.role}</span>}
                  </li>
                </div>

                {onProfile && (
                  <motion.li
                    className="nex-user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      onClose && onClose();
                      onProfile();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Profile
                  </motion.li>
                )}

                {enableEndorsements && (
                  <motion.li
                    className="nex-user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      onClose && onClose();
                      onEndorsementsClick?.();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Endorsements ({endorsementCount ?? 0})
                  </motion.li>
                )}

                {enableSubscriptionInfo && subscription && (
                  <motion.li
                    className="nex-user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      onClose && onClose();
                      onSubscriptionClick?.();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Subscription: {subscription.tier}
                  </motion.li>
                )}

                {enableAuditLog && (
                  <motion.li
                    className="nex-user-menu-item"
                    onClick={() => {
                      onClose && onClose();
                      onActivityLogClick?.();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Activity Log
                  </motion.li>
                )}

                {enableSecuritySettings && (
                  <motion.li
                    className="nex-user-menu-item"
                    onClick={() => {
                      onClose && onClose();
                      onSecurityClick?.();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Security Settings
                  </motion.li>
                )}

                {enableIntegrations && (
                  <motion.li
                    className="nex-user-menu-item"
                    onClick={() => {
                      onClose && onClose();
                      onIntegrationsClick?.();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Manage Integrations
                  </motion.li>
                )}

                {enableAdminPanel && (
                  <motion.li
                    className="nex-user-menu-item"
                    onClick={() => {
                      onClose && onClose();
                      onAdminPanelClick?.();
                    }}
                    whileHover={hoverAnimation}
                    whileTap={tapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Admin Panel
                  </motion.li>
                )}

                {onLogout && (
                  <motion.li
                    className="nex-user-menu-item danger"
                    onClick={() => {
                      onClose && onClose();
                      onLogout();
                    }}
                    whileHover={dangerHoverAnimation}
                    whileTap={dangerTapAnimation}
                    style={{ cursor: 'pointer' }}
                  >
                    Log out
                  </motion.li>
                )}
              </>
            ) : (
              <motion.li
                className="nex-user-menu-item sign-up-cta"
                onClick={() => {
                  onClose && onClose();
                  onSignUpClick?.();
                }}
                whileHover={hoverAnimation}
                whileTap={tapAnimation}
                style={{ cursor: 'pointer' }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Sign up to personalize
                </motion.div>
              </motion.li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
