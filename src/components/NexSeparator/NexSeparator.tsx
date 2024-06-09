import React from 'react';
import './NexSeparator.scss';
import { NexSeparatorProps } from './NexSeparator.types';

const NexSeparator: React.FC<NexSeparatorProps> = ({
    className,
    text,
    backgroundColor = '#fff',
    fontSize = 14,
    color,
  }) => {    
    return (
        <div className={`nex-separator ${className || ''}`}>
        <div className="separator-line" style={{ borderColor: color }}/>
        {text && (
            <span className="separator-text" style={{ backgroundColor, fontSize, color }}>{text}</span>
        )}
        <div className="separator-line" style={{ borderColor: color }}/>
      </div>
    );
  };

export default NexSeparator;