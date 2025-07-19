import React from 'react';
import './NexSeparator.scss';
import { NexSeparatorProps } from './NexSeparator.types';
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
const NexSeparator = ({ className, text, backgroundColor = '#fff', fontSize = 14, color, }) => {
    return (<div className={`nex-separator ${className || ''}`}>
        <div className="separator-line" style={{ borderColor: color }}/>
        {text && (<span className="separator-text" style={{ backgroundColor, fontSize, color }}>{text}</span>)}
        <div className="separator-line" style={{ borderColor: color }}/>
      </div>);
};
export default NexSeparator;
//# sourceMappingURL=NexSeparator.jsx.map