# Agency Attribution Guide

The `NexFooter` component includes a built-in agency attribution feature that allows you to credit your development agency or studio. This guide explains how to configure and customize the agency attribution.

## Quick Start

### Basic Agency Attribution

```tsx
import { NexFooter } from '@nexcomponent/lib';

<NexFooter
  displayName="MyApp"
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
  // ... other props
/>
```

### Agency Attribution Without Link

```tsx
<NexFooter
  displayName="MyApp"
  agencyAttribution={{
    // No websiteUrl - displays as plain text
  }}
  // ... other props
/>
```

## Configuration Options

### Agency Attribution Props

The `agencyAttribution` prop accepts the following configuration:

```tsx
interface AgencyAttribution {
  /** Website URL for the agency link */
  websiteUrl?: string;
  /** Whether to open the link in a new tab */
  openInNewTab?: boolean;
}
```

### Props Explained

- **`websiteUrl`** (optional): The URL that the agency attribution text will link to
  - If provided: The attribution becomes clickable with hover effects
  - If not provided: The attribution displays as plain text
  - Example: `'https://inkblotstudio.com'`

- **`openInNewTab`** (optional): Controls link behavior
  - `true`: Opens the link in a new tab/window
  - `false` (default): Opens the link in the same tab
  - Only applies when `websiteUrl` is provided

## Examples

### 1. Clickable Agency Attribution (New Tab)

```tsx
<NexFooter
  displayName="MyApp"
  tagline="Building amazing experiences"
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
/>
```

**Result**: "Made with ❤️ by Inkblot Studio" appears as a clickable link that opens in a new tab.

### 2. Clickable Agency Attribution (Same Tab)

```tsx
<NexFooter
  displayName="MyApp"
  tagline="Building amazing experiences"
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: false
  }}
/>
```

**Result**: "Made with ❤️ by Inkblot Studio" appears as a clickable link that opens in the same tab.

### 3. Plain Text Agency Attribution

```tsx
<NexFooter
  displayName="MyApp"
  tagline="Building amazing experiences"
  agencyAttribution={{
    // No websiteUrl provided
  }}
/>
```

**Result**: "Made with ❤️ by Inkblot Studio" appears as plain text without any link functionality.

### 4. Custom Agency Attribution Text

```tsx
<NexFooter
  displayName="MyApp"
  tagline="Building amazing experiences"
  translations={{
    madeByInkblotStudio: 'Crafted with passion by Inkblot Studio'
  }}
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
/>
```

**Result**: "Crafted with passion by Inkblot Studio" appears as a clickable link.

## Visual Appearance

### Default Theme
- **Background**: Semi-transparent white (`rgba(255, 255, 255, 0.8)`)
- **Text Color**: Dark gray (`rgba(0, 0, 0, 0.6)`)
- **Border**: Light gray top border (`rgba(0, 0, 0, 0.1)`)
- **Font Size**: 14px (0.875rem)
- **Padding**: 1rem
- **Text Alignment**: Center

### Black Glass Theme
- **Background**: Semi-transparent black (`rgba(0, 0, 0, 0.3)`)
- **Text Color**: Light gray (`rgba(255, 255, 255, 0.7)`)
- **Border**: Light white top border (`rgba(255, 255, 255, 0.1)`)
- **Font Size**: 14px (0.875rem)
- **Padding**: 1rem
- **Text Alignment**: Center

### Hover Effects (When Clickable)
- **Opacity**: Reduces to 0.8 on hover
- **Transition**: Smooth 0.2s ease-in-out transition
- **Cursor**: Pointer cursor

## Animation

The agency attribution section includes smooth animations:

- **Entrance**: Fades in with a 0.3s delay and 0.5s duration
- **Hover**: Smooth opacity transition when hovering over clickable links
- **Framer Motion**: Uses Framer Motion for consistent animation patterns

## Best Practices

### 1. Use Descriptive URLs
```tsx
// Good
websiteUrl: 'https://inkblotstudio.com'

// Better
websiteUrl: 'https://inkblotstudio.com/web-development'
```

### 2. Consider User Experience
```tsx
// For external agency websites
openInNewTab: true

// For internal agency pages
openInNewTab: false
```

### 3. Customize Text Appropriately
```tsx
// Professional
madeByInkblotStudio: 'Developed by Inkblot Studio'

// Friendly
madeByInkblotStudio: 'Made with ❤️ by Inkblot Studio'

// Minimal
madeByInkblotStudio: 'Inkblot Studio'
```

### 4. Match Your Brand
```tsx
// Use your agency's actual website
websiteUrl: 'https://youragency.com'

// Use consistent branding
translations: {
  madeByInkblotStudio: 'Built by Your Agency Name'
}
```

## Integration Examples

### With Next.js
```tsx
import { NexFooter } from '@nexcomponent/lib';

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <NexFooter
        displayName="MyApp"
        agencyAttribution={{
          websiteUrl: process.env.NEXT_PUBLIC_AGENCY_URL,
          openInNewTab: true
        }}
      />
    </div>
  );
}
```

### With Environment Variables
```tsx
// .env.local
NEXT_PUBLIC_AGENCY_URL=https://inkblotstudio.com
NEXT_PUBLIC_AGENCY_NAME=Inkblot Studio

// Component
<NexFooter
  displayName="MyApp"
  translations={{
    madeByInkblotStudio: `Made with ❤️ by ${process.env.NEXT_PUBLIC_AGENCY_NAME}`
  }}
  agencyAttribution={{
    websiteUrl: process.env.NEXT_PUBLIC_AGENCY_URL,
    openInNewTab: true
  }}
/>
```

### With Internationalization
```tsx
const translations = {
  en: {
    madeByInkblotStudio: 'Made with ❤️ by Inkblot Studio'
  },
  es: {
    madeByInkblotStudio: 'Hecho con ❤️ por Inkblot Studio'
  },
  fr: {
    madeByInkblotStudio: 'Fait avec ❤️ par Inkblot Studio'
  }
};

<NexFooter
  displayName="MyApp"
  translations={translations[currentLocale]}
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
/>
```

## Accessibility

The agency attribution feature includes proper accessibility features:

- **Semantic HTML**: Uses proper `<a>` tags when clickable
- **ARIA Attributes**: Includes `rel="noopener noreferrer"` for external links
- **Keyboard Navigation**: Fully accessible via keyboard
- **Screen Readers**: Properly announced by screen readers
- **Focus Indicators**: Visible focus states for keyboard users

## Troubleshooting

### Agency Attribution Not Showing
- Ensure the `agencyAttribution` prop is provided
- Check that the component is rendering properly
- Verify no CSS is hiding the attribution section

### Link Not Working
- Verify the `websiteUrl` is a valid URL
- Check for typos in the URL
- Ensure the URL includes the protocol (https://)

### Styling Issues
- The attribution uses inline styles for consistency
- Custom CSS can override the default styling
- Theme classes affect the appearance

### Animation Issues
- Ensure Framer Motion is properly installed
- Check for CSS conflicts that might interfere with animations
- Verify the component is mounted properly

## Migration from Previous Versions

If you're upgrading from a previous version that didn't have agency attribution:

1. **No Breaking Changes**: Existing footers will continue to work without agency attribution
2. **Optional Feature**: Agency attribution is completely optional
3. **Gradual Adoption**: You can add agency attribution to existing footers without other changes

```tsx
// Before (still works)
<NexFooter displayName="MyApp" />

// After (with agency attribution)
<NexFooter 
  displayName="MyApp"
  agencyAttribution={{
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }}
/>
```

## TypeScript Support

The agency attribution feature is fully typed:

```tsx
import type { NexFooterProps } from '@nexcomponent/lib';

const footerProps: NexFooterProps = {
  displayName: 'MyApp',
  agencyAttribution: {
    websiteUrl: 'https://inkblotstudio.com',
    openInNewTab: true
  }
};
```

TypeScript will provide autocomplete and type checking for all agency attribution options. 