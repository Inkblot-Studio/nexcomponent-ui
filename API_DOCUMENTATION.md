# @nexcomponent/lib v2.0.0 API Documentation

## 📚 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
  - [NexCard](#nexcard)
  - [NexNav](#nexnav)
  - [NexFooter](#nexfooter)
  - [NexLoader](#nexloader)
  - [NexButton](#nexbutton)
  - [NexInput](#nexinput)
  - [NexModal](#nexmodal)
  - [NexAlert](#nexalert)
  - [NexCarousel](#nexcarousel)
  - [NexCopyToClipboard](#nexcopytoclipboard)
  - [NexSeparator](#nexseparator)
  - [NexVersion](#nexversion)
- [Types](#types)
- [Utilities](#utilities)

## 📦 Installation

```bash
npm install @nexcomponent/lib@2.0.0
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { NexCard, NexNav, NexFooter } from '@nexcomponent/lib';
import '@nexcomponent/lib/style.css';

function App() {
  return (
    <div>
      <NexNav logo="My App" items={[{ label: 'Home', href: '/' }]} />
      <main>
        <NexCard
          title="Welcome"
          description="This is a sample card"
          variant="premium"
        />
      </main>
      <NexFooter copyright="© 2024 My App" />
    </div>
  );
}
```

## 🧩 Components

### NexCard

A sophisticated, animated card component with multiple variants and interactive features.

#### Props

```tsx
interface NexCardProps {
  // Content
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  
  // Media
  image?: {
    src: string;
    alt?: string;
    aspectRatio?: 'auto' | 'square' | 'video' | 'wide';
  };
  icon?: React.ReactNode;
  
  // Layout & Styling
  variant?: 'default' | 'glass' | 'premium';
  elevation?: 'flat' | 'raised' | 'interactive';
  layout?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Interactive Features
  interactive?: boolean;
  clickable?: boolean;
  href?: string;
  as?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  // States
  loading?: boolean;
  disabled?: boolean;
  
  // Custom Slots
  header?: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
  
  // Animation
  animate?: boolean;
  delay?: number;
  
  // Legacy Support (deprecated but still works)
  content?: string;
  imageUrl?: string;
  badge?: React.ReactNode;
  type?: string;
  elevated?: boolean;
}
```

#### Examples

```tsx
// Basic Card
<NexCard
  title="Basic Card"
  description="A simple card with title and description"
/>

// Interactive Card
<NexCard
  title="Clickable Card"
  description="This card is interactive"
  interactive
  onClick={() => console.log('Card clicked')}
  variant="premium"
  elevation="interactive"
/>

// Card with Image
<NexCard
  title="Card with Image"
  description="A card featuring an image"
  image={{
    src: "https://example.com/image.jpg",
    alt: "Card image",
    aspectRatio: "wide"
  }}
  variant="glass"
/>

// Loading Card
<NexCard
  title="Loading Card"
  description="This card shows a loading state"
  loading
/>
```

### NexNav

A modern navigation component with support for responsive design and animations.

#### Props

```tsx
interface NexNavProps {
  // Branding
  logo?: string | React.ReactNode;
  logoHref?: string;
  
  // Navigation Items
  items?: Array<{
    label: string;
    href?: string;
    icon?: React.ReactNode;
    children?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  
  // Actions
  actions?: React.ReactNode;
  
  // Behavior
  sticky?: boolean;
  transparent?: boolean;
  
  // Styling
  variant?: 'default' | 'minimal' | 'enterprise';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Basic Navigation
<NexNav
  logo="My App"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]}
/>

// Navigation with Dropdown
<NexNav
  logo="My App"
  items={[
    { label: 'Home', href: '/' },
    { 
      label: 'Products', 
      children: [
        { label: 'Feature 1', href: '/feature1' },
        { label: 'Feature 2', href: '/feature2' }
      ]
    }
  ]}
  actions={<button>Sign In</button>}
/>
```

### NexFooter

A comprehensive footer component with multiple sections and responsive design.

#### Props

```tsx
interface NexFooterProps {
  // Content
  copyright?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
  
  // Sections
  sections?: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  }>;
  
  // Social Media
  social?: Array<{
    platform: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  
  // Newsletter
  newsletter?: {
    title?: string;
    description?: string;
    placeholder?: string;
    onSubmit?: (email: string) => void;
  };
  
  // Styling
  variant?: 'default' | 'minimal' | 'enterprise';
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Basic Footer
<NexFooter
  copyright="© 2024 My Company"
  links={[
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ]}
/>

// Comprehensive Footer
<NexFooter
  copyright="© 2024 My Company"
  sections={[
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ]}
  social={[
    { platform: 'Twitter', href: 'https://twitter.com/mycompany' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/mycompany' }
  ]}
/>
```

### NexLoader

A versatile loading component with multiple variants and animations.

#### Props

```tsx
interface NexLoaderProps {
  // Variants
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Content
  text?: string;
  description?: string;
  
  // Behavior
  fullscreen?: boolean;
  overlay?: boolean;
  
  // Styling
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Basic Loader
<NexLoader variant="spinner" text="Loading..." />

// Fullscreen Loader
<NexLoader 
  variant="dots" 
  fullscreen 
  text="Please wait..." 
  description="Loading your content"
/>

// Skeleton Loader
<NexLoader variant="skeleton" />
```

### NexButton

A comprehensive button component with multiple variants and states.

#### Props

```tsx
interface NexButtonProps {
  // Content
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  
  // Variants
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // States
  loading?: boolean;
  disabled?: boolean;
  
  // Behavior
  href?: string;
  as?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  
  // Styling
  fullWidth?: boolean;
  rounded?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Primary Button
<NexButton variant="primary" onClick={() => console.log('Clicked')}>
  Click Me
</NexButton>

// Button with Icon
<NexButton 
  variant="outline" 
  icon={<Icon />} 
  iconPosition="left"
>
  With Icon
</NexButton>

// Loading Button
<NexButton variant="primary" loading>
  Loading...
</NexButton>
```

### NexInput

A modern input component with validation and various input types.

#### Props

```tsx
interface NexInputProps {
  // Value
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  
  // Input Properties
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  name?: string;
  id?: string;
  
  // Validation
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  
  // States
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  success?: boolean;
  
  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  
  // Styling
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Basic Input
<NexInput 
  placeholder="Enter your name"
  onChange={(value) => console.log(value)}
/>

// Input with Validation
<NexInput
  type="email"
  placeholder="Enter your email"
  required
  error="Please enter a valid email"
/>

// Input with Icons
<NexInput
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
  placeholder="Search..."
/>
```

### NexModal

A modal component with backdrop, animations, and various content types.

#### Props

```tsx
interface NexModalProps {
  // State
  isOpen: boolean;
  onClose: () => void;
  
  // Content
  title?: string;
  children: React.ReactNode;
  
  // Behavior
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventScroll?: boolean;
  
  // Size
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
const [isOpen, setIsOpen] = useState(false);

// Basic Modal
<NexModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content goes here...</p>
</NexModal>

// Large Modal
<NexModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  size="lg"
  title="Large Modal"
>
  <div>Large modal content...</div>
</NexModal>
```

### NexAlert

An alert component for displaying notifications and messages.

#### Props

```tsx
interface NexAlertProps {
  // Content
  title?: string;
  message?: string;
  description?: string;
  
  // Type
  type?: 'info' | 'success' | 'warning' | 'error';
  
  // Behavior
  dismissible?: boolean;
  autoDismiss?: boolean;
  dismissDelay?: number;
  onDismiss?: () => void;
  
  // Actions
  actions?: Array<{
    label: string;
    variant?: 'primary' | 'secondary';
    onClick: () => void;
  }>;
  
  // Styling
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Info Alert
<NexAlert
  type="info"
  title="Information"
  message="This is an informational message"
  dismissible
/>

// Success Alert with Actions
<NexAlert
  type="success"
  title="Success!"
  message="Your action was completed successfully"
  actions={[
    { label: 'View Details', onClick: () => console.log('View') },
    { label: 'Dismiss', onClick: () => console.log('Dismiss') }
  ]}
/>
```

### NexCarousel

A carousel component with multiple animation types and controls.

#### Props

```tsx
interface NexCarouselProps {
  // Content
  slides: Array<{
    imageUrl: string;
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
  }>;
  
  // Variants
  variant?: 'default' | 'hero' | 'gallery' | 'minimal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // Behavior
  autoPlay?: boolean;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
  infinite?: boolean;
  
  // Controls
  showControls?: boolean;
  showIndicators?: boolean;
  showCounter?: boolean;
  
  // Callbacks
  onSlideChange?: (index: number) => void;
  onSlideClick?: (slide: CarouselSlide, index: number) => void;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
const slides = [
  {
    imageUrl: "https://example.com/slide1.jpg",
    title: "Slide 1",
    description: "Description for slide 1"
  },
  {
    imageUrl: "https://example.com/slide2.jpg",
    title: "Slide 2",
    description: "Description for slide 2"
  }
];

// Basic Carousel
<NexCarousel slides={slides} />

// Hero Carousel
<NexCarousel
  slides={slides}
  variant="hero"
  autoPlay
  autoPlayInterval={5000}
  showControls
  showIndicators
/>
```

### NexCopyToClipboard

A utility component for copying text to clipboard with feedback.

#### Props

```tsx
interface NexCopyToClipboardProps {
  // Content
  text: string;
  children: React.ReactNode;
  
  // Behavior
  onCopy?: (text: string, success: boolean) => void;
  showFeedback?: boolean;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Basic Copy Button
<NexCopyToClipboard text="Text to copy">
  <NexButton>Copy Text</NexButton>
</NexCopyToClipboard>

// With Feedback
<NexCopyToClipboard 
  text="Text to copy" 
  onCopy={(text, success) => console.log(success ? 'Copied!' : 'Failed')}
  showFeedback
>
  <NexButton>Copy</NexButton>
</NexCopyToClipboard>
```

### NexSeparator

A simple separator component for visual organization.

#### Props

```tsx
interface NexSeparatorProps {
  // Orientation
  orientation?: 'horizontal' | 'vertical';
  
  // Styling
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'dashed' | 'dotted';
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Horizontal Separator
<NexSeparator />

// Vertical Separator
<NexSeparator orientation="vertical" />

// Dashed Separator
<NexSeparator variant="dashed" size="lg" />
```

### NexVersion

A component for displaying version information.

#### Props

```tsx
interface NexVersionProps {
  // Content
  version: string;
  build?: string;
  environment?: string;
  
  // Display
  showBuild?: boolean;
  showEnvironment?: boolean;
  
  // Styling
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}
```

#### Examples

```tsx
// Basic Version
<NexVersion version="2.0.0" />

// Full Version Info
<NexVersion
  version="2.0.0"
  build="2024.01.15"
  environment="production"
  showBuild
  showEnvironment
/>
```

## 🎨 CSS Classes

All components use CSS modules with the following naming convention:
- `nexComponent` - Main component class
- `nexComponent--variant` - Variant modifier
- `nexComponent--size` - Size modifier
- `nexComponent__element` - Sub-element

## 🎭 Animation

Components use Framer Motion for animations. You can customize animations by:

1. Setting `animate={false}` to disable animations
2. Using the `delay` prop for staggered animations
3. Customizing animation variants in your CSS

## ♿ Accessibility

All components include:
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Reduced motion support

## 🌐 Internationalization

Components support i18n through:
- Configurable text props
- RTL layout support
- Localized date/time formatting

## 🔧 Customization

### CSS Variables
```css
:root {
  --nex-primary-color: #007bff;
  --nex-secondary-color: #6c757d;
  --nex-success-color: #28a745;
  --nex-warning-color: #ffc107;
  --nex-error-color: #dc3545;
  --nex-border-radius: 8px;
  --nex-transition-duration: 0.2s;
}
```

### Theme Override
```tsx
// Create a theme provider
<NexThemeProvider
  theme={{
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    },
    borderRadius: '12px'
  }}
>
  <YourApp />
</NexThemeProvider>
```

## 📱 Responsive Design

All components are responsive by default and include:
- Mobile-first design
- Breakpoint-based layouts
- Touch-friendly interactions
- Adaptive sizing

## 🧪 Testing

Components include:
- Unit tests for all functionality
- Integration tests for user interactions
- Visual regression tests
- Accessibility tests

## 📦 Bundle Size

- Core components: ~45KB gzipped
- With animations: ~65KB gzipped
- Full library: ~120KB gzipped

## 🔄 Migration from v1.3.32

See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) for detailed migration instructions. 