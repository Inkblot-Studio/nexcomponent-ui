import React, { ReactNode } from 'react';
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
    theme: 'light' | 'black-glass';
    onThemeChange?: (theme: 'light' | 'black-glass') => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    onThemeChange?: (theme: 'light' | 'black-glass') => void;
}
declare class ThemeEventEmitter {
    private listeners;
    on(event: string, callback: (theme: 'light' | 'black-glass') => void): void;
    off(event: string, callback: (theme: 'light' | 'black-glass') => void): void;
    emit(event: string, theme: 'light' | 'black-glass'): void;
}
export declare const themeEventEmitter: ThemeEventEmitter;
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export declare const useThemeListener: (callback: (theme: 'light' | 'black-glass') => void) => void;
export {};
//# sourceMappingURL=ThemeContext.d.ts.map