import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../../../utils/animationConfig';
import { FooterSection } from '../NexFooter.types';
import './FooterSections.scss';

interface FooterSectionsProps {
  sections: FooterSection[];
  variant?: 'default' | 'compact' | 'contact';
}

const FooterSections: React.FC<FooterSectionsProps> = ({
  sections,
  variant = 'default'
}) => {
  const { timing, shouldReduceMotion } = useAnimationConfig();

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

  // Link variants for staggered animation
  const linkVariants = {
    initial: { opacity: 0, x: -5 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const sectionsClass = `nex-footer-sections ${variant === 'compact' ? 'nex-footer-sections--compact' : ''} ${variant === 'contact' ? 'nex-footer-sections--contact' : ''}`;

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
          transition={{ delay: index * 0.1 }}
        >
          <motion.h3 
            className="nex-footer-sections__title"
            whileHover={{ x: 2 }}
            transition={timing.fast}
          >
            {section.title}
          </motion.h3>
          <motion.ul 
            className="nex-footer-sections__links"
            initial="initial"
            animate="animate"
            transition={{ delayChildren: index * 0.1, staggerChildren: 0.05 }}
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
                  whileHover={{ x: 3 }}
                  whileTap={{ x: 1 }}
                  transition={timing.fast}
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