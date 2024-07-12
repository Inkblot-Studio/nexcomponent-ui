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

/**
 * NexAlert component
 *
 * A component to display alert messages with various types and an optional auto-dismiss feature.
 *
 * @param {string} message - The message to display in the alert.
 * @param {'error' | 'success' | 'info' | 'warning'} type - The type of the alert which determines its style. Default is 'info'.
 * @param {number} [timeout=0] - The time in seconds before the alert automatically dismisses itself. Default is 0 (no auto-dismiss).
 * @param {function} [handleDismiss=null] - The function to call when the alert is dismissed.
 */
declare const NexAlert: FC<NexAlertProps>;
interface NexAlertsWrapperProps {
    children: ReactNode;
}
/**
 * NexAlertsWrapper component
 *
 * A wrapper component for grouping multiple NexAlert components.
 *
 * @param {ReactNode} children - The child components to be wrapped inside the alerts wrapper.
 */
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

/**
 * NexButton component
 *
 * A versatile button component with customizable styles and behavior.
 *
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {string} className - Additional class names to apply to the button.
 * @param {'small' | 'normal' | 'large'} size - The size of the button. Default is 'normal'.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | string} type - The type of the button which determines its color and style.
 * @param {boolean} inverted - Whether to apply an inverted style to the button.
 * @param {string} text - The text to display inside the button.
 */
declare const NexButton: React$1.FC<NexButtonProps>;

interface NexCardProps {
    title?: string;
    imageUrl?: string;
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    content?: string;
    actions?: React.ReactNode;
}

/**
 * NexCard component
 *
 * A versatile card component that can display a title, content, image, and actions.
 *
 * @param {string} title - The title of the card.
 * @param {string} content - The content or body text of the card.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | string} type - The type of the card which determines its style.
 * @param {string} imageUrl - The URL of the image to display in the card.
 * @param {React.ReactNode} actions - The actions or buttons to display in the card.
 */
declare const NexCard: React$1.FC<NexCardProps>;

interface NexHeroCardProps {
    title: string;
    subtitle: string;
    type: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass') | string;
    buttonLabel?: string;
    buttonHandle?: () => void;
    backgroundUrl?: string;
}

/**
 * NexHeroCard component
 *
 * A hero card component that displays a title, subtitle, and an optional button with customizable background and type styles.
 *
 * @param {string} title - The main title text to be displayed on the hero card.
 * @param {string} subtitle - The subtitle text to be displayed below the title.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | 'glass' | string} [type] - The type of the hero card which determines its color style.
 * @param {string} [buttonLabel] - The label text for the button.
 * @param {() => void} [buttonHandle] - The click handler function for the button.
 * @param {string} [backgroundUrl] - The URL for the background image of the hero card.
 */
declare const NexHeroCard: React$1.FC<NexHeroCardProps>;

interface NexSimpleTextCardProps {
    title: string;
    subtitle: string;
    border?: boolean;
}

/**
 * NexSimpleTextCard component
 *
 * Component to display a simple text card with title and subtitle.
 *
 * @param {NexSimpleTextCardProps} props - Component properties
 * @param {string} props.title - Title of the card
 * @param {string} props.subtitle - Subtitle of the card
 * @param {boolean} [props.border=true] - Whether to display a border around the card
 */
declare const NexSimpleTextCard: React$1.FC<NexSimpleTextCardProps>;

interface NexInfoPanelProps {
    title: string;
    content: string;
    imageUrl: string;
}

/**
 * NexInfoPanel component
 *
 * A panel component that displays a title, content, and an optional image.
 *
 * @param {string} title - The title text to be displayed on the info panel.
 * @param {string} content - The content text to be displayed on the info panel.
 * @param {string} [imageUrl] - The URL for the background image of the info panel.
 */
declare const NexInfoPanel: React$1.FC<NexInfoPanelProps>;

interface NexCarouselProps {
    children: React.ReactNode[];
    navButtons?: boolean;
    navigationPosition?: 'top' | 'bottom';
    line?: boolean;
    interval?: number;
}

/**
 * NexCarousel component
 *
 * A carousel component to display slides with optional navigation buttons, dots, and automatic slide transition.
 *
 * @param {React.ReactNode[]} children - The slides to display in the carousel.
 * @param {boolean} [navButtons=false] - Whether to display navigation buttons.
 * @param {'top' | 'bottom' | 'left' | 'right'} [navigationPosition='bottom'] - The position of the navigation dots.
 * @param {boolean} [line] - Whether to display a progress line indicating the current slide.
 * @param {number} [interval] - The time in seconds between automatic slide transitions.
 */
declare const NexCarousel: React$1.FC<NexCarouselProps>;

interface NexCopyToClipboardProps {
    className?: string;
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger') | string;
    textToCopy: string;
}

/**
 * NexCopyToClipboard component
 *
 * A button component that copies text to the clipboard when clicked.
 *
 * @param {string} className - Additional class names for styling the button.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | string} type - The type of the button which determines its color style.
 * @param {string} textToCopy - The text to be copied to the clipboard.
 */
declare const NexCopyToClipboard: React$1.FC<NexCopyToClipboardProps>;

interface NexInputProps extends InputHTMLAttributes<HTMLInputElement> {
    peekButton?: boolean;
    width?: number;
    fieldSize?: 'small' | 'normal' | 'large';
}

/**
 * NexInput component
 *
 * A customizable input component with support for different types, sizes, and an optional peek button for password fields.
 *
 * @param {string} type - The type of the input field (e.g., 'text', 'password', 'email').
 * @param {boolean} [peekButton] - Whether to show a button to toggle password visibility.
 * @param {string} [className] - Additional class names to apply to the input field.
 * @param {number} [width] - The width of the input field in pixels.
 * @param {'small' | 'normal' | 'large'} [fieldSize='normal'] - The size of the input field.
 * @param {object} rest - Additional props to pass to the input element.
 */
declare const NexInput: React$1.FC<NexInputProps>;

type NexLoaderProps = {
    size?: string;
    color?: string;
};

/**
 * NexLoader component
 *
 * A customizable loader component that displays a spinning circle.
 *
 * @param {number} [size] - The size of the loader in pixels.
 * @param {string} [color] - The color of the loader circle.
 */
declare const NexLoader: React$1.FC<NexLoaderProps>;

interface NexModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * NexModal component
 *
 * A modal component that displays a message and buttons for user interaction.
 *
 * @param {function} setOpenModal - Function to close the modal.
 */
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
    colorful?: boolean;
};

/**
 * NexNav component
 *
 * Navigation component with a logo, menu items, and optional identity buttons.
 *
 * @param {string} logoSrc - Source URL for the logo image.
 * @param {string} displayName - Display name of the client or organization.
 * @param {Function} homeButtonHandler - Handler function for clicking on the logo or client name to navigate home.
 * @param {Object[]} navItems - Array of navigation items.
 * @param {string} navItems.label - Label/text for the navigation item.
 * @param {Function} navItems.onClick - Handler function for clicking on a navigation item.
 * @param {string} [identity] - Optional identity section with login and sign-up buttons.
 * @param {Object} identityProps - Props for identity section.
 * @param {Function} identityProps.onLoginClick - Handler function for clicking on the login button.
 * @param {Function} identityProps.onSignUpClick - Handler function for clicking on the sign-up button.
 * @param {boolean} [colorful=false] - Whether to apply colorful styling.
 */
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

/**
 * NexFooter component
 *
 * A footer component displaying a logo, display name, copyright information, and social media icons.
 *
 * @param {string} logoSrc - The source URL for the logo image.
 * @param {string} displayName - The display name to be shown if the logo is not available.
 * @param {Array<{ type: string, url: string }>} socials - The list of social media icons and URLs to be displayed.
 */
declare const NexFooter: React$1.FC<NexFooterProps>;

interface NexSeparatorProps {
    className?: string;
    text?: string;
    backgroundColor?: string;
    fontSize?: number;
    color?: string;
}

/**
 * NexSeparator component
 *
 * Component to display a separator with optional text in between lines.
 *
 * @param {string} [className] - Additional CSS class names for customization.
 * @param {string} [text] - Text to display between separator lines.
 * @param {string} [backgroundColor='#fff'] - Background color of the text (if text is provided).
 * @param {number} [fontSize=14] - Font size of the text (if text is provided).
 * @param {string} [color] - Color of the text and separator lines.
 */
declare const NexSeparator: React$1.FC<NexSeparatorProps>;

interface NexVersionProps {
    version: string;
    handleSave?: (value: string) => void;
}

/**
 * NexVersion component
 *
 * Component to display and edit a version number.
 *
 * @param {NexVersionProps} props - Component properties
 * @param {string} props.version - Current version number to display and edit
 * @param {(newVersion: string) => void} props.handleSave - Function to handle saving the edited version
 */
declare const NexVersion: React$1.FC<NexVersionProps>;

export { type AlertsContextType, type IdentityProps, type NavItem, NexAlert, type NexAlertProps, NexAlertsProvider, type NexAlertsProviderProps, NexAlertsWrapper, NexButton, type NexButtonProps, NexCard, type NexCardProps, NexCarousel, type NexCarouselProps, NexCopyToClipboard, type NexCopyToClipboardProps, NexFooter, type NexFooterProps, NexHeroCard, type NexHeroCardProps, NexInfoPanel, type NexInfoPanelProps, NexInput, type NexInputProps, NexLoader, type NexLoaderProps, NexModal, type NexModalProps, NexNav, type NexNavProps, NexSeparator, type NexSeparatorProps, NexSimpleTextCard, type NexSimpleTextCardProps, NexVersion, type NexVersionProps, type SocialLink, useAlerts };
