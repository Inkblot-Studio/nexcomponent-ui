import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FooterContainer from './components/FooterContainer/index';
import FooterBranding from './components/FooterBranding/index';
import FooterSections from './components/FooterSections/index';
import FooterBottom from './components/FooterBottom/index';
import FooterContactForm from './components/FooterContactForm/index';
import { useFooterAnimations } from './animations';
import './NexFooter.scss';
const NexFooter = ({ logoSrc, displayName, tagline, showLogoText = true, sections = [], newsletter, contact, socials = [], variant = 'default', theme = 'auto', className = '' }) => {
    const animations = useFooterAnimations();
    // Determine theme class
    const themeClass = theme === 'black-glass' ? 'nex-footer-container--black-glass' : '';
    // Determine variant class
    const variantClass = variant === 'contact' ? 'nex-footer-container--contact' :
        (!logoSrc && !displayName && sections.length > 0) ? 'nex-footer-container--sections-only' : '';
    // Add contact class when contact form is present
    const contactClass = contact?.enabled ? 'nex-footer-container--has-contact' : '';
    return (<motion.footer className={`nex-footer ${className}`} initial="initial" animate="animate" variants={animations.container} style={{
            position: 'relative',
            width: '100%',
            zIndex: 1
        }}>
      <FooterContainer variant={variant} theme={theme} className={`${className} ${themeClass} ${variantClass} ${contactClass}`}>
        <motion.div className="nex-footer-content" variants={animations.section}>
          <motion.div className="nex-footer-inner" variants={animations.stagger.container}>
            
            {/* Branding Section */}
            <motion.div variants={animations.stagger.item}>
              <FooterBranding logoSrc={logoSrc} displayName={displayName} tagline={tagline} showLogoText={showLogoText} newsletter={newsletter} variant={variant} theme={theme}/>
            </motion.div>

            {/* Footer Sections - Only show if not contact variant */}
            <AnimatePresence>
              {sections.length > 0 && variant !== 'contact' && (<motion.div key="footer-sections" variants={animations.stagger.item} initial="initial" animate="animate" exit="initial">
                  <FooterSections sections={sections} variant={variant} theme={theme}/>
                </motion.div>)}
            </AnimatePresence>

            {/* Contact Form - Side positioned for desktop */}
            <AnimatePresence>
              {contact?.enabled && (<motion.div key="footer-contact" variants={animations.stagger.item} initial="initial" animate="animate" exit="initial" className={`nex-footer-contact-side ${theme === 'black-glass' ? 'nex-footer-contact-side--black-glass' : ''}`}>
                  <FooterContactForm contact={contact} variant={variant} theme={theme}/>
                </motion.div>)}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div variants={animations.section} transition={{ delay: 0.15 }}>
          <FooterBottom displayName={displayName} socials={socials} variant={variant} theme={theme}/>
        </motion.div>
      </FooterContainer>
    </motion.footer>);
};
export default NexFooter;
//# sourceMappingURL=NexFooter.jsx.map