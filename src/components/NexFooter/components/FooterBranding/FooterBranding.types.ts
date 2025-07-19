export interface FooterBrandingProps {
  logoSrc?: string;
  displayName: string;
  tagline?: string;
  showLogoText?: boolean;
  newsletter?: {
    enabled?: boolean;
    placeholder?: string;
    onSubmit?: (email: string) => void;
  };
  variant?: 'default' | 'contact';
  theme?: 'auto' | 'light' | 'dark' | 'black-glass';
} 