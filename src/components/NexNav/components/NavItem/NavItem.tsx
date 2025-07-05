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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    onClick?.();
  };

  const handleMouseEnter = () => {
    if (hasSubItems && !disabled) {
      // Clear any pending close timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
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
      className="nex-nav-item-wrapper" 
      ref={dropdownRef}
      onMouseLeave={() => {
        // Add delay before closing to prevent glitchy behavior
        if (hasSubItems) {
          timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
          }, 150);
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
        onMouseEnter={handleMouseEnter}
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
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
            className={`nex-nav-dropdown${!isAtTop ? ' not-at-top' : ''}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            role="menu"
            aria-label={`${label} submenu`}
            onMouseEnter={() => {
              if (hasSubItems) {
                // Clear any pending close timeout
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                setIsDropdownOpen(true);
              }
            }}
            onMouseLeave={() => {
              // Add delay before closing to prevent glitchy behavior
              if (hasSubItems) {
                timeoutRef.current = setTimeout(() => {
                  setIsDropdownOpen(false);
                }, 150);
              }
            }}
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
