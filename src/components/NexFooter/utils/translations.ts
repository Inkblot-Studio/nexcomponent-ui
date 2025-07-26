import type { FooterTranslations } from '../NexFooter.types';

/**
 * Default English translations for the footer component
 */
export const defaultTranslations: Required<FooterTranslations> = {
  // Footer bottom
  allRightsReserved: 'All rights reserved.',
  followUsOn: 'Follow us on',
  
  // Contact form
  getInTouch: 'Get in Touch',
  messageSentSuccessfully: 'Message sent successfully!',
  yourEmailAddress: 'Your email address',
  tellUsAboutProject: 'Tell us about your project or inquiry...',
  sendMessage: 'Send Message',
  
  // Newsletter
  successfullySubscribed: 'Successfully subscribed!',
  stayUpdated: 'Stay updated',
  subscribe: 'Subscribe',
  
  // Agency attribution
  madeByInkblotStudio: 'Made with ❤️ by Inkblot Studio'
};

/**
 * Helper function to merge custom translations with defaults
 * @param customTranslations - Optional custom translations to override defaults
 * @returns Complete translations object with defaults and custom overrides
 */
export const getTranslations = (customTranslations?: FooterTranslations): Required<FooterTranslations> => {
  return {
    ...defaultTranslations,
    ...customTranslations
  };
};

/**
 * Type for translation keys
 */
export type TranslationKey = keyof FooterTranslations; 