import { NavTranslations } from '../../NexNav.types';

export type LanguageOption = {
  code: string;
  label: string;
  icon?: string; // optional flag/icon URL
};

export type LanguageSwitcherProps = {
  currentLocale: string;
  options: LanguageOption[];
  onChange: (code: string) => void;
  isAtTop?: boolean; // Controls dropdown background styling based on scroll position
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  theme?: 'light' | 'auto' | 'black-glass';
  
  // Translation support
  translations?: NavTranslations;
};
