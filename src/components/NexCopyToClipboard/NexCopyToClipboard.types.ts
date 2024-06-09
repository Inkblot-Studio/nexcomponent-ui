export interface NexCopyToClipboardProps {
    className?: string;
    type?: ('primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger') | string;
    textToCopy: string;
}
  