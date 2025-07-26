import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { useAnimationConfig } from '../../../../utils/animationConfig';
import { FooterBrandingProps } from './FooterBranding.types';
import { getTranslations } from '../../utils/translations';
import './FooterBranding.scss';

const FooterBranding: React.FC<FooterBrandingProps> = ({
  logoSrc,
  displayName,
  tagline,
  showLogoText = true,
  newsletter,
  variant = 'default',
  theme = 'auto',
  translations
}) => {
  const t = getTranslations(translations);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { timing, shouldReduceMotion } = useAnimationConfig();

  // Newsletter submission handler
  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !newsletter?.onSubmit) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      await newsletter.onSubmit(email.trim());
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, newsletter]);

  // Simplified section variants for clean entrance
  const sectionVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.04
      }
    }
  };

  // Simplified item variants for clean animations
  const itemVariants = {
    initial: { opacity: 0, y: 4 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Simplified message variants
  const messageVariants = {
    initial: { opacity: 0, y: -4 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -4,
      transition: {
        duration: 0.15
      }
    }
  };

  const brandingClass = `nex-footer-branding ${variant === 'contact' ? 'nex-footer-branding--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-branding--black-glass' : ''}`;

  return (
    <motion.div 
      className={brandingClass}
      variants={sectionVariants}
      initial="initial"
      animate="animate"
    >
      {/* Logo or Brand Name */}
      {logoSrc ? (
        <motion.div 
          className="nex-footer-branding__logo"
          variants={itemVariants}
          whileHover={{ 
            opacity: 0.9
          }}
          whileTap={{ opacity: 0.8 }}
          transition={timing.fast}
        >
          <img src={logoSrc} alt={displayName} />
        </motion.div>
      ) : (
        showLogoText && (
          <motion.div 
            className="nex-footer-branding__name"
            variants={itemVariants}
            whileHover={{ 
              color: theme === 'black-glass' ? '#ff6b35' : undefined,
              opacity: 0.9
            }}
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
          variants={itemVariants}
          whileHover={{ 
            color: theme === 'black-glass' ? '#ffffff' : undefined,
            opacity: 0.9
          }}
          transition={timing.fast}
        >
          {tagline}
        </motion.p>
      )}

      {/* Newsletter Signup */}
      {newsletter?.enabled && variant !== 'contact' && (
        <motion.div
          className="nex-footer-branding__newsletter-container"
          variants={itemVariants}
        >
          {/* Success/Error Messages */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                className="nex-footer-branding__message nex-footer-branding__message--success"
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <CheckCircle size={14} />
                <span>{t.successfullySubscribed}</span>
              </motion.div>
            )}
            
            {error && (
              <motion.div
                className="nex-footer-branding__message nex-footer-branding__message--error"
                variants={messageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AlertCircle size={14} />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form 
            className="nex-footer-branding__newsletter"
            onSubmit={handleNewsletterSubmit}
            variants={itemVariants}
          >
            <motion.div 
              className="nex-footer-branding__newsletter-input"
              whileHover={{ 
                opacity: 0.9,
                backgroundColor: theme === 'black-glass' ? 'rgba(255, 107, 53, 0.1)' : undefined
              }}
              transition={timing.fast}
            >
              <Mail size={16} />
              <input
                type="email"
                placeholder={newsletter.placeholder || t.stayUpdated}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </motion.div>
            <motion.button 
              type="submit" 
              disabled={isSubmitting || !email.trim()}
              className="nex-footer-branding__newsletter-button"
              whileHover={{ 
                opacity: 0.9,
                backgroundColor: theme === 'black-glass' ? 'rgba(255, 107, 53, 0.2)' : undefined
              }}
              whileTap={{ opacity: 0.8 }}
              transition={timing.fast}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={timing.fast}
                    className="nex-footer-branding__button-spinner"
                  >
                    <div className="spinner" />
                  </motion.div>
                ) : (
                  <motion.span
                    key="subscribe"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={timing.fast}
                  >
                    {t.subscribe}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FooterBranding; 