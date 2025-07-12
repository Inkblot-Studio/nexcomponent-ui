import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import './NexNav.scss';

import NavItem from './components/NavItem';
import UserMenu from './components/UserMenu';
import LanguageSwitcher from './components/LanguageSwitcher';
import MobileNav from './components/MobileNav';

import { NexNavProps } from './NexNav.types';
import { Fingerprint, Menu, X, MoreHorizontal, ChevronDown } from 'lucide-react';
import { useAnimationConfig, ANIMATION_VARIANTS, COLOR_SCHEMES, PERFORMANCE_CONFIG } from '../../utils/animationConfig';
import classNames from 'classnames';

const LANG_KEY = 'nex-locale';
const MAX_NAV_ITEMS = 5; // Increased to show more items when space allows
const MIN_ITEM_WIDTH = 70; // Reduced for tighter packing
const MORE_BUTTON_WIDTH = 50; // Reduced for better space efficiency
const SUBITEM_EXTRA_WIDTH = 8; // Reduced for tighter spacing
const ITEM_GAP = 4; // Reduced for much tighter spacing
const SAFETY_MARGIN = 4; // Reduced for more aggressive use of space

// Responsive constants based on container width - More aggressive
const getResponsiveConstants = (containerWidth: number) => {
  if (containerWidth <= 400) {
    return {
      minItemWidth: 50,
      moreButtonWidth: 40,
      itemGap: 2,
      safetyMargin: 2
    };
  } else if (containerWidth <= 600) {
    return {
      minItemWidth: 60,
      moreButtonWidth: 45,
      itemGap: 3,
      safetyMargin: 3
    };
  } else if (containerWidth <= 800) {
    return {
      minItemWidth: 65,
      moreButtonWidth: 50,
      itemGap: 4,
      safetyMargin: 4
    };
  } else if (containerWidth <= 1200) {
    return {
      minItemWidth: 70,
      moreButtonWidth: 55,
      itemGap: 6,
      safetyMargin: 6
    };
  } else {
    return {
      minItemWidth: 75,
      moreButtonWidth: 60,
      itemGap: 8,
      safetyMargin: 8
    };
  }
};

// Debounce function to prevent excessive calculations
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

const getDefaultLocale = (): string => {
  const lang = navigator.language || 'en';
  return lang.split('-')[0];
};

// Responsive left position hook
function useResponsiveLeft() {
  const [left, setLeft] = useState('var(--nex-spacing-md)');

  useEffect(() => {
    function updateLeft() {
      const width = window.innerWidth;
      if (width <= 768) {
        setLeft('var(--nex-spacing-md)');
      } else if (width <= 1440) {
        setLeft('var(--nex-spacing-lg)');
      } else {
        setLeft(`calc((100vw - 1440px) / 2 + var(--nex-spacing-lg))`);
      }
    }
    updateLeft();
    window.addEventListener('resize', updateLeft);
    return () => window.removeEventListener('resize', updateLeft);
  }, []);

  return left;
}

const NexNav: React.FC<NexNavProps> = ({
  logoSrc,
  displayName,
  homeButtonHandler,
  navItems,
  user,
  isAuthenticated,
  onLogin,
  onLogout,
  onProfile,
  languageOptions,
  subscription,
  endorsementCount,
  onEndorsementsClick,
  onSubscriptionClick,
  onActivityLogClick,
  onSecurityClick,
  onIntegrationsClick,
  onAdminPanelClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [locale, setLocale] = useState('en');
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  
  const [availableWidth, setAvailableWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [lastContainerWidth, setLastContainerWidth] = useState(0);

  const navListRef = useRef<HTMLUListElement>(null);
  const menuRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  
  // Use centralized animation configuration
  const { fast, medium, slow, stagger, shouldReduceMotion } = useAnimationConfig();

  // Ensure only one dropdown is open at a time
  useEffect(() => {
    if (isLanguageOpen && (isUserOpen || isMoreOpen)) {
      setIsUserOpen(false);
      setIsMoreOpen(false);
    }
  }, [isLanguageOpen]);

  useEffect(() => {
    if (isUserOpen && (isLanguageOpen || isMoreOpen)) {
      setIsLanguageOpen(false);
      setIsMoreOpen(false);
    }
  }, [isUserOpen]);

  useEffect(() => {
    if (isMoreOpen && (isLanguageOpen || isUserOpen)) {
      setIsLanguageOpen(false);
      setIsUserOpen(false);
    }
  }, [isMoreOpen]);

  // Improved width calculation with better handling of subitems
  const calculateItemWidth = useCallback((item: any, element?: HTMLElement, containerWidth?: number) => {
    const constants = getResponsiveConstants(containerWidth || window.innerWidth);
    
    if (element) {
      const itemWidth = element.offsetWidth;
      const hasSubItems = item.subItems && item.subItems.length > 0;
      const extraWidth = hasSubItems ? SUBITEM_EXTRA_WIDTH : 0;
      return itemWidth + extraWidth + constants.itemGap; // Add gap
    }
    
    // Fallback calculation - very aggressive to use every pixel
    const baseWidth = constants.minItemWidth;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const extraWidth = hasSubItems ? SUBITEM_EXTRA_WIDTH : 0;
    const labelLength = item.label.length;
    
    // Very aggressive width estimation - use every pixel
    let estimatedWidth = baseWidth;
    
    if (containerWidth && containerWidth <= 400) {
      // Very small container: Extremely aggressive
      estimatedWidth = Math.max(baseWidth, labelLength * 6 + extraWidth + 12);
    } else if (containerWidth && containerWidth <= 600) {
      // Small container: Very aggressive
      estimatedWidth = Math.max(baseWidth, labelLength * 7 + extraWidth + 16);
    } else if (containerWidth && containerWidth <= 800) {
      // Medium container: Aggressive
      estimatedWidth = Math.max(baseWidth, labelLength * 8 + extraWidth + 20);
    } else if (containerWidth && containerWidth <= 1200) {
      // Large container: Moderate
      estimatedWidth = Math.max(baseWidth, labelLength * 9 + extraWidth + 24);
    } else {
      // Extra large container: Generous
      estimatedWidth = Math.max(baseWidth, labelLength * 10 + extraWidth + 28);
    }
    
    // Minimal extra space for badges and descriptions
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

  // Smart condensation logic that prevents oscillation and removes multiple items at once
  const calculateVisibleItems = useCallback(() => {
    if (!navListRef.current || isCalculating) return;

    setIsCalculating(true);
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      if (!navListRef.current) {
        setIsCalculating(false);
        return;
      }

      const container = navListRef.current;
      const containerWidth = container.offsetWidth;
      const itemElements = container.querySelectorAll('.nex-nav-item');
      const constants = getResponsiveConstants(containerWidth);
      
      // Hysteresis to prevent oscillation - only recalculate if width changed significantly
      const widthChange = Math.abs(containerWidth - lastContainerWidth);
      const hysteresisThreshold = 20; // Only recalculate if width changed by more than 20px
      
      if (widthChange < hysteresisThreshold && visibleItems.length > 0) {
        setIsCalculating(false);
        return;
      }
      
      console.log('Calculating visible items:', {
        containerWidth,
        lastContainerWidth,
        widthChange,
        navItemsLength: navItems.length,
        constants
      });
      
      // Step 1: Calculate all item widths upfront
      const itemWidths: number[] = [];
      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        const itemElement = itemElements[i] as HTMLElement;
        const width = calculateItemWidth(item, itemElement, containerWidth);
        itemWidths.push(width);
      }
      
      // Step 2: Determine if we should use condensation based on container width and item count
      const shouldCondense = containerWidth < 800 || navItems.length > 4;
      
      if (!shouldCondense) {
        // Show all items if we have enough space and not too many items
        const newVisibleItems = Array.from({ length: navItems.length }, (_, i) => i);
        console.log('No condensation needed:', newVisibleItems);
        setVisibleItems(newVisibleItems);
        setAvailableWidth(containerWidth);
        setLastContainerWidth(containerWidth);
        setIsCalculating(false);
        return;
      }
      
      // Step 3: Aggressive condensation logic
      const availableSpace = containerWidth - constants.safetyMargin;
      const moreButtonSpace = constants.moreButtonWidth;
      const spaceWithMore = availableSpace - moreButtonSpace;
      
      // Calculate how many items we can fit with the "More" button
      let totalWidth = 0;
      let visibleCount = 0;
      
      for (let i = 0; i < navItems.length; i++) {
        const itemWidth = itemWidths[i];
        if (totalWidth + itemWidth <= spaceWithMore) {
          totalWidth += itemWidth;
          visibleCount = i + 1;
        } else {
          break;
        }
      }
      
      // Step 4: Apply aggressive condensation rules
      let finalVisibleCount = visibleCount;
      
      // Rule 1: If we have more than 3 items total, force condensation to show only 2-3 items
      if (navItems.length > 3) {
        finalVisibleCount = Math.min(finalVisibleCount, 3);
      }
      
      // Rule 2: If container is very small, be even more aggressive
      if (containerWidth <= 600) {
        finalVisibleCount = Math.min(finalVisibleCount, 2);
      }
      
      // Rule 3: If container is extremely small, show only 1 item
      if (containerWidth <= 400) {
        finalVisibleCount = Math.min(finalVisibleCount, 1);
      }
      
      // Rule 4: Ensure we always show at least 1 item
      finalVisibleCount = Math.max(1, finalVisibleCount);
      
      // Step 5: Create the new visible items array
      const newVisibleItems = Array.from({ length: finalVisibleCount }, (_, i) => i);
      
      console.log('Aggressive condensation result:', {
        shouldCondense,
        containerWidth,
        navItemsLength: navItems.length,
        calculatedVisibleCount: visibleCount,
        finalVisibleCount,
        totalWidth,
        spaceWithMore,
        newVisibleItems,
        willShowMore: finalVisibleCount < navItems.length,
        itemsInMore: navItems.length - finalVisibleCount
      });
      
      setVisibleItems(newVisibleItems);
      setAvailableWidth(containerWidth);
      setLastContainerWidth(containerWidth);
      setIsCalculating(false);
    });
  }, [navItems, calculateItemWidth, isCalculating, lastContainerWidth, visibleItems.length]);

  // Debounced resize handler to prevent twitching
  const debouncedCalculateVisibleItems = useMemo(
    () => debounce(calculateVisibleItems, 30), // Reduced to 30ms for faster responsiveness
    [calculateVisibleItems]
  );

  // Recalculate on resize with debouncing
  useEffect(() => {
    const handleResize = () => {
      // Always recalculate condensation on resize, regardless of mobile mode
      debouncedCalculateVisibleItems();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [debouncedCalculateVisibleItems]);

  // Recalculate when nav items change
  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(calculateVisibleItems, 100);
    return () => clearTimeout(timer);
  }, [navItems, calculateVisibleItems]);

  // Also recalculate when component mounts
  useEffect(() => {
    calculateVisibleItems();
  }, [calculateVisibleItems]);

  // Memoize nav items with proper accessibility
  const memoizedNavItems = useMemo(() => {
    return navItems.map((item, i) => ({
      ...item,
      key: `nav-item-${i}`,
      'aria-label': item.label,
      'aria-current': undefined // Will be set by NavItem component if needed
    }));
  }, [navItems]);

  // Separate visible items and overflow items based on calculated space
  const visibleNavItems = useMemo(() => {
    return visibleItems.map(index => memoizedNavItems[index]).filter(Boolean);
  }, [memoizedNavItems, visibleItems]);

  const overflowNavItems = useMemo(() => {
    return memoizedNavItems.filter((_, index) => !visibleItems.includes(index));
  }, [memoizedNavItems, visibleItems]);

  const hasOverflow = overflowNavItems.length > 0;

  // Memoize scroll handler for performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsAtTop(scrollPosition === 0);
  }, []);

  // Memoize resize handler for performance
  const handleResize = useCallback(() => {
    // Only close mobile menu on resize, don't interfere with condensation
    if (window.innerWidth > 767) {
      setIsMenuOpen(false);
    }
    // Don't reset condensation state - let calculateVisibleItems handle it
  }, []);

  // Memoize locale change handler
  const handleLocaleChange = useCallback((code: string) => {
    setLocale(code);
    localStorage.setItem(LANG_KEY, code);
  }, []);

  // Memoize menu toggle handler with animation
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoize close menu handler
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Memoize home button handler
  const handleHomeClick = useCallback(() => {
    if (homeButtonHandler) {
      homeButtonHandler();
    }
  }, [homeButtonHandler]);

  // Memoize login handler
  const handleLoginClick = useCallback(() => {
    if (onLogin) {
      onLogin();
    }
  }, [onLogin]);

  // Use centralized animation variants
  const shimmerVariants = {
    hidden: { 
      opacity: 0,
      x: '-100%',
      scale: 0.8
    },
    visible: { 
      opacity: shouldReduceMotion ? 0 : 0.6,
      x: '0%',
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Nav container variants
  const navVariants = {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  // Background state variants with mobile nav integration
  const backgroundVariants = {
    atTop: {
      ...ANIMATION_VARIANTS.background.atTop,
      transition: medium
    },
    scrolled: {
      ...ANIMATION_VARIANTS.background.scrolled,
      transition: medium
    },
    mobileOpen: {
      ...ANIMATION_VARIANTS.background.mobileOpen,
      transition: medium
    }
  };

  // Burger button variants
  const burgerVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: fast
    },
    open: {
      rotate: 180,
      scale: 1.05,
      transition: fast
    }
  };

  useClickAway(menuRef, (e) => {
    if (!(e.target as HTMLElement).closest('.nex-nav-burger') && 
        !(e.target as HTMLElement).closest('.nex-mobile-nav')) {
      setIsMenuOpen(false);
    }
  });

  // Close more dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Close if clicking outside the More dropdown area
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

  useEffect(() => {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored) {
      setLocale(stored);
    } else {
      const fallback = languageOptions.find((l) => l.code === getDefaultLocale())?.code || 'en';
      setLocale(fallback);
      localStorage.setItem(LANG_KEY, fallback);
    }
    setIsInitialized(true);
  }, [languageOptions]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Keyboard navigation for the entire nav
  const handleNavKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <>
      <motion.nav
        className={`nex-nav${!isAtTop || isMenuOpen ? ' not-at-top' : ''}`}
        ref={navRef}
        initial="initial"
        animate={isInitialized ? "animate" : "initial"}
        variants={navVariants}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 'var(--nex-z-index-sticky)',
          overflow: 'visible'
        }}
        role="banner"
        aria-label="Main navigation"
      >
        {/* Background state animation */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 0
          }}
          initial="atTop"
          animate={isAtTop && !isMenuOpen ? "atTop" : isMenuOpen ? "mobileOpen" : "scrolled"}
          variants={backgroundVariants}
        />
        {/* Optimized Shimmer Effect */}
        <motion.div
          className="nex-nav-shimmer"
          variants={shimmerVariants}
          initial="hidden"
          animate={isAtTop && !isMenuOpen ? "hidden" : "visible"}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            pointerEvents: 'none',
            zIndex: 1,
            background: 'linear-gradient(120deg, rgba(255,255,255,0.15) 30%, rgba(255,24,1,0.08) 60%, rgba(0,184,255,0.08) 100%)',
            filter: 'blur(6px)',
            willChange: 'transform, opacity'
          }}
          aria-hidden="true"
        />

        <motion.div
          className="nex-nav-inner-wrapper"
          variants={stagger}
          style={{
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Logo Placeholder - Maintains space for mobile logo */}
          <motion.div 
            className="nex-nav-logo-placeholder"
            variants={ANIMATION_VARIANTS.navItem}
            style={{
              width: 'calc(100px + var(--nex-spacing-md) * 2)',
              height: '44px',
              flexShrink: 0,
              marginLeft: 'var(--nex-spacing-md)'
            }}
          />

          {/* Navigation Items */}
          <motion.ul 
            className="nex-nav-list" 
            role="menubar"
            aria-label="Main menu"
            variants={stagger}
            ref={navListRef}
          >
            {/* Show all items initially, then filter based on calculation */}
            {(visibleItems.length === 0 ? memoizedNavItems.slice(0, MAX_NAV_ITEMS) : visibleNavItems).map((item, i) => (
              <motion.li
                key={item.key || i}
                variants={ANIMATION_VARIANTS.navItem}
              >
                <NavItem 
                  label={item.label} 
                  onClick={item.onClick}
                  isActive={false} // You can add logic to determine active state
                  disabled={item.disabled}
                  badge={item.badge}
                  subItems={item.subItems}
                  description={item.description}
                  isAtTop={isAtTop}
                />
              </motion.li>
            ))}
            
            {/* More dropdown for overflow items */}
            {hasOverflow && visibleItems.length > 0 && (
              <motion.li
                variants={ANIMATION_VARIANTS.navItem}
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
                      <span className="nex-nav-item__label" style={{ fontSize: 'var(--nex-font-size-xs)' }}>
                        More
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
                        style={{ 
                          transformOrigin: 'top center',
                          right: 0,
                          left: 'auto'
                        }}
                        role="menu"
                        aria-label="More options submenu"
                      >
                        <motion.ul className="nex-nav-dropdown-list">
                          {overflowNavItems.map((item, index) => {
                            // If item has subitems, render them directly instead of the parent item
                            if (item.subItems && item.subItems.length > 0) {
                              return item.subItems.map((subItem, subIndex) => (
                                <motion.li
                                  key={`${subItem.label}-${subIndex}`}
                                  className={classNames('nex-nav-sub-item', {
                                    'disabled': subItem.disabled,
                                    'from-parent': true // Indicate this came from a parent with subitems
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
                                      {/* Show parent item name for context */}
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

          {/* Right Section */}
          <motion.div 
            className="nex-nav-right" 
            role="group" 
            aria-label="User controls"
            variants={ANIMATION_VARIANTS.navItem}
          >
            <motion.div variants={ANIMATION_VARIANTS.navItem}>
                              <LanguageSwitcher
                  currentLocale={locale}
                  options={languageOptions}
                  onChange={handleLocaleChange}
                  isAtTop={isAtTop}
                  open={isLanguageOpen}
                  onOpen={() => setIsLanguageOpen(!isLanguageOpen)}
                  onClose={() => setIsLanguageOpen(false)}
                />
            </motion.div>
            
            {isAuthenticated && user && onLogout && onProfile ? (
              <motion.div variants={ANIMATION_VARIANTS.navItem}>
                <UserMenu
                  user={user}
                  onLogout={onLogout}
                  onProfile={onProfile}
                  endorsementCount={endorsementCount}
                  subscription={subscription}
                  onEndorsementsClick={onEndorsementsClick}
                  onSubscriptionClick={onSubscriptionClick}
                  onActivityLogClick={onActivityLogClick}
                  onSecurityClick={onSecurityClick}
                  onIntegrationsClick={onIntegrationsClick}
                  onAdminPanelClick={onAdminPanelClick}
                  isAtTop={isAtTop}
                  open={isUserOpen}
                  onOpen={() => setIsUserOpen(!isUserOpen)}
                  onClose={() => setIsUserOpen(false)}
                />
              </motion.div>
            ) : (
              <motion.div 
                className="nex-nav-login-button" 
                onClick={handleLoginClick}
                role="button"
                tabIndex={0}
                aria-label="Sign in to your account"
                onKeyDown={(e) => e.key === 'Enter' && handleLoginClick()}
                variants={ANIMATION_VARIANTS.navItem}
                whileHover={{
                  ...ANIMATION_VARIANTS.button.hover,
                  transition: fast
                }}
                whileTap={{
                  ...ANIMATION_VARIANTS.button.tap,
                  transition: fast
                }}
                whileFocus={{
                  ...ANIMATION_VARIANTS.button.focus,
                  transition: fast
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={fast}
                >
                  <Fingerprint size={18} aria-hidden="true" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...fast, delay: 0.05 }}
                >
                  Login
                </motion.span>
              </motion.div>
            )}
            
            {/* Mobile Burger Button - Also in nav for better accessibility */}
            <motion.button
              className="nex-nav-burger-btn"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={toggleMenu}
              type="button"
              variants={burgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                borderColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                transition: fast
              }}
              whileTap={{
                backgroundColor: "rgba(255, 24, 1, 0.12)",
                borderColor: "rgba(255, 24, 1, 0.2)",
                transition: fast
              }}
              whileFocus={{
                outline: "2px solid var(--nex-signature)",
                outlineOffset: "2px",
                transition: fast
              }}
            >
              <motion.div 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                initial={false}
              >
                <motion.div
                  key="menu"
                  variants={ANIMATION_VARIANTS.icon}
                  animate={isMenuOpen ? "open" : "closed"}
                  style={{ position: 'absolute' }}
                >
                  <Menu size={20} aria-hidden="true" />
                </motion.div>
                <motion.div
                  key="close"
                  variants={ANIMATION_VARIANTS.closeIcon}
                  animate={isMenuOpen ? "open" : "closed"}
                  style={{ position: 'absolute' }}
                >
                  <X size={20} aria-hidden="true" />
                </motion.div>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>



      {/* Mobile Navigation with Optimized Animations */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <MobileNav
            isOpen={isMenuOpen}
            onClose={closeMenu}
            navItems={navItems}
            user={user}
            isAuthenticated={isAuthenticated}
            onLogin={onLogin}
            onLogout={onLogout}
            onProfile={onProfile}
            currentLocale={locale}
            languageOptions={languageOptions}
            onLocaleChange={handleLocaleChange}
            endorsementCount={endorsementCount}
            subscription={subscription}
            onEndorsementsClick={onEndorsementsClick}
            onSubscriptionClick={onSubscriptionClick}
            onActivityLogClick={onActivityLogClick}
            onSecurityClick={onSecurityClick}
            onIntegrationsClick={onIntegrationsClick}
            onAdminPanelClick={onAdminPanelClick}
          />
        )}
      </AnimatePresence>

      {/* Mobile Logo with Smooth Animations */}
      {(() => {
        const left = useResponsiveLeft();
        return (
          <motion.div
            className="nex-nav-mobile-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, left }}
            transition={medium}
            style={{
              position: 'fixed',
              top: 'var(--nex-spacing-md)',
              zIndex: 'calc(var(--nex-z-index-modal) + 10)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
              height: '44px',
              cursor: 'pointer',
              left,
            }}
            onClick={handleHomeClick}
            role="button"
            tabIndex={0}
            aria-label={`${displayName} - Go to home`}
            onKeyDown={(e) => e.key === 'Enter' && handleHomeClick()}
            whileHover={{
              transition: fast
            }}
            whileTap={{
              transition: fast
            }}
          >
            {logoSrc ? (
              <motion.div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  padding: '8px',
                  boxSizing: 'border-box'
                }}
                whileHover={{
                  transition: fast
                }}
              >
                <motion.img 
                  src={logoSrc} 
                  alt={displayName} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={medium}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'brightness(0.9) contrast(1.1)',
                    maxWidth: '24px',
                    maxHeight: '24px'
                  }}
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('fallback-hidden');
                  }}
                />
                <motion.div 
                  className="fallback-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={medium}
                  style={{
                    position: 'absolute',
                    fontSize: 'var(--nex-font-size-xs)',
                    fontWeight: 'var(--nex-font-weight-medium)',
                    color: 'var(--nex-font-color)',
                    textAlign: 'center',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '28px',
                    display: 'none'
                  }}
                >
                  {displayName?.slice(0, 2)}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  padding: '4px 12px',
                  boxSizing: 'border-box'
                }}
                whileHover={{
                  transition: fast
                }}
              >
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={medium}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--nex-color-text-primary)',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: 'none',
                    fontFamily: 'var(--nex-font-family-primary)',
                    letterSpacing: '0.02em',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility'
                  }}
                >
                  {displayName || 'NexComponent'}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        );
      })()}
    </>
  );
};

export default NexNav;
