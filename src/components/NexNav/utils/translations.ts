import type { NavTranslations } from '../NexNav.types';

// Default English translations
export const defaultTranslations: Required<NavTranslations> = {
  // Navigation sections
  navigation: 'Navigation',
  profile: 'Profile',
  settings: 'Settings',
  language: 'Language',
  
  // User actions
  signUp: 'Sign Up',
  signIn: 'Sign In',
  logOut: 'Log Out',
  alreadyHaveAccount: 'Already have an account? Sign in',
  
  // Profile section
  viewProfile: 'View Profile',
  endorsements: 'Endorsements',
  subscription: 'Subscription',
  
  // Settings section
  activityLog: 'Activity Log',
  security: 'Security',
  integrations: 'Integrations',
  adminPanel: 'Admin Panel',
  
  // Subscription tiers
  pro: 'Pro',
  free: 'Free',
  
  // Language switcher
  searchLanguages: 'Search languages...',
  noLanguagesFound: 'No languages found',
  
  // Accessibility
  userMenu: 'User menu',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  mainNavigation: 'Main navigation',
};

// Helper function to merge custom translations with defaults
export const getTranslations = (customTranslations?: NavTranslations): Required<NavTranslations> => {
  if (!customTranslations) {
    return defaultTranslations;
  }
  
  return {
    ...defaultTranslations,
    ...customTranslations,
  };
};

// Type-safe translation key
export type TranslationKey = keyof NavTranslations; 