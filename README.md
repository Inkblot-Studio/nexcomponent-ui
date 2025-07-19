# @nexcomponent/lib

A modern, enterprise-grade React UI library with glassmorphic design, smooth animations, and TypeScript support.

## 🚀 Features

- **Glassmorphic Design**: Beautiful glass effects with backdrop blur
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript First**: Full type safety with IntelliSense support
- **Enterprise Ready**: Professional components for business applications
- **Theme Support**: Light and black glass themes
- **Accessibility**: WCAG compliant with keyboard navigation
- **Responsive**: Mobile-first design approach

## 📦 Installation

```bash
npm install @nexcomponent/lib
# or
yarn add @nexcomponent/lib
```

## 🎨 Usage

### Basic Setup

```tsx
import { NexNav, NexFooter } from '@nexcomponent/lib';
import '@nexcomponent/lib/style.css';

function App() {
  return (
    <div>
      <NexNav
        logoSrc="/logo.svg"
        displayName="MyApp"
        homeButtonHandler={() => navigate('/')}
        navItems={[
          { label: "Dashboard", onClick: () => navigate('/dashboard') },
          { label: "Products", onClick: () => navigate('/products') }
        ]}
        isAuthenticated={true}
        user={{
          name: "John Doe",
          avatarUrl: "/avatar.jpg",
          role: "Admin"
        }}
        onLogout={() => logout()}
        languageOptions={[
          { code: "en", name: "English", flag: "🇺🇸" },
          { code: "es", name: "Español", flag: "🇪🇸" }
        ]}
        theme="black-glass"
      />
      
      {/* Your app content */}
      
      <NexFooter
        logoSrc="/logo.svg"
        displayName="MyApp"
        tagline="Building amazing experiences"
        sections={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" }
            ]
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        newsletter={{
          enabled: true,
          placeholder: "Enter your email",
          onSubmit: (email) => subscribe(email)
        }}
        socials={[
          { platform: "twitter", url: "https://twitter.com/myapp" },
          { platform: "linkedin", url: "https://linkedin.com/company/myapp" }
        ]}
        theme="black-glass"
      />
    </div>
  );
}
```

### Available Components

#### Navigation
- **NexNav**: Comprehensive navigation with authentication, language switching, and user management

#### Layout
- **NexFooter**: Professional footer with branding, sections, newsletter, and social links
- **NexCard**: Lead generation cards with glassmorphic effects
- **NexCarousel**: Smooth image carousel with auto-play and navigation

#### Forms
- **NexInput**: Professional input fields with validation states
- **NexButton**: Animated buttons with loading states

#### Feedback
- **NexAlert**: Notification alerts with different variants
- **NexLoader**: Loading indicators and spinners
- **NexModal**: Modal dialogs with backdrop blur

#### Utilities
- **NexSeparator**: Visual separators and dividers
- **NexCopyToClipboard**: Copy-to-clipboard functionality
- **NexVersion**: Version display component

## 🎯 TypeScript Support

All components include comprehensive TypeScript definitions with JSDoc documentation. You'll get:

- **IntelliSense**: Full autocomplete and property suggestions
- **Type Safety**: Compile-time error checking
- **Hover Documentation**: Detailed prop descriptions and examples
- **Example Code**: Usage examples in tooltips

```tsx
// Hover over NexNav to see all available props
<NexNav
  // TypeScript will show you all available properties
  // with descriptions and examples
/>
```

## 🎨 Themes

### Light Theme (Default)
Clean, professional design with subtle shadows and borders.

### Black Glass Theme
Iconic black glass effect with backdrop blur and transparency.

```tsx
<NexNav theme="black-glass" />
<NexFooter theme="black-glass" />
```

## 📱 Responsive Design

All components are mobile-first and responsive:

- **Mobile**: Optimized for touch interactions
- **Tablet**: Adaptive layouts and sizing
- **Desktop**: Full feature set with hover effects

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Management**: Proper focus indicators
- **Reduced Motion**: Respects user preferences

## 🔧 Customization

### CSS Variables

Customize the design system using CSS variables:

```css
:root {
  --nex-primary-color: #007bff;
  --nex-signature: #ff1801;
  --nex-radius-lg: 12px;
  --nex-spacing-md: 16px;
}
```

### Theme Overrides

Override specific component styles:

```css
.nex-nav {
  --nex-nav-background: rgba(255, 255, 255, 0.9);
  --nex-nav-border: 1px solid rgba(0, 0, 0, 0.1);
}
```

## 📚 API Reference

### NexNav Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `logoSrc` | `string` | No | URL to the logo image |
| `displayName` | `string` | Yes | Application display name |
| `homeButtonHandler` | `() => void` | Yes | Handler for home button clicks |
| `navItems` | `NavItem[]` | Yes | Array of navigation items |
| `isAuthenticated` | `boolean` | Yes | Whether the user is authenticated |
| `user` | `User` | No | User information (required when authenticated) |
| `languageOptions` | `LanguageOption[]` | Yes | Available language options |
| `theme` | `'light' \| 'auto' \| 'black-glass'` | No | Theme variant |

### NexFooter Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `logoSrc` | `string` | No | URL to the logo image |
| `displayName` | `string` | Yes | Application display name |
| `tagline` | `string` | No | Company tagline or description |
| `sections` | `FooterSection[]` | No | Footer navigation sections |
| `newsletter` | `NewsletterConfig` | No | Newsletter signup configuration |
| `socials` | `SocialLink[]` | No | Social media links |
| `theme` | `'light' \| 'auto' \| 'black-glass'` | No | Theme variant |

## 🚀 Getting Started

1. **Install the package**:
   ```bash
   npm install @nexcomponent/lib
   ```

2. **Import the CSS**:
   ```tsx
   import '@nexcomponent/lib/style.css';
   ```

3. **Use components**:
   ```tsx
   import { NexNav, NexFooter } from '@nexcomponent/lib';
   ```

4. **Enjoy TypeScript support**:
   - Hover over components to see prop descriptions
   - Get autocomplete for all properties
   - See usage examples in tooltips

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

ISC License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Storybook](https://nexcomponent-ui.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/Inkblot-Studio/nexcomponent-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Inkblot-Studio/nexcomponent-ui/discussions)