import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClickAway } from 'react-use';
import { ChevronDown } from 'lucide-react';
import './LanguageSwitcher.scss';
import { LanguageSwitcherProps } from './LanguageSwitcher.types';
import { getTranslations } from '../../utils/translations';

const getFlagEmoji = (code: string): string => {
  const iso = code.slice(0, 2).toUpperCase();
  return iso.replace(/./g, char =>
    String.fromCodePoint(127397 + char.charCodeAt(0))
  );
};

const getLanguageName = (code: string): string => {
  const nameMap: Record<string, string> = {
    'en': 'EN',
    'en-US': 'EN',
    'en-GB': 'EN',
    'de': 'DE',
    'fr': 'FR',
    'es': 'ES',
    'it': 'IT',
    'pt': 'PT',
    'ru': 'RU',
    'ja': 'JA',
    'ko': 'KO',
    'zh': 'ZH',
    'zh-CN': 'ZH',
    'zh-TW': 'ZH',
    'ar': 'AR',
    'hi': 'HI',
    'tr': 'TR',
    'nl': 'NL',
    'pl': 'PL',
    'sv': 'SV',
    'da': 'DA',
    'no': 'NO',
    'fi': 'FI',
    'cs': 'CS',
    'sk': 'SK',
    'hu': 'HU',
    'ro': 'RO',
    'bg': 'BG',
    'hr': 'HR',
    'sl': 'SL',
    'et': 'ET',
    'lv': 'LV',
    'lt': 'LT',
    'mt': 'MT',
    'el': 'EL',
    'he': 'HE',
    'th': 'TH',
    'vi': 'VI',
    'id': 'ID',
    'ms': 'MS',
    'tl': 'TL',
    'fa': 'FA',
    'ur': 'UR',
    'bn': 'BN',
    'ta': 'TA',
    'te': 'TE',
    'ml': 'ML',
    'kn': 'KN',
    'gu': 'GU',
    'pa': 'PA',
    'or': 'OR',
    'as': 'AS',
    'ne': 'NE',
    'si': 'SI',
    'my': 'MY',
    'km': 'KM',
    'lo': 'LO',
    'ka': 'KA',
    'hy': 'HY',
    'az': 'AZ',
    'eu': 'EU',
    'is': 'IS',
    'mk': 'MK',
    'sq': 'SQ',
    'be': 'BE',
    'uk': 'UK',
    'kk': 'KK',
    'ky': 'KY',
    'tg': 'TG',
    'uz': 'UZ',
    'mn': 'MN',
    'ps': 'PS',
    'ku': 'KU',
    'sd': 'SD',
    'bo': 'BO',
    'dz': 'DZ',
    'ti': 'TI',
    'am': 'AM',
    'so': 'SO',
    'sw': 'SW',
    'rw': 'RW',
    'wo': 'WO',
    'sn': 'SN',
    'zu': 'ZU',
    'af': 'AF',
    'xh': 'XH',
    'st': 'ST',
    'ts': 'TS',
    'tn': 'TN',
    've': 'VE',
    'nr': 'NR',
    'ss': 'SS',
    'qu': 'QU',
    'ay': 'AY',
    'gn': 'GN',
    'wa': 'WA',
    'br': 'BR',
    'co': 'CO',
    'oc': 'OC',
    'ca': 'CA',
    'gl': 'GL',
    'cy': 'CY',
    'ga': 'GA',
    'gv': 'GV',
    'kw': 'KW',
    'fo': 'FO',
    'fj': 'FJ',
    'sm': 'SM',
    'to': 'TO',
    'mi': 'MI',
    'haw': 'HAW',
    'ceb': 'CEB',
    'jv': 'JV',
    'su': 'SU',
    'lb': 'LB',
    'fy': 'FY',
    'yi': 'YI',
    'ht': 'HT',
    'sc': 'SC',
    'vec': 'VEC',
    'fur': 'FUR',
    'rm': 'RM',
    'lad': 'LAD',
    'an': 'AN',
    'ast': 'AST',
    'ext': 'EXT',
    'mwl': 'MWL',
    'pms': 'PMS',
    'lij': 'LIJ',
    'nap': 'NAP',
    'scn': 'SCN',
  };
  
  return nameMap[code.toLowerCase()] || code.toUpperCase().slice(0, 2);
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  options,
  onChange,
  isAtTop = true,
  open = false,
  onOpen,
  onClose,
  theme = 'auto',
  translations
}) => {
  // Get translations with defaults
  const t = getTranslations(translations);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Detect current theme
  const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  const isBlackGlass = document.documentElement.getAttribute('data-theme-variant') === 'black-glass';

  // Optimized subtle hover animations for language switcher
  // Get initial background state based on theme and position - matching nav items exactly
  const getInitialBackground = () => {
    if (isDarkMode) {
      if (isBlackGlass) {
        return isAtTop ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0)';
      } else {
        return isAtTop ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0)';
      }
    } else {
      return isAtTop ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0)';
    }
  };

  const getHoverAnimation = () => {
    if (isDarkMode) {
      if (isBlackGlass) {
        return {
          backgroundColor: isAtTop ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.15)',
          borderColor: 'rgba(255, 255, 255, 0.35)',
          scale: 1.01,
          transform: 'translateY(-1px)',
          transition: { 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1]
          }
        };
      } else {
        return {
          backgroundColor: isAtTop ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.12)',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          scale: 1.01,
          transform: 'translateY(-1px)',
          transition: { 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1]
          }
        };
      }
    } else {
      return {
        backgroundColor: isAtTop ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)',
        borderColor: 'rgba(255, 255, 255, 0.55)',
        scale: 1.01,
        transform: 'translateY(-1px)',
        transition: { 
          duration: 0.3, 
          ease: [0.4, 0, 0.2, 1]
        }
      };
    }
  };

  const getTapAnimation = () => {
    if (isDarkMode) {
      return {
        backgroundColor: isAtTop ? 'rgba(255,24,1,0.18)' : 'rgba(255,24,1,0.22)',
        borderColor: 'rgba(255, 24, 1, 0.25)',
        scale: 0.98,
        transform: 'translateY(0px)',
        transition: { 
          duration: 0.15, 
          ease: [0.4, 0, 0.2, 1]
        }
      };
    } else {
      return {
        backgroundColor: isAtTop ? 'rgba(255,24,1,0.18)' : 'rgba(255,24,1,0.22)',
        borderColor: 'rgba(255, 24, 1, 0.25)',
        scale: 0.98,
        transform: 'translateY(0px)',
        transition: { 
          duration: 0.15, 
          ease: [0.4, 0, 0.2, 1]
        }
      };
    }
  };

  // Subtle hover animation for dropdown items
  const getItemHoverAnimation = () => {
    if (isDarkMode) {
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      };
    } else {
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      };
    }
  };

  const hoverAnimation = getHoverAnimation();
  const tapAnimation = getTapAnimation();
  const itemHoverAnimation = getItemHoverAnimation();

  const current = options.find(opt => opt.code === currentLocale);
  const showSearch = options.length > 5;

  // Filtered options
  const filtered = options.filter(opt => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      opt.label?.toLowerCase().includes(searchLower) ||
      opt.code.toLowerCase().includes(searchLower) ||
      getLanguageName(opt.code).toLowerCase().includes(searchLower)
    );
  });

  useClickAway(ref, () => {
    onClose && onClose();
  });

  useEffect(() => {
    if (!open) {
      setSearch('');
      return;
    }
    // Focus search input when dropdown opens
    if (showSearch) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 10);
    }
  }, [open, showSearch]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose && onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const handleToggle = () => {
    // Always call onOpen which now handles the toggle logic
    onOpen && onOpen();
  };

  return (
    <div className="nex-lang-switcher" ref={ref}>
      <motion.div
        className="nex-lang-current"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        initial={{ backgroundColor: getInitialBackground() }}
        animate={{ backgroundColor: getInitialBackground() }}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
      >
        {/* Show language code letters */}
        <span className="nex-lang-code">{currentLocale.toUpperCase()}</span>
        <motion.span 
          className="nex-lang-chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ 
            duration: 0.25, 
            ease: [0.4, 0, 0.2, 1]
          }}
          aria-hidden="true"
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nex-lang-dropdown"
            initial={{ opacity: 0, y: -8 }}
            animate={{ 
              opacity: 1,
              y: 0,
              background: isDarkMode 
                ? (isAtTop ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.85)')
                : (isAtTop ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)'),
              backdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: isAtTop ? 'blur(24px) saturate(200%)' : 'blur(24px) saturate(180%)',
              borderColor: isDarkMode 
                ? (isAtTop ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.15)')
                : (isAtTop ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.22)'),
              boxShadow: isAtTop 
                ? '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.13)'
            }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.4, 0, 0.2, 1],
              y: { duration: 0.2 }
            }}
            role="listbox"
          >
            {showSearch && (
              <input
                className="nex-lang-search"
                ref={searchRef}
                type="text"
                placeholder={t.searchLanguages}
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search language"
              />
            )}
            <div className="nex-lang-scroll">
              {filtered.length === 0 && (
                <div 
                  className="nex-lang-item" 
                  style={{ opacity: 0.6, cursor: 'default' }}
                >
                  {t.noLanguagesFound}
                </div>
              )}
              {filtered.map((option, index) => (
                <motion.div
                  key={option.code}
                  className="nex-lang-item"
                  role="option"
                  aria-selected={option.code === currentLocale}
                                          onClick={() => {
                          onChange(option.code);
                          onClose && onClose();
                        }}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.15,
                    delay: index * 0.015,
                    y: { duration: 0.12 }
                  }}
                  whileHover={itemHoverAnimation}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Show only emoji OR text, not both */}
                  {option.icon ? (
                    <img src={option.icon} alt="" className="nex-lang-icon" />
                  ) : (
                    <span className="nex-lang-emoji">
                      {getFlagEmoji(option.code)}
                    </span>
                  )}
                  <span className="nex-lang-label">
                    {option.label || getLanguageName(option.code)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
