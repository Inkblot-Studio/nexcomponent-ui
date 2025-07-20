import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { motion } from 'framer-motion';
import NexCard from './NexCard';
import NexButton from '../NexButton';

const meta: Meta<typeof NexCard> = {
  title: 'Components/NexCard',
  component: NexCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'glass', 'premium', 'minimal'],
      description: 'Visual variant of the card',
    },
    elevation: {
      control: { type: 'select' },
      options: ['flat', 'raised', 'hoverable', 'interactive'],
      description: 'Elevation level and interaction behavior',
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal', 'auto'],
      description: 'Layout direction of the card',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the card',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Whether the card is interactive',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading skeleton state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base story with all controls
export const Default: Story = {
  args: {
    title: 'Premium Card',
    subtitle: 'Enterprise Grade',
    description: 'This is a sophisticated card component with premium styling and smooth animations.',
    variant: 'default',
    elevation: 'raised',
    size: 'md',
    interactive: false,
  },
};

// Interactive card with click handler
export const Interactive: Story = {
  args: {
    title: 'Clickable Card',
    subtitle: 'Interactive Example',
    description: 'This card responds to clicks and hover interactions with smooth animations.',
    elevation: 'interactive',
    interactive: true,
    onClick: () => alert('Card clicked!'),
  },
};

// Glass variant
export const Glass: Story = {
  args: {
    title: 'Glass Effect',
    subtitle: 'Modern Design',
    description: 'A beautiful glassmorphic card with backdrop blur effects.',
    variant: 'glass',
    elevation: 'hoverable',
    size: 'lg',
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
    },
  },
};

// Premium variant
export const Premium: Story = {
  args: {
    title: 'Premium Feature',
    subtitle: 'Exclusive Access',
    description: 'Premium styling with signature accent colors and enhanced shadows.',
    variant: 'premium',
    elevation: 'interactive',
    size: 'lg',
    interactive: true,
  },
};

// Minimal variant
export const Minimal: Story = {
  args: {
    title: 'Minimal Design',
    subtitle: 'Clean & Simple',
    description: 'A minimal card with subtle styling and clean typography.',
    variant: 'minimal',
    elevation: 'flat',
    size: 'md',
  },
};

// Card with image
export const WithImage: Story = {
  args: {
    title: 'Featured Content',
    subtitle: 'With Hero Image',
    description: 'This card includes a beautiful hero image with proper aspect ratio handling.',
    image: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Mountain landscape',
      aspectRatio: 'video',
    },
    elevation: 'hoverable',
    size: 'lg',
  },
};

// Horizontal layout
export const Horizontal: Story = {
  args: {
    title: 'Horizontal Layout',
    subtitle: 'Side-by-side content',
    description: 'Content and media are arranged horizontally for better space utilization.',
    image: {
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=200&h=200&fit=crop',
      alt: 'Abstract design',
      aspectRatio: 'square',
    },
    layout: 'horizontal',
    elevation: 'raised',
    size: 'lg',
  },
};

// Auto layout (responsive)
export const AutoLayout: Story = {
  args: {
    title: 'Responsive Layout',
    subtitle: 'Auto-adapting',
    description: 'This card automatically switches between vertical and horizontal layouts based on screen size.',
    image: {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
      alt: 'Business meeting',
      aspectRatio: 'wide',
    },
    layout: 'auto',
    elevation: 'hoverable',
    size: 'lg',
  },
};

// Loading state
export const Loading: Story = {
  args: {
    title: 'Loading Card',
    subtitle: 'Skeleton State',
    description: 'This card shows a skeleton loading state while content is being fetched.',
    loading: true,
    elevation: 'raised',
    size: 'md',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    subtitle: 'Not Available',
    description: 'This card is disabled and shows a visual indication of its state.',
    disabled: true,
    elevation: 'raised',
    size: 'md',
  },
};

// Card with custom header
export const CustomHeader: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '50%', 
          background: 'var(--nex-signature)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          N
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Custom Header</h3>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'var(--nex-muted-font-color)' }}>
            With custom content
          </p>
        </div>
      </div>
    ),
    description: 'This card uses a custom header slot for more complex layouts.',
    elevation: 'raised',
    size: 'md',
  },
};

// Card with actions
export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    subtitle: 'Interactive Elements',
    description: 'This card includes action buttons in the footer area.',
         actions: (
       <div style={{ display: 'flex', gap: '8px' }}>
         <NexButton size="small" type="glass" text="Cancel" />
         <NexButton size="small" text="Confirm" />
       </div>
     ),
    elevation: 'raised',
    size: 'md',
  },
};

// Card with icon
export const WithIcon: Story = {
  args: {
    title: 'Card with Icon',
    subtitle: 'Visual Enhancement',
    description: 'This card includes an icon in the header for better visual hierarchy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    elevation: 'hoverable',
    size: 'md',
  },
};

// Link card
export const LinkCard: Story = {
  args: {
    title: 'Link Card',
    subtitle: 'Navigation Example',
    description: 'This card behaves like a link and can be used for navigation.',
    href: 'https://example.com',
    elevation: 'interactive',
    size: 'md',
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <NexCard
        title="Small Card"
        description="Compact size for tight spaces"
        size="sm"
        elevation="raised"
      />
      <NexCard
        title="Medium Card"
        description="Standard size for most use cases"
        size="md"
        elevation="raised"
      />
      <NexCard
        title="Large Card"
        description="Generous size for featured content"
        size="lg"
        elevation="raised"
      />
      <NexCard
        title="Extra Large Card"
        description="Maximum size for hero content"
        size="xl"
        elevation="raised"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Elevation comparison
export const Elevations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
      <NexCard
        title="Flat"
        description="No elevation, clean and minimal"
        elevation="flat"
      />
      <NexCard
        title="Raised"
        description="Subtle shadow for depth"
        elevation="raised"
      />
      <NexCard
        title="Hoverable"
        description="Elevates on hover"
        elevation="hoverable"
      />
      <NexCard
        title="Interactive"
        description="Full interaction with ripple"
        elevation="interactive"
        interactive
        onClick={() => alert('Interactive card clicked!')}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Animated entrance
export const AnimatedEntrance: Story = {
  render: () => {
    const [cards, setCards] = useState([1, 2, 3]);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                 <NexButton 
           onClick={() => setCards(prev => [...prev, prev.length + 1])}
           text="Add Card"
         />
        {cards.map((card, index) => (
          <motion.div
            key={card}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ delay: index * 0.1 }}
          >
            <NexCard
              title={`Card ${card}`}
              description={`This card has a staggered entrance animation with delay ${index * 0.1}s`}
              elevation="hoverable"
              size="md"
              delay={index}
            />
          </motion.div>
        ))}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// Complex example with all features
export const ComplexExample: Story = {
  args: {
    title: 'Enterprise Solution',
    subtitle: 'Premium Package',
    description: 'A comprehensive solution that includes advanced features, priority support, and enterprise-grade security.',
    image: {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      alt: 'Enterprise workspace',
      aspectRatio: 'video',
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    variant: 'premium',
    elevation: 'interactive',
    layout: 'auto',
    size: 'xl',
    interactive: true,
         actions: (
       <div style={{ display: 'flex', gap: '8px' }}>
         <NexButton size="small" type="glass" text="Learn More" />
         <NexButton size="small" text="Get Started" />
       </div>
     ),
    onClick: () => alert('Premium card clicked!'),
  },
  parameters: {
    layout: 'padded',
  },
};