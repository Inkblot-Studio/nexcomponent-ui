import React from 'react';
import type { NexNavProps } from '../../NexNav.types';
interface NavControlsProps {
    isAuthenticated: boolean;
    user?: NexNavProps['user'];
    onLogin?: () => void;
    onLogout?: () => void;
    onProfile?: () => void;
    languageOptions: NexNavProps['languageOptions'];
    currentLocale: string;
    onLocaleChange: (code: string) => void;
    isLanguageOpen: boolean;
    onLanguageToggle: () => void;
    onLanguageClose: () => void;
    isUserOpen: boolean;
    onUserToggle: () => void;
    onUserClose: () => void;
    isAtTop: boolean;
    endorsementCount?: number;
    subscription?: NexNavProps['subscription'];
    onEndorsementsClick?: () => void;
    onSubscriptionClick?: () => void;
    onActivityLogClick?: () => void;
    onSecurityClick?: () => void;
    onIntegrationsClick?: () => void;
    onAdminPanelClick?: () => void;
    theme?: 'light' | 'auto' | 'black-glass';
}
declare const NavControls: React.FC<NavControlsProps>;
export default NavControls;
//# sourceMappingURL=NavControls.d.ts.map