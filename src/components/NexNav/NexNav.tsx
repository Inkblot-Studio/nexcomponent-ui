import './NexNav.scss';
import React, { useState } from 'react';
import { NexNavProps } from './NexNav.types';
import NexButton from '../NexButton';

const NexNav: React.FC<NexNavProps> = ({ logoSrc, altText, identity, navItems, identityProps }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
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

        <nav className={`nex-nav-inner-wrapper ${open ? 'open' : ''}`}>
          <div className={`nex-nav-right ${open ? 'open' : ''}`}>
            <ul className='nex-nav-list'>
              {navItems.map((item, index) => (
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

        <div className={`burger ${open ? 'open' : ''}`} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </>
  );
};

export default NexNav;