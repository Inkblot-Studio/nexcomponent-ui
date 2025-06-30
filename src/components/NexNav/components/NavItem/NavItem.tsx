import React from 'react';
import { motion } from 'framer-motion';
import './NavItem.scss';
import { NavItemProps } from './NavItem.types';

const NavItem: React.FC<NavItemProps> = ({ label, onClick, isActive = false }) => {
  return (
    <motion.li
      className="nex-nav-item"
      onClick={onClick}
      role="menuitem"
      tabIndex={0}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className={`nex-nav-item-link ${isActive ? 'active' : ''}`}>
        {label}
      </span>
    </motion.li>
  );
};

export default NavItem;
