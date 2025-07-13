import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
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
  const { timing, shouldReduceMotion } = useAnimationConfig();

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

  const formClass = `nex-footer-contact-form ${variant === 'compact' ? 'nex-footer-contact-form--compact' : ''} ${variant === 'contact' ? 'nex-footer-contact-form--contact' : ''}`;

  return (
    <motion.div 
      className={formClass}
      variants={sectionVariants}
    >
      <motion.h3 
        className="nex-footer-contact-form__title"
        whileHover={{ x: 2 }}
        transition={timing.fast}
      >
        {contact.title || 'Get in Touch'}
      </motion.h3>
      
      {contact.description && (
        <motion.p 
          className="nex-footer-contact-form__description"
          whileHover={{ x: 2 }}
          transition={timing.fast}
        >
          {contact.description}
        </motion.p>
      )}
      
      <motion.form 
        onSubmit={handleContactSubmit}
        className="nex-footer-contact-form__form"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, ...timing.medium }}
      >
        <div className="nex-footer-contact-form__input">
          <Mail size={16} />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="nex-footer-contact-form__textarea">
          <MessageCircle size={16} />
          <textarea
            placeholder={contact.placeholder || "Your message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
          />
        </div>
        
        <motion.button 
          type="submit" 
          disabled={isSubmitting}
          className="nex-footer-contact-form__button"
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          transition={timing.fast}
        >
          <Send size={16} />
          {isSubmitting ? 'Sending...' : (contact.buttonText || 'Send Message')}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default FooterContactForm; 