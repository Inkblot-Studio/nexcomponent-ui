import React, { useState } from 'react';
import NexFooter from './index';
import type { NexFooterProps } from './NexFooter.types';

const NexFooterExample: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'auto' | 'black-glass'>('auto');

  // Example footer data
  const footerProps: NexFooterProps = {
    logoSrc: "/nex_logo.svg",
    displayName: "NexComponent",
    tagline: "Professional React UI Library",
    showLogoText: true,
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Features', url: '#features' },
          { label: 'Pricing', url: '#pricing' },
          { label: 'Documentation', url: '#docs' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', url: '#about' },
          { label: 'Careers', url: '#careers' },
          { label: 'Blog', url: '#blog' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', url: '#help' },
          { label: 'Contact Us', url: '#contact' },
          { label: 'Status', url: '#status' }
        ]
      }
    ],
    newsletter: {
      enabled: true,
      placeholder: "Enter your email for updates",
      onSubmit: (email: string) => {
        console.log('Newsletter signup:', email);
      }
    },
    contact: {
      enabled: true,
      title: "Get in Touch",
      description: "We'd love to hear from you",
      placeholder: "Your message...",
      buttonText: "Send Message",
      onSubmit: (data) => {
        console.log('Contact form submitted:', data);
      }
    },
    socials: [
      { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
      { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' },
      { type: 'github', url: 'https://github.com/nexcomponent' }
    ],
    variant: 'default',
    theme: currentTheme, // ✅ Theme prop is properly typed and working
    className: 'custom-footer-class'
  };

  const handleThemeChange = (theme: 'light' | 'auto' | 'black-glass') => {
    setCurrentTheme(theme);
    console.log('Footer theme changed to:', theme);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--nex-background-color)' }}>
      {/* Theme Controls */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px',
        backgroundColor: 'var(--nex-surface-color)',
        border: '1px solid var(--nex-border-color)',
        borderRadius: '8px',
        zIndex: 1000,
        boxShadow: 'var(--nex-shadow-sm)'
      }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: 'var(--nex-font-color)' }}>
          Footer Theme
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          {(['light', 'auto', 'black-glass'] as const).map((theme) => (
            <button
              key={theme}
              onClick={() => handleThemeChange(theme)}
              style={{
                padding: '8px 12px',
                backgroundColor: currentTheme === theme ? 'var(--nex-signature)' : 'var(--nex-surface-color)',
                color: currentTheme === theme ? 'white' : 'var(--nex-font-color)',
                border: '1px solid var(--nex-border-color)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {theme}
            </button>
          ))}
        </div>
        <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--nex-muted-font-color)' }}>
          Current: {currentTheme}
        </div>
      </div>

      {/* Demo Content */}
      <div style={{
        padding: '80px 40px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: 'var(--nex-font-color)',
          fontSize: 'var(--nex-font-size-3xl)',
          marginBottom: 'var(--nex-spacing-lg)'
        }}>
          NexFooter Theme Demo
        </h1>
        
        <p style={{
          color: 'var(--nex-muted-font-color)',
          fontSize: 'var(--nex-font-size-lg)',
          lineHeight: 'var(--nex-line-height-base)',
          marginBottom: 'var(--nex-spacing-xl)'
        }}>
          This example demonstrates the theme prop functionality in NexFooter. 
          The theme prop accepts: <code>'light'</code>, <code>'auto'</code>, or <code>'black-glass'</code>.
        </p>

        <div style={{
          padding: 'var(--nex-spacing-lg)',
          backgroundColor: 'var(--nex-surface-color)',
          border: '1px solid var(--nex-border-color)',
          borderRadius: 'var(--nex-radius-md)',
          boxShadow: 'var(--nex-shadow-sm)',
          marginBottom: 'var(--nex-spacing-xl)'
        }}>
          <h3 style={{
            color: 'var(--nex-font-color)',
            fontSize: 'var(--nex-font-size-xl)',
            marginBottom: 'var(--nex-spacing-md)'
          }}>
            Theme Prop Usage
          </h3>
          <pre style={{
            backgroundColor: 'var(--nex-background-color)',
            padding: 'var(--nex-spacing-md)',
            borderRadius: 'var(--nex-radius-sm)',
            overflow: 'auto',
            fontSize: '14px',
            color: 'var(--nex-font-color)'
          }}>
{`interface NexFooterProps {
  // ... other props
  theme?: 'light' | 'auto' | 'black-glass';
  // ... other props
}

// Usage:
<NexFooter
  displayName="MyApp"
  theme="${currentTheme}"  // ✅ Theme prop works!
  // ... other props
/>`}
          </pre>
        </div>
      </div>

      {/* Footer Component */}
      <NexFooter {...footerProps} />
    </div>
  );
};

export default NexFooterExample; 