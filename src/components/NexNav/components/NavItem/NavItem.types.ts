import { ReactNode } from 'react';
import { NavSubItem } from '../../NexNav.types';

export type NavItemProps = {
  label: string;
  onClick?: () => void; // Optional - not used when subItems are present
  isActive?: boolean;
  disabled?: boolean;
  badge?: string | number;
  tooltip?: string;
  subItems?: NavSubItem[];
  description?: string;
  isAtTop?: boolean;
};
