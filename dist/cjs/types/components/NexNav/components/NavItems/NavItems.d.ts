import React from 'react';
import type { NavItem as NavItemType } from '../../NexNav.types';
interface NavItemsProps {
    navItems: NavItemType[];
    isAtTop: boolean;
    onItemClick?: (item: NavItemType) => void;
}
declare const NavItems: React.FC<NavItemsProps>;
export default NavItems;
//# sourceMappingURL=NavItems.d.ts.map