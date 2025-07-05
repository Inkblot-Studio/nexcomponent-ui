import { ReactNode } from 'react';

export type NavItemProps = {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  badge?: string | number;
  tooltip?: string;
};
