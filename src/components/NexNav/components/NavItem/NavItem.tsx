import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickAway } from 'react-use';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import './NavItem.scss';
import { NavItemProps } from './NavItem.types';
import { NavSubItem } from '../../NexNav.types';

const NavItem: React.FC<NavItemProps> = ({ 
  label, 
  onClick, 
  isActive = false,
  disabled = false,
  badge,
  tooltip,
  subItems,
  description,
  isAtTop = true
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasSubItems = subItems && subItems.length > 0;

  useClickAway(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (hasSubItems) {
          setIsDropdownOpen(prev => !prev);
        } else {
          onClick?.();
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (hasSubItems && isDropdownOpen) {
          // Focus first sub-item
          const firstSubItem = dropdownRef.current?.querySelector('.nex-nav-sub-item') as HTMLElement;
          firstSubItem?.focus();
        } else {
          // Focus next nav item
          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
          if (nextElement?.classList.contains('nex-nav-item')) {
            nextElement.focus();
          }
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
      case 'ArrowDown':
        e.preventDefault();
        if (hasSubItems) {
          setIsDropdownOpen(true);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        break;
    }
  };

  const handleClick = () => {
    if (disabled) return;
    // If the nav item has sub-items, don't trigger the onClick
    // The dropdown should be the only interaction
    if (!hasSubItems) {
      onClick?.();
    }
  };

  const handleMouseEnter = () => {
    if (hasSubItems && !disabled) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // Don't close immediately - let the dropdown handle its own mouse events
  };

  const handleSubItemClick = (subItem: NavSubItem) => {
    if (!subItem.disabled) {
      subItem.onClick();
      setIsDropdownOpen(false);
    }
  };

  const handleSubItemKeyDown = (e: React.KeyboardEvent, subItem: NavSubItem, index: number) => {
    if (subItem.disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSubItemClick(subItem);
        break;
      case 'ArrowDown':
        e.preventDefault();
        const nextSubItem = e.currentTarget.nextElementSibling as HTMLElement;
        if (nextSubItem?.classList.contains('nex-nav-sub-item')) {
          nextSubItem.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevSubItem = e.currentTarget.previousElementSibling as HTMLElement;
        if (prevSubItem?.classList.contains('nex-nav-sub-item')) {
          prevSubItem.focus();
        } else {
          // Focus back to main nav item
          const navItem = e.currentTarget.parentElement?.parentElement?.querySelector('.nex-nav-item') as HTMLElement;
          navItem?.focus();
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsDropdownOpen(false);
        const navItem = e.currentTarget.parentElement?.parentElement?.querySelector('.nex-nav-item') as HTMLElement;
        navItem?.focus();
        break;
    }
  };

  return (
    <div 
      className={classNames('nex-nav-item-wrapper', {
        'has-dropdown-open': isDropdownOpen && hasSubItems
      })}
      ref={dropdownRef}
      onMouseEnter={() => {
        if (hasSubItems && !disabled) {
          setIsDropdownOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (hasSubItems) {
          setIsDropdownOpen(false);
        }
      }}
    >
      <motion.li
        className={classNames('nex-nav-item', {
          'active': isActive,
          'disabled': disabled,
          'has-dropdown': hasSubItems,
          'dropdown-open': isDropdownOpen
        })}
        role="menuitem"
        aria-haspopup={hasSubItems ? 'true' : undefined}
        aria-expanded={hasSubItems ? isDropdownOpen : undefined}
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={tooltip || label}
        aria-disabled={disabled}
        aria-current={isActive ? 'page' : undefined}
        initial={false}
        transition={{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
                <div className="nex-nav-item-content">
          <span className={classNames('nex-nav-item__label', { active: isActive })}>
            {label}
          </span>
          {badge && (
            <span className="nex-nav-item-badge" aria-label={`${badge} notifications`}>
              {badge}
            </span>
          )}
          {hasSubItems && (
            <motion.span 
              className="nex-nav-item-chevron"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.03, ease: [0.4, 0, 0.2, 1] }}
              aria-hidden="true"
            >
              <ChevronDown size={14} />
            </motion.span>
          )}
        </div>
      </motion.li>

      {/* Dropdown Sub-Items */}
      <AnimatePresence>
        {isDropdownOpen && hasSubItems && (
          <motion.div
            className="nex-nav-dropdown"
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scaleY: 1,
              background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
              boxShadow: isAtTop 
                ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
            }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ 
              duration: 0,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{ transformOrigin: 'top center' }}
            role="menu"
            aria-label={`${label} submenu`}

          >
            <motion.ul className="nex-nav-dropdown-list">
              {subItems.map((subItem, index) => (
                <motion.li
                  key={`${subItem.label}-${index}`}
                  className={classNames('nex-nav-sub-item', {
                    'disabled': subItem.disabled
                  })}
                  role="menuitem"
                  tabIndex={subItem.disabled ? -1 : 0}
                  onClick={() => handleSubItemClick(subItem)}
                  onKeyDown={(e) => handleSubItemKeyDown(e, subItem, index)}
                  aria-disabled={subItem.disabled}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.1,
                    delay: index * 0.02
                  }}
                >
                  <div className="nex-nav-sub-item-content">
                    <div className="nex-nav-sub-item-text">
                      <span className="nex-nav-sub-item-label">{subItem.label}</span>
                      {subItem.description && (
                        <span className="nex-nav-sub-item-description">{subItem.description}</span>
                      )}
                    </div>
                    {subItem.badge && (
                      <span className="nex-nav-sub-item-badge" aria-label={`${subItem.badge} notifications`}>
                        {subItem.badge}
                      </span>
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavItem;
