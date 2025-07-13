import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Package, Github } from 'lucide-react';
import { useAnimationConfig } from '../../../utils/animationConfig';
import './FooterDeveloperTools.scss';

interface FooterDeveloperToolsProps {
  developerTools?: {
    copyCommands?: boolean;
    npmPackage?: string;
    githubUrl?: string;
  };
  variant?: 'default' | 'compact' | 'contact';
  theme?: 'auto' | 'light' | 'dark' | 'black-glass';
}

const FooterDeveloperTools: React.FC<FooterDeveloperToolsProps> = ({
  developerTools,
  variant = 'default',
  theme = 'auto'
}) => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const { timing, shouldReduceMotion } = useAnimationConfig();

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

  const toolsClass = `nex-footer-developer-tools ${variant === 'compact' ? 'nex-footer-developer-tools--compact' : ''} ${variant === 'contact' ? 'nex-footer-developer-tools--contact' : ''} ${theme === 'black-glass' ? 'nex-footer-developer-tools--black-glass' : ''}`;

  if (!developerTools) return null;

  return (
    <motion.div 
      className={toolsClass}
      variants={sectionVariants}
    >
      <motion.h3 
        className="nex-footer-developer-tools__title"
        whileHover={{ 
          color: theme === 'black-glass' ? '#ffffff' : undefined,
          opacity: 0.9
        }}
        transition={timing.fast}
      >
        Developer
      </motion.h3>
      
      {/* NPM Package */}
      {developerTools.npmPackage && (
        <motion.div 
          className="nex-footer-developer-tools__tool"
          whileHover={{ 
            opacity: 0.9,
            backgroundColor: theme === 'black-glass' ? 'rgba(255, 255, 255, 0.1)' : undefined
          }}
          transition={timing.fast}
        >
          <Package size={variant === 'compact' ? 14 : 16} />
          <code className="nex-footer-developer-tools__command">
            npm install {developerTools.npmPackage}
          </code>
          <motion.button
            onClick={() => handleCopy(`npm install ${developerTools.npmPackage}`, 'npm')}
            className="nex-footer-developer-tools__copy-button"
            aria-label="Copy npm install command"
            whileHover={{ 
              opacity: 0.8,
              backgroundColor: theme === 'black-glass' ? 'rgba(255, 255, 255, 0.15)' : undefined
            }}
            whileTap={{ opacity: 0.7 }}
            transition={timing.fast}
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
          </motion.button>
        </motion.div>
      )}

      {/* GitHub Link */}
      {developerTools.githubUrl && (
        <motion.a 
          href={developerTools.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nex-footer-developer-tools__github-link"
          whileHover={{ 
            color: theme === 'black-glass' ? '#ffffff' : undefined,
            opacity: 0.8
          }}
          whileTap={{ opacity: 0.7 }}
          transition={timing.fast}
        >
          <Github size={variant === 'compact' ? 14 : 16} />
          <span>View on GitHub</span>
        </motion.a>
      )}
    </motion.div>
  );
};

export default FooterDeveloperTools; 