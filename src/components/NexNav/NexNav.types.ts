import type { LanguageOption } from './components/LanguageSwitcher/LanguageSwitcher.types';

/**
 * Navigation sub-item configuration
 * @example
 * ```tsx
 * {
 *   label: "Dashboard",
 *   onClick: () => navigate('/dashboard'),
 *   badge: "New",
 *   description: "View your main dashboard"
 * }
 * ```
 */
export type NavSubItem = {
  /** Display text for the navigation item */
  label: string;
  /** Click handler for the navigation item */
  onClick: () => void;
  /** Optional badge to display (e.g., "New", "3", etc.) */
  badge?: string | number;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Description for accessibility and tooltips */
  description?: string;
};

/**
 * Navigation item configuration
 * @example
 * ```tsx
 * {
 *   label: "Products",
 *   onClick: () => navigate('/products'),
 *   badge: "5",
 *   subItems: [
 *     { label: "All Products", onClick: () => navigate('/products') },
 *     { label: "Categories", onClick: () => navigate('/categories') }
 *   ]
 * }
 * ```
 */
export type NavItem = {
  /** Display text for the navigation item */
  label: string;
  /** Click handler (optional when subItems are present) */
  onClick?: () => void;
  /** Optional badge to display */
  badge?: string | number;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Sub-navigation items for dropdown menus */
  subItems?: NavSubItem[];
  /** Description for accessibility and tooltips */
  description?: string;
};

/**
 * User information for authentication
 * @example
 * ```tsx
 * {
 *   name: "John Doe",
 *   avatarUrl: "/avatars/john.jpg",
 *   role: "Admin"
 * }
 * ```
 */
export type User = {
  /** User's display name */
  name: string;
  /** URL to user's avatar image */
  avatarUrl?: string;
  /** User's role in the system */
  role?: 'Admin' | 'Pro' | 'Member';
};

/**
 * Subscription information for premium users
 * @example
 * ```tsx
 * {
 *   tier: "Pro",
 *   renewalDate: "2024-12-31"
 * }
 * ```
 */
export type SubscriptionInfo = {
  /** Subscription tier name */
  tier: string;
  /** Date when subscription renews (ISO format) */
  renewalDate: string;
};

/**
 * Props for the NexNav component
 * 
 * A comprehensive navigation component with authentication, language switching,
 * and user management features. Supports both light and black glass themes.
 * 
 * @example
 * ```tsx
 * import { NexNav } from '@nexcomponent/lib';
 * 
 * <NexNav
 *   logoSrc="/logo.svg"
 *   displayName="MyApp"
 *   homeButtonHandler={() => navigate('/')}
 *   navItems={[
 *     { label: "Dashboard", onClick: () => navigate('/dashboard') },
 *     { label: "Products", onClick: () => navigate('/products') }
 *   ]}
 *   isAuthenticated={true}
 *   user={{
 *     name: "John Doe",
 *     avatarUrl: "/avatar.jpg",
 *     role: "Admin"
 *   }}
 *   onLogout={() => logout()}
 *   languageOptions={[
 *     { code: "en", name: "English", flag: "🇺🇸" },
 *     { code: "es", name: "Español", flag: "🇪🇸" }
 *   ]}
 *   theme="black-glass"
 * />
 * ```
 */
export type NexNavProps = {
  /** URL to the logo image */
  logoSrc?: string;
  /** Application display name */
  displayName: string;
  /** Handler for home button clicks */
  homeButtonHandler: () => void;

  /** Array of navigation items */
  navItems: NavItem[];

  /** Whether the user is authenticated */
  isAuthenticated: boolean;
  /** User information (required when authenticated) */
  user?: User;

  /** Handler for login button clicks */
  onLogin?: () => void;
  /** Handler for logout button clicks */
  onLogout?: () => void;
  /** Handler for profile button clicks */
  onProfile?: () => void;

  /** Available language options for the language switcher */
  languageOptions: LanguageOption[];

  /** Number of endorsements for the user (displays in user menu) */
  endorsementCount?: number;
  /** Subscription information for premium users */
  subscription?: SubscriptionInfo;

  /** Handler for endorsements menu item clicks */
  onEndorsementsClick?: () => void;
  /** Handler for subscription menu item clicks */
  onSubscriptionClick?: () => void;
  /** Handler for activity log menu item clicks */
  onActivityLogClick?: () => void;
  /** Handler for security menu item clicks */
  onSecurityClick?: () => void;
  /** Handler for integrations menu item clicks */
  onIntegrationsClick?: () => void;
  /** Handler for admin panel menu item clicks */
  onAdminPanelClick?: () => void;

  /** Theme variant for the navigation */
  theme?: 'light' | 'auto' | 'black-glass';
};
