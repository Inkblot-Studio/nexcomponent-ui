import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import './NavItem.scss';
import { NavItemProps } from './NavItem.types';

const NavItem: React.FC<NavItemProps> = ({ 
  label, 
  onClick, 
  isActive = false,
  disabled = false,
  icon,
  badge,
  tooltip
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        onClick?.();
        break;
      case 'ArrowRight':
        e.preventDefault();
        // Focus next nav item
        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
        if (nextElement?.classList.contains('nex-nav-item')) {
          nextElement.focus();
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        // Focus previous nav item
        const prevElement = e.currentTarget.previousElementSibling as HTMLElement;
        if (prevElement?.classList.contains('nex-nav-item')) {
          prevElement.focus();
        }
        break;
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <motion.li
      className={classNames('nex-nav-item', {
        'active': isActive,
        'disabled': disabled
      })}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={tooltip || label}
      aria-disabled={disabled}
      aria-current={isActive ? 'page' : undefined}
      initial={false}
      whileHover={!disabled ? {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      } : {}}
      whileTap={!disabled ? {
        backgroundColor: "rgba(255, 24, 1, 0.15)",
        borderColor: "rgba(255, 24, 1, 0.2)"
      } : {}}
      transition={{
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <div className="nex-nav-item-content">
        {icon && (
          <span className="nex-nav-item-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className={classNames('nex-nav-item__label', { active: isActive })}>
          {label}
        </span>
        {badge && (
          <span className="nex-nav-item-badge" aria-label={`${badge} notifications`}>
            {badge}
          </span>
        )}
      </div>
    </motion.li>
  );
};

export default NavItem;
