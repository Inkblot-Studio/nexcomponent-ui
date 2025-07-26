import React, { useState } from 'react';
import NexFooter from './NexFooter';
import type { NexFooterProps } from './NexFooter.types';

/**
 * Comprehensive example showcasing the agency attribution feature
 * of the NexFooter component with different configurations and use cases.
 */
const AgencyAttributionExample: React.FC = () => {
  const [currentExample, setCurrentExample] = useState<'basic' | 'clickable' | 'custom-text' | 'no-link' | 'same-tab'>('basic');

  // Sample footer data
  const baseFooterProps: Partial<NexFooterProps> = {
    displayName: 'MyApp',
    tagline: 'Building amazing experiences with premium components',
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
          { label: 'Contact', url: '#contact' },
          { label: 'Blog', url: '#blog' }
        ]
      }
    ],
    newsletter: {
      enabled: true,
      placeholder: 'Enter your email for updates',
      onSubmit: (email: string) => {
        console.log('Newsletter signup:', email);
        alert(`Thank you for subscribing with: ${email}`);
      }
    },
    socials: [
      { type: 'github', url: 'https://github.com/myapp' },
      { type: 'twitter', url: 'https://twitter.com/myapp' },
      { type: 'linkedin', url: 'https://linkedin.com/company/myapp' }
    ]
  };

  // Different agency attribution configurations
  const agencyAttributionExamples = {
    basic: {
      title: 'Basic Agency Attribution',
      description: 'Simple agency attribution with clickable link opening in new tab',
      props: {
        ...baseFooterProps,
        agencyAttribution: {
          websiteUrl: 'https://inkblotstudio.com',
          openInNewTab: true
        }
      }
    },
    clickable: {
      title: 'Clickable Agency Attribution',
      description: 'Agency attribution with custom styling and hover effects',
      props: {
        ...baseFooterProps,
        theme: 'black-glass' as const,
        agencyAttribution: {
          websiteUrl: 'https://inkblotstudio.com',
          openInNewTab: true
        }
      }
    },
    'custom-text': {
      title: 'Custom Agency Attribution Text',
      description: 'Agency attribution with custom translated text',
      props: {
        ...baseFooterProps,
        translations: {
          madeByInkblotStudio: 'Crafted with passion by Inkblot Studio'
        },
        agencyAttribution: {
          websiteUrl: 'https://inkblotstudio.com',
          openInNewTab: true
        }
      }
    },
    'no-link': {
      title: 'Plain Text Agency Attribution',
      description: 'Agency attribution displayed as plain text without link',
      props: {
        ...baseFooterProps,
        agencyAttribution: {
          // No websiteUrl provided - shows as plain text
        }
      }
    },
    'same-tab': {
      title: 'Same Tab Agency Attribution',
      description: 'Agency attribution that opens in the same tab',
      props: {
        ...baseFooterProps,
        agencyAttribution: {
          websiteUrl: 'https://inkblotstudio.com',
          openInNewTab: false
        }
      }
    }
  };

  const currentExampleData = agencyAttributionExamples[currentExample];

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Example Selector */}
      <div style={{
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e9ecef'
      }}>
        <h1 style={{ margin: '0 0 1rem 0', color: '#212529' }}>
          NexFooter Agency Attribution Examples
        </h1>
        <p style={{ margin: '0 0 1.5rem 0', color: '#6c757d' }}>
          Explore different configurations of the agency attribution feature
        </p>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {Object.entries(agencyAttributionExamples).map(([key, example]) => (
            <button
              key={key}
              onClick={() => setCurrentExample(key as keyof typeof agencyAttributionExamples)}
              style={{
                padding: '0.5rem 1rem',
                border: currentExample === key ? '2px solid #007bff' : '1px solid #dee2e6',
                borderRadius: '0.375rem',
                backgroundColor: currentExample === key ? '#007bff' : '#fff',
                color: currentExample === key ? '#fff' : '#212529',
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>

      {/* Current Example Info */}
      <div style={{
        padding: '1.5rem 2rem',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e9ecef'
      }}>
        <h2 style={{ margin: '0 0 0.5rem 0', color: '#212529' }}>
          {currentExampleData.title}
        </h2>
        <p style={{ margin: '0 0 1rem 0', color: '#6c757d' }}>
          {currentExampleData.description}
        </p>
        
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '0.375rem',
          fontSize: '0.875rem',
          fontFamily: 'monospace'
        }}>
          <strong>Configuration:</strong>
          <pre style={{ margin: '0.5rem 0 0 0', whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(currentExampleData.props.agencyAttribution, null, 2)}
          </pre>
        </div>
      </div>

      {/* Footer Example */}
      <div style={{ flex: 1 }}>
        <NexFooter {...currentExampleData.props} />
      </div>

      {/* Usage Instructions */}
      <div style={{
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e9ecef'
      }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#212529' }}>
          How to Use Agency Attribution
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Basic Usage</h4>
            <pre style={{
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '0.375rem',
              fontSize: '0.75rem',
              overflow: 'auto',
              border: '1px solid #dee2e6'
            }}>
{`<NexFooter
  displayName="MyApp"
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
/>`}
            </pre>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>With Custom Text</h4>
            <pre style={{
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '0.375rem',
              fontSize: '0.75rem',
              overflow: 'auto',
              border: '1px solid #dee2e6'
            }}>
{`<NexFooter
  displayName="MyApp"
  translations={{
    madeByInkblotStudio: 'Built by Your Agency'
  }}
  agencyAttribution={{
    websiteUrl: 'https://youragency.com',
    openInNewTab: true
  }}
/>`}
            </pre>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Plain Text Only</h4>
            <pre style={{
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '0.375rem',
              fontSize: '0.75rem',
              overflow: 'auto',
              border: '1px solid #dee2e6'
            }}>
{`<NexFooter
  displayName="MyApp"
  agencyAttribution={{
    // No websiteUrl - displays as plain text
  }}
/>`}
            </pre>
          </div>
        </div>
        
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#e7f3ff', borderRadius: '0.375rem', border: '1px solid #b3d9ff' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#004085' }}>💡 Pro Tips</h4>
          <ul style={{ margin: '0', color: '#004085', fontSize: '0.875rem' }}>
            <li>Use <code>openInNewTab: true</code> for external agency websites</li>
            <li>Use <code>openInNewTab: false</code> for internal agency pages</li>
            <li>Customize the text using the <code>translations</code> prop</li>
            <li>The attribution automatically adapts to light and dark themes</li>
            <li>Includes smooth animations and hover effects when clickable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgencyAttributionExample; 