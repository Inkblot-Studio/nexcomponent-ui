import React from 'react';
import './NexCopyToClipboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { NexCopyToClipboardProps } from './NexCopyToClipboard.types';
/**
 * NexCopyToClipboard component
 *
 * A button component that copies text to the clipboard when clicked.
 *
 * @param {string} className - Additional class names for styling the button.
 * @param {'small' | 'normal' | 'large'} size - The size of the button. Default is 'normal'.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'info' | 'warning' | 'danger' | string} type - The type of the button which determines its color style.
 * @param {string} textToCopy - The text to be copied to the clipboard.
 */
const NexCopyToClipboard = ({ className, size = 'normal', type, textToCopy }) => {
    const getColorClass = (type) => {
        if (!type)
            return '';
        const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger'];
        return colorNames.includes(type) ? `nex-copy-to-clipboard--${type}` : '';
    };
    const getSizeClass = (size) => {
        return size ? `nex-copy-to-clipboard--${size}` : '';
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
    };
    const buttonClasses = `nex-copy-to-clipboard ${className || ''} ${getColorClass(type)} ${getSizeClass(size)}`;
    return (<button className={buttonClasses} onClick={handleCopy}>
            <FontAwesomeIcon icon={faCopy}/>
        </button>);
};
export default NexCopyToClipboard;
//# sourceMappingURL=NexCopyToClipboard.jsx.map