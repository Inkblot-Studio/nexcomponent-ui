export type LanguageOption = {
    code: string;
    label: string;
    icon?: string;
};
export type LanguageSwitcherProps = {
    currentLocale: string;
    options: LanguageOption[];
    onChange: (code: string) => void;
    isAtTop?: boolean;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    theme?: 'light' | 'auto' | 'black-glass';
};
//# sourceMappingURL=LanguageSwitcher.types.d.ts.map