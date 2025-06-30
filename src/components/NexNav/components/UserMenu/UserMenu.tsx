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
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User menu"
      >
        <img
          src={avatarSrc}
          alt="User Avatar"
          className="nex-user-menu-avatar"
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nex-user-menu-dropdown"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
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
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
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
