import './NexNav.scss';
import React, { useRef, useState, useEffect } from 'react';
import { NexNavProps } from './NexNav.types';
import NexButton from '../NexButton';
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from 'react-use';

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
const NexNav: React.FC<NexNavProps> = ({ logoSrc, displayName, homeButtonHandler, identity, navItems, identityProps, colorful = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const ref = useRef(null);
  
  useClickAway(ref, (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('.nex-nav-burger')) {
      return;
    }

    setIsMenuOpen(false);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navSwipeAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <div className={`nex-nav ${!isAtTop ? 'not-at-top' : '' }`}>
        <nav className='nex-nav-inner-wrapper'>
          {logoSrc ? (
            <div className={`nex-nav-client-logo ${colorful ? 'colorful' : '' }`} onClick={homeButtonHandler}>
              <img src={logoSrc} alt={displayName} className='nex-nav-logo' />
            </div>
          ) : (
            <div className={`nex-nav-client-name ${colorful ? 'colorful' : '' }`} onClick={homeButtonHandler}>
              <div className='client-name'>{displayName}</div>
            </div>
          )}

          <ul className='nex-nav-list'>
            {navItems.length && navItems.map((item, index) => (
              <li key={index} className='nex-nav-item' onClick={item.onClick}> 
                <a className='nex-nav-link'>{item.label}</a>
              </li>
            ))}
          </ul>

          {identity && (
              <div className='identity'>
                <div className="identity-item text-button" onClick={identityProps?.onLoginClick}>Log in</div>
                <NexButton className='identity-item' text='Sign Up' onClick={identityProps?.onSignUpClick} inverted/>
              </div>
          )}
        </nav>
      </div>

      <div className={`nex-nav-burger ${isMenuOpen ? 'menu-open' : '' }`} onClick={toggleMenu}>
          <div />
          <div />
          <div />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              {...navSwipeAnimation}
              className="nex-nav-mobile"
              ref={ref}
              aria-label="Sidebar"
            >
            <div className='nex-nav-list'>
              {navItems.length && navItems.map((item, index) => (
                <li key={index} className='nex-nav-item' onClick={toggleMenu}>
                  <a className='nex-nav-link'>{item.label}</a>
                </li>
              ))}
            </div>
            {identity && (
              <div className='identity'>
                <NexButton className='identity-item' text='Login' onClick={identityProps?.onLoginClick} inverted/>
                <NexButton className='identity-item' text='Sign Up' type='primary' onClick={identityProps?.onSignUpClick} inverted/>
              </div>
            )}
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NexNav;