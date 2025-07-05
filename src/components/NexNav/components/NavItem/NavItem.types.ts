import { ReactNode } from 'react';
import { NavSubItem } from '../../NexNav.types';

export type NavItemProps = {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  badge?: string | number;
  tooltip?: string;
  subItems?: NavSubItem[];
  description?: string;
};
