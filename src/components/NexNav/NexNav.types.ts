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
    homeButtonHandler: () => void;
    identity: boolean;
    navItems: NavItem[];
    identityProps?: IdentityProps;
    colorful?: boolean;
}