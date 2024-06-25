import './NexNav.scss';
import React, { useState } from 'react';
import { NexNavProps } from './NexNav.types';
import NexButton from '../NexButton';
import { CSSTransition } from "react-transition-group";

const NexNav: React.FC<NexNavProps> = ({ logoSrc, altText, identity, navItems, identityProps }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  <NexButton className='identity-item' text='Sign Up' onClick={identityProps?.onSignUpClick} inverted/>
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

      <CSSTransition
        in={isMenuOpen}
        classNames="fade"
        timeout={200}
        mountOnEnter
        unmountOnExit
      > 
        <div className="nex-nav-mobile">
          <div className="nex-nav-list">
            {navItems.length && navItems.map((item, index) => (
                <li key={index} className='nex-nav-item' onClick={item.onClick}> 
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
        </div>
      </CSSTransition>
    </>
  );
};

export default NexNav;