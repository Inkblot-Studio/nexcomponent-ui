# @nexcomponent/lib v2.0.0 Migration Guide

## 🚨 Breaking Changes & Fixes

Version 2.0.0 includes several important fixes and breaking changes. This guide will help you migrate from v1.3.32 to v2.0.0.

## ✅ Issues Fixed in v2.0.0

### 1. Package Export Issues
**Problem**: "Missing './' specifier" errors when importing components
**Solution**: Fixed package.json exports configuration

### 2. CSS Import Problems  
**Problem**: CSS file path mismatch between `dist/style.css` and `dist/esm/style.css`
**Solution**: 
- CSS files now exist in both locations for compatibility
- Updated package.json exports to point to correct paths
- Added backward compatibility for CSS imports

### 3. TypeScript Configuration
**Problem**: Strict TypeScript settings causing build failures
**Solution**: Relaxed TypeScript strict mode while maintaining type safety

## 📦 Installation & Setup

### For New Projects
```bash
npm install @nexcomponent/lib@2.0.0
```

### For Existing Projects (Migration)
```bash
npm install @nexcomponent/lib@2.0.0
```

## 🔧 Import Methods

### Method 1: Named Imports (Recommended)
```tsx
import { NexNav, NexFooter, NexLoader, NexCard } from '@nexcomponent/lib';
```

### Method 2: Default Import
```tsx
import NexCard from '@nexcomponent/lib/NexCard';
```

### Method 3: CSS Import
```tsx
// In your main.tsx or App.tsx
import '@nexcomponent/lib/style.css';
```

## 🎨 CSS Import Solutions

### Option 1: Direct CSS Import (Recommended)
```tsx
// main.tsx
import '@nexcomponent/lib/style.css';
```

### Option 2: Dynamic Import
```tsx
// For code splitting
import('@nexcomponent/lib/style.css');
```

### Option 3: Vite Configuration
```js
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nexcomponent/lib/style.css";`
      }
    }
  }
}
```

## 🔄 API Changes

### NexCard Component
**Breaking Changes:**
- `content` prop is now `description` (legacy support maintained)
- `imageUrl` prop is now `image` object (legacy support maintained)
- `type` prop is now `variant` (legacy support maintained)
- `elevated` prop is now `elevation` (legacy support maintained)

**New Props:**
```tsx
interface NexCardProps {
  // New structure
  description?: string;        // Instead of content
  image?: {                    // Instead of imageUrl
    src: string;
    alt?: string;
    aspectRatio?: string;
  };
  variant?: 'default' | 'glass' | 'premium';  // Instead of type
  elevation?: 'flat' | 'raised' | 'interactive';  // Instead of elevated
  
  // Legacy support (still works)
  content?: string;
  imageUrl?: string;
  type?: string;
  elevated?: boolean;
}
```

### NexNav Component
**No breaking changes** - API remains the same.

### NexFooter Component  
**No breaking changes** - API remains the same.

### NexLoader Component
**No breaking changes** - API remains the same.

## 🛠️ Troubleshooting

### Error: "Missing './' specifier"
**Solution**: Use named imports instead of default imports:
```tsx
// ❌ This might cause issues
import NexCard from '@nexcomponent/lib/NexCard';

// ✅ Use this instead
import { NexCard } from '@nexcomponent/lib';
```

### Error: "Cannot find module '@nexcomponent/lib/dist/esm/index.js'"
**Solution**: Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### CSS Not Loading
**Solution**: Ensure CSS is imported in your main entry point:
```tsx
// main.tsx
import '@nexcomponent/lib/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Vite Build Issues
**Solution**: Update your vite.config.js:
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@nexcomponent/lib': '@nexcomponent/lib/dist/esm/index.js'
    }
  },
  optimizeDeps: {
    include: ['@nexcomponent/lib']
  }
});
```

## 📋 Migration Checklist

- [ ] Update package.json to v2.0.0
- [ ] Update import statements to use named imports
- [ ] Import CSS in main entry point
- [ ] Update NexCard props if using legacy props
- [ ] Test all components in your application
- [ ] Update any custom styling that might conflict

## 🔍 Component Usage Examples

### NexCard (Updated API)
```tsx
import { NexCard } from '@nexcomponent/lib';

function MyComponent() {
  return (
    <NexCard
      title="Modern Card"
      subtitle="Enterprise Grade"
      description="This is the new way to use NexCard"
      image={{
        src: "https://example.com/image.jpg",
        alt: "Card image"
      }}
      variant="premium"
      elevation="interactive"
      onClick={() => console.log('Card clicked')}
    />
  );
}
```

### NexNav
```tsx
import { NexNav } from '@nexcomponent/lib';

function Layout() {
  return (
    <NexNav
      logo="My App"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' }
      ]}
    />
  );
}
```

### NexFooter
```tsx
import { NexFooter } from '@nexcomponent/lib';

function Layout() {
  return (
    <NexFooter
      copyright="© 2024 My Company"
      links={[
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' }
      ]}
    />
  );
}
```

## 🆘 Need Help?

If you encounter any issues during migration:

1. Check this migration guide
2. Review the troubleshooting section
3. Check the package.json exports configuration
4. Ensure CSS is properly imported
5. Use named imports instead of default imports

## 📝 Changelog

### v2.0.0
- ✅ Fixed package export configuration
- ✅ Fixed CSS import path issues
- ✅ Added backward compatibility for legacy props
- ✅ Improved TypeScript configuration
- ✅ Added comprehensive type definitions
- ✅ Fixed carousel animation types
- ✅ Enhanced build process with CSS copying

### v1.3.32 → v2.0.0
- Breaking: Package structure changes
- Breaking: CSS import path changes
- Feature: Better TypeScript support
- Feature: Improved component APIs
- Fix: Export resolution issues
- Fix: Build process improvements 