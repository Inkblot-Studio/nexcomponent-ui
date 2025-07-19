import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useFooterAnimations } from '../animations';
import { ContactForm } from '../NexFooter.types';
import './FooterContactForm.scss';

interface FooterContactFormProps {
  contact: ContactForm;
  variant?: 'default' | 'compact' | 'contact';
  theme?: 'auto' | 'light' | 'dark' | 'black-glass';
}

const FooterContactForm: React.FC<FooterContactFormProps> = ({
  contact,
  variant = 'contact',
  theme = 'auto'
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<'email' | 'message' | null>(null);
  
  const animations = useFooterAnimations();

  // Contact form submission handler
  const handleContactSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim() || !contact?.onSubmit) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      await contact.onSubmit({ email: email.trim(), message: message.trim() });
      setIsSubmitted(true);
      setEmail('');
      setMessage('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Contact submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, message, contact]);

  const formClass = `nex-footer-contact-form ${variant === 'compact' ? 'nex-footer-contact-form--compact' : ''} ${variant === 'contact' ? 'nex-footer-contact-form--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-contact-form--black-glass' : ''}`;

  return (
    <motion.div 
      className={formClass}
      variants={animations.formField}
      initial="initial"
      animate="animate"
    >
      {/* Title */}
      <motion.h3 
        className="nex-footer-contact-form__title"
        variants={animations.link}
        whileHover={{ 
          opacity: 0.9,
          color: theme === 'black-glass' ? '#ff6b35' : undefined
        }}
        transition={animations.hover}
      >
        {contact.title || 'Get in Touch'}
      </motion.h3>
      
      {/* Description */}
      {contact.description && (
        <motion.p 
          className="nex-footer-contact-form__description"
          variants={animations.link}
          whileHover={{ 
            opacity: 0.9,
            color: theme === 'black-glass' ? '#ffffff' : undefined
          }}
          transition={animations.hover}
        >
          {contact.description}
        </motion.p>
      )}

      {/* Success/Error Messages */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="nex-footer-contact-form__message nex-footer-contact-form__message--success"
            variants={animations.message}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <CheckCircle size={16} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
        
        {error && (
          <motion.div
            className="nex-footer-contact-form__message nex-footer-contact-form__message--error"
            variants={animations.message}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Contact Form */}
      <motion.form 
        onSubmit={handleContactSubmit}
        className="nex-footer-contact-form__form"
        variants={animations.formField}
      >
        {/* Email Input */}
        <motion.div 
          className={`nex-footer-contact-form__input ${focusedField === 'email' ? 'nex-footer-contact-form__input--focused' : ''}`}
          variants={animations.formField}
          whileHover={{ 
            opacity: 0.9
          }}
          transition={animations.hover}
        >
          <Mail size={16} />
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            required
            disabled={isSubmitting}
          />
        </motion.div>
        
        {/* Message Textarea */}
        <motion.div 
          className={`nex-footer-contact-form__textarea ${focusedField === 'message' ? 'nex-footer-contact-form__textarea--focused' : ''}`}
          variants={animations.formField}
          whileHover={{ 
            opacity: 0.9
          }}
          transition={animations.hover}
        >
          <MessageCircle size={16} />
          <textarea
            placeholder={contact.placeholder || "Tell us about your project or inquiry..."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            required
            disabled={isSubmitting}
            rows={3}
          />
        </motion.div>
        
        {/* Submit Button */}
        <motion.button 
          type="submit" 
          disabled={isSubmitting || !email.trim() || !message.trim()}
          className="nex-footer-contact-form__button"
          variants={animations.button}
          whileHover={{ 
            opacity: 0.9
          }}
          whileTap={{ 
            opacity: 0.8
          }}
          transition={animations.hover}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={animations.hover}
                className="nex-footer-contact-form__button-spinner"
              >
                <div className="spinner" />
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={animations.hover}
                className="nex-footer-contact-form__button-content"
              >
                <Send size={16} />
                <span>Send Message</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default FooterContactForm; 