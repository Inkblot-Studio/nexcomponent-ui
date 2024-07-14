export interface SocialLink {
    type: string;
    url: string;
}
export interface NexFooterProps {
    logoSrc?: string;
    displayName: string;
    socials?: SocialLink[];
    className?: string;
}
