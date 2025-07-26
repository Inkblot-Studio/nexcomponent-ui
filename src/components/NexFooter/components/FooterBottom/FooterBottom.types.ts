import type { FooterTranslations } from '../../NexFooter.types';

export interface SocialLink {
  type: string;
  url: string;
}

export interface FooterBottomProps {
  displayName: string;
  socials?: SocialLink[];
  variant?: 'default' | 'contact';
  theme?: 'auto' | 'light' | 'black-glass';
  translations?: FooterTranslations;
} 