import React from 'react';
import './NexInfoPanel.scss';
/**
 * NexInfoPanel component
 *
 * A panel component that displays a title, content, and an optional image.
 * @param {string} className - Additional class names to apply to the info panel.
 * @param {string} title - The title text to be displayed on the info panel.
 * @param {string} content - The content text to be displayed on the info panel.
 * @param {string} [imageUrl] - The URL for the background image of the info panel.
 */
const NexInfoPanel = ({ className, title, content, imageUrl }) => {
    const backgroundStyle = imageUrl ? { '--background-url': `url(${imageUrl})` } : {};
    return (<div className={`nex-info-panel ${className || ''}`}>
      <div className="nex-info-panel-content">
        <div className="nex-info-panel-title">{title}</div>
        {imageUrl && <div className="nex-info-panel-image mobile" style={backgroundStyle}/>}
        <div className="nex-info-panel-description">{content}</div>
      </div>
      {imageUrl && <div className="nex-info-panel-image desktop" style={backgroundStyle}/>}
    </div>);
};
export default NexInfoPanel;
//# sourceMappingURL=NexInfoPanel.jsx.map