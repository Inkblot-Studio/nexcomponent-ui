export interface SubscriptionInfo {
  tier: string;
  renewalDate: string;
}

export interface User {
  name: string;
  avatarUrl?: string;
  role?: 'Admin' | 'Pro' | 'Member';
}

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
}
