import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Mail, Github, Package, MessageCircle, Send } from 'lucide-react';
import { useAnimationConfig } from '../../utils/animationConfig';
import { NexFooterProps } from './NexFooter.types';
import './NexFooter.scss';

// Social Icons Mapping with proper sizing
const socialIcons: { [key: string]: React.ComponentType<any> } = {
  github: Github,
  twitter: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  linkedin: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  youtube: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  discord: () => <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/></svg>
};

const NexFooter: React.FC<NexFooterProps> = ({
  logoSrc,
  displayName,
  tagline,
  sections = [],
  newsletter,
  contact,
  socials = [],
  developerTools,
  variant = 'default',
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  
  const { timing, shouldReduceMotion, variants } = useAnimationConfig();
  const currentYear = new Date().getFullYear();

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

  // Contact form submission handler
  const handleContactSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim() || !contact?.onSubmit) return;
    
    setIsSubmitting(true);
    try {
      await contact.onSubmit({ email: email.trim(), message: message.trim() });
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Contact submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, message, contact]);

  // Copy to clipboard handler
  const handleCopy = useCallback(async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  }, []);

  // Footer container variants
  const footerVariants = {
    initial: { opacity: 0, y: 20 },
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

  // Section variants
  const sectionVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: timing.medium
    }
  };

  // Determine footer class based on variant
  const footerClass = `nex-footer ${variant === 'compact' ? 'nex-footer-compact' : ''} ${variant === 'contact' ? 'nex-footer-contact' : ''} ${className}`.trim();

  return (
    <motion.footer
      className={footerClass}
      initial="initial"
      animate="animate"
      variants={footerVariants}
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Main Footer Content */}
      <div className="nex-footer-content">
        <div className="nex-footer-container">
          
          {/* Branding Section */}
          <motion.div 
            className="nex-footer-branding"
            variants={sectionVariants}
          >
            {logoSrc ? (
              <div className="nex-footer-logo">
                <img src={logoSrc} alt={displayName} />
              </div>
            ) : (
              <div className="nex-footer-name">
                <span>{displayName}</span>
              </div>
            )}
            
            {tagline && (
              <p className="nex-footer-tagline">{tagline}</p>
            )}

            {/* Newsletter Signup */}
            {newsletter?.enabled && variant !== 'contact' && (
              <form className="nex-footer-newsletter" onSubmit={handleNewsletterSubmit}>
                <div className="nex-footer-newsletter-input">
                  <Mail size={variant === 'compact' ? 14 : 16} />
                  <input
                    type="email"
                    placeholder={newsletter.placeholder || "Stay updated"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="nex-footer-newsletter-button"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}

            {/* Contact Form */}
            {contact?.enabled && variant === 'contact' && (
              <div className="nex-footer-contact-form">
                <h3 className="nex-footer-contact-title">
                  {contact.title || 'Get in Touch'}
                </h3>
                {contact.description && (
                  <p className="nex-footer-contact-description">
                    {contact.description}
                  </p>
                )}
                <form onSubmit={handleContactSubmit}>
                  <div className="nex-footer-contact-input">
                    <Mail size={16} />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="nex-footer-contact-textarea">
                    <MessageCircle size={16} />
                    <textarea
                      placeholder={contact.placeholder || "Your message"}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={3}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="nex-footer-contact-button"
                  >
                    <Send size={16} />
                    {isSubmitting ? 'Sending...' : (contact.buttonText || 'Send Message')}
                  </button>
                </form>
              </div>
            )}
          </motion.div>

          {/* Footer Sections */}
          {sections.length > 0 && variant !== 'contact' && (
            <motion.div 
              className="nex-footer-sections"
              variants={sectionVariants}
            >
              {sections.map((section, index) => (
                <div key={index} className="nex-footer-section">
                  <h3 className="nex-footer-section-title">{section.title}</h3>
                  <ul className="nex-footer-section-links">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nex-footer-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {/* Developer Tools */}
          {developerTools && variant !== 'contact' && (
            <motion.div 
              className="nex-footer-developer-tools"
              variants={sectionVariants}
            >
              <h3 className="nex-footer-section-title">Developer</h3>
              
              {developerTools.npmPackage && (
                <div className="nex-footer-dev-tool">
                  <Package size={variant === 'compact' ? 14 : 16} />
                  <code className="nex-footer-command">
                    npm install {developerTools.npmPackage}
                  </code>
                  <button
                    onClick={() => handleCopy(`npm install ${developerTools.npmPackage}`, 'npm')}
                    className="nex-footer-copy-button"
                    aria-label="Copy npm install command"
                  >
                    <AnimatePresence mode="wait">
                      {copySuccess === 'npm' ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={timing.fast}
                        >
                          <Check size={variant === 'compact' ? 12 : 14} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={timing.fast}
                        >
                          <Copy size={variant === 'compact' ? 12 : 14} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              )}

              {developerTools.githubUrl && (
                <a 
                  href={developerTools.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nex-footer-github-link"
                >
                  <Github size={variant === 'compact' ? 14 : 16} />
                  <span>View on GitHub</span>
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="nex-footer-bottom"
        variants={sectionVariants}
      >
        <div className="nex-footer-bottom-container">
          <div className="nex-footer-copyright">
            © {currentYear} {displayName}. All rights reserved.
          </div>

          {/* Social Links */}
          {socials.length > 0 && (
            <div className="nex-footer-socials">
              {socials.map((social, index) => {
                const IconComponent = socialIcons[social.type];
                if (!IconComponent) return null;
                
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`nex-footer-social-link ${social.type}`}
                    aria-label={`Follow us on ${social.type}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default NexFooter;