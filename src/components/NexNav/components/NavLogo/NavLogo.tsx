import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../../utils/animationConfig';

interface NavLogoProps {
  logoSrc?: string;
  displayName: string;
  onHomeClick: () => void;
  left: string;
}

const NavLogo: React.FC<NavLogoProps> = ({
  logoSrc,
  displayName,
  onHomeClick,
  left
}) => {
  const { timing } = useAnimationConfig();

  return (
    <motion.div
      className="nex-nav-mobile-logo"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, left }}
      transition={timing.medium}
      style={{
        position: 'fixed',
        top: 'var(--nex-spacing-md)',
        zIndex: 'calc(var(--nex-z-index-modal) + 10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: '44px',
        cursor: 'pointer',
        left,
      }}
      onClick={onHomeClick}
      role="button"
      tabIndex={0}
      aria-label={`${displayName} - Go to home`}
      onKeyDown={(e) => e.key === 'Enter' && onHomeClick()}
      whileHover={{
        transition: timing.fast
      }}
      whileTap={{
        transition: timing.fast
      }}
    >
      {logoSrc ? (
        <motion.div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '8px',
            boxSizing: 'border-box'
          }}
          whileHover={{
            transition: timing.fast
          }}
        >
          <motion.img 
            src={logoSrc} 
            alt={displayName} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={timing.medium}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'brightness(0.9) contrast(1.1)',
              maxWidth: '24px',
              maxHeight: '24px'
            }}
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('fallback-hidden');
            }}
          />
          <motion.div 
            className="fallback-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={timing.medium}
            style={{
              position: 'absolute',
              fontSize: 'var(--nex-font-size-xs)',
              fontWeight: 'var(--nex-font-weight-medium)',
              color: 'var(--nex-font-color)',
              textAlign: 'center',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '28px',
              display: 'none'
            }}
          >
            {displayName?.slice(0, 2)}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '4px 12px',
            boxSizing: 'border-box'
          }}
          whileHover={{
            transition: timing.fast
          }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={timing.medium}
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--nex-font-color)',
              textAlign: 'center',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: 'none',
              fontFamily: 'var(--nex-font-family-primary)',
              letterSpacing: '0.02em',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
          >
            {displayName || 'NexComponent'}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavLogo; 