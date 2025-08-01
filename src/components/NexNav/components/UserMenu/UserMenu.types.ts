export interface SubscriptionInfo {
  tier: string;
  renewalDate: string;
}

export interface User {
  name: string;
  avatarUrl?: string;
  role?: 'Admin' | 'Pro' | 'Member';
}

import { NavTranslations } from '../../NexNav.types';

export interface UserMenuProps {
  user?: User | null;
  onLogout?: () => void;
  onProfile?: () => void;
  onEndorsementsClick?: () => void;
  onSubscriptionClick?: () => void;
  onActivityLogClick?: () => void;
  onSecurityClick?: () => void;
  onIntegrationsClick?: () => void;
  onAdminPanelClick?: () => void;
  onSignUpClick?: () => void;

  endorsementCount?: number;
  subscription?: SubscriptionInfo;

  enableEndorsements?: boolean;
  enableSubscriptionInfo?: boolean;
  enableAuditLog?: boolean;
  enableSecuritySettings?: boolean;
  enableIntegrations?: boolean;
  enableAdminPanel?: boolean;
  isAtTop?: boolean; // Controls dropdown background styling based on scroll position
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  theme?: 'light' | 'auto' | 'black-glass';
  
  // Translation support
  translations?: NavTranslations;
}
