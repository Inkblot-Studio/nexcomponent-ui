import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import NavItem from '../NavItem';
import type { NavItem as NavItemType } from '../../NexNav.types';
import { useAnimationConfig, ANIMATION_VARIANTS } from '../../../../utils/animationConfig';

interface NavItemsProps {
  navItems: NavItemType[];
  isAtTop: boolean;
  onItemClick?: (item: NavItemType) => void;
}



const NavItems: React.FC<NavItemsProps> = ({ navItems, isAtTop, onItemClick }) => {
  const navListRef = useRef<HTMLUListElement>(null);
  
  const { timing, shouldReduceMotion, stagger } = useAnimationConfig();

  return (
    <motion.ul 
      className="nex-nav-list" 
      role="menubar"
      aria-label="Main menu"
      ref={navListRef}
    >
      {navItems.map((item, i) => {
        if (!item) return null; // Skip undefined items
        
        return (
          <motion.li
            key={`nav-item-${i}`}
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
    </motion.ul>
  );
};

export default NavItems; 