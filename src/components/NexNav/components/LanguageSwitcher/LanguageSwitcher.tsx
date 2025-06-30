import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import './LanguageSwitcher.scss';
import { LanguageSwitcherProps } from './LanguageSwitcher.types';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = options.find(opt => opt.code === currentLocale);

  useClickAway(ref, () => setOpen(false));

  const toggle = () => setOpen(prev => !prev);

  return (
    <div className="nex-lang-switcher" ref={ref}>
      <div className="nex-lang-current" onClick={toggle} role="button" tabIndex={0}>
        {current?.icon && <img src={current.icon} alt={current.label} className="nex-lang-icon" />}
        <span className="nex-lang-label">{current?.label ?? currentLocale.toUpperCase()}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nex-lang-dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            role="listbox"
          >
            {options.map(option => (
              <li
                key={option.code}
                className="nex-lang-item"
                role="option"
                aria-selected={option.code === currentLocale}
                onClick={() => {
                  onChange(option.code);
                  setOpen(false);
                }}
              >
                {option.icon && <img src={option.icon} alt={option.label} className="nex-lang-icon" />}
                <span className="nex-lang-label">{option.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
