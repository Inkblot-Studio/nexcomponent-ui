import './NexNav.scss';
import React from 'react';
import { NexNavProps } from './NexNav.types';
/**
 * NexNav component
 *
 * Navigation component with a logo, menu items, and optional identity buttons.
 *
 * @param {string} logoSrc - Source URL for the logo image.
 * @param {string} displayName - Display name of the client or organization.
 * @param {Function} homeButtonHandler - Handler function for clicking on the logo or client name to navigate home.
 * @param {Object[]} navItems - Array of navigation items.
 * @param {string} navItems.label - Label/text for the navigation item.
 * @param {Function} navItems.onClick - Handler function for clicking on a navigation item.
 * @param {string} [identity] - Optional identity section with login and sign-up buttons.
 * @param {Object} identityProps - Props for identity section.
 * @param {Function} identityProps.onLoginClick - Handler function for clicking on the login button.
 * @param {Function} identityProps.onSignUpClick - Handler function for clicking on the sign-up button.
 * @param {boolean} [colorful=false] - Whether to apply colorful styling.
 */
declare const NexNav: React.FC<NexNavProps>;
export default NexNav;
