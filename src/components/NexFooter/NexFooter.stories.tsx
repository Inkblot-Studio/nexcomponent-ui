import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexFooter from './NexFooter';
import storyBackground from '../../assets/img/story_background.jpg';
import nexLogo from '../../assets/img/nex_logo.svg';
import { NexFooterProps } from './NexFooter.types';

export default {
  title: 'NexComponent/NexFooter',
  component: NexFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A premium footer component with glassmorphic design, featuring branding, navigation sections, and contact forms. Supports multiple variants and themes with smooth animations and responsive design. Enterprise-grade layout management with intelligent grid distribution.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'contact'],
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
  }
} as Meta<typeof NexFooter>;

const Template: StoryFn<typeof NexFooter> = (args) => (
  <div
    style={{
      height: '200vh',
      backgroundImage: `url(${storyBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <NexFooter {...args} />
  </div>
);

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
  }
];

const sampleSocialLinks = [
  { type: 'github', url: 'https://github.com' },
  { type: 'twitter', url: 'https://twitter.com' },
  { type: 'linkedin', url: 'https://linkedin.com' },
  { type: 'discord', url: 'https://discord.gg' }
];

export const Default = Template.bind({});
Default.args = {
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
  socials: sampleSocialLinks
};

export const BlackGlass = Template.bind({});
BlackGlass.args = {
  ...Default.args,
  theme: 'black-glass'
};

export const Contact = Template.bind({});
Contact.args = {
  ...Default.args,
  variant: 'contact',
  contact: {
    enabled: true,
    title: 'Get in Touch',
    description: 'Have questions about our components or need help with implementation? We\'d love to hear from you.',
    placeholder: 'Tell us about your project or inquiry...',
    buttonText: 'Send Message',
    onSubmit: (data: { email: string; message: string }) => console.log('Contact form submitted:', data)
  }
};

export const Enterprise = Template.bind({});
Enterprise.args = {
  ...Default.args,
  displayName: 'NexComponent Enterprise',
  tagline: 'Enterprise-grade web components for modern applications.',
  sections: enterpriseNavItems,
  socials: [
    { type: 'github', url: 'https://github.com' },
    { type: 'twitter', url: 'https://twitter.com' },
    { type: 'linkedin', url: 'https://linkedin.com' },
    { type: 'discord', url: 'https://discord.gg' },
    { type: 'youtube', url: 'https://youtube.com' }
  ]
};

export const Minimal = Template.bind({});
Minimal.args = {
  ...Default.args,
  logoSrc: undefined,
  tagline: undefined,
  newsletter: undefined,
  socials: undefined
};

export const SectionsOnly = Template.bind({});
SectionsOnly.args = {
  ...Default.args,
  logoSrc: undefined,
  displayName: '',
  tagline: undefined,
  newsletter: undefined,
  socials: undefined
};