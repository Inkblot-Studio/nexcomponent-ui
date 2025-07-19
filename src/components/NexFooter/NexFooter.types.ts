import { SocialLink } from './components/FooterBottom/FooterBottom.types';
import { FooterSection, FooterLink } from './components/FooterSections/FooterSections.types';
import { ContactForm } from './components/FooterContactForm/FooterContactForm.types';

export type { SocialLink, FooterSection, FooterLink, ContactForm };

export interface NexFooterProps {
  // Branding
  logoSrc?: string;
  displayName: string;
  tagline?: string;
  showLogoText?: boolean; // New prop to control logo text visibility
  
  // Footer Sections
  sections?: FooterSection[];
  
  // Newsletter
  newsletter?: {
    enabled?: boolean;
    placeholder?: string;
    onSubmit?: (email: string) => void;
  };
  
  // Contact Form
  contact?: ContactForm;
  
  // Social Media
  socials?: SocialLink[];
  
  // Variants
  variant?: 'default' | 'contact';
  
  // Customization
  theme?: 'light' | 'auto' | 'black-glass';
  className?: string;
}