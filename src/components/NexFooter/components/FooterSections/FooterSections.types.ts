export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterSectionsProps {
  sections: FooterSection[];
  variant?: 'default' | 'contact';
  theme?: 'auto' | 'light' | 'dark' | 'black-glass';
} 