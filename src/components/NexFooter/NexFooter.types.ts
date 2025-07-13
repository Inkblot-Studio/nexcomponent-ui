export interface SocialLink {
  type: string;
  url: string;
}

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContactForm {
  enabled?: boolean;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (data: { email: string; message: string }) => void;
}

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
  
  // Developer Tools
  developerTools?: {
    copyCommands?: boolean;
    npmPackage?: string;
    githubUrl?: string;
  };
  
  // Variants
  variant?: 'default' | 'compact' | 'contact';
  
  // Customization
  theme?: 'light' | 'dark' | 'auto' | 'black-glass';
  className?: string;
}