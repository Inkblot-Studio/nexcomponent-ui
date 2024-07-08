import React from 'react';
import './NexInfoPanel.scss';
import { NexInfoPanelProps } from './NexInfoPanel.types';

const NexInfoPanel: React.FC<NexInfoPanelProps> = ({ title, content, imageUrl }) => {
  const backgroundStyle = imageUrl ? { '--background-url': `url(${imageUrl})` } as React.CSSProperties : {};

  return (
    <div className="nex-info-panel">
      <div className="nex-info-panel-content">
        <div className="nex-info-panel-title">{title}</div>
        {imageUrl && <div className="nex-info-panel-image mobile" style={backgroundStyle}/>}
        <div className="nex-info-panel-description">{content}</div>
      </div>
      {imageUrl && <div className="nex-info-panel-image desktop" style={backgroundStyle}/>}
    </div>
  );
};

export default NexInfoPanel;