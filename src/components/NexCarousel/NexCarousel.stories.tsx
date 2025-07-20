import React, { useState } from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { motion } from 'framer-motion';
import NexCarousel from './NexCarousel';
import { NexCarouselProps, CarouselSlide } from './NexCarousel.types';

export default {
  title: 'NexComponent/NexCarousel',
  component: NexCarousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# NexCarousel - Apple-Inspired Carousel Component

A clean, minimal carousel with Apple-like design principles:
- **Elegant Simplicity**: Clean lines and minimal distractions
- **Smooth Animations**: Fluid transitions with Framer Motion and Apple's signature easing
- **Premium Feel**: High-quality visuals and interactions
- **Intuitive Interactions**: Natural, responsive controls
- **Beautiful Typography**: Apple-style typography hierarchy with proper font system

## 🎨 Design Philosophy

Inspired by Apple's design language, this carousel emphasizes:
- **Clarity**: Clear visual hierarchy and readable content
- **Elegance**: Sophisticated styling with subtle details
- **Performance**: Smooth, optimized animations with Framer Motion
- **Accessibility**: Full keyboard and screen reader support
- **Responsiveness**: Perfect on all devices and screen sizes

## 🚀 Key Features

- **Multiple Variants**: Default, Hero, Gallery, Minimal
- **Framer Motion**: Smooth, performant animations throughout
- **Auto-play**: Intelligent auto-advance with pause on hover
- **Infinite Scrolling**: Seamless loop navigation
- **Content Overlays**: Elegant text overlays with gradients
- **Interactive Controls**: Hover effects and smooth interactions
- **Beautiful Typography**: Proper font system with antialiasing
        `
      }
    }
  }
} as Meta<NexCarouselProps>;

type Story = StoryObj<typeof NexCarousel>;

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

// Apple-inspired sample slides
const appleSlides: CarouselSlide[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
    title: 'Think Different',
    subtitle: 'Innovation at its finest',
    description: 'Experience the future of technology with our revolutionary platform.',
    ctaText: 'Learn More',
    ctaUrl: '#'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
    title: 'Designed for You',
    subtitle: 'Every detail matters',
    description: 'Crafted with precision and care, designed to enhance your experience.',
    ctaText: 'Explore',
    ctaUrl: '#'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    title: 'Premium Quality',
    subtitle: 'Excellence in every pixel',
    description: 'Premium materials, premium performance, premium experience.',
    ctaText: 'Discover',
    ctaUrl: '#'
  }
];

// Minimal slides for gallery variant
const gallerySlides: CarouselSlide[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    title: 'Gallery One',
    description: 'Beautiful imagery that speaks for itself.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
    title: 'Gallery Two',
    description: 'Minimal design, maximum impact.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    title: 'Gallery Three',
    description: 'Clean, elegant, timeless.'
  }
];

// Default carousel
export const Default: Story = {
  args: {
    slides: appleSlides,
    variant: 'default',
    size: 'md',
    showControls: true,
    showIndicators: true,
    showCounter: true,
  },
};

// Hero carousel
export const Hero: Story = {
  args: {
    slides: appleSlides,
    variant: 'hero',
    size: 'xl',
    autoPlay: true,
    autoPlayInterval: 4000,
    pauseOnHover: true,
    infinite: true,
    showControls: true,
    showIndicators: true,
    showCounter: true,
  },
};

// Gallery carousel
export const Gallery: Story = {
  args: {
    slides: gallerySlides,
    variant: 'gallery',
    size: 'lg',
    showControls: true,
    showIndicators: true,
    showCounter: true,
  },
};

// Minimal carousel
export const Minimal: Story = {
  args: {
    slides: appleSlides,
    variant: 'minimal',
    size: 'md',
    autoPlay: true,
    autoPlayInterval: 3000,
    pauseOnHover: true,
    showControls: false,
    showIndicators: true,
    showCounter: false,
  },
};

// Size showcase
export const SizeShowcase: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const;
    
    return (
      <div style={{ 
        margin: '20px', 
        padding: '40px',
        background: 'var(--nex-background-color)',
        borderRadius: '16px'
      }}>
        {sizes.map((size) => (
          <div key={size} style={{ marginBottom: '40px' }}>
            <h3 style={{ 
              marginBottom: '20px', 
              fontSize: '18px', 
              fontWeight: 'var(--nex-font-weight-semibold)',
              textTransform: 'uppercase',
              color: 'var(--nex-font-color)',
              fontFamily: 'var(--nex-font-family-primary)',
              letterSpacing: '0.02em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              {size.toUpperCase()} Size
            </h3>
            <NexCarousel
              slides={appleSlides}
              variant="default"
              size={size}
              showControls={true}
              showIndicators={true}
              autoPlay={false}
            />
          </div>
        ))}
      </div>
    );
  },
};

// Variant showcase
export const VariantShowcase: Story = {
  render: () => {
    const variants = [
      { key: 'default', label: 'Default', description: 'Clean and professional' },
      { key: 'hero', label: 'Hero', description: 'Full-width hero style' },
      { key: 'gallery', label: 'Gallery', description: 'Elegant gallery presentation' },
      { key: 'minimal', label: 'Minimal', description: 'Simple and clean' }
    ] as const;
    
    return (
      <div style={{ 
        margin: '20px', 
        padding: '40px',
        background: 'var(--nex-background-color)',
        borderRadius: '16px'
      }}>
        {variants.map(({ key, label, description }) => (
          <div key={key} style={{ marginBottom: '60px' }}>
            <h3 style={{ 
              marginBottom: '10px', 
              fontSize: '24px', 
              fontWeight: 'var(--nex-font-weight-bold)',
              color: 'var(--nex-font-color)',
              fontFamily: 'var(--nex-font-family-display)',
              letterSpacing: '-0.01em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              {label}
            </h3>
            <p style={{
              marginBottom: '20px',
              fontSize: '16px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: 'var(--nex-line-height-base)',
              fontFamily: 'var(--nex-font-family-primary)',
              fontWeight: 'var(--nex-font-weight-regular)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              {description}
            </p>
            <NexCarousel
              slides={key === 'gallery' ? gallerySlides : appleSlides}
              variant={key}
              size={key === 'hero' ? 'xl' : 'lg'}
              showControls={true}
              showIndicators={true}
              showCounter={true}
              autoPlay={key === 'hero' || key === 'minimal'}
              autoPlayInterval={4000}
              pauseOnHover={true}
              infinite={key === 'hero'}
            />
          </div>
        ))}
      </div>
    );
  },
};

// Interactive demo
const CarouselDemo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    console.log(`Slide changed to: ${index}`);
  };

  const handleSlideClick = (slide: CarouselSlide, index: number) => {
    alert(`Clicked slide ${index + 1}: ${slide.title}`);
  };

  return (
    <div style={{
      padding: '40px',
      background: 'linear-gradient(135deg, var(--nex-background-color) 0%, rgba(0, 0, 0, 0.02) 100%)',
      borderRadius: '20px',
      border: '1px solid var(--nex-border-color)'
    }}>
      <div style={{
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            margin: '0 0 10px 0',
            fontSize: '32px',
            fontWeight: 'var(--nex-font-weight-bold)',
            color: 'var(--nex-font-color)',
            fontFamily: 'var(--nex-font-family-display)',
            letterSpacing: '-0.02em',
            lineHeight: 'var(--nex-line-height-tight)',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          Apple-Inspired Carousel
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            margin: '0 0 20px 0',
            fontSize: '18px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: 'var(--nex-line-height-base)',
            fontFamily: 'var(--nex-font-family-primary)',
            fontWeight: 'var(--nex-font-weight-regular)',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          Experience the elegance of Apple's design philosophy in this premium carousel component.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}
        >
          <motion.div 
            style={{
              padding: '8px 16px',
              background: 'var(--nex-primary-color)',
              color: 'white',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 'var(--nex-font-weight-semibold)',
              fontFamily: 'var(--nex-font-family-primary)',
              letterSpacing: '0.02em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Current Slide: {currentSlide + 1}
          </motion.div>
          
          <motion.div 
            style={{
              padding: '8px 16px',
              background: isAutoPlaying ? 'var(--nex-success)' : 'var(--nex-muted)',
              color: 'white',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 'var(--nex-font-weight-semibold)',
              fontFamily: 'var(--nex-font-family-primary)',
              letterSpacing: '0.02em',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Auto-play: {isAutoPlaying ? 'Active' : 'Paused'}
          </motion.div>
        </motion.div>
      </div>

      <NexCarousel
        slides={appleSlides}
        variant="hero"
        size="xl"
        autoPlay={true}
        autoPlayInterval={4000}
        pauseOnHover={true}
        infinite={true}
        showControls={true}
        showIndicators={true}
        showCounter={true}
        onSlideChange={handleSlideChange}
        onSlideClick={handleSlideClick}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          marginTop: '30px',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.02)',
          borderRadius: '12px',
          border: '1px solid var(--nex-border-color)'
        }}
      >
        <h4 style={{
          margin: '0 0 10px 0',
          fontSize: '16px',
          fontWeight: 'var(--nex-font-weight-semibold)',
          color: 'var(--nex-font-color)',
          fontFamily: 'var(--nex-font-family-primary)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}>
          🎯 Apple Design Principles
        </h4>
        <ul style={{
          margin: '0',
          paddingLeft: '20px',
          color: 'var(--nex-muted-font-color)',
          lineHeight: 'var(--nex-line-height-base)',
          fontFamily: 'var(--nex-font-family-primary)',
          fontWeight: 'var(--nex-font-weight-regular)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}>
          <li><strong>Clarity:</strong> Clear visual hierarchy and readable content</li>
          <li><strong>Elegance:</strong> Sophisticated styling with subtle details</li>
          <li><strong>Performance:</strong> Smooth, optimized animations with Framer Motion</li>
          <li><strong>Accessibility:</strong> Full keyboard and screen reader support</li>
          <li><strong>Responsiveness:</strong> Perfect on all devices and screen sizes</li>
        </ul>
      </motion.div>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => <CarouselDemo />,
  parameters: {
    layout: 'fullscreen',
  },
};

// Auto-play demo
export const AutoPlayDemo: Story = {
  args: {
    slides: appleSlides,
    variant: 'default',
    size: 'lg',
    autoPlay: true,
    autoPlayInterval: 3000,
    pauseOnHover: true,
    infinite: true,
    showControls: true,
    showIndicators: true,
    showCounter: true,
  },
};

// Infinite scrolling demo
export const InfiniteScrolling: Story = {
  args: {
    slides: appleSlides,
    variant: 'gallery',
    size: 'md',
    infinite: true,
    showControls: true,
    showIndicators: true,
    showCounter: true,
    autoPlay: false,
  },
};

// Single slide demo
export const SingleSlide: Story = {
  args: {
    slides: [appleSlides[0]],
    variant: 'default',
    size: 'md',
    showControls: false,
    showIndicators: false,
    showCounter: false,
  },
}; 