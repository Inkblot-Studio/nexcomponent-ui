import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import classNames from 'classnames';
import NavItem from '../NavItem';
import { useAnimationConfig, ANIMATION_VARIANTS } from '../../../../utils/animationConfig';
// Responsive constants based on container width
const getResponsiveConstants = (containerWidth) => {
    if (containerWidth <= 400) {
        return { minItemWidth: 50, moreButtonWidth: 40, itemGap: 2, safetyMargin: 2 };
    }
    else if (containerWidth <= 600) {
        return { minItemWidth: 60, moreButtonWidth: 45, itemGap: 3, safetyMargin: 3 };
    }
    else if (containerWidth <= 800) {
        return { minItemWidth: 65, moreButtonWidth: 50, itemGap: 4, safetyMargin: 4 };
    }
    else if (containerWidth <= 1200) {
        return { minItemWidth: 70, moreButtonWidth: 55, itemGap: 6, safetyMargin: 6 };
    }
    else {
        return { minItemWidth: 75, moreButtonWidth: 60, itemGap: 8, safetyMargin: 8 };
    }
};
// Debounce function for performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
const NavItems = ({ navItems, isAtTop, onItemClick }) => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [isCalculating, setIsCalculating] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [lastContainerWidth, setLastContainerWidth] = useState(0);
    const navListRef = useRef(null);
    const moreDropdownRef = useRef(null);
    const { timing, shouldReduceMotion, stagger } = useAnimationConfig();
    // Calculate item width with responsive considerations
    const calculateItemWidth = useCallback((item, element, containerWidth) => {
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
        }
        else if (containerWidth && containerWidth <= 600) {
            estimatedWidth = Math.max(baseWidth, labelLength * 7 + extraWidth + 16);
        }
        else if (containerWidth && containerWidth <= 800) {
            estimatedWidth = Math.max(baseWidth, labelLength * 8 + extraWidth + 20);
        }
        else if (containerWidth && containerWidth <= 1200) {
            estimatedWidth = Math.max(baseWidth, labelLength * 9 + extraWidth + 24);
        }
        else {
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
        if (!navListRef.current || isCalculating)
            return;
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
            const itemWidths = [];
            for (let i = 0; i < navItems.length; i++) {
                const item = navItems[i];
                if (!item)
                    continue; // Skip undefined items
                const itemElement = itemElements[i];
                const width = calculateItemWidth(item, itemElement, containerWidth);
                itemWidths.push(width);
            }
            // Determine if we should use condensation
            const shouldCondense = containerWidth < 800 || navItems.length > 4;
            if (!shouldCondense) {
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
                }
                else {
                    break;
                }
            }
            // Apply condensation rules
            let finalVisibleCount = visibleCount;
            if (navItems.length > 3) {
                finalVisibleCount = Math.min(finalVisibleCount, 3);
            }
            if (containerWidth <= 600) {
                finalVisibleCount = Math.min(finalVisibleCount, 2);
            }
            if (containerWidth <= 400) {
                finalVisibleCount = Math.min(finalVisibleCount, 1);
            }
            finalVisibleCount = Math.max(1, finalVisibleCount);
            const newVisibleItems = Array.from({ length: finalVisibleCount }, (_, i) => i);
            setVisibleItems(newVisibleItems);
            setLastContainerWidth(containerWidth);
            setIsCalculating(false);
        });
    }, [navItems, calculateItemWidth, isCalculating, lastContainerWidth, visibleItems.length]);
    // Debounced resize handler
    const debouncedCalculateVisibleItems = useMemo(() => debounce(calculateVisibleItems, 30), [calculateVisibleItems]);
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
        const handleClickOutside = (e) => {
            const target = e.target;
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
    const hasOverflow = overflowNavItems.length > 0;
    return (<motion.ul className="nex-nav-list" role="menubar" aria-label="Main menu" ref={navListRef}>
      {/* Show all items initially, then filter based on calculation */}
      {(visibleItems.length === 0 ? memoizedNavItems.slice(0, 5) : visibleNavItems).map((item, i) => {
            if (!item)
                return null; // Skip undefined items
            return (<motion.li key={item.key || i} variants={ANIMATION_VARIANTS.mobileNav.navItem}>
            <NavItem label={item.label} onClick={() => onItemClick?.(item)} isActive={false} disabled={item.disabled} badge={item.badge} subItems={item.subItems} description={item.description} isAtTop={isAtTop}/>
          </motion.li>);
        })}
      
      {/* More dropdown for overflow items */}
      {hasOverflow && (<motion.li variants={ANIMATION_VARIANTS.mobileNav.navItem} style={{ position: 'relative' }}>
          <div className="nex-nav-item-wrapper" style={{ position: 'relative' }} ref={moreDropdownRef}>
            <motion.button className={classNames('nex-nav-item', {
                'has-dropdown': true,
                'dropdown-open': isMoreOpen
            })} role="menuitem" aria-haspopup="true" aria-expanded={isMoreOpen} tabIndex={0} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMoreOpen(prev => !prev);
            }} onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsMoreOpen(prev => !prev);
                }
            }} type="button" initial={false} transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1]
            }}>
              <div className="nex-nav-item-content">
                <span className="nex-nav-item__label" style={{ fontSize: 'var(--nex-font-size-xs)' }}>
                  More
                </span>
                <span className="nex-nav-item-badge" aria-label={`${overflowNavItems.length} additional items`}>
                  {overflowNavItems.length}
                </span>
                <motion.span className="nex-nav-item-chevron" animate={{ rotate: isMoreOpen ? 180 : 0 }} transition={{ duration: 0.03, ease: [0.4, 0, 0.2, 1] }} aria-hidden="true">
                  <ChevronDown size={14}/>
                </motion.span>
              </div>
            </motion.button>

            {/* More dropdown menu */}
            <AnimatePresence>
              {isMoreOpen && (<motion.div className="nex-nav-dropdown" initial={{ opacity: 0, y: -8 }} animate={{
                    opacity: 1,
                    y: 0,
                    background: isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
                    borderColor: isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)',
                    boxShadow: isAtTop
                        ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
                }} exit={{ opacity: 0, y: -8 }} transition={{
                    duration: 0,
                    ease: [0.4, 0, 0.2, 1]
                }} style={{
                    transformOrigin: 'top center',
                    right: 0,
                    left: 'auto'
                }} role="menu" aria-label="More options submenu">
                  <motion.ul className="nex-nav-dropdown-list">
                    {overflowNavItems.map((item, index) => {
                    if (!item)
                        return null; // Skip undefined items
                    // If item has subitems, render them directly
                    if (item.subItems && item.subItems.length > 0) {
                        return item.subItems.map((subItem, subIndex) => (<motion.li key={`${subItem.label}-${subIndex}`} className={classNames('nex-nav-sub-item', {
                                'disabled': subItem.disabled,
                                'from-parent': true
                            })} role="menuitem" tabIndex={subItem.disabled ? -1 : 0} onClick={() => {
                                if (!subItem.disabled && subItem.onClick) {
                                    subItem.onClick();
                                    setIsMoreOpen(false);
                                }
                            }} aria-disabled={subItem.disabled} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                                duration: 0.1,
                                delay: (index * item.subItems.length + subIndex) * 0.02
                            }}>
                            <div className="nex-nav-sub-item-content">
                              <div className="nex-nav-sub-item-text">
                                <span className="nex-nav-sub-item-label">{subItem.label}</span>
                                {subItem.description && (<span className="nex-nav-sub-item-description">{subItem.description}</span>)}
                                <span className="nex-nav-sub-item-parent">{item.label}</span>
                              </div>
                              {subItem.badge && (<span className="nex-nav-sub-item-badge" aria-label={`${subItem.badge} notifications`}>
                                  {subItem.badge}
                                </span>)}
                            </div>
                          </motion.li>));
                    }
                    // Regular item without subitems
                    return (<motion.li key={item.key || `overflow-${index}`} className={classNames('nex-nav-sub-item', {
                            'disabled': item.disabled
                        })} role="menuitem" tabIndex={item.disabled ? -1 : 0} onClick={() => {
                            if (!item.disabled && item.onClick) {
                                item.onClick();
                                setIsMoreOpen(false);
                            }
                        }} aria-disabled={item.disabled} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                            duration: 0.1,
                            delay: index * 0.02
                        }}>
                          <div className="nex-nav-sub-item-content">
                            <div className="nex-nav-sub-item-text">
                              <span className="nex-nav-sub-item-label">{item.label}</span>
                              {item.description && (<span className="nex-nav-sub-item-description">{item.description}</span>)}
                            </div>
                            {item.badge && (<span className="nex-nav-sub-item-badge" aria-label={`${item.badge} notifications`}>
                                {item.badge}
                              </span>)}
                          </div>
                        </motion.li>);
                })}
                  </motion.ul>
                </motion.div>)}
            </AnimatePresence>
          </div>
        </motion.li>)}
    </motion.ul>);
};
export default NavItems;
//# sourceMappingURL=NavItems.jsx.map