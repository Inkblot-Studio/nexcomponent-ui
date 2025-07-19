import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Play, Download, Settings, Star, ArrowRight, Check } from 'lucide-react';
import NexButton from './NexButton';
import { NexButtonProps } from './NexButton.types';

export default {
  title: 'NexComponent/NexButton',
  component: NexButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# NexButton - Enterprise Grade Button Component

A high-performance, animated button component with clean, professional styling.
Features optimized animations, accessibility compliance, and cross-browser compatibility.

## 🚀 Key Features

- **Enterprise-Grade Animations**: Smooth, performant animations using Framer Motion
- **Clean Design**: Professional styling using established design tokens
- **Black Glass Theme**: Full support for the iconic black glass theme
- **Loading States**: Built-in loading spinner with smooth animations
- **Icon Support**: Flexible icon positioning with smooth transitions
- **Accessibility First**: Full keyboard navigation and screen reader support
- **Performance Optimized**: Hardware acceleration and reduced motion support

## 🎨 Design Variants

- **Primary/Secondary/Tertiary/Quaternary**: Brand color variants
- **Success/Info/Warning/Danger**: Semantic color variants
- **Glass**: Transparent glassmorphic variant
- **Enterprise**: Premium variant with signature colors
- **Inverted**: Outline variants for all types
        `
      }
    }
  }
} as Meta<NexButtonProps>;

const Template: StoryFn<NexButtonProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
    <NexButton {...args} />
  </div>
);

// Enterprise showcase
export const EnterpriseShowcase: StoryFn<NexButtonProps> = Template.bind({});
EnterpriseShowcase.args = {
  text: 'Launch Enterprise',
  type: 'enterprise',
  size: 'large',
  icon: <Play size={20} />,
  iconPosition: 'left',
};

// Glass variants
export const GlassButton: StoryFn<NexButtonProps> = Template.bind({});
GlassButton.args = {
  text: 'Glass Effect',
  type: 'glass',
  icon: <Star size={16} />,
  iconPosition: 'left',
};

export const GlassWithIcon: StoryFn<NexButtonProps> = Template.bind({});
GlassWithIcon.args = {
  text: 'Download',
  type: 'glass',
  icon: <Download size={16} />,
  iconPosition: 'right',
};

// Loading states
export const LoadingButton: StoryFn<NexButtonProps> = Template.bind({});
LoadingButton.args = {
  text: 'Processing...',
  type: 'primary',
  loading: true,
};

export const LoadingGlass: StoryFn<NexButtonProps> = Template.bind({});
LoadingGlass.args = {
  text: 'Loading...',
  type: 'glass',
  loading: true,
};

// Disabled states
export const DisabledButton: StoryFn<NexButtonProps> = Template.bind({});
DisabledButton.args = {
  text: 'Disabled',
  type: 'primary',
  disabled: true,
};

export const DisabledGlass: StoryFn<NexButtonProps> = Template.bind({});
DisabledGlass.args = {
  text: 'Disabled Glass',
  type: 'glass',
  disabled: true,
};

// Icon variations
export const IconLeft: StoryFn<NexButtonProps> = Template.bind({});
IconLeft.args = {
  text: 'Settings',
  type: 'secondary',
  icon: <Settings size={16} />,
  iconPosition: 'left',
};

export const IconRight: StoryFn<NexButtonProps> = Template.bind({});
IconRight.args = {
  text: 'Continue',
  type: 'success',
  icon: <ArrowRight size={16} />,
  iconPosition: 'right',
};

export const IconOnly: StoryFn<NexButtonProps> = Template.bind({});
IconOnly.args = {
  type: 'glass',
  icon: <Check size={20} />,
  iconPosition: 'left',
};

// Size variants
export const SmallGlass: StoryFn<NexButtonProps> = Template.bind({});
SmallGlass.args = {
  text: 'Small Glass',
  type: 'glass',
  size: 'small',
  icon: <Star size={14} />,
};

export const LargeEnterprise: StoryFn<NexButtonProps> = Template.bind({});
LargeEnterprise.args = {
  text: 'Large Enterprise',
  type: 'enterprise',
  size: 'large',
  icon: <Play size={24} />,
  iconPosition: 'left',
};

// Regular colored buttons
export const Primary: StoryFn<NexButtonProps> = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  type: 'primary',
};

export const Secondary: StoryFn<NexButtonProps> = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  type: 'secondary',
};

export const Tertiary: StoryFn<NexButtonProps> = Template.bind({});
Tertiary.args = {
  text: 'Tertiary Button',
  type: 'tertiary',
};

export const Quaternary: StoryFn<NexButtonProps> = Template.bind({});
Quaternary.args = {
  text: 'Quaternary Button',
  type: 'quaternary',
};

export const Success: StoryFn<NexButtonProps> = Template.bind({});
Success.args = {
  text: 'Success Button',
  type: 'success',
};

export const Info: StoryFn<NexButtonProps> = Template.bind({});
Info.args = {
  text: 'Info Button',
  type: 'info',
};

export const Warning: StoryFn<NexButtonProps> = Template.bind({});
Warning.args = {
  text: 'Warning Button',
  type: 'warning',
};

export const Danger: StoryFn<NexButtonProps> = Template.bind({});
Danger.args = {
  text: 'Danger Button',
  type: 'danger',
};

// Inverted buttons
export const InvertedPrimary: StoryFn<NexButtonProps> = Template.bind({});
InvertedPrimary.args = {
  text: 'Inverted Primary',
  type: 'primary',
  inverted: true,
};

export const InvertedGlass: StoryFn<NexButtonProps> = Template.bind({});
InvertedGlass.args = {
  text: 'Inverted Glass',
  type: 'glass',
  inverted: true,
};

export const InvertedEnterprise: StoryFn<NexButtonProps> = Template.bind({});
InvertedEnterprise.args = {
  text: 'Inverted Enterprise',
  type: 'enterprise',
  inverted: true,
};

// Size showcase
export const SizeShowcase: StoryFn<NexButtonProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
    <NexButton {...args} size="small" text="Small" type="glass" />
    <NexButton {...args} size="normal" text="Normal" type="glass" />
    <NexButton {...args} size="large" text="Large" type="glass" />
  </div>
);

// Interactive showcase
export const InteractiveShowcase: StoryFn<NexButtonProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
    <NexButton 
      {...args} 
      text="Click Me" 
      type="enterprise" 
      icon={<Play size={16} />}
      onClick={() => alert('Button clicked!')}
    />
    <NexButton 
      {...args} 
      text="Loading..." 
      type="glass" 
      loading={true}
    />
    <NexButton 
      {...args} 
      text="Disabled" 
      type="primary" 
      disabled={true}
    />
  </div>
);