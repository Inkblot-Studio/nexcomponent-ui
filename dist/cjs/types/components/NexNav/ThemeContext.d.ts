import React, { ReactNode } from 'react';
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
    theme: 'light' | 'black-glass';
}
interface ThemeProviderProps {
    children: ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};
//# sourceMappingURL=ThemeContext.d.ts.map