import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickAway } from 'react-use';
import './UserMenu.scss';
import { UserMenuProps } from './UserMenu.types';

const UserMenu: React.FC<UserMenuProps> = ({
  user,
  onLogout,
  onProfile,
  onDevSwitchToggle,
  isDevMode
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useClickAway(menuRef, () => setOpen(false));

  const toggleMenu = () => setOpen((prev) => !prev);

  const initials =
    user?.name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || '';

  return (
    <div className="nex-user-menu" ref={menuRef}>
      <button
        className="nex-user-menu-trigger"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User menu"
      >
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} alt="User Avatar" className="nex-user-menu-avatar" />
        ) : (
          <div className="nex-user-menu-avatar fallback">{initials}</div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nex-user-menu-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="menu"
          >
            {onProfile && (
              <li className="nex-user-menu-item" onClick={() => { setOpen(false); onProfile(); }}>
                Profile
              </li>
            )}
            {onDevSwitchToggle && (
              <li className="nex-user-menu-item" onClick={() => { setOpen(false); onDevSwitchToggle(); }}>
                {isDevMode ? 'Exit Dev Mode' : 'Enter Dev Mode'}
              </li>
            )}
            {onLogout && (
              <li className="nex-user-menu-item danger" onClick={() => { setOpen(false); onLogout(); }}>
                Log out
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
