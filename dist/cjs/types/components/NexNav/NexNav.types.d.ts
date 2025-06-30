import { LanguageOption } from './components/LanguageSwitcher/LanguageSwitcher.types';
export type NavItem = {
    label: string;
    onClick: () => void;
};
export type User = {
    name: string;
    avatarUrl?: string;
    role?: 'Admin' | 'Pro' | 'Member';
};
export type SubscriptionInfo = {
    tier: string;
    renewalDate: string;
};
export type NexNavProps = {
    logoSrc?: string;
    displayName: string;
    homeButtonHandler: () => void;
    navItems: NavItem[];
    isAuthenticated: boolean;
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onProfile?: () => void;
    languageOptions: LanguageOption[];
    endorsementCount?: number;
    subscription?: SubscriptionInfo;
    onEndorsementsClick?: () => void;
    onSubscriptionClick?: () => void;
    onActivityLogClick?: () => void;
    onSecurityClick?: () => void;
    onIntegrationsClick?: () => void;
    onAdminPanelClick?: () => void;
};
