import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useAnimationConfig } from '../../../utils/animationConfig';
import './FooterBranding.scss';

interface FooterBrandingProps {
  logoSrc?: string;
  displayName: string;
  tagline?: string;
  showLogoText?: boolean;
  newsletter?: {
    enabled?: boolean;
    placeholder?: string;
    onSubmit?: (email: string) => void;
  };
  variant?: 'default' | 'compact' | 'contact';
}

const FooterBranding: React.FC<FooterBrandingProps> = ({
  logoSrc,
  displayName,
  tagline,
  showLogoText = true,
  newsletter,
  variant = 'default'
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { timing, shouldReduceMotion } = useAnimationConfig();

  // Newsletter submission handler
  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !newsletter?.onSubmit) return;
    
    setIsSubmitting(true);
    try {
      await newsletter.onSubmit(email.trim());
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, newsletter]);

  // Section variants for liquid glass entrance
  const sectionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const brandingClass = `nex-footer-branding ${variant === 'compact' ? 'nex-footer-branding--compact' : ''} ${variant === 'contact' ? 'nex-footer-branding--contact' : ''}`;

  return (
    <motion.div 
      className={brandingClass}
      variants={sectionVariants}
    >
      {/* Logo or Brand Name */}
      {logoSrc ? (
        <motion.div 
          className="nex-footer-branding__logo"
          whileHover={{ y: -2 }}
          transition={timing.fast}
        >
          <img src={logoSrc} alt={displayName} />
        </motion.div>
      ) : (
        showLogoText && (
          <motion.div 
            className="nex-footer-branding__name"
            whileHover={{ x: 2 }}
            transition={timing.fast}
          >
            <span>{displayName}</span>
          </motion.div>
        )
      )}
      
      {/* Tagline */}
      {tagline && showLogoText && (
        <motion.p 
          className="nex-footer-branding__tagline"
          whileHover={{ x: 2 }}
          transition={timing.fast}
        >
          {tagline}
        </motion.p>
      )}

      {/* Newsletter Signup */}
      {newsletter?.enabled && variant !== 'contact' && (
        <motion.form 
          className="nex-footer-branding__newsletter"
          onSubmit={handleNewsletterSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ...timing.medium }}
        >
          <div className="nex-footer-branding__newsletter-input">
            <Mail size={variant === 'compact' ? 14 : 16} />
            <input
              type="email"
              placeholder={newsletter.placeholder || "Stay updated"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <motion.button 
            type="submit" 
            disabled={isSubmitting}
            className="nex-footer-branding__newsletter-button"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            transition={timing.fast}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default FooterBranding; 