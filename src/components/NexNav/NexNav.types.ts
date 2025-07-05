import { LanguageOption } from './components/LanguageSwitcher/LanguageSwitcher.types';

export type NavSubItem = {
  label: string;
  onClick: () => void;
  badge?: string | number;
  disabled?: boolean;
  description?: string;
};

export type NavItem = {
  label: string;
  onClick?: () => void; // Optional - not used when subItems are present
  badge?: string | number;
  disabled?: boolean;
  subItems?: NavSubItem[];
  description?: string;
};

export type User = {
  name: string;
  avatarUrl?: string;
  role?: 'Admin' | 'Pro' | 'Member';
};

export type SubscriptionInfo = {
  tier: string;
  renewalDate: string;
};

export type NexNavProps = {
  logoSrc?: string;
  displayName: string;
  homeButtonHandler: () => void;

  navItems: NavItem[];

  isAuthenticated: boolean;
  user?: User;

  onLogin?: () => void;
  onLogout?: () => void;
  onProfile?: () => void;

  languageOptions: LanguageOption[];

  // Advanced features for UserMenu
  endorsementCount?: number;
  subscription?: SubscriptionInfo;

  onEndorsementsClick?: () => void;
  onSubscriptionClick?: () => void;
  onActivityLogClick?: () => void;
  onSecurityClick?: () => void;
  onIntegrationsClick?: () => void;
  onAdminPanelClick?: () => void;
};
