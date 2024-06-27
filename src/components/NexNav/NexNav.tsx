import './NexNav.scss';
import React, { useRef, useState } from 'react';
import { NexNavProps } from './NexNav.types';
import NexButton from '../NexButton';
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from 'react-use';

const NexNav: React.FC<NexNavProps> = ({ logoSrc, altText, identity, navItems, identityProps }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  
  useClickAway(ref, (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('.burger')) {
      return;
    }

    setIsMenuOpen(false);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navSwipeAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  return (
    <>
      <div className="nex-nav">
        {logoSrc ? (
          <div className='nex-nav-client-logo'>
            <img src={logoSrc} alt={altText} className='nex-nav-logo' />
          </div>
        ) : (
          <div className='nex-nav-client-name'>
            <div className='client-name'>{altText}</div>
          </div>
        )}

        <nav className={`nex-nav-inner-wrapper`}>
          <div className={`nex-nav-right`}>
            <ul className='nex-nav-list'>
              {navItems.length && navItems.map((item, index) => (
                <li key={index} className='nex-nav-item' onClick={item.onClick}> 
                  <a className='nex-nav-link'>{item.label}</a>
                </li>
              ))}
              {identity && (
                <div className='identity'>
                  <NexButton className='identity-item' text='Login' onClick={identityProps?.onLoginClick} inverted/>
                  <NexButton className='identity-item' text='Sign Up' type='primary' onClick={identityProps?.onSignUpClick} inverted/>
                </div>
              )}
            </ul>
          </div>
        </nav>

        <div className={`burger ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
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
              {identity && (
                <div className='identity'>
                  <NexButton className='identity-item' text='Login' onClick={identityProps?.onLoginClick} inverted/>
                  <NexButton className='identity-item' text='Sign Up' type='primary' onClick={identityProps?.onSignUpClick} inverted/>
                </div>
              )}
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NexNav;