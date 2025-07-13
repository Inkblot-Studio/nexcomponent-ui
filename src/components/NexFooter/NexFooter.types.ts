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

export interface NexFooterProps {
  // Branding
  logoSrc?: string;
  displayName: string;
  tagline?: string;
  
  // Footer Sections
  sections?: FooterSection[];
  
  // Newsletter
  newsletter?: {
    enabled?: boolean;
    placeholder?: string;
    onSubmit?: (email: string) => void;
  };
  
  // Social Media
  socials?: SocialLink[];
  
  // Developer Tools
  developerTools?: {
    copyCommands?: boolean;
    npmPackage?: string;
    githubUrl?: string;
  };
  
  // Customization
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}