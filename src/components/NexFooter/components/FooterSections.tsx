import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../utils/animationConfig';
import { FooterSection } from '../NexFooter.types';
import './FooterSections.scss';

interface FooterSectionsProps {
  sections: FooterSection[];
  variant?: 'default' | 'compact' | 'contact';
  theme?: 'auto' | 'light' | 'dark' | 'black-glass';
}

const FooterSections: React.FC<FooterSectionsProps> = ({
  sections,
  variant = 'default',
  theme = 'auto'
}) => {
  const { timing, shouldReduceMotion } = useAnimationConfig();

  // Simplified section variants for clean entrance
  const sectionVariants = {
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

  // Simplified link variants for clean animations
  const linkVariants = {
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

  const sectionsClass = `nex-footer-sections ${variant === 'compact' ? 'nex-footer-sections--compact' : ''} ${variant === 'contact' ? 'nex-footer-sections--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-sections--black-glass' : ''}`;

  return (
    <motion.div 
      className={sectionsClass}
      variants={sectionVariants}
    >
      {sections.map((section, index) => (
        <motion.div 
          key={index} 
          className="nex-footer-sections__section"
          initial="initial"
          animate="animate"
          transition={{ delay: index * 0.05 }}
        >
          <motion.h3 
            className="nex-footer-sections__title"
            whileHover={{ 
              opacity: 0.9
            }}
            transition={timing.fast}
          >
            {section.title}
          </motion.h3>
          <motion.ul 
            className="nex-footer-sections__links"
            initial="initial"
            animate="animate"
            transition={{ delayChildren: index * 0.05, staggerChildren: 0.03 }}
          >
            {section.links.map((link, linkIndex) => (
              <motion.li 
                key={linkIndex}
                variants={linkVariants}
              >
                <motion.a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nex-footer-sections__link"
                  whileHover={{ 
                    opacity: 0.8,
                    y: -1
                  }}
                  whileTap={{ 
                    opacity: 0.7,
                    y: 0
                  }}
                  transition={{ 
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FooterSections; 