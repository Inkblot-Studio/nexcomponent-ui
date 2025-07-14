import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NexFooter from './NexFooter';
import storyBackground from '../../assets/img/story_background.jpg';
import nexLogo from '../../assets/img/nex_logo.svg';
import { NexFooterProps } from './NexFooter.types';

const meta: Meta<typeof NexFooter> = {
  title: 'Components/NexFooter',
  component: NexFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A premium footer component with glassmorphic design, featuring branding, navigation sections, developer tools, and contact forms. Supports multiple variants and themes with smooth animations and responsive design. Now includes enterprise-grade layout management that handles any number of components with intelligent grid distribution.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'contact'],
      description: 'Footer layout variant'
    },
    theme: {
      control: { type: 'select' },
      options: ['auto', 'light', 'black-glass'],
      description: 'Theme variant for the footer'
    },
    displayName: {
      control: { type: 'text' },
      description: 'Company/brand display name'
    },
    tagline: {
      control: { type: 'text' },
      description: 'Company tagline or description'
    },
    logoSrc: {
      control: { type: 'text' },
      description: 'URL to company logo image'
    },
    showLogoText: {
      control: { type: 'boolean' },
      description: 'Whether to show the logo text (displayName)'
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.args.theme;
      return (
        <div 
          style={{ 
            minHeight: '100vh',
            background: theme === 'black-glass' 
              ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
            padding: '20px'
          }}
          data-theme={theme === 'auto' ? undefined : theme}
        >
          <Story />
        </div>
      );
    }
  ]
};

export default meta;
type Story = StoryObj<typeof NexFooter>;

// Sample data for stories
const sampleNavItems = [
  {
    title: 'Product',
    links: [
      { label: 'Features', url: '#features' },
      { label: 'Pricing', url: '#pricing' },
      { label: 'Documentation', url: '#docs' },
      { label: 'API Reference', url: '#api' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', url: '#about' },
      { label: 'Careers', url: '#careers' },
      { label: 'Blog', url: '#blog' },
      { label: 'Press', url: '#press' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', url: '#help' },
      { label: 'Contact Us', url: '#contact' },
      { label: 'Status', url: '#status' },
      { label: 'Community', url: '#community' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', url: '#privacy' },
      { label: 'Terms of Service', url: '#terms' },
      { label: 'Cookie Policy', url: '#cookies' },
      { label: 'GDPR', url: '#gdpr' }
    ]
  }
];

// Enterprise-grade navigation with many sections
const enterpriseNavItems = [
  {
    title: 'Product',
    links: [
      { label: 'Features', url: '#features' },
      { label: 'Pricing', url: '#pricing' },
      { label: 'Documentation', url: '#docs' },
      { label: 'API Reference', url: '#api' },
      { label: 'Integrations', url: '#integrations' },
      { label: 'Changelog', url: '#changelog' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Enterprise', url: '#enterprise' },
      { label: 'Startups', url: '#startups' },
      { label: 'Agencies', url: '#agencies' },
      { label: 'Developers', url: '#developers' },
      { label: 'Designers', url: '#designers' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', url: '#about' },
      { label: 'Careers', url: '#careers' },
      { label: 'Blog', url: '#blog' },
      { label: 'Press', url: '#press' },
      { label: 'Partners', url: '#partners' },
      { label: 'Investors', url: '#investors' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', url: '#help' },
      { label: 'Contact Us', url: '#contact' },
      { label: 'Status', url: '#status' },
      { label: 'Community', url: '#community' },
      { label: 'Training', url: '#training' },
      { label: 'Certification', url: '#certification' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Tutorials', url: '#tutorials' },
      { label: 'Webinars', url: '#webinars' },
      { label: 'Case Studies', url: '#case-studies' },
      { label: 'White Papers', url: '#white-papers' },
      { label: 'Events', url: '#events' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', url: '#privacy' },
      { label: 'Terms of Service', url: '#terms' },
      { label: 'Cookie Policy', url: '#cookies' },
      { label: 'GDPR', url: '#gdpr' },
      { label: 'CCPA', url: '#ccpa' },
      { label: 'Security', url: '#security' }
    ]
  },
  {
    title: 'Social',
    links: [
      { label: 'Twitter', url: '#twitter' },
      { label: 'LinkedIn', url: '#linkedin' },
      { label: 'GitHub', url: '#github' },
      { label: 'Discord', url: '#discord' },
      { label: 'YouTube', url: '#youtube' }
    ]
  },
  {
    title: 'Developers',
    links: [
      { label: 'SDK', url: '#sdk' },
      { label: 'CLI', url: '#cli' },
      { label: 'Plugins', url: '#plugins' },
      { label: 'Examples', url: '#examples' },
      { label: 'Contributing', url: '#contributing' }
    ]
  }
];

const sampleSocialLinks = [
  { type: 'github', url: 'https://github.com' },
  { type: 'twitter', url: 'https://twitter.com' },
  { type: 'linkedin', url: 'https://linkedin.com' },
  { type: 'discord', url: 'https://discord.gg' }
];

export const Default: Story = {
  args: {
    variant: 'default',
    theme: 'light',
    logoSrc: nexLogo,
    displayName: 'NexComponent',
    tagline: 'Building the future of web components with premium design and performance.',
    showLogoText: true,
    sections: sampleNavItems,
    newsletter: {
      enabled: true,
      placeholder: 'Enter your email',
      onSubmit: (email: string) => console.log('Newsletter signup:', email)
    },
    socials: sampleSocialLinks,
    developerTools: {
      copyCommands: true,
      npmPackage: '@nexcomponent/ui',
      githubUrl: 'https://github.com/nexcomponent/ui'
    }
  }
};

export const BlackGlass: Story = {
  args: {
    ...Default.args,
    theme: 'black-glass'
  }
};

export const Compact: Story = {
  args: {
    ...Default.args,
    variant: 'compact'
  }
};

export const Contact: Story = {
  args: {
    ...Default.args,
    variant: 'contact',
    contact: {
      enabled: true,
      title: 'Get in Touch',
      description: 'Have questions about our components or need help with implementation? We\'d love to hear from you.',
      placeholder: 'Tell us about your project...',
      buttonText: 'Send Message',
      onSubmit: (data: { email: string; message: string }) => console.log('Contact form submitted:', data)
    }
  }
};

export const SideContact: Story = {
  args: {
    ...Default.args,
    variant: 'default',
    contact: {
      enabled: true,
      title: 'Quick Contact',
      description: 'Need help? Send us a message and we\'ll get back to you.',
      placeholder: 'Tell us about your project...',
      buttonText: 'Send Message',
      onSubmit: (data: { email: string; message: string }) => console.log('Contact form submitted:', data)
    }
  }
};

export const SideContactBlackGlass: Story = {
  args: {
    ...SideContact.args,
    theme: 'black-glass'
  }
};

export const Enterprise: Story = {
  args: {
    ...Default.args,
    variant: 'default',
    displayName: 'EnterpriseCorp',
    tagline: 'Enterprise-grade solutions for modern businesses with scalable architecture and robust performance.',
    sections: enterpriseNavItems,
    contact: {
      enabled: true,
      title: 'Enterprise Support',
      description: 'Get dedicated support for your enterprise deployment.',
      placeholder: 'Describe your enterprise needs...',
      buttonText: 'Contact Sales',
      onSubmit: (data: { email: string; message: string }) => console.log('Enterprise contact:', data)
    }
  }
};

export const EnterpriseBlackGlass: Story = {
  args: {
    ...Enterprise.args,
    theme: 'black-glass'
  }
};

export const ManySections: Story = {
  args: {
    ...Default.args,
    variant: 'default',
    displayName: 'MultiSection',
    tagline: 'Testing the limits of our enterprise layout system with many navigation sections.',
    sections: enterpriseNavItems,
    newsletter: undefined,
    developerTools: undefined
  }
};

export const ManySectionsWithContact: Story = {
  args: {
    ...ManySections.args,
    contact: {
      enabled: true,
      title: 'Quick Contact',
      description: 'Need help with our extensive navigation?',
      placeholder: 'Tell us what you need...',
      buttonText: 'Send Message',
      onSubmit: (data: { email: string; message: string }) => console.log('Contact form submitted:', data)
    }
  }
};

export const Minimal: Story = {
  args: {
    ...Default.args,
    sections: undefined,
    newsletter: undefined,
    developerTools: undefined
  }
};

export const LogoOnly: Story = {
  args: {
    ...Default.args,
    showLogoText: false,
    tagline: undefined,
    sections: undefined,
    newsletter: undefined,
    developerTools: undefined
  }
};

export const SectionsOnly: Story = {
  args: {
    ...Default.args,
    logoSrc: undefined,
    displayName: '',
    tagline: undefined,
    newsletter: undefined,
    developerTools: undefined,
    variant: 'default'
  }
};

export const CompactEnterprise: Story = {
  args: {
    ...Enterprise.args,
    variant: 'compact'
  }
};