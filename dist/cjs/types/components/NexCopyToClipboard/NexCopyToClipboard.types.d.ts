export interface NexCopyToClipboardProps {
    className?: string;
    size?: 'small' | 'normal' | 'large';
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger') | string;
    textToCopy: string;
}
