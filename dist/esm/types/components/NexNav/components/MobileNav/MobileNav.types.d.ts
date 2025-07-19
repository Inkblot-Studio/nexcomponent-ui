import { LanguageOption } from '../LanguageSwitcher/LanguageSwitcher.types';
import { NavItem } from '../../NexNav.types';
export type MobileNavProps = {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
    user?: {
        name: string;
        avatarUrl?: string;
        role?: 'Admin' | 'Pro' | 'Member';
    };
    isAuthenticated: boolean;
    onLogin?: () => void;
    onLogout?: () => void;
    onProfile?: () => void;
    currentLocale: string;
    languageOptions: LanguageOption[];
    onLocaleChange: (code: string) => void;
    endorsementCount?: number;
    subscription?: {
        tier: string;
        renewalDate: string;
    };
    onEndorsementsClick?: () => void;
    onSubscriptionClick?: () => void;
    onActivityLogClick?: () => void;
    onSecurityClick?: () => void;
    onIntegrationsClick?: () => void;
    onAdminPanelClick?: () => void;
    theme?: 'light' | 'auto' | 'black-glass';
};
//# sourceMappingURL=MobileNav.types.d.ts.map