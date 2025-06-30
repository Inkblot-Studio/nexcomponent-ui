import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import './NavItem.scss';
import { NavItemProps } from './NavItem.types';

const NavItem: React.FC<NavItemProps> = ({ label, onClick, isActive = false }) => {
  return (
    <motion.li
      className="nex-nav-item"
      role="menuitem"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      initial={false}
    >
      <span className={classNames('nex-nav-item__label', { active: isActive })}>
        {label}
      </span>
    </motion.li>
  );
};

export default NavItem;
