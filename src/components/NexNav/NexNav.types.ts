import { LanguageOption } from './components/LanguageSwitcher/LanguageSwitcher.types';

export type NavItem = {
  label: string;
  onClick: () => void;
};

export type User = {
  name: string;
  avatarUrl?: string;
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

  onDevSwitchToggle?: () => void;
  isDevMode?: boolean;

  languageOptions: LanguageOption[];
};
