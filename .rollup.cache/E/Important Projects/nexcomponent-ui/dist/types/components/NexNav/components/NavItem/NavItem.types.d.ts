import { NavSubItem } from '../../NexNav.types';
export type NavItemProps = {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
    disabled?: boolean;
    badge?: string | number;
    tooltip?: string;
    subItems?: NavSubItem[];
    description?: string;
    isAtTop?: boolean;
};
//# sourceMappingURL=NavItem.types.d.ts.map