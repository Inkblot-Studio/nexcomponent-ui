import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NexCarousel from './NexCarousel';
import { CarouselSlide } from './NexCarousel.types';

/**
 * NexCarousel Apple-Inspired Example
 * 
 * A showcase of the elegant, minimal carousel with Apple-like design principles:
 * - Clean, simple interfaces
 * - Smooth, fluid animations with Framer Motion
 * - Premium visual quality
 * - Intuitive interactions
 * - Beautiful typography with proper font system
 */

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

// Gallery slides for different variants
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

const NexCarouselExample: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<'default' | 'hero' | 'gallery' | 'minimal'>('hero');

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    console.log(`Slide changed to: ${index}`);
  };

  const handleSlideClick = (slide: CarouselSlide, index: number) => {
    alert(`Clicked slide ${index + 1}: ${slide.title}`);
  };

  const variants = [
    { key: 'default', label: 'Default', description: 'Clean and professional' },
    { key: 'hero', label: 'Hero', description: 'Full-width hero style' },
    { key: 'gallery', label: 'Gallery', description: 'Elegant gallery presentation' },
    { key: 'minimal', label: 'Minimal', description: 'Simple and clean' }
  ] as const;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--nex-background-color) 0%, rgba(0, 0, 0, 0.02) 100%)',
      padding: '40px 20px'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 60px auto'
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '48px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, var(--nex-primary-color) 0%, var(--nex-secondary-color) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontFamily: 'var(--nex-font-family-display)',
            letterSpacing: '-0.02em',
            lineHeight: 'var(--nex-line-height-tight)',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          Apple-Inspired Carousel
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '20px',
            color: 'var(--nex-muted-font-color)',
            lineHeight: 'var(--nex-line-height-base)',
            marginBottom: '40px',
            fontFamily: 'var(--nex-font-family-primary)',
            fontWeight: 'var(--nex-font-weight-regular)',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          Experience the elegance of Apple's design philosophy in this premium carousel component.
        </motion.p>

        {/* Interactive Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
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
        </motion.div>
      </div>

      {/* Main Carousel Demo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto 60px auto',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          border: '1px solid var(--nex-border-color)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <NexCarousel
          slides={selectedVariant === 'gallery' ? gallerySlides : appleSlides}
          variant={selectedVariant}
          size={selectedVariant === 'hero' ? 'xl' : 'lg'}
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
      </motion.div>

      {/* Variant Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto 40px auto'
        }}
      >
        <h3 style={{
          fontSize: '24px',
          fontWeight: 'var(--nex-font-weight-bold)',
          color: 'var(--nex-font-color)',
          marginBottom: '20px',
          textAlign: 'center',
          fontFamily: 'var(--nex-font-family-display)',
          letterSpacing: '-0.01em',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}>
          Choose Your Style
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {variants.map(({ key, label, description }) => (
            <motion.button
              key={key}
              onClick={() => setSelectedVariant(key)}
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: selectedVariant === key 
                  ? 'var(--nex-primary-color)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: selectedVariant === key ? 'white' : 'var(--nex-font-color)',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'var(--nex-font-weight-semibold)',
                textAlign: 'left',
                border: '1px solid',
                borderColor: selectedVariant === key 
                  ? 'var(--nex-primary-color)' 
                  : 'var(--nex-border-color)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                fontFamily: 'var(--nex-font-family-primary)',
                letterSpacing: '0.01em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ 
                fontWeight: 'var(--nex-font-weight-bold)', 
                marginBottom: '8px',
                fontSize: '18px'
              }}>
                {label}
              </div>
              <div style={{ 
                fontSize: '14px', 
                opacity: 0.8,
                lineHeight: 'var(--nex-line-height-base)',
                fontWeight: 'var(--nex-font-weight-regular)'
              }}>
                {description}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Feature Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <h3 style={{
          fontSize: '24px',
          fontWeight: 'var(--nex-font-weight-bold)',
          color: 'var(--nex-font-color)',
          marginBottom: '30px',
          textAlign: 'center',
          fontFamily: 'var(--nex-font-family-display)',
          letterSpacing: '-0.01em',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}>
          🎯 Apple Design Principles
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <motion.div 
            style={{
              padding: '24px',
              background: 'rgba(76, 175, 80, 0.05)',
              border: '1px solid rgba(76, 175, 80, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: 'var(--nex-font-weight-semibold)',
              color: 'var(--nex-success)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--nex-font-family-primary)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              <span>✨</span> Clarity
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: 'var(--nex-line-height-base)',
              fontFamily: 'var(--nex-font-family-primary)',
              fontWeight: 'var(--nex-font-weight-regular)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              Clear visual hierarchy and readable content with Apple-style typography.
            </p>
          </motion.div>

          <motion.div 
            style={{
              padding: '24px',
              background: 'rgba(33, 150, 243, 0.05)',
              border: '1px solid rgba(33, 150, 243, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: 'var(--nex-font-weight-semibold)',
              color: 'var(--nex-info)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--nex-font-family-primary)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              <span>🎨</span> Elegance
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: 'var(--nex-line-height-base)',
              fontFamily: 'var(--nex-font-family-primary)',
              fontWeight: 'var(--nex-font-weight-regular)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              Sophisticated styling with subtle details and premium visual quality.
            </p>
          </motion.div>

          <motion.div 
            style={{
              padding: '24px',
              background: 'rgba(255, 193, 7, 0.05)',
              border: '1px solid rgba(255, 193, 7, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: 'var(--nex-font-weight-semibold)',
              color: 'var(--nex-warning)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--nex-font-family-primary)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              <span>⚡</span> Performance
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: 'var(--nex-line-height-base)',
              fontFamily: 'var(--nex-font-family-primary)',
              fontWeight: 'var(--nex-font-weight-regular)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              Smooth, optimized animations with Framer Motion and Apple's signature easing.
            </p>
          </motion.div>

          <motion.div 
            style={{
              padding: '24px',
              background: 'rgba(156, 39, 176, 0.05)',
              border: '1px solid rgba(156, 39, 176, 0.2)',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)'
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: 'var(--nex-font-weight-semibold)',
              color: 'var(--nex-secondary-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--nex-font-family-primary)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              <span>♿</span> Accessibility
            </h4>
            <p style={{
              margin: '0',
              fontSize: '14px',
              color: 'var(--nex-muted-font-color)',
              lineHeight: 'var(--nex-line-height-base)',
              fontFamily: 'var(--nex-font-family-primary)',
              fontWeight: 'var(--nex-font-weight-regular)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}>
              Full keyboard and screen reader support for inclusive design.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NexCarouselExample; 