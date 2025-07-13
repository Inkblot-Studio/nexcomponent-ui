import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NexFooter from './NexFooter';
import storyBackground from '../../assets/img/story_background.jpg';
import nexLogo from '../../assets/img/nex_logo.svg';

const meta: Meta<typeof NexFooter> = {
  title: 'NexComponent/NexFooter',
  component: NexFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A modern, scalable footer component with glassmorphic styling, contact forms, and developer tools integration.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'contact'],
      description: 'Footer variant - default, compact, or contact form focused'
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark', 'auto'],
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
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${storyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default footer with all features
export const Default: Story = {
  args: {
    displayName: 'NexComponent',
    tagline: 'Building the future of web development with modern, accessible components.',
    sections: [
      {
        title: 'Product',
        links: [
          { label: 'Components', url: '#' },
          { label: 'Documentation', url: '#' },
          { label: 'Examples', url: '#' },
          { label: 'Changelog', url: '#' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { label: 'Getting Started', url: '#' },
          { label: 'Tutorials', url: '#' },
          { label: 'API Reference', url: '#' },
          { label: 'Design System', url: '#' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About', url: '#' },
          { label: 'Blog', url: '#' },
          { label: 'Careers', url: '#' },
          { label: 'Press', url: '#' }
        ]
      }
    ],
    newsletter: {
      enabled: true,
      placeholder: 'Enter your email for updates',
      onSubmit: async (email: string) => {
        console.log('Newsletter subscription:', email);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    socials: [
      { type: 'github', url: 'https://github.com/nexcomponent' },
      { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
      { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' },
      { type: 'discord', url: 'https://discord.gg/nexcomponent' }
    ],
    developerTools: {
      copyCommands: true,
      npmPackage: '@nexcomponent/ui',
      githubUrl: 'https://github.com/nexcomponent/ui'
    }
  }
};

// Compact variant for space-constrained layouts
export const Compact: Story = {
  args: {
    ...Default.args,
    variant: 'compact',
    tagline: 'Modern, accessible components for web development.'
  }
};

// Contact-focused footer for lead generation
export const Contact: Story = {
  args: {
    displayName: 'NexComponent',
    tagline: 'Ready to build something amazing? Let\'s talk about your next project.',
    variant: 'contact',
    contact: {
      enabled: true,
      title: 'Get in Touch',
      description: 'Have questions about our components or need help with implementation? We\'d love to hear from you.',
      placeholder: 'Tell us about your project...',
      buttonText: 'Send Message',
      onSubmit: async (data: { email: string; message: string }) => {
        console.log('Contact form submission:', data);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    },
    socials: [
      { type: 'github', url: 'https://github.com/nexcomponent' },
      { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
      { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' }
    ]
  }
};

// Minimal footer with just branding and social links
export const Minimal: Story = {
  args: {
    displayName: 'NexComponent',
    tagline: 'Building the future of web development.',
    socials: [
      { type: 'github', url: 'https://github.com/nexcomponent' },
      { type: 'twitter', url: 'https://twitter.com/nexcomponent' }
    ]
  }
};

// Developer-focused footer
export const Developer: Story = {
  args: {
    displayName: 'NexComponent',
    tagline: 'Built by developers, for developers.',
    sections: [
      {
        title: 'Documentation',
        links: [
          { label: 'Getting Started', url: '#' },
          { label: 'Components', url: '#' },
          { label: 'API Reference', url: '#' },
          { label: 'Examples', url: '#' }
        ]
      },
      {
        title: 'Community',
        links: [
          { label: 'GitHub', url: '#' },
          { label: 'Discord', url: '#' },
          { label: 'Stack Overflow', url: '#' },
          { label: 'Blog', url: '#' }
        ]
      }
    ],
    developerTools: {
      copyCommands: true,
      npmPackage: '@nexcomponent/ui',
      githubUrl: 'https://github.com/nexcomponent/ui'
    },
    socials: [
      { type: 'github', url: 'https://github.com/nexcomponent' },
      { type: 'discord', url: 'https://discord.gg/nexcomponent' }
    ]
  }
};

// Enterprise footer with comprehensive sections
export const Enterprise: Story = {
  args: {
    displayName: 'NexComponent Enterprise',
    tagline: 'Enterprise-grade component library for large-scale applications.',
    logoSrc: nexLogo,
    sections: [
      {
        title: 'Platform',
        links: [
          { label: 'Components', url: '#' },
          { label: 'Design System', url: '#' },
          { label: 'Themes', url: '#' },
          { label: 'Integrations', url: '#' }
        ]
      },
      {
        title: 'Solutions',
        links: [
          { label: 'Enterprise', url: '#' },
          { label: 'Startups', url: '#' },
          { label: 'Agencies', url: '#' },
          { label: 'Developers', url: '#' }
        ]
      },
      {
        title: 'Support',
        links: [
          { label: 'Documentation', url: '#' },
          { label: 'Help Center', url: '#' },
          { label: 'Contact Sales', url: '#' },
          { label: 'Status', url: '#' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About', url: '#' },
          { label: 'Careers', url: '#' },
          { label: 'Blog', url: '#' },
          { label: 'Press', url: '#' }
        ]
      }
    ],
    newsletter: {
      enabled: true,
      placeholder: 'Subscribe to our newsletter',
      onSubmit: async (email: string) => {
        console.log('Enterprise newsletter subscription:', email);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    },
    socials: [
      { type: 'github', url: 'https://github.com/nexcomponent' },
      { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
      { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' },
      { type: 'youtube', url: 'https://youtube.com/nexcomponent' }
    ],
    developerTools: {
      copyCommands: true,
      npmPackage: '@nexcomponent/enterprise',
      githubUrl: 'https://github.com/nexcomponent/enterprise'
    }
  }
};

// Logo only footer (no text)
export const LogoOnly: Story = {
  args: {
    ...Default.args,
    logoSrc: nexLogo,
    showLogoText: false,
    tagline: undefined
  }
};

// Dark theme example
export const DarkTheme: Story = {
  args: {
    ...Default.args,
    theme: 'dark'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1a1a1a'
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <Story />
      </div>
    )
  ]
};

// With custom logo
export const WithLogo: Story = {
  args: {
    ...Default.args,
    logoSrc: nexLogo
  }
};