export interface UserMenuProps {
    user?: {
        name: string;
        avatarUrl?: string;
    };
    onLogout?: () => void;
    onProfile?: () => void;
    onDevSwitchToggle?: () => void;
    isDevMode?: boolean;
}
