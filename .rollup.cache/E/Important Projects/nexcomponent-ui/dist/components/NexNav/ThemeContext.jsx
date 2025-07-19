import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('nex-theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let shouldBeDark = false;
        if (savedTheme) {
            shouldBeDark = savedTheme === 'dark' || savedTheme === 'black-glass';
        }
        else {
            shouldBeDark = systemPrefersDark;
        }
        setIsDark(shouldBeDark);
        applyTheme(shouldBeDark);
        setIsInitialized(true);
    }, []);
    // Listen for system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('nex-theme')) {
                setIsDark(e.matches);
                applyTheme(e.matches);
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);
    const applyTheme = (dark) => {
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.setAttribute('data-theme-variant', 'black-glass');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.removeAttribute('data-theme-variant');
        }
    };
    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        // Update localStorage
        localStorage.setItem('nex-theme', newTheme ? 'black-glass' : 'light');
        // Apply theme to document
        applyTheme(newTheme);
    };
    const value = {
        isDark,
        toggleTheme,
        theme: isDark ? 'black-glass' : 'light'
    };
    if (!isInitialized) {
        return null; // Don't render until theme is initialized
    }
    return (<ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>);
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
//# sourceMappingURL=ThemeContext.jsx.map