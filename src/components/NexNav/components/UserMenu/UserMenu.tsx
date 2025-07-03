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
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  const toggleMenu = () => setOpen(prev => !prev);

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
        onClick={toggleMenu}
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
            {/* Premium animated SVG avatar with initials */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="userMenuAvatarGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.8"/>
                  <stop offset="60%" stopColor="#e0e7ef" stopOpacity="0.95"/>
                  <stop offset="100%" stopColor="#e0f3ff" stopOpacity="1"/>
                </radialGradient>
                <linearGradient id="userMenuAvatarShimmer" x1="0" y1="0" x2="54" y2="36" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.2"/>
                  <stop offset="0.3" stopColor="#ff1801" stopOpacity="0.25"/>
                  <stop offset="0.7" stopColor="#00b8ff" stopOpacity="0.25"/>
                  <stop offset="1" stopColor="#fff" stopOpacity="0.18"/>
                </linearGradient>
              </defs>
              <circle cx="18" cy="18" r="18" fill="url(#userMenuAvatarGradient)"/>
              <motion.rect
                x="-54" y="0" width="54" height="36"
                fill="url(#userMenuAvatarShimmer)"
                animate={{ x: [ -54, 36 ] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
                style={{ mixBlendMode: 'lighten', opacity: 0.7 }}
              />
              <text x="50%" y="54%" textAnchor="middle" fill="#3a4256" fontSize="16" fontWeight="bold" fontFamily="inherit" dominantBaseline="middle" style={{ letterSpacing: 1 }}>
                {initials}
              </text>
            </svg>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nex-user-menu-dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
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
                  <li
                    className="nex-user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      onProfile();
                    }}
                  >
                    Profile
                  </li>
                )}

                {enableEndorsements && (
                  <li
                    className="nex-user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      onEndorsementsClick?.();
                    }}
                  >
                    Endorsements ({endorsementCount ?? 0})
                  </li>
                )}

                {enableSubscriptionInfo && subscription && (
                  <li
                    className="nex-user-menu-item"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      onSubscriptionClick?.();
                    }}
                  >
                    Subscription: {subscription.tier}
                  </li>
                )}

                {enableAuditLog && (
                  <li
                    className="nex-user-menu-item"
                    onClick={() => {
                      setOpen(false);
                      onActivityLogClick?.();
                    }}
                  >
                    Activity Log
                  </li>
                )}

                {enableSecuritySettings && (
                  <li
                    className="nex-user-menu-item"
                    onClick={() => {
                      setOpen(false);
                      onSecurityClick?.();
                    }}
                  >
                    Security Settings
                  </li>
                )}

                {enableIntegrations && (
                  <li
                    className="nex-user-menu-item"
                    onClick={() => {
                      setOpen(false);
                      onIntegrationsClick?.();
                    }}
                  >
                    Manage Integrations
                  </li>
                )}

                {enableAdminPanel && (
                  <li
                    className="nex-user-menu-item"
                    onClick={() => {
                      setOpen(false);
                      onAdminPanelClick?.();
                    }}
                  >
                    Admin Panel
                  </li>
                )}

                {onLogout && (
                  <li
                    className="nex-user-menu-item danger"
                    onClick={() => {
                      setOpen(false);
                      onLogout();
                    }}
                  >
                    Log out
                  </li>
                )}
              </>
            ) : (
              <li
                className="nex-user-menu-item sign-up-cta"
                onClick={() => {
                  setOpen(false);
                  onSignUpClick?.();
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Sign up to personalize
                </motion.div>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
