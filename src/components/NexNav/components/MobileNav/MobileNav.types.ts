import { LanguageOption } from '../LanguageSwitcher/LanguageSwitcher.types';

export type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; onClick: () => void }[];
  user?: {
    name: string;
    avatarUrl?: string;
  };
  isAuthenticated: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  onProfile?: () => void;
  currentLocale: string;
  languageOptions: LanguageOption[];
  onLocaleChange: (code: string) => void;
};
