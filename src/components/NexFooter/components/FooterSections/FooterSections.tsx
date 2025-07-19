import React from 'react';
import { motion } from 'framer-motion';
import { useFooterAnimations } from '../../animations';
import { FooterSectionsProps } from './FooterSections.types';
import './FooterSections.scss';

const FooterSections: React.FC<FooterSectionsProps> = ({
  sections,
  variant = 'default',
  theme = 'auto'
}) => {
  const animations = useFooterAnimations();

  // Limit sections to maximum of 4 for better layout control
  const limitedSections = sections.slice(0, 4);
  
  // Determine if we have many sections for class-based styling
  const hasManySections = limitedSections.length >= 3;

  const sectionsClass = `nex-footer-sections ${variant === 'contact' ? 'nex-footer-sections--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-sections--black-glass' : ''} ${hasManySections ? 'nex-footer-sections--many-sections' : ''}`;

  // Optimize animation delays based on number of sections
  const getStaggerDelay = (index: number) => {
    if (limitedSections.length <= 2) {
      return index * 0.05;
    } else if (limitedSections.length <= 3) {
      return index * 0.03;
    } else {
      return index * 0.02;
    }
  };

  return (
    <motion.div 
      className={sectionsClass}
      variants={animations.section}
      initial="initial"
      animate="animate"
    >
      {limitedSections.map((section, index) => (
        <motion.div 
          key={index} 
          className="nex-footer-sections__section"
          variants={animations.stagger.item}
          initial="initial"
          animate="animate"
          transition={{ delay: getStaggerDelay(index) }}
        >
          <motion.h3 
            className="nex-footer-sections__title"
            whileHover={{ 
              opacity: 0.9
            }}
            transition={animations.hover}
          >
            {section.title}
          </motion.h3>
          <motion.ul 
            className="nex-footer-sections__links"
            variants={animations.stagger.container}
            initial="initial"
            animate="animate"
            transition={{ 
              delayChildren: getStaggerDelay(index), 
              staggerChildren: limitedSections.length > 3 ? 0.02 : 0.03 
            }}
          >
            {section.links.slice(0, 6).map((link, linkIndex) => (
              <motion.li 
                key={linkIndex}
                variants={animations.stagger.item}
              >
                <motion.a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nex-footer-sections__link"
                  whileHover={{ 
                    opacity: 0.8
                  }}
                  whileTap={{ 
                    opacity: 0.7
                  }}
                  transition={animations.hover}
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