import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useAnimationConfig } from '../../../utils/animationConfig';
import { ContactForm } from '../NexFooter.types';
import './FooterContactForm.scss';

interface FooterContactFormProps {
  contact: ContactForm;
  variant?: 'default' | 'compact' | 'contact';
}

const FooterContactForm: React.FC<FooterContactFormProps> = ({
  contact,
  variant = 'contact'
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<'email' | 'message' | null>(null);
  
  const { timing, shouldReduceMotion, spring } = useAnimationConfig();

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

  // Form variants for liquid glass entrance
  const formVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  // Input field variants
  const inputVariants = {
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

  // Success/Error message variants
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

  const formClass = `nex-footer-contact-form ${variant === 'compact' ? 'nex-footer-contact-form--compact' : ''} ${variant === 'contact' ? 'nex-footer-contact-form--contact' : ''}`;

  return (
    <motion.div 
      className={formClass}
      variants={formVariants}
      initial="initial"
      animate="animate"
    >
      {/* Title */}
      <motion.h3 
        className="nex-footer-contact-form__title"
        variants={inputVariants}
        whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
        transition={timing.fast}
      >
        {contact.title || 'Get in Touch'}
      </motion.h3>
      
      {/* Description */}
      {contact.description && (
        <motion.p 
          className="nex-footer-contact-form__description"
          variants={inputVariants}
          whileHover={{ x: shouldReduceMotion ? 0 : 2 }}
          transition={timing.fast}
        >
          {contact.description}
        </motion.p>
      )}

      {/* Success/Error Messages */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="nex-footer-contact-form__message nex-footer-contact-form__message--success"
            variants={messageVariants}
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
            variants={messageVariants}
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
        variants={inputVariants}
      >
        {/* Email Input */}
        <motion.div 
          className={`nex-footer-contact-form__input ${focusedField === 'email' ? 'nex-footer-contact-form__input--focused' : ''}`}
          variants={inputVariants}
          whileHover={{ y: shouldReduceMotion ? 0 : -1 }}
          transition={timing.fast}
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
          variants={inputVariants}
          whileHover={{ y: shouldReduceMotion ? 0 : -1 }}
          transition={timing.fast}
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
            rows={4}
          />
        </motion.div>
        
        {/* Submit Button */}
        <motion.button 
          type="submit" 
          disabled={isSubmitting || !email.trim() || !message.trim()}
          className="nex-footer-contact-form__button"
          variants={inputVariants}
          whileHover={{ 
            y: shouldReduceMotion ? 0 : -2,
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
                transition={timing.fast}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Send size={16} />
                <span>{contact.buttonText || 'Send Message'}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default FooterContactForm; 