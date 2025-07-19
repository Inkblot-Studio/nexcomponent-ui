import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexCard from './NexCard';
import { NexCardProps } from './NexCard.types';
import NexButton from '../NexButton';
import storyHeroSection from '../../assets/img/story_hero_section.jpg';

export default {
  title: 'NexComponent/NexCard',
  component: NexCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# NexCard - Lead Generation Card Component

A clean, simple card component designed for lead generation and conversion.
Features compelling visuals, smooth animations, and professional styling.

## 🚀 Key Features

- **Lead Generation Focus**: Designed to capture attention and drive conversions
- **Clean Design**: Simple, professional styling using design tokens
- **Black Glass Theme**: Full support for the iconic black glass theme
- **Interactive Cards**: Clickable cards with smooth hover effects
- **Hero Images**: Compelling visuals that capture attention
- **Call-to-Actions**: Built-in support for conversion buttons
- **Accessibility First**: Full keyboard navigation and screen reader support
- **Performance Optimized**: Hardware acceleration and reduced motion support

## 🎨 Design Variants

- **Primary**: Clean, professional styling
- **Secondary**: Alternative brand styling
- **Glass**: Transparent glassmorphic variant
- **Enterprise**: Premium variant with signature colors
        `
      }
    }
  }
} as Meta<NexCardProps>;

const Template: StoryFn<NexCardProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
    <NexCard {...args} />
  </div>
);

// Lead generation showcase
export const LeadGeneration: StoryFn<NexCardProps> = Template.bind({});
LeadGeneration.args = {
  title: 'Transform Your Business',
  content: 'Join thousands of companies using our platform to scale their operations and increase revenue by 300%.',
  type: 'enterprise',
  badge: 'Limited Time',
  elevated: true,
  interactive: true,
  onClick: () => alert('Lead captured!'),
  actions: (
    <>
      <NexButton text="Get Started" type="enterprise" />
      <NexButton text="Learn More" type="glass" inverted={true} />
    </>
  ),
};

// Hero image showcase
export const HeroImage: StoryFn<NexCardProps> = Template.bind({});
HeroImage.args = {
  title: 'Amazing Product',
  content: 'Discover the revolutionary features that will change how you work forever.',
  imageUrl: storyHeroSection,
  type: 'glass',
  badge: 'New',
  interactive: true,
  onClick: () => alert('Product viewed!'),
  actions: (
    <>
      <NexButton text="Try Demo" type="primary" />
      <NexButton text="Watch Video" type="glass" />
    </>
  ),
};

// Simple card
export const SimpleCard: StoryFn<NexCardProps> = Template.bind({});
SimpleCard.args = {
  title: 'Simple & Clean',
  content: 'Sometimes less is more. This card focuses on the essentials.',
  type: 'primary',
  actions: (
    <NexButton text="Learn More" type="primary" />
  ),
};

// Interactive showcase
export const InteractiveShowcase: StoryFn<NexCardProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
    <NexCard 
      {...args} 
      title="Click Me" 
      content="Interactive card with smooth hover effects"
      type="enterprise" 
      interactive={true}
      onClick={() => alert('Card clicked!')}
      actions={<NexButton text="Action" type="enterprise" />}
    />
    <NexCard 
      {...args} 
      title="Elevated" 
      content="Card with enhanced shadow effects"
      type="glass" 
      elevated={true}
      actions={<NexButton text="Action" type="glass" />}
    />
  </div>
);

// Type variants
export const PrimaryCard: StoryFn<NexCardProps> = Template.bind({});
PrimaryCard.args = {
  title: 'Primary Card',
  content: 'Clean, professional styling with primary brand colors.',
  type: 'primary',
  actions: (
    <NexButton text="Action" type="primary" />
  ),
};

export const SecondaryCard: StoryFn<NexCardProps> = Template.bind({});
SecondaryCard.args = {
  title: 'Secondary Card',
  content: 'Alternative styling with secondary brand colors.',
  type: 'secondary',
  actions: (
    <NexButton text="Action" type="secondary" />
  ),
};

export const GlassCard: StoryFn<NexCardProps> = Template.bind({});
GlassCard.args = {
  title: 'Glass Effect',
  content: 'Modern glassmorphic styling with backdrop blur effects.',
  type: 'glass',
  actions: (
    <NexButton text="Action" type="glass" />
  ),
};

export const EnterpriseCard: StoryFn<NexCardProps> = Template.bind({});
EnterpriseCard.args = {
  title: 'Enterprise Solution',
  content: 'Premium enterprise styling with signature colors.',
  type: 'enterprise',
  badge: 'Premium',
  elevated: true,
  actions: (
    <NexButton text="Launch" type="enterprise" />
  ),
};

// Content showcase
export const ContentShowcase: StoryFn<NexCardProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  }}>
    <NexCard 
      {...args} 
      title="Short Content" 
      content="Brief, impactful message."
      type="primary"
      actions={<NexButton text="Action" type="primary" />}
    />
    <NexCard 
      {...args} 
      title="Medium Content" 
      content="A bit more detail to engage the user and provide value while maintaining readability."
      type="glass"
      actions={<NexButton text="Action" type="glass" />}
    />
    <NexCard 
      {...args} 
      title="Longer Content" 
      content="More comprehensive content that provides detailed information about the product or service, helping users make informed decisions about their next steps."
      type="enterprise"
      badge="Featured"
      actions={<NexButton text="Action" type="enterprise" />}
    />
  </div>
);

// Badge showcase
export const BadgeShowcase: StoryFn<NexCardProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
    <NexCard 
      {...args} 
      title="New Feature" 
      content="Check out our latest addition."
      badge="New"
      type="primary"
      actions={<NexButton text="Explore" type="primary" />}
    />
    <NexCard 
      {...args} 
      title="Limited Time" 
      content="Don't miss this exclusive offer."
      badge="Limited"
      type="enterprise"
      elevated={true}
      actions={<NexButton text="Claim" type="enterprise" />}
    />
    <NexCard 
      {...args} 
      title="Popular Choice" 
      content="Join thousands of satisfied customers."
      badge="Popular"
      type="glass"
      actions={<NexButton text="Join" type="glass" />}
    />
  </div>
);