import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import storyBackground from '../../assets/img/story_background.jpg';
import storyLogo from '../../assets/img/nex_logo.svg';
import NexFooter from './NexFooter';
import { NexFooterProps } from './NexFooter.types';

export default {
  title: 'NexComponent/NexFooter',
  component: NexFooter,
  tags: ['autodocs'],
} as Meta<NexFooterProps>;

const Template: StoryFn<NexFooterProps> = (args) => (
  <div
    style={{
      height: '200vh',
      backgroundImage: `url(${storyBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <div style={{ position: 'relative', top: '165vh' }}>
      <NexFooter {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  displayName: 'NexComponent',
  tagline: 'Professional React components for modern applications',
  socials: [
    { type: 'github', url: 'https://github.com/nexcomponent' },
    { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
    { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' }
  ]
};

export const Enterprise = Template.bind({});
Enterprise.args = {
  logoSrc: storyLogo,
  displayName: 'NexComponent',
  tagline: 'Enterprise-grade React component library for scalable applications',
  sections: [
    {
      title: 'Documentation',
      links: [
        { label: 'Getting Started', url: 'https://docs.nexcomponent.com/getting-started' },
        { label: 'Components', url: 'https://docs.nexcomponent.com/components' },
        { label: 'API Reference', url: 'https://docs.nexcomponent.com/api' },
        { label: 'Examples', url: 'https://docs.nexcomponent.com/examples' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Design System', url: 'https://design.nexcomponent.com' },
        { label: 'Changelog', url: 'https://github.com/nexcomponent/changelog' },
        { label: 'Migration Guide', url: 'https://docs.nexcomponent.com/migration' },
        { label: 'Performance', url: 'https://docs.nexcomponent.com/performance' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', url: 'https://help.nexcomponent.com' },
        { label: 'Community', url: 'https://community.nexcomponent.com' },
        { label: 'Bug Report', url: 'https://github.com/nexcomponent/issues' },
        { label: 'Feature Request', url: 'https://github.com/nexcomponent/discussions' }
      ]
    }
  ],
  newsletter: {
    enabled: true,
    placeholder: 'Stay updated with latest releases',
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
    { type: 'youtube', url: 'https://youtube.com/nexcomponent' },
    { type: 'discord', url: 'https://discord.gg/nexcomponent' }
  ],
  developerTools: {
    copyCommands: true,
    npmPackage: '@nexcomponent/ui',
    githubUrl: 'https://github.com/nexcomponent/ui'
  }
};

export const Minimal = Template.bind({});
Minimal.args = {
  displayName: 'NexComponent',
  socials: [
    { type: 'github', url: 'https://github.com/nexcomponent' },
    { type: 'twitter', url: 'https://twitter.com/nexcomponent' }
  ]
};

export const CustomSections = Template.bind({});
CustomSections.args = {
  displayName: 'NexComponent',
  tagline: 'Building the future of web development',
  sections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Integrations', url: '#' },
        { label: 'Roadmap', url: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Press', url: '#' },
        { label: 'Contact', url: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', url: '#' },
        { label: 'Terms', url: '#' },
        { label: 'Security', url: '#' },
        { label: 'Compliance', url: '#' }
      ]
    }
  ],
  newsletter: {
    enabled: true,
    placeholder: 'Get product updates',
    onSubmit: async (email: string) => {
      console.log('Newsletter subscription:', email);
    }
  },
  socials: [
    { type: 'github', url: 'https://github.com/nexcomponent' },
    { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
    { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' }
  ]
};

export const DeveloperFocused = Template.bind({});
DeveloperFocused.args = {
  displayName: 'NexComponent',
  tagline: 'Professional React components for developers',
  sections: [
    {
      title: 'Documentation',
      links: [
        { label: 'Quick Start', url: '#' },
        { label: 'Components', url: '#' },
        { label: 'API Docs', url: '#' },
        { label: 'Examples', url: '#' }
      ]
    },
    {
      title: 'Development',
      links: [
        { label: 'Contributing', url: '#' },
        { label: 'Code of Conduct', url: '#' },
        { label: 'Issues', url: '#' },
        { label: 'Discussions', url: '#' }
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
};

export const WithNewsletter = Template.bind({});
WithNewsletter.args = {
  displayName: 'NexComponent',
  tagline: 'Stay updated with our latest releases and features',
  newsletter: {
    enabled: true,
    placeholder: 'Enter your email for updates',
    onSubmit: async (email: string) => {
      console.log('Newsletter subscription:', email);
      alert(`Thank you! ${email} has been subscribed to our newsletter.`);
    }
  },
  socials: [
    { type: 'github', url: 'https://github.com/nexcomponent' },
    { type: 'twitter', url: 'https://twitter.com/nexcomponent' },
    { type: 'linkedin', url: 'https://linkedin.com/company/nexcomponent' }
  ]
};

export const WithDeveloperTools = Template.bind({});
WithDeveloperTools.args = {
  displayName: 'NexComponent',
  tagline: 'Professional React components for developers',
  developerTools: {
    copyCommands: true,
    npmPackage: '@nexcomponent/ui',
    githubUrl: 'https://github.com/nexcomponent/ui'
  },
  socials: [
    { type: 'github', url: 'https://github.com/nexcomponent' },
    { type: 'discord', url: 'https://discord.gg/nexcomponent' }
  ]
};