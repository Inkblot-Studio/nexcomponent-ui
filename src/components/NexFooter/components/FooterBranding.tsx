import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { timing, shouldReduceMotion, spring } = useAnimationConfig();

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

  // Section variants for liquid glass entrance
  const sectionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  // Item variants for staggered animations
  const itemVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Message variants
  const messageVariants = {
    initial: { opacity: 0, y: -10, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const brandingClass = `nex-footer-branding ${variant === 'compact' ? 'nex-footer-branding--compact' : ''} ${variant === 'contact' ? 'nex-footer-branding--contact' : ''}`;

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
            y: shouldReduceMotion ? 0 : -2,
            scale: shouldReduceMotion ? 1 : 1.02
          }}
          whileTap={{ scale: 0.98 }}
          transition={spring.responsive}
        >
          <img src={logoSrc} alt={displayName} />
        </motion.div>
      ) : (
        showLogoText && (
          <motion.div 
            className="nex-footer-branding__name"
            variants={itemVariants}
            whileHover={{ 
              x: shouldReduceMotion ? 0 : 2,
              color: 'var(--nex-signature)'
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
            x: shouldReduceMotion ? 0 : 2,
            color: 'var(--nex-font-color)'
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
                <span>Successfully subscribed!</span>
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
              whileHover={{ y: shouldReduceMotion ? 0 : -1 }}
              transition={timing.fast}
            >
              <Mail size={variant === 'compact' ? 14 : 16} />
              <input
                type="email"
                placeholder={newsletter.placeholder || "Stay updated"}
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
                y: shouldReduceMotion ? 0 : -1,
                scale: shouldReduceMotion ? 1 : 1.02
              }}
              whileTap={{ 
                y: 0,
                scale: 0.98
              }}
              transition={spring.responsive}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
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
                    Subscribe
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