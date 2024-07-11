/// <reference types="react" />
import React$1, { ReactNode, FC, InputHTMLAttributes } from 'react';

interface NexAlertProps {
    id: string;
    type: 'error' | 'success' | 'info' | 'warning';
    message: string;
    timeout?: number;
    handleDismiss?: () => void;
}
interface AlertsContextType {
    alerts: NexAlertProps[];
    addAlert: (alert: Omit<NexAlertProps, 'id'>) => string;
    dismissAlert: (id: string) => void;
}
interface NexAlertsProviderProps {
    children: ReactNode;
}

declare const NexAlert: FC<NexAlertProps>;
interface NexAlertsWrapperProps {
    children: ReactNode;
}
declare const NexAlertsWrapper: FC<NexAlertsWrapperProps>;

declare const NexAlertsProvider: FC<NexAlertsProviderProps>;
declare const useAlerts: () => {
    addAlert: (alert: Omit<NexAlertProps, 'id'>) => void;
    clearAlerts: () => void;
};

interface NexButtonProps {
    onClick?: () => void;
    className?: string;
    size?: 'small' | 'normal' | 'large';
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    inverted?: boolean;
    text?: string;
}

declare const NexButton: React$1.FC<NexButtonProps>;

interface NexCardProps {
    title?: string;
    imageUrl?: string;
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    content?: string;
    actions?: React.ReactNode;
}

declare const NexCard: React$1.FC<NexCardProps>;

interface NexHeroCardProps {
    title: string;
    subtitle: string;
    type: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    buttonLabel?: string;
    buttonHandle?: () => void;
    backgroundUrl?: string;
}

declare const NexHeroCard: React$1.FC<NexHeroCardProps>;

interface NexInfoPanelProps {
    title: string;
    content: string;
    imageUrl: string;
}

declare const NexInfoPanel: React$1.FC<NexInfoPanelProps>;

interface NexCarouselProps {
    children: React.ReactNode[];
    navButtons?: boolean;
    navigationPosition?: 'top' | 'bottom';
    line?: boolean;
    interval?: number;
}

declare const NexCarousel: React$1.FC<NexCarouselProps>;

interface NexCopyToClipboardProps {
    className?: string;
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger') | string;
    textToCopy: string;
}

declare const NexCopyToClipboard: React$1.FC<NexCopyToClipboardProps>;

interface NexInputProps extends InputHTMLAttributes<HTMLInputElement> {
    peekButton?: boolean;
    width?: number;
    fieldSize?: 'small' | 'normal' | 'large';
}

declare const NexInput: React$1.FC<NexInputProps>;

type NexLoaderProps = {
    size?: string;
    color?: string;
};

declare const NexLoader: React$1.FC<NexLoaderProps>;

interface NexModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

declare const NexModal: React$1.FC<NexModalProps>;

type NavItem = {
    label: string;
    onClick: () => void;
};
type IdentityProps = {
    onLoginClick: () => void;
    onSignUpClick: () => void;
};
type NexNavProps = {
    logoSrc?: string;
    displayName: string;
    homeButtonHandler: () => void;
    identity: boolean;
    navItems: NavItem[];
    identityProps?: IdentityProps;
};

declare const NexNav: React$1.FC<NexNavProps>;

interface SocialLink {
    type: string;
    url: string;
}
interface NexFooterProps {
    logoSrc?: string;
    displayName: string;
    socials?: SocialLink[];
}

declare const NexFooter: React$1.FC<NexFooterProps>;

interface NexSeparatorProps {
    className?: string;
    text?: string;
    backgroundColor?: string;
    fontSize?: number;
    color?: string;
}

declare const NexSeparator: React$1.FC<NexSeparatorProps>;

interface NexVersionProps {
    version: string;
    handleSave?: (value: string) => void;
}

declare const NexVersion: React$1.FC<NexVersionProps>;

export { type AlertsContextType, type IdentityProps, type NavItem, NexAlert, type NexAlertProps, NexAlertsProvider, type NexAlertsProviderProps, NexAlertsWrapper, NexButton, type NexButtonProps, NexCard, type NexCardProps, NexCarousel, type NexCarouselProps, NexCopyToClipboard, type NexCopyToClipboardProps, NexFooter, type NexFooterProps, NexHeroCard, type NexHeroCardProps, NexInfoPanel, type NexInfoPanelProps, NexInput, type NexInputProps, NexLoader, type NexLoaderProps, NexModal, type NexModalProps, NexNav, type NexNavProps, NexSeparator, type NexSeparatorProps, NexVersion, type NexVersionProps, type SocialLink, useAlerts };
