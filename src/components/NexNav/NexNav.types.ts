export type NavItem = {
    label: string;
    onClick: () => void;
  }

export type IdentityProps = {
  onLoginClick: () => void;
  onSignUpClick: () => void;
}
  
export type NexNavProps = {
    logoSrc?: string;
    displayName: string;
    identity: boolean;
    navItems: NavItem[];
    identityProps?: IdentityProps
}