# NexNav Theme Emitter Guide

The NexNav component now includes a powerful theme emitter system that allows you to listen for theme changes from anywhere in your application. This replaces the previous "nonsense" approach with a clean, professional event-driven system.

## 🎯 What's New

- **Event Emitter System**: Global theme change notifications
- **Multiple Listening Methods**: Choose the approach that fits your use case
- **TypeScript Support**: Full type safety for theme events
- **Automatic Cleanup**: Proper event listener management
- **Persistent Storage**: Theme preferences saved to localStorage

## 🚀 Three Ways to Listen for Theme Changes

### Method 1: onThemeChange Callback (Simplest)

Pass a callback function directly to the NexNav component:

```tsx
import NexNav from '@nexcomponent/ui/NexNav';

function App() {
  const handleThemeChange = (theme: 'light' | 'black-glass') => {
    console.log('Theme changed to:', theme);
    // Update your app state, analytics, etc.
  };

  return (
    <NexNav
      // ... other props
      onThemeChange={handleThemeChange}
    />
  );
}
```

### Method 2: useThemeListener Hook (Recommended)

Use the hook in any component to listen for theme changes:

```tsx
import { useThemeListener } from '@nexcomponent/ui/NexNav';

function MyComponent() {
  useThemeListener((theme) => {
    console.log('Theme changed to:', theme);
    // React to theme changes
  });

  return <div>My component content</div>;
}
```

### Method 3: Global Event Emitter (Advanced)

Use the event emitter directly for advanced use cases:

```tsx
import { themeEventEmitter } from '@nexcomponent/ui/NexNav';
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const handleThemeChange = (theme: 'light' | 'black-glass') => {
      console.log('Theme changed to:', theme);
      // Perform any actions
    };

    themeEventEmitter.on('themeChange', handleThemeChange);
    
    return () => {
      themeEventEmitter.off('themeChange', handleThemeChange);
    };
  }, []);

  return <div>My component content</div>;
}
```

## 🎨 Theme Variants

The system supports two theme variants:

- **`light`**: Clean, professional light theme
- **`black-glass`**: Premium dark theme with glassmorphic effects

## 📦 API Reference

### NexNav Props

```tsx
interface NexNavProps {
  // ... existing props
  onThemeChange?: (theme: 'light' | 'black-glass') => void;
}
```

### ThemeContext Exports

```tsx
// Event emitter instance
export const themeEventEmitter: ThemeEventEmitter;

// Hook for listening to theme changes
export const useThemeListener: (callback: (theme: 'light' | 'black-glass') => void) => void;

// Theme context hook
export const useTheme: () => {
  isDark: boolean;
  toggleTheme: () => void;
  theme: 'light' | 'black-glass';
};
```

### ThemeEventEmitter Methods

```tsx
class ThemeEventEmitter {
  on(event: string, callback: (theme: 'light' | 'black-glass') => void): void;
  off(event: string, callback: (theme: 'light' | 'black-glass') => void): void;
  emit(event: string, theme: 'light' | 'black-glass'): void;
}
```

## 🔧 Advanced Usage Examples

### Analytics Integration

```tsx
function AnalyticsProvider({ children }) {
  useThemeListener((theme) => {
    // Track theme changes in analytics
    analytics.track('theme_changed', { theme });
  });

  return children;
}
```

### External System Sync

```tsx
function ExternalSystemSync() {
  useEffect(() => {
    const handleThemeChange = (theme) => {
      // Sync with external systems
      externalAPI.updateTheme(theme);
      localStorage.setItem('external-theme', theme);
    };

    themeEventEmitter.on('themeChange', handleThemeChange);
    return () => themeEventEmitter.off('themeChange', handleThemeChange);
  }, []);

  return null;
}
```

### Conditional Rendering

```tsx
function ThemeAwareComponent() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useThemeListener(setCurrentTheme);

  return (
    <div>
      {currentTheme === 'black-glass' ? (
        <PremiumDarkContent />
      ) : (
        <StandardLightContent />
      )}
    </div>
  );
}
```

## 🛠️ Migration from Old System

If you were previously using a different theme system, here's how to migrate:

### Before (Old System)
```tsx
// Old approach - no proper event system
const [theme, setTheme] = useState('light');

// Manual theme management
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  // Manual DOM manipulation
  document.documentElement.setAttribute('data-theme', newTheme);
};
```

### After (New System)
```tsx
// New approach - clean event-driven system
import { useThemeListener } from '@nexcomponent/ui/NexNav';

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useThemeListener((theme) => {
    setCurrentTheme(theme);
    // Theme is automatically applied to DOM
  });

  return (
    <NexNav
      // ... other props
      onThemeChange={(theme) => {
        console.log('Theme changed:', theme);
      }}
    />
  );
}
```

## 🎯 Best Practices

1. **Use Method 1** for simple parent-child communication
2. **Use Method 2** for components that need to react to theme changes
3. **Use Method 3** for advanced use cases or external integrations
4. **Always clean up** event listeners in useEffect cleanup functions
5. **Handle errors** gracefully in your theme change callbacks
6. **Test both themes** to ensure your components work correctly

## 🔍 Debugging

Enable theme change logging:

```tsx
// Add this to your app for debugging
useThemeListener((theme) => {
  console.log('🔧 Theme changed:', theme);
  console.log('📊 Current DOM theme:', document.documentElement.getAttribute('data-theme'));
});
```

## 🚀 Performance Notes

- Event listeners are automatically cleaned up when components unmount
- The event emitter uses efficient Set-based listeners
- Theme changes are debounced to prevent excessive re-renders
- localStorage operations are optimized for performance

This new system provides a clean, professional, and scalable approach to theme management that works seamlessly with the NexComponent design system. 