import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NexCarousel from './NexCarousel';
import { NexCarouselProps } from './NexCarousel.types';
import storyHeroSection from '../../assets/img/story_hero_section.jpg';
import storyBackground from '../../assets/img/story_background.jpg';

export default {
  title: 'NexComponent/NexCarousel',
  component: NexCarousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# NexCarousel - Enterprise Grade Carousel Component

A clean, simple carousel component designed for compelling visual presentations.
Features smooth animations, professional styling, and intuitive navigation.

## 🚀 Key Features

- **Lead Generation Focus**: Designed to capture attention and drive engagement
- **Clean Design**: Simple, professional styling using design tokens
- **Black Glass Theme**: Full support for the iconic black glass theme
- **Smooth Animations**: Professional slide transitions with Framer Motion
- **Auto-Play**: Automatic slide advancement with configurable intervals
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Touch Support**: Mobile-friendly touch interactions
- **Accessibility First**: Full ARIA support and screen reader compatibility

## 🎨 Design Features

- **Hero Images**: Compelling visuals that capture attention
- **Content Overlays**: Professional text overlays with backdrop blur
- **Navigation Controls**: Intuitive arrow buttons and indicators
- **Slide Counter**: Clear position indicator
- **Responsive Design**: Optimized for all screen sizes
        `
      }
    }
  }
} as Meta<NexCarouselProps>;

const Template: StoryFn<NexCarouselProps> = (args) => (
  <div style={{ 
    margin: '20px', 
    padding: '40px',
    background: 'var(--nex-background-color)',
    borderRadius: '16px'
  }}>
    <NexCarousel {...args} />
  </div>
);

// Sample slides data
const sampleSlides = [
  {
    imageUrl: storyHeroSection,
    title: 'Transform Your Business',
    content: 'Join thousands of companies using our platform to scale their operations and increase revenue by 300%.'
  },
  {
    imageUrl: storyBackground,
    title: 'Amazing Features',
    content: 'Discover the revolutionary features that will change how you work forever.'
  },
  {
    imageUrl: storyHeroSection,
    title: 'Enterprise Solution',
    content: 'Premium enterprise-grade solution with signature styling and professional design.'
  }
];

// Basic carousel
export const BasicCarousel: StoryFn<NexCarouselProps> = Template.bind({});
BasicCarousel.args = {
  slides: sampleSlides,
  showControls: true,
  showIndicators: true,
};

// Auto-play carousel
export const AutoPlayCarousel: StoryFn<NexCarouselProps> = Template.bind({});
AutoPlayCarousel.args = {
  slides: sampleSlides,
  autoPlay: true,
  autoPlayInterval: 3000,
  showControls: true,
  showIndicators: true,
};

// Controls only
export const ControlsOnly: StoryFn<NexCarouselProps> = Template.bind({});
ControlsOnly.args = {
  slides: sampleSlides,
  showControls: true,
  showIndicators: false,
};

// Indicators only
export const IndicatorsOnly: StoryFn<NexCarouselProps> = Template.bind({});
IndicatorsOnly.args = {
  slides: sampleSlides,
  showControls: false,
  showIndicators: true,
};

// Minimal carousel
export const MinimalCarousel: StoryFn<NexCarouselProps> = Template.bind({});
MinimalCarousel.args = {
  slides: sampleSlides,
  showControls: false,
  showIndicators: false,
};

// Single slide
export const SingleSlide: StoryFn<NexCarouselProps> = Template.bind({});
SingleSlide.args = {
  slides: [sampleSlides[0]],
  showControls: true,
  showIndicators: true,
};

// Long content slides
export const LongContentSlides: StoryFn<NexCarouselProps> = Template.bind({});
LongContentSlides.args = {
  slides: [
    {
      imageUrl: storyHeroSection,
      title: 'Comprehensive Business Solution',
      content: 'Our platform provides everything you need to transform your business operations. From advanced analytics to seamless integrations, we offer the tools and insights necessary to drive growth and increase efficiency across all aspects of your organization.'
    },
    {
      imageUrl: storyBackground,
      title: 'Advanced Technology Stack',
      content: 'Built with cutting-edge technology, our solution leverages the latest innovations in artificial intelligence, machine learning, and cloud computing to deliver unparalleled performance and reliability.'
    },
    {
      imageUrl: storyHeroSection,
      title: 'Global Enterprise Support',
      content: 'With 24/7 support and a dedicated team of experts, we ensure your success at every step. Our comprehensive support system includes training, documentation, and personalized assistance.'
    }
  ],
  showControls: true,
  showIndicators: true,
};

// Image-only slides
export const ImageOnlySlides: StoryFn<NexCarouselProps> = Template.bind({});
ImageOnlySlides.args = {
  slides: [
    {
      imageUrl: storyHeroSection
    },
    {
      imageUrl: storyBackground
    },
    {
      imageUrl: storyHeroSection
    }
  ],
  showControls: true,
  showIndicators: true,
};

// Text-only slides
export const TextOnlySlides: StoryFn<NexCarouselProps> = Template.bind({});
TextOnlySlides.args = {
  slides: [
    {
      title: 'Welcome to Our Platform',
      content: 'Experience the future of business management with our innovative solution.'
    },
    {
      title: 'Powerful Features',
      content: 'Discover tools that will revolutionize how you work and grow your business.'
    },
    {
      title: 'Get Started Today',
      content: 'Join thousands of satisfied customers who have transformed their operations.'
    }
  ],
  showControls: true,
  showIndicators: true,
};