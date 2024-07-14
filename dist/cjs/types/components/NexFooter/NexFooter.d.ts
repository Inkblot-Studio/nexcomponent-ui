import React from 'react';
import { NexFooterProps } from './NexFooter.types';
import './NexFooter.scss';
/**
 * NexFooter component
 *
 * A footer component displaying a logo, display name, copyright information, and social media icons.
 *
 * @param {string} logoSrc - The source URL for the logo image.
 * @param {string} displayName - The display name to be shown if the logo is not available.
 * @param {Array<{ type: string, url: string }>} socials - The list of social media icons and URLs to be displayed.
 * @param {string} className - Additional class names for styling the footer.
 */
declare const NexFooter: React.FC<NexFooterProps>;
export default NexFooter;
