import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import classNames from 'classnames';
import NavItem from '../NavItem';
import type { NavItem as NavItemType } from '../../NexNav.types';
import { useAnimationConfig, ANIMATION_VARIANTS } from '../../../../utils/animationConfig';

interface NavItemsProps {
  navItems: NavItemType[];
  isAtTop: boolean;
  onItemClick?: (item: NavItemType) => void;
}

// Responsive constants based on container width
const getResponsiveConstants = (containerWidth: number) => {
  if (containerWidth <= 400) {
    return { minItemWidth: 50, moreButtonWidth: 40, itemGap: 2, safetyMargin: 2 };
  } else if (containerWidth <= 600) {
    return { minItemWidth: 60, moreButtonWidth: 45, itemGap: 3, safetyMargin: 3 };
  } else if (containerWidth <= 800) {
    return { minItemWidth: 65, moreButtonWidth: 50, itemGap: 4, safetyMargin: 4 };
  } else if (containerWidth <= 1200) {
    return { minItemWidth: 70, moreButtonWidth: 55, itemGap: 6, safetyMargin: 6 };
  } else {
    return { minItemWidth: 75, moreButtonWidth: 60, itemGap: 8, safetyMargin: 8 };
  }
};

// Debounce function for performance
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const NavItems: React.FC<NavItemsProps> = ({ navItems, isAtTop, onItemClick }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [lastContainerWidth, setLastContainerWidth] = useState(0);
  
  const navListRef = useRef<HTMLUListElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  
  const { timing, shouldReduceMotion, stagger } = useAnimationConfig();

  // Calculate item width with responsive considerations
  const calculateItemWidth = useCallback((item: NavItemType, element?: HTMLElement, containerWidth?: number) => {
    const constants = getResponsiveConstants(containerWidth || window.innerWidth);
    
    if (element) {
      const itemWidth = element.offsetWidth;
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const extraWidth = hasSubItems ? 8 : 0;
      return itemWidth + extraWidth + constants.itemGap;
    }
    
    // Fallback calculation
    const baseWidth = constants.minItemWidth;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const extraWidth = hasSubItems ? 8 : 0;
    const labelLength = item.label.length;
    
    let estimatedWidth = baseWidth;
    
    if (containerWidth && containerWidth <= 400) {
      estimatedWidth = Math.max(baseWidth, labelLength * 6 + extraWidth + 12);
    } else if (containerWidth && containerWidth <= 600) {
      estimatedWidth = Math.max(baseWidth, labelLength * 7 + extraWidth + 16);
    } else if (containerWidth && containerWidth <= 800) {
      estimatedWidth = Math.max(baseWidth, labelLength * 8 + extraWidth + 20);
    } else if (containerWidth && containerWidth <= 1200) {
      estimatedWidth = Math.max(baseWidth, labelLength * 9 + extraWidth + 24);
    } else {
      estimatedWidth = Math.max(baseWidth, labelLength * 10 + extraWidth + 28);
    }
    
    const badgeSpace = containerWidth && containerWidth <= 400 ? 8 : containerWidth && containerWidth <= 600 ? 10 : containerWidth && containerWidth <= 800 ? 12 : 16;
    const descriptionSpace = containerWidth && containerWidth <= 400 ? 4 : containerWidth && containerWidth <= 600 ? 6 : containerWidth && containerWidth <= 800 ? 8 : 10;
    
    if (item.badge) {
      estimatedWidth += badgeSpace;
    }
    
    if (item.description) {
      estimatedWidth += descriptionSpace;
    }
    
    return estimatedWidth + constants.itemGap;
  }, []);

  // Calculate visible items with optimized logic
  const calculateVisibleItems = useCallback(() => {
    if (!navListRef.current || isCalculating) return;

    setIsCalculating(true);
    
    requestAnimationFrame(() => {
      if (!navListRef.current) {
        setIsCalculating(false);
        return;
      }

      const container = navListRef.current;
      const containerWidth = container.offsetWidth;
      const itemElements = container.querySelectorAll('.nex-nav-item');
      const constants = getResponsiveConstants(containerWidth);
      
      // Hysteresis to prevent oscillation
      const widthChange = Math.abs(containerWidth - lastContainerWidth);
      const hysteresisThreshold = 20;
      
      if (widthChange < hysteresisThreshold && visibleItems.length > 0) {
        setIsCalculating(false);
        return;
      }
      
      // Calculate all item widths upfront
      const itemWidths: number[] = [];
      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        if (!item) continue; // Skip undefined items
        
        const itemElement = itemElements[i] as HTMLElement;
        const width = calculateItemWidth(item, itemElement, containerWidth);
        itemWidths.push(width);
      }
      
      // Determine if we should use condensation
      // Only condense if there are 3 or more nav items AND container is small
      // This prevents the "More" button from appearing with less than 3 items
      const shouldCondense = navItems.length >= 3 && (containerWidth < 800 || navItems.length > 4);
      
      if (!shouldCondense) {
        // Show all items if no condensation needed
        const newVisibleItems = Array.from({ length: navItems.length }, (_, i) => i);
        setVisibleItems(newVisibleItems);
        setLastContainerWidth(containerWidth);
        setIsCalculating(false);
        return;
      }
      
      // Aggressive condensation logic
      const availableSpace = containerWidth - constants.safetyMargin;
      const moreButtonSpace = constants.moreButtonWidth;
      const spaceWithMore = availableSpace - moreButtonSpace;
      
      let totalWidth = 0;
      let visibleCount = 0;
      
      for (let i = 0; i < navItems.length; i++) {
        const itemWidth = itemWidths[i];
        if (itemWidth !== undefined && totalWidth + itemWidth <= spaceWithMore) {
          totalWidth += itemWidth;
          visibleCount = i + 1;
        } else {
          break;
        }
      }
      
      // Apply condensation rules - ensure we never show less than 1 item
      let finalVisibleCount = Math.max(1, visibleCount);
      
      // Apply responsive limits
      if (containerWidth <= 400) {
        finalVisibleCount = Math.min(finalVisibleCount, 1);
      } else if (containerWidth <= 600) {
        finalVisibleCount = Math.min(finalVisibleCount, 2);
      } else if (containerWidth <= 800) {
        finalVisibleCount = Math.min(finalVisibleCount, 3);
      }
      
      const newVisibleItems = Array.from({ length: finalVisibleCount }, (_, i) => i);
      
      setVisibleItems(newVisibleItems);
      setLastContainerWidth(containerWidth);
      setIsCalculating(false);
    });
  }, [navItems, calculateItemWidth, isCalculating, lastContainerWidth, visibleItems.length]);

  // Debounced resize handler
  const debouncedCalculateVisibleItems = useMemo(
    () => debounce(calculateVisibleItems, 30),
    [calculateVisibleItems]
  );

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      debouncedCalculateVisibleItems();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [debouncedCalculateVisibleItems]);

  // Recalculate when nav items change
  useEffect(() => {
    const timer = setTimeout(calculateVisibleItems, 100);
    return () => clearTimeout(timer);
  }, [navItems, calculateVisibleItems]);

  // Initial calculation
  useEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  // Close more dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(target)) {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreOpen]);

  // Memoize nav items with proper accessibility
  const memoizedNavItems = useMemo(() => {
    return navItems.map((item, i) => ({
      ...item,
      key: `nav-item-${i}`,
      'aria-label': item.label,
      'aria-current': undefined
    }));
  }, [navItems]);

  // Separate visible items and overflow items
  const visibleNavItems = useMemo(() => {
    return visibleItems.map(index => memoizedNavItems[index]).filter(Boolean);
  }, [memoizedNavItems, visibleItems]);

  const overflowNavItems = useMemo(() => {
    return memoizedNavItems.filter((_, index) => !visibleItems.includes(index));
  }, [memoizedNavItems, visibleItems]);

  // Only show overflow if there are 3 or more nav items and we have overflow
  const hasOverflow = navItems.length >= 3 && overflowNavItems.length > 0;

  return (
    <motion.ul 
      className="nex-nav-list" 
      role="menubar"
      aria-label="Main menu"
      ref={navListRef}
    >
      {/* Show all items initially, then filter based on calculation */}
      {/* For less than 3 items, always show all items */}
      {(visibleItems.length === 0 ? memoizedNavItems.slice(0, navItems.length < 3 ? navItems.length : 5) : visibleNavItems).map((item, i) => {
        if (!item) return null; // Skip undefined items
        
        return (
          <motion.li
            key={item.key || i}
            variants={ANIMATION_VARIANTS.mobileNav.navItem}
          >
            <NavItem 
              label={item.label} 
              onClick={() => onItemClick?.(item)}
              isActive={false}
              disabled={item.disabled}
              badge={item.badge}
              subItems={item.subItems}
              description={item.description}
              isAtTop={isAtTop}
            />
          </motion.li>
        );
      })}
      
      {/* More dropdown for overflow items */}
      {hasOverflow && (
        <motion.li
          variants={ANIMATION_VARIANTS.mobileNav.navItem}
          style={{ position: 'relative' }}
        >
          <div 
            className="nex-nav-item-wrapper"
            style={{ position: 'relative' }}
            ref={moreDropdownRef}
          >
            <motion.button
              className={classNames('nex-nav-item', {
                'has-dropdown': true,
                'dropdown-open': isMoreOpen
              })}
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isMoreOpen}
              aria-label={`More options (${overflowNavItems.length} additional items)`}
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMoreOpen(prev => !prev);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsMoreOpen(prev => !prev);
                }
              }}
              type="button"
              initial={false}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className="nex-nav-item-content">
                <span className="nex-nav-item__icon" aria-hidden="true">
                  <MoreHorizontal size={16} />
                </span>
                <span className="nex-nav-item-badge" aria-label={`${overflowNavItems.length} additional items`}>
                  {overflowNavItems.length}
                </span>
                <motion.span 
                  className="nex-nav-item-chevron"
                  animate={{ rotate: isMoreOpen ? 180 : 0 }}
                  transition={{ duration: 0.03, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </div>
            </motion.button>

            {/* More dropdown menu */}
            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  className="nex-nav-dropdown"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0
                  }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ 
                    duration: 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  style={{ 
                    transformOrigin: 'top center',
                    right: 0,
                    left: 'auto',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}
                  role="menu"
                  aria-label="More options submenu"
                >
                  <motion.ul className="nex-nav-dropdown-list">
                    {overflowNavItems.map((item, index) => {
                      if (!item) return null; // Skip undefined items
                      
                      // If item has subitems, render them directly
                      if (item.subItems && item.subItems.length > 0) {
                        return item.subItems.map((subItem, subIndex) => (
                          <motion.li
                            key={`${subItem.label}-${subIndex}`}
                            className={classNames('nex-nav-sub-item', {
                              'disabled': subItem.disabled,
                              'from-parent': true
                            })}
                            role="menuitem"
                            tabIndex={subItem.disabled ? -1 : 0}
                            onClick={() => {
                              if (!subItem.disabled && subItem.onClick) {
                                subItem.onClick();
                                setIsMoreOpen(false);
                              }
                            }}
                            aria-disabled={subItem.disabled}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                              duration: 0.1,
                              delay: (index * item.subItems!.length + subIndex) * 0.02
                            }}
                          >
                            <div className="nex-nav-sub-item-content">
                              <div className="nex-nav-sub-item-text">
                                <span className="nex-nav-sub-item-label">{subItem.label}</span>
                                {subItem.description && (
                                  <span className="nex-nav-sub-item-description">{subItem.description}</span>
                                )}
                                <span className="nex-nav-sub-item-parent">{item.label}</span>
                              </div>
                              {subItem.badge && (
                                <span className="nex-nav-sub-item-badge" aria-label={`${subItem.badge} notifications`}>
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                          </motion.li>
                        ));
                      }
                      
                      // Regular item without subitems
                      return (
                        <motion.li
                          key={item.key || `overflow-${index}`}
                          className={classNames('nex-nav-sub-item', {
                            'disabled': item.disabled
                          })}
                          role="menuitem"
                          tabIndex={item.disabled ? -1 : 0}
                          onClick={() => {
                            if (!item.disabled && item.onClick) {
                              item.onClick();
                              setIsMoreOpen(false);
                            }
                          }}
                          aria-disabled={item.disabled}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ 
                            duration: 0.1,
                            delay: index * 0.02
                          }}
                        >
                          <div className="nex-nav-sub-item-content">
                            <div className="nex-nav-sub-item-text">
                              <span className="nex-nav-sub-item-label">{item.label}</span>
                              {item.description && (
                                <span className="nex-nav-sub-item-description">{item.description}</span>
                              )}
                            </div>
                            {item.badge && (
                              <span className="nex-nav-sub-item-badge" aria-label={`${item.badge} notifications`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.li>
      )}
    </motion.ul>
  );
};

export default NavItems; 