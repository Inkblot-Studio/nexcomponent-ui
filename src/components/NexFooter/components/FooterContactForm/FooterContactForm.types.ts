import type { FooterTranslations } from '../../NexFooter.types';

export interface ContactForm {
  enabled?: boolean;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (data: { email: string; message: string }) => void;
}

export interface FooterContactFormProps {
  contact: ContactForm;
  variant?: 'default' | 'contact';
  theme?: 'auto' | 'light' | 'black-glass';
  translations?: FooterTranslations;
} 