import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickAway } from 'react-use';
import './LanguageSwitcher.scss';
import { LanguageSwitcherProps } from './LanguageSwitcher.types';

const getFlagEmoji = (code: string): string => {
  const iso = code.slice(0, 2).toUpperCase();
  return iso.replace(/./g, char =>
    String.fromCodePoint(127397 + char.charCodeAt(0))
  );
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`nex-lang-chevron${open ? ' open' : ''}`}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  options,
  onChange
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = options.find(opt => opt.code === currentLocale);

  // Filtered options
  const filtered = options.filter(opt =>
    opt.label?.toLowerCase().includes(search.toLowerCase()) ||
    opt.code.toLowerCase().includes(search.toLowerCase())
  );

  useClickAway(ref, () => setOpen(false));

  // Keyboard navigation and focus management
  useEffect(() => {
    if (!open) {
      setFocusIdx(-1);
      setSearch('');
      return;
    }
    // Focus search input when dropdown opens
    setTimeout(() => {
      searchRef.current?.focus();
    }, 10);
  }, [open]);

  // Scroll focused item into view
  useEffect(() => {
    if (focusIdx >= 0 && scrollRef.current) {
      const item = scrollRef.current.querySelectorAll<HTMLElement>('.nex-lang-item')[focusIdx];
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusIdx]);

  // Keyboard handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusIdx(idx => (idx + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusIdx(idx => (idx - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (focusIdx >= 0 && filtered[focusIdx]) {
        e.preventDefault();
        onChange(filtered[focusIdx].code);
        setOpen(false);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  }, [open, filtered, focusIdx, onChange]);

  // Open/close toggle
  const toggle = () => setOpen(prev => !prev);

  return (
    <div className="nex-lang-switcher" ref={ref}>
      <div
        className="nex-lang-current"
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') toggle();
        }}
      >
        {current?.icon ? (
          <img src={current.icon} alt="" className="nex-lang-icon" />
        ) : (
          <span className="nex-lang-emoji">{getFlagEmoji(currentLocale)}</span>
        )}
        <span className="nex-lang-label">
          {current?.label || currentLocale.toUpperCase()}
        </span>
        <ChevronIcon open={open} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nex-lang-dropdown"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
          >
            <input
              className="nex-lang-search"
              ref={searchRef}
              type="text"
              placeholder="Search language..."
              value={search}
              onChange={e => {
                setSearch(e.target.value);
                setFocusIdx(0);
              }}
              aria-label="Search language"
              onKeyDown={e => e.stopPropagation()}
            />
            <div className="nex-lang-scroll" ref={scrollRef}>
              {filtered.length === 0 && (
                <div className="nex-lang-item" tabIndex={-1} aria-disabled="true" style={{ opacity: 0.6 }}>
                  No results
                </div>
              )}
              {filtered.map((option, idx) => {
                // Create a ref for the focused item
                const isFocused = focusIdx === idx;
                return (
                  <div
                    key={option.code}
                    className="nex-lang-item"
                    role="option"
                    aria-selected={option.code === currentLocale}
                    tabIndex={-1}
                    onClick={() => {
                      onChange(option.code);
                      setOpen(false);
                    }}
                    onMouseEnter={() => setFocusIdx(idx)}
                    style={
                      isFocused
                        ? { outline: '2px solid var(--nex-primary-color)', zIndex: 1 }
                        : undefined
                    }
                    ref={isFocused ? (el => el && el.focus()) : undefined}
                  >
                    {option.icon ? (
                      <img src={option.icon} alt="" className="nex-lang-icon" />
                    ) : (
                      <span className="nex-lang-emoji">
                        {getFlagEmoji(option.code)}
                      </span>
                    )}
                    <span className="nex-lang-label">
                      {option.label || option.code.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
