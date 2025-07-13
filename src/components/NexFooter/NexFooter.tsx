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
  const { timing, shouldReduceMotion, variants } = useAnimationConfig();

  // Footer container variants matching NexNav approach
  const footerVariants = {
    initial: {
      opacity: 0,
      y: 20,
      backdropFilter: 'blur(0px) saturate(100%)'
    },
    animate: {
      opacity: 1,
      y: 0,
      backdropFilter: 'blur(24px) saturate(180%)',
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  // Content variants for staggered animations
  const contentVariants = {
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
        className={className}
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
            />

            {/* Footer Sections - Only show if not contact variant */}
            <AnimatePresence>
              {sections.length > 0 && variant !== 'contact' && (
                <motion.div
                  key="footer-sections"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={timing.medium}
                >
                  <FooterSections
                    sections={sections}
                    variant={variant}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Contact Form - Only show in contact variant */}
            <AnimatePresence>
              {contact?.enabled && variant === 'contact' && (
                <motion.div
                  key="footer-contact"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={timing.medium}
                >
                  <FooterContactForm
                    contact={contact}
                    variant={variant}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Developer Tools - Only show if not contact variant */}
            <AnimatePresence>
              {developerTools && variant !== 'contact' && (
                <motion.div
                  key="footer-developer-tools"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={timing.medium}
                >
                  <FooterDeveloperTools
                    developerTools={developerTools}
                    variant={variant}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={contentVariants}
          transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <FooterBottom
            displayName={displayName}
            socials={socials}
            variant={variant}
          />
        </motion.div>
      </FooterContainer>
    </motion.footer>
  );
};

export default NexFooter;