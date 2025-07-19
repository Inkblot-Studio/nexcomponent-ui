import type { SocialLink } from './components/FooterBottom/FooterBottom.types';
import type { FooterSection, FooterLink } from './components/FooterSections/FooterSections.types';
import type { ContactForm } from './components/FooterContactForm/FooterContactForm.types';
export type { SocialLink, FooterSection, FooterLink, ContactForm };
/**
 * Props for the NexFooter component
 *
 * A comprehensive footer component with branding, navigation sections,
 * newsletter signup, contact forms, and social media links.
 * Supports both light and black glass themes.
 *
 * @example
 * ```tsx
 * import { NexFooter } from '@nexcomponent/lib';
 *
 * <NexFooter
 *   logoSrc="/logo.svg"
 *   displayName="MyApp"
 *   tagline="Building amazing experiences"
 *   sections={[
 *     {
 *       title: "Product",
 *       links: [
 *         { label: "Features", href: "/features" },
 *         { label: "Pricing", href: "/pricing" }
 *       ]
 *     },
 *     {
 *       title: "Company",
 *       links: [
 *         { label: "About", href: "/about" },
 *         { label: "Contact", href: "/contact" }
 *       ]
 *     }
 *   ]}
 *   newsletter={{
 *     enabled: true,
 *     placeholder: "Enter your email",
 *     onSubmit: (email) => subscribe(email)
 *   }}
 *   socials={[
 *     { platform: "twitter", url: "https://twitter.com/myapp" },
 *     { platform: "linkedin", url: "https://linkedin.com/company/myapp" }
 *   ]}
 *   theme="black-glass"
 * />
 * ```
 */
export interface NexFooterProps {
    /** URL to the logo image */
    logoSrc?: string;
    /** Application display name */
    displayName: string;
    /** Company tagline or description */
    tagline?: string;
    /** Whether to show the logo text alongside the logo image */
    showLogoText?: boolean;
    /** Footer navigation sections */
    sections?: FooterSection[];
    /** Newsletter signup configuration */
    newsletter?: {
        /** Whether to show the newsletter signup */
        enabled?: boolean;
        /** Placeholder text for the email input */
        placeholder?: string;
        /** Handler for newsletter form submission */
        onSubmit?: (email: string) => void;
    };
    /** Contact form configuration */
    contact?: ContactForm;
    /** Social media links */
    socials?: SocialLink[];
    /** Footer variant - 'default' or 'contact' */
    variant?: 'default' | 'contact';
    /** Theme variant for the footer */
    theme?: 'light' | 'auto' | 'black-glass';
    /** Additional CSS classes */
    className?: string;
}
//# sourceMappingURL=NexFooter.types.d.ts.map