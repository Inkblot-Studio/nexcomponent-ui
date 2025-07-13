import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NexFooterProps } from './NexFooter.types';
import FooterContainer from './components/FooterContainer';
import FooterBranding from './components/FooterBranding';
import FooterSections from './components/FooterSections';
import FooterDeveloperTools from './components/FooterDeveloperTools';
import FooterBottom from './components/FooterBottom';
import FooterContactForm from './components/FooterContactForm';
import { useAnimationConfig } from '../../utils/animationConfig';
import './NexFooter.scss';

const NexFooter: React.FC<NexFooterProps> = ({
  logoSrc,
  displayName,
  tagline,
  showLogoText = true,
  sections = [],
  newsletter,
  contact,
  socials = [],
  developerTools,
  variant = 'default',
  theme = 'auto',
  className = ''
}) => {
  const { timing, shouldReduceMotion } = useAnimationConfig();

  // Simplified footer container variants matching NexNav approach
  const footerVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  // Simplified content variants for clean animations
  const contentVariants = {
    initial: { opacity: 0, y: 8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Determine theme class
  const themeClass = theme === 'black-glass' ? 'nex-footer-container--black-glass' : '';

  // Determine variant class
  const variantClass = variant === 'compact' ? 'nex-footer-container--compact' :
                      variant === 'contact' ? 'nex-footer-container--contact' :
                      (!logoSrc && !displayName && sections.length > 0) ? 'nex-footer-container--sections-only' : '';

  return (
    <motion.footer
      className={`nex-footer ${className}`}
      initial="initial"
      animate="animate"
      variants={footerVariants}
      style={{
        position: 'relative',
        width: '100%',
        zIndex: 1
      }}
    >
      <FooterContainer
        variant={variant}
        theme={theme}
        className={`${className} ${themeClass} ${variantClass}`}
      >
        <motion.div 
          className="nex-footer-content"
          variants={contentVariants}
        >
          <motion.div 
            className="nex-footer-inner"
            variants={contentVariants}
          >
            
            {/* Branding Section */}
            <FooterBranding
              logoSrc={logoSrc}
              displayName={displayName}
              tagline={tagline}
              showLogoText={showLogoText}
              newsletter={newsletter}
              variant={variant}
              theme={theme}
            />

            {/* Footer Sections - Only show if not contact variant */}
            <AnimatePresence>
              {sections.length > 0 && variant !== 'contact' && (
                <motion.div
                  key="footer-sections"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={timing.medium}
                >
                  <FooterSections
                    sections={sections}
                    variant={variant}
                    theme={theme}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Form - Only show in contact variant */}
            <AnimatePresence>
              {contact?.enabled && variant === 'contact' && (
                <motion.div
                  key="footer-contact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={timing.medium}
                  className={theme === 'black-glass' ? 'nex-footer-contact-form--black-glass' : ''}
                >
                  <FooterContactForm
                    contact={contact}
                    variant={variant}
                    theme={theme}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Developer Tools - Only show if not contact variant */}
            <AnimatePresence>
              {developerTools && variant !== 'contact' && (
                <motion.div
                  key="footer-developer-tools"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={timing.medium}
                >
                  <FooterDeveloperTools
                    developerTools={developerTools}
                    variant={variant}
                    theme={theme}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={contentVariants}
          transition={{ delay: shouldReduceMotion ? 0 : 0.15 }}
        >
          <FooterBottom
            displayName={displayName}
            socials={socials}
            variant={variant}
            theme={theme}
          />
        </motion.div>
      </FooterContainer>
    </motion.footer>
  );
};

export default NexFooter;