import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  theme: 'light' | 'black-glass';
  onThemeChange?: (theme: 'light' | 'black-glass') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  onThemeChange?: (theme: 'light' | 'black-glass') => void;
}

// Custom event emitter for theme changes
class ThemeEventEmitter {
  private listeners: Map<string, Set<(theme: 'light' | 'black-glass') => void>> = new Map();

  on(event: string, callback: (theme: 'light' | 'black-glass') => void) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
  }

  off(event: string, callback: (theme: 'light' | 'black-glass') => void) {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.delete(callback);
    }
  }

  emit(event: string, theme: 'light' | 'black-glass') {
    const eventListeners = this.listeners.get(event);
    if (eventListeners) {
      eventListeners.forEach(callback => {
        try {
          callback(theme);
        } catch (error) {
          console.error('Error in theme event listener:', error);
        }
      });
    }
  }
}

// Global theme event emitter instance
export const themeEventEmitter = new ThemeEventEmitter();

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, onThemeChange }) => {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('nex-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let shouldBeDark = false;
    
    if (savedTheme) {
      shouldBeDark = savedTheme === 'dark' || savedTheme === 'black-glass';
    } else {
      shouldBeDark = systemPrefersDark;
    }
    
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
    setIsInitialized(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('nex-theme')) {
        setIsDark(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = useCallback((dark: boolean) => {
    const theme = dark ? 'black-glass' : 'light';
    
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-theme-variant', 'black-glass');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.removeAttribute('data-theme-variant');
    }

    // Emit theme change event
    themeEventEmitter.emit('themeChange', theme);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    const themeValue = newTheme ? 'black-glass' : 'light';
    
    // Update localStorage
    localStorage.setItem('nex-theme', themeValue);
    
    // Apply theme to document
    applyTheme(newTheme);
    
    // Call the onThemeChange callback if provided
    if (onThemeChange) {
      onThemeChange(themeValue);
    }
  }, [isDark, applyTheme, onThemeChange]);

  const value: ThemeContextType = {
    isDark,
    toggleTheme,
    theme: isDark ? 'black-glass' : 'light',
    onThemeChange
  };

  if (!isInitialized) {
    return null; // Don't render until theme is initialized
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Hook to listen for theme changes from outside the provider
export const useThemeListener = (callback: (theme: 'light' | 'black-glass') => void) => {
  useEffect(() => {
    themeEventEmitter.on('themeChange', callback);
    return () => themeEventEmitter.off('themeChange', callback);
  }, [callback]);
}; 