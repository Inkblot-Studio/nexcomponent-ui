import React from 'react';
import { NexFooterProps } from './NexFooter.types';
import FooterContainer from './components/FooterContainer';
import FooterBranding from './components/FooterBranding';
import FooterSections from './components/FooterSections';
import FooterDeveloperTools from './components/FooterDeveloperTools';
import FooterBottom from './components/FooterBottom';
import FooterContactForm from './components/FooterContactForm';
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
  return (
    <FooterContainer
      variant={variant}
      theme={theme}
      className={className}
    >
      <div className="nex-footer-content">
        <div className="nex-footer-inner">
          
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
          {sections.length > 0 && variant !== 'contact' && (
            <FooterSections
              sections={sections}
              variant={variant}
            />
          )}

          {/* Contact Form - Only show in contact variant */}
          {contact?.enabled && variant === 'contact' && (
            <FooterContactForm
              contact={contact}
              variant={variant}
            />
          )}

          {/* Developer Tools - Only show if not contact variant */}
          {developerTools && variant !== 'contact' && (
            <FooterDeveloperTools
              developerTools={developerTools}
              variant={variant}
            />
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <FooterBottom
        displayName={displayName}
        socials={socials}
        variant={variant}
      />
    </FooterContainer>
  );
};

export default NexFooter;