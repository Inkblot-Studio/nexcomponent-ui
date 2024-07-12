import React from 'react';
import { NexVersionProps } from './NexVersion.types';
import './NexVersion.scss';
/**
 * NexVersion component
 *
 * Component to display and edit a version number.
 *
 * @param {NexVersionProps} props - Component properties
 * @param {string} props.version - Current version number to display and edit
 * @param {(newVersion: string) => void} props.handleSave - Function to handle saving the edited version
 */
declare const NexVersion: React.FC<NexVersionProps>;
export default NexVersion;
